import React, { useState } from 'react';
import { Camera, MapPin, UploadCloud, CheckCircle2, Leaf, Sparkles, Send, Info } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';
import { translations } from '../data/translations';

export default function FieldRecorder({ lang, onAddObservation }) {
  const t = translations[lang];

  const [formData, setFormData] = useState({
    commonName: 'Black Spruce',
    scientificName: 'Picea mariana',
    category: 'Trees',
    location: 'Yellowknife Boreal Zone, Northwest Territories',
    coordinates: '62.4540° N, 114.3718° W',
    healthIndex: 94,
    phenology: 'Active Needle & Cone Growth',
    notes: 'Healthy subarctic specimen growing in Sphagnum muskeg. Dense needle cluster, zero sign of insect defoliation.',
    observer: 'Subarctic Observer',
  });

  const [previewImage, setPreviewImage] = useState('/plants/black-spruce.svg');
  const [submitted, setSubmitted] = useState(false);

  const nwtPresets = [
    {
      name: 'Black Spruce (Épinette noire)',
      latin: 'Picea mariana',
      cat: 'Trees',
      img: '/plants/black-spruce.svg'
    },
    {
      name: 'Cloudberry (Plaquebière)',
      latin: 'Rubus chamaemorus',
      cat: 'Wildflowers & Bogs',
      img: '/plants/cloudberry.jpg'
    },
    {
      name: 'Mountain Cranberry (Airelle)',
      latin: 'Vaccinium vitis-idaea',
      cat: 'Shrubs & Berries',
      img: '/plants/mountain-cranberry.jpg'
    },
    {
      name: 'Dwarf Birch (Bouleau nain)',
      latin: 'Betula glandulosa',
      cat: 'Shrubs & Berries',
      img: '/plants/dwarf-birch.svg'
    }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAutoGPS = () => {
    const nwtCoords = [
      { loc: "Yellowknife Peatlands, NT", coord: "62.4540° N, 114.3718° W" },
      { loc: "Nahanni National Park Reserve, NT", coord: "61.2482° N, 125.8821° W" },
      { loc: "Fort Smith Boreal Reserve, NT", coord: "60.0055° N, 111.8872° W" },
      { loc: "Inuvik Tundra Delta, NT", coord: "68.3607° N, 133.7230° W" }
    ];
    const picked = nwtCoords[Math.floor(Math.random() * nwtCoords.length)];
    setFormData(prev => ({
      ...prev,
      location: picked.loc,
      coordinates: picked.coord
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.commonName || !formData.notes) return;

    const obsId = `OBS-NT-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;

    const newObs = {
      id: obsId,
      commonName: formData.commonName,
      scientificName: formData.scientificName || 'Taxon unassigned',
      category: formData.category,
      status: 'Stable',
      location: formData.location,
      coordinates: formData.coordinates,
      observedDate: new Date().toISOString().split('T')[0],
      observer: formData.observer || 'Subarctic Observer',
      healthIndex: Number(formData.healthIndex),
      phenology: formData.phenology,
      notes: formData.notes,
      image: previewImage,
      tags: ['Field Logged', 'Northwest Territories', formData.category]
    };

    onAddObservation(newObs);
    setSubmitted(true);
  };

  return (
    <section id="recorder" className="py-24 relative bg-[#02180e] border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.recorderTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {t.recorderTitle}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.recorderDesc}
          </p>
        </div>

        {/* Recording Form Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-600/40 shadow-2xl relative">
          
          {submitted ? (
            <div className="py-12 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/50 shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100">
                {lang === 'fr' ? 'Observation enregistrée !' : 'Observation Recorded!'}
              </h3>
              
              <div className="p-5 rounded-2xl bg-[#03150d] border border-emerald-800/80 text-sm text-slate-200 space-y-3 max-w-md mx-auto">
                <p className="text-xs text-emerald-300/90 leading-relaxed">
                  {lang === 'fr' 
                    ? 'Votre enregistrement a été publié dans la base de données botaniques. Pour toute demande détaillée, veuillez contacter :'
                    : 'Your observation record has been published to the botanical database. For detailed inquiries, please contact:'}
                </p>

                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-700/60 font-mono text-emerald-300 text-base font-bold select-all">
                  protectlead@npu.codes
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#03150d] bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  {lang === 'fr' ? 'Enregistrer une autre observation' : 'Log Another Observation'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Quick Select NT Presets */}
              <div className="p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/50 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  Quick Select Authentic NWT Species Presets
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {nwtPresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          commonName: preset.name,
                          scientificName: preset.latin,
                          category: preset.cat
                        }));
                        setPreviewImage(preset.img);
                      }}
                      className="p-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800/40 text-left transition-colors"
                    >
                      <p className="text-xs font-bold text-slate-200 truncate">{preset.name}</p>
                      <p className="text-[10px] text-emerald-400/80 italic font-serif truncate">{preset.latin}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Species Common Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {t.fieldPlantName} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Black Spruce, Cloudberry"
                    value={formData.commonName}
                    onChange={(e) => setFormData({ ...formData, commonName: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                {/* Scientific Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {t.fieldScientific}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Picea mariana"
                    value={formData.scientificName}
                    onChange={(e) => setFormData({ ...formData, scientificName: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {t.fieldCategory}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Trees">Trees (Arbres)</option>
                    <option value="Shrubs & Berries">Shrubs & Berries (Arbustes & Baies)</option>
                    <option value="Wildflowers & Bogs">Wildflowers & Bogs (Fleurs & Tourbières)</option>
                  </select>
                </div>

                {/* Location & GPS */}
                <div className="space-y-2 md:col-span-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      {t.fieldRegion}
                    </label>
                    <button
                      type="button"
                      onClick={handleAutoGPS}
                      className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-emerald-400" /> {t.btnUseGPS}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="bg-[#03150d] text-slate-100 text-xs px-3.5 py-3 rounded-xl border border-emerald-800 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={formData.coordinates}
                      onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                      className="bg-[#03150d] text-emerald-300 font-mono text-xs px-3.5 py-3 rounded-xl border border-emerald-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Health Rating Slider & Observer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/40">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-200">
                    <span>{t.fieldHealthSlider}</span>
                    <span className="text-emerald-400 font-mono">{formData.healthIndex}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={formData.healthIndex}
                    onChange={(e) => setFormData({ ...formData, healthIndex: e.target.value })}
                    className="w-full accent-emerald-400 bg-emerald-950 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {t.fieldObserver}
                  </label>
                  <input
                    type="text"
                    value={formData.observer}
                    onChange={(e) => setFormData({ ...formData, observer: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-xs px-3 py-2 rounded-xl border border-emerald-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Field Notes */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  {t.fieldNotes} <span className="text-rose-400">*</span>
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder={t.fieldNotesPlaceholder}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#03150d] text-slate-100 text-sm p-4 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400"
                ></textarea>
              </div>

              {/* Real Photo Upload & Preview */}
              <div className="space-y-3 p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {t.fieldPhoto}
                  </label>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900 text-emerald-300 hover:bg-emerald-800 text-xs font-semibold border border-emerald-700 transition-colors">
                    <UploadCloud className="w-4 h-4 text-emerald-400" />
                    <span>{t.btnUploadCustomPhoto}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Preview Box */}
                <div className="relative h-40 rounded-xl overflow-hidden border border-emerald-700/50">
                  <img src={previewImage} alt="Specimen Preview" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 px-3 py-1 rounded-md bg-[#03150d]/90 text-[11px] text-emerald-300 font-mono border border-emerald-800">
                    Active Specimen Image Selected
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  For inquiries, please contact: <strong className="text-slate-200">protectlead@npu.codes</strong>
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-[#03150d] bg-gradient-to-r from-emerald-400 via-nature-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 fill-current" />
                  {t.btnSubmitFieldLog}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
