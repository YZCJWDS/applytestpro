import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, User, Mail, DollarSign, Sparkles, Building2 } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';

export default function VolunteerDonateModal({ isOpen, mode, onClose }) {
  const [activeTab, setActiveTab] = useState(mode || 'donate');
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', isRecurring: false });
  const [donated, setDonated] = useState(false);

  const [volunteerInfo, setVolunteerInfo] = useState({ name: '', email: '', region: '', area: 'Field Observation' });
  const [volunteered, setVolunteered] = useState(false);

  if (!isOpen) return null;

  const handleDonate = (e) => {
    e.preventDefault();
    setDonated(true);
    setTimeout(() => {
      setDonated(false);
      onClose();
    }, 3500);
  };

  const handleVolunteer = (e) => {
    e.preventDefault();
    setVolunteered(true);
    setTimeout(() => {
      setVolunteered(false);
      onClose();
    }, 3500);
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
            onClick={() => setActiveTab('donate')}
            className={`pb-3 font-bold text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'donate'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart className="w-4 h-4 text-emerald-400 fill-current" /> Donate (Tax Receipted)
          </button>

          <button
            onClick={() => setActiveTab('volunteer')}
            className={`pb-3 font-bold text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'volunteer'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4 text-emerald-400" /> Join Volunteers
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {activeTab === 'donate' ? (
            <div>
              {donated ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/50">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Thank You for Your Generous Support!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    An official Canadian tax-deductible receipt under CRA Charity Registration <strong>#{ORG_INFO.charityId}</strong> has been sent to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDonate} className="space-y-5">
                  <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-xs text-emerald-300 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Official Canadian Registered Charity</p>
                      <p className="text-[11px] text-emerald-300/80 mt-0.5">
                        BN: {ORG_INFO.charityId} • {ORG_INFO.registrationAct}. Tax receipts are issued for donations of $20 CAD and above.
                      </p>
                    </div>
                  </div>

                  {/* Preset Amount Pills */}
                  <div>
                    <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
                      Select Donation Amount (CAD)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['25', '50', '100', '250'].map(amt => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                          className={`py-2.5 rounded-xl font-extrabold text-sm border transition-all ${
                            selectedAmount === amt && !customAmount
                              ? 'bg-emerald-400 text-[#03150d] border-emerald-400 shadow-md shadow-emerald-500/20'
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
                      placeholder="Or enter custom amount in CAD..."
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
                      placeholder="Full Name (for tax receipt)"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-[#03150d] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current" /> Complete Tax-Deductible Contribution (${customAmount || selectedAmount} CAD)
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div>
              {volunteered ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/50">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Application Received!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Welcome to the <strong>Organization for the recording, observation, and conservation of trees and other plants</strong> volunteer network. Our field coordinator will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleVolunteer} className="space-y-4">
                  <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/50 text-xs text-slate-300">
                    Join over 1,200 citizen botanists recording tree growth phenology, uploading spatial plant maps, and leading local ecological protection walks.
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
                      placeholder="Email Address"
                      value={volunteerInfo.email}
                      onChange={(e) => setVolunteerInfo({ ...volunteerInfo, email: e.target.value })}
                      className="w-full bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Your City / Region (e.g. Calgary, AB or Vancouver, BC)"
                      value={volunteerInfo.region}
                      onChange={(e) => setVolunteerInfo({ ...volunteerInfo, region: e.target.value })}
                      className="w-full bg-[#03150d] text-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-emerald-800 focus:outline-none"
                    />

                    <select
                      value={volunteerInfo.area}
                      onChange={(e) => setVolunteerInfo({ ...volunteerInfo, area: e.target.value })}
                      className="w-full bg-[#03150d] text-slate-100 text-xs px-3 py-2.5 rounded-xl border border-emerald-800"
                    >
                      <option value="Field Observation">Field Botanical Observer (记录与观察员)</option>
                      <option value="Taxonomy Data Entry">Species Taxonomy & Data Entry (数据整合员)</option>
                      <option value="Community Workshops">Community Education & Plant Walks (社区科普引导)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl font-bold text-sm text-[#03150d] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    Submit Volunteer Application
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
