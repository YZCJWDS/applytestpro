import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, User, Mail, DollarSign, Send, Info } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';
import { translations } from '../data/translations';

export default function VolunteerDonateModal({ lang, isOpen, mode, onClose }) {
  const [activeTab, setActiveTab] = useState(mode || 'donate');
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '' });
  const [donated, setDonated] = useState(false);

  const [volunteerInfo, setVolunteerInfo] = useState({ name: '', email: '', region: 'Yellowknife, NT', area: 'Field Observation' });
  const [volunteered, setVolunteered] = useState(false);

  const t = translations[lang];

  if (!isOpen) return null;

  const handleDonate = (e) => {
    e.preventDefault();
    setDonated(true);
  };

  const handleVolunteer = (e) => {
    e.preventDefault();
    setVolunteered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel max-w-xl w-full rounded-3xl overflow-hidden border border-emerald-600/50 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Tabs Header */}
        <div className="flex border-b border-emerald-800/50 bg-[#03150d]/80 pt-4 px-6 gap-4">
          <button
            onClick={() => { setActiveTab('donate'); setDonated(false); setVolunteered(false); }}
            className={`pb-3 font-bold text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'donate'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart className="w-4 h-4 text-emerald-400 fill-current" /> {t.modalDonateTab}
          </button>

          <button
            onClick={() => { setActiveTab('volunteer'); setDonated(false); setVolunteered(false); }}
            className={`pb-3 font-bold text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'volunteer'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4 text-emerald-400" /> {t.modalVolunteerTab}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {activeTab === 'donate' ? (
            <div>
              {donated ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/50">
                    <Info className="w-9 h-9" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-100">
                    {lang === 'fr' ? 'Information de don' : 'Donation Information'}
                  </h3>

                  <div className="p-5 rounded-2xl bg-[#03150d] border border-emerald-800/80 text-sm text-slate-200 space-y-3 max-w-md mx-auto">
                    <p className="font-semibold text-emerald-300">
                      {lang === 'fr' 
                        ? 'Pour toute demande détaillée concernant les dons ou les reçus fiscaux, veuillez contacter :'
                        : 'For detailed inquiries regarding donations or official tax receipts, please contact:'}
                    </p>

                    <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-700/60 font-mono text-emerald-300 text-base font-bold select-all">
                      protectlead@npu.codes
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang === 'fr'
                        ? 'Organisme de bienfaisance enregistré au Canada • ARC NE n° 107233456RR0001 (Territoires du Nord, Canada)'
                        : 'Canadian Registered Charity • CRA BN #107233456RR0001 (Northwest Territories, Canada)'}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#03150d] bg-emerald-400 hover:bg-emerald-300 transition-colors"
                    >
                      {lang === 'fr' ? 'Fermer' : 'Close'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDonate} className="space-y-5">
                  <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-xs text-emerald-300 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{t.modalTaxNotice}</p>
                    </div>
                  </div>

                  {/* Preset Amount Pills */}
                  <div>
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
                      {t.selectAmountCAD}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['25', '50', '100', '250'].map(amt => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                          className={`py-2.5 rounded-xl font-extrabold text-sm border transition-all ${
                            selectedAmount === amt && !customAmount
                              ? 'bg-emerald-400 text-[#03150d] border-emerald-400 shadow-md'
                              : 'bg-[#03150d] text-slate-200 border-emerald-800 hover:border-emerald-600'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <DollarSign className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      placeholder={t.customAmountPlaceholder}
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(''); }}
                      className="w-full bg-[#03150d] text-slate-100 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-emerald-800 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  {/* Donor Info Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder={t.fullNameReceipt}
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder={t.emailAddr}
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-[#03150d] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> {t.btnSubmitDonate} (${customAmount || selectedAmount} CAD)
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div>
              {volunteered ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/50">
                    <Info className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100">
                    {lang === 'fr' ? 'Information bénévolat' : 'Volunteer Information'}
                  </h3>

                  <div className="p-5 rounded-2xl bg-[#03150d] border border-emerald-800/80 text-sm text-slate-200 space-y-3 max-w-md mx-auto">
                    <p className="font-semibold text-emerald-300">
                      {lang === 'fr'
                        ? 'Pour toute demande détaillée concernant le bénévolat et le recrutement, veuillez contacter :'
                        : 'For detailed inquiries regarding volunteer onboarding and recruitment, please contact:'}
                    </p>

                    <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-700/60 font-mono text-emerald-300 text-base font-bold select-all">
                      protectlead@npu.codes
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang === 'fr'
                        ? 'Organization for the recording, observation, and conservation of trees and other plants (Territoires du Nord, Canada)'
                        : 'Organization for the recording, observation, and conservation of trees and other plants (Northwest Territories, Canada)'}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#03150d] bg-emerald-400 hover:bg-emerald-300 transition-colors"
                    >
                      {lang === 'fr' ? 'Fermer' : 'Close'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleVolunteer} className="space-y-4">
                  <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/50 text-xs text-slate-300">
                    {t.volunteerNotice}
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={volunteerInfo.name}
                      onChange={(e) => setVolunteerInfo({ ...volunteerInfo, name: e.target.value })}
                      className="w-full bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />

                    <input
                      type="email"
                      required
                      placeholder={t.emailAddr}
                      value={volunteerInfo.email}
                      onChange={(e) => setVolunteerInfo({ ...volunteerInfo, email: e.target.value })}
                      className="w-full bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Your Region (e.g. Yellowknife, Fort Smith, NT)"
                      value={volunteerInfo.region}
                      onChange={(e) => setVolunteerInfo({ ...volunteerInfo, region: e.target.value })}
                      className="w-full bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />

                    <select
                      value={volunteerInfo.area}
                      onChange={(e) => setVolunteerInfo({ ...volunteerInfo, area: e.target.value })}
                      className="w-full bg-[#03150d] text-slate-100 text-xs px-3 py-2.5 rounded-xl border border-emerald-800"
                    >
                      <option value="Field Observation">Subarctic Field Botanical Observer (记录与观察员)</option>
                      <option value="Taxonomy Data Entry">NT Species Taxonomy Data Entry (数据整合员)</option>
                      <option value="Community Workshops">Northern Community Education & Plant Walks (社区科普引导)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl font-bold text-sm text-[#03150d] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> {t.btnSubmitVolunteer}
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
