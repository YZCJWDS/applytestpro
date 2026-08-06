import React, { useState } from 'react';
import { Camera, MapPin, UploadCloud, CheckCircle2, Leaf, Sparkles, Send, Tag, AlertCircle } from 'lucide-react';

export default function FieldRecorder({ onAddObservation }) {
  const [formData, setFormData] = useState({
    commonName: '',
    scientificName: '',
    category: 'Trees',
    location: 'Rocky Mountain Foothills, AB',
    coordinates: '51.0447° N, 114.0719° W',
    healthIndex: 90,
    phenology: 'Active Growth Phase',
    notes: '',
    observer: 'Citizen Science Contributor',
    imageUrl: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [previewImage, setPreviewImage] = useState('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80');

  const presetImages = [
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.commonName || !formData.notes) return;

    const newObs = {
      id: `OBS-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      commonName: formData.commonName,
      scientificName: formData.scientificName || 'Taxon unassigned',
      category: formData.category,
      status: 'Stable',
      location: formData.location,
      coordinates: formData.coordinates,
      observedDate: new Date().toISOString().split('T')[0],
      observer: formData.observer || 'Citizen Observer',
      healthIndex: Number(formData.healthIndex),
      phenology: formData.phenology,
      notes: formData.notes,
      image: previewImage,
      tags: ['Field Logged', 'Citizen Science', formData.category]
    };

    onAddObservation(newObs);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        commonName: '',
        scientificName: '',
        category: 'Trees',
        location: 'Rocky Mountain Foothills, AB',
        coordinates: '51.0447° N, 114.0719° W',
        healthIndex: 90,
        phenology: 'Active Growth Phase',
        notes: '',
        observer: 'Citizen Science Contributor',
        imageUrl: ''
      });
    }, 3500);
  };

  return (
    <section id="recorder" className="py-24 relative bg-[#02180e] border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Citizen Science Portal (记录工坊)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Log a Plant Observation
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Contribute to biological conservation by recording tree species, growth health, and micro-habitat states in your region. Your log is uploaded directly to our observation database.
          </p>
        </div>

        {/* Recording Form Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-600/30 shadow-2xl relative">
          
          {submitted ? (
            <div className="py-16 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/50 shadow-xl shadow-emerald-950/80">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Observation Recorded Successfully!</h3>
              <p className="text-sm text-emerald-300/80 max-w-md mx-auto">
                Thank you for contributing to the <strong>Organization for the recording, observation, and conservation of trees and other plants</strong> catalog.
              </p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-950 text-xs font-mono text-emerald-400 border border-emerald-800">
                Added to Botanical Observation Explorer feed
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Species Common Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between">
                    <span>Plant / Tree Name <span className="text-rose-400">*</span></span>
                    <span className="text-[10px] text-slate-400">e.g. Sugar Maple, Fern</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter plant common name..."
                    value={formData.commonName}
                    onChange={(e) => setFormData({ ...formData, commonName: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* Scientific Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Scientific Taxonomy (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acer saccharum"
                    value={formData.scientificName}
                    onChange={(e) => setFormData({ ...formData, scientificName: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Category Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="Trees">Trees (树木)</option>
                    <option value="Wildflowers">Wildflowers (野花)</option>
                    <option value="Ferns & Mosses">Ferns & Mosses (蕨类与苔藓)</option>
                    <option value="Shrubs">Shrubs & Bushes (灌木)</option>
                  </select>
                </div>

                {/* Location Region */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Observation Region
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* Observer Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Your Name / Observer ID
                  </label>
                  <input
                    type="text"
                    value={formData.observer}
                    onChange={(e) => setFormData({ ...formData, observer: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-sm px-4 py-3 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

              </div>

              {/* Health Rating Slider & Phenology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/40">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-200">
                    <span>Estimated Plant Health Index</span>
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
                    Growth Phenology State
                  </label>
                  <select
                    value={formData.phenology}
                    onChange={(e) => setFormData({ ...formData, phenology: e.target.value })}
                    className="w-full bg-[#03150d] text-slate-100 text-xs px-3 py-2 rounded-xl border border-emerald-800 focus:outline-none"
                  >
                    <option value="Active Growth Phase">Active Growth Phase (旺盛生长)</option>
                    <option value="Flowering / In Bloom">Flowering / In Bloom (开花期)</option>
                    <option value="Fruiting / Seed Mature">Fruiting / Seed Mature (结果/种子成熟)</option>
                    <option value="Dormant / Wintering">Dormant / Wintering (休眠期)</option>
                  </select>
                </div>
              </div>

              {/* Field Notes & Description */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between">
                  <span>Field Observation Notes & Habitat Details <span className="text-rose-400">*</span></span>
                  <span className="text-[10px] text-slate-400">Describe leaves, bark, trunk size, microclimate</span>
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Record growth state, leaves texture, moisture levels, nearby canopy..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#03150d] text-slate-100 text-sm p-4 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400 transition-colors"
                ></textarea>
              </div>

              {/* Specimen Photo Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Specimen Photo Selection
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {presetImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setPreviewImage(img)}
                      className={`relative h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                        previewImage === img ? 'border-emerald-400 ring-2 ring-emerald-500/50 scale-105' : 'border-emerald-900 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="preset preview" className="w-full h-full object-cover" />
                      {previewImage === img && (
                        <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl font-bold text-sm text-[#03150d] bg-gradient-to-r from-emerald-400 via-nature-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/25 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 fill-current" />
                  Submit Field Log to Database
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
