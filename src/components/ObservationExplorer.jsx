import React, { useState } from 'react';
import { Search, MapPin, Calendar, User, Activity, Info, X, Sparkles, Tag } from 'lucide-react';
import { SAMPLE_OBSERVATIONS } from '../data/plantData';
import { translations } from '../data/translations';

export default function ObservationExplorer({ lang, customObservations = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalSpecimen, setActiveModalSpecimen] = useState(null);
  const t = translations[lang];

  const allObservations = [...customObservations, ...SAMPLE_OBSERVATIONS];

  const categories = [
    { key: 'All', label: t.catAll },
    { key: 'Trees', label: t.catTrees },
    { key: 'Shrubs & Berries', label: t.catShrubs },
    { key: 'Wildflowers & Bogs', label: t.catWildflowers }
  ];

  const filteredObservations = allObservations.filter(obs => {
    const matchesSearch = (obs.commonName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (obs.commonNameFr || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (obs.scientificName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (obs.location || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || obs.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="explorer" className="py-24 relative bg-[#03150d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.explorerTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {t.explorerTitle}
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              {t.explorerDesc}
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 font-mono">NWT Authenticated Log Entries</span>
            <p className="text-2xl font-extrabold text-emerald-400 font-mono">{allObservations.length} Verified Records</p>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="glass-panel p-4 rounded-2xl border border-emerald-800/50 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#03150d] text-slate-100 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-6 flex flex-wrap items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.key
                      ? 'bg-emerald-500 text-[#03150d] shadow-md shadow-emerald-500/20'
                      : 'bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/60 border border-emerald-800/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Observations Grid */}
        {filteredObservations.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl border border-emerald-900/50">
            <Info className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-slate-200 font-bold">No specimen records match your criteria</h3>
            <p className="text-xs text-slate-400 mt-1">Try clearing filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredObservations.map(obs => (
              <div 
                key={obs.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-emerald-800/40 flex flex-col group"
              >
                {/* Specimen Image */}
                <div className="relative h-48 overflow-hidden bg-emerald-950">
                  <img 
                    src={obs.image} 
                    alt={obs.commonName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#03150d]/90 text-emerald-300 backdrop-blur-md border border-emerald-700/50">
                      {obs.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-600/60 backdrop-blur-md">
                      {obs.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-emerald-400/80 font-mono mb-1">
                      <span>{obs.id}</span>
                      <span>{obs.observedDate}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {lang === 'fr' && obs.commonNameFr ? obs.commonNameFr : obs.commonName}
                    </h3>
                    <p className="text-xs text-slate-400 italic font-serif">
                      {obs.scientificName}
                    </p>

                    <p className="text-xs text-slate-300 mt-3 line-clamp-2 leading-relaxed">
                      {obs.notes}
                    </p>
                  </div>

                  {/* Meta Details */}
                  <div className="pt-3 border-t border-emerald-900/40 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="truncate max-w-[170px]">{obs.location}</span>
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Activity className="w-3.5 h-3.5" /> {obs.healthIndex}%
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {obs.tags && obs.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveModalSpecimen(obs)}
                      className="w-full mt-2 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-700/40 transition-colors flex items-center justify-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5" /> {t.viewFieldRecord}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Specimen Detail Modal */}
        {activeModalSpecimen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-panel max-w-2xl w-full rounded-3xl overflow-hidden border border-emerald-600/50 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveModalSpecimen(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/90 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64">
                <img 
                  src={activeModalSpecimen.image} 
                  alt={activeModalSpecimen.commonName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03150d] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-[#03150d]/80 px-2 py-0.5 rounded border border-emerald-800">
                    {activeModalSpecimen.id}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {lang === 'fr' && activeModalSpecimen.commonNameFr ? activeModalSpecimen.commonNameFr : activeModalSpecimen.commonName}
                  </h3>
                  <p className="text-sm text-emerald-300 italic font-serif">
                    {activeModalSpecimen.scientificName}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#03150d] border border-emerald-900/60">
                    <span className="text-slate-400">Category</span>
                    <p className="font-bold text-emerald-300 text-sm mt-0.5">{activeModalSpecimen.category}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#03150d] border border-emerald-900/60">
                    <span className="text-slate-400">Status</span>
                    <p className="font-bold text-emerald-400 text-sm mt-0.5">{activeModalSpecimen.status}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#03150d] border border-emerald-900/60 col-span-2 sm:col-span-1">
                    <span className="text-slate-400">{t.healthRating}</span>
                    <p className="font-bold text-emerald-400 text-sm mt-0.5">{activeModalSpecimen.healthIndex}% (Optimal)</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Field Observation Notes</h4>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed bg-[#03150d]/60 p-4 rounded-xl border border-emerald-900/40">
                    {activeModalSpecimen.notes}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Location: <strong>{activeModalSpecimen.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-400" />
                    <span>{t.observedBy}: <strong>{activeModalSpecimen.observer}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>Observed Date: <strong>{activeModalSpecimen.observedDate}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>Phenology: <strong>{activeModalSpecimen.phenology}</strong></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-900/50 flex justify-end">
                  <button
                    onClick={() => setActiveModalSpecimen(null)}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-[#03150d] bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    Close Record View
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
