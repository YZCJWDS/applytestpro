import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Copy, FileText, Award, Building2, MapPin, Mail, X } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';
import { translations } from '../data/translations';

export default function CharityVerification({ lang }) {
  const [copied, setCopied] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const t = translations[lang];

  const handleCopyId = () => {
    navigator.clipboard.writeText(ORG_INFO.charityId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="verification" className="py-20 relative bg-[#02180e] border-y border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.transparencyTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {t.transparencyTitle}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.transparencyDesc}
          </p>
        </div>

        {/* Certificate / Verification Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-600/40 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Shield Icon & Status */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#03150d]/80 border border-emerald-800/60">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 via-nature-500 to-emerald-300 p-0.5 shadow-xl mb-4">
                <div className="w-full h-full bg-[#03150d] rounded-[14px] flex items-center justify-center">
                  <Award className="w-10 h-10 text-emerald-400" />
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {t.taxExemptBadge}
              </span>

              <p className="text-xs text-slate-300 mt-3 font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {t.jurisdictionVal}
              </p>
              <p className="text-[11px] text-emerald-300/70 mt-1">
                Effective: {ORG_INFO.effectiveDate}
              </p>
            </div>

            {/* Right Official Registration Details */}
            <div className="md:col-span-8 space-y-5">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">{t.entityLegalName}</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-snug mt-1">
                  {ORG_INFO.fullName}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#03150d]/90 border border-emerald-800/40">
                  <p className="text-[11px] font-semibold text-slate-400">{t.regIdLabel}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono text-emerald-300 font-bold text-base sm:text-lg tracking-wider">
                      {ORG_INFO.charityId}
                    </span>
                    <button
                      onClick={handleCopyId}
                      className="p-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 transition-colors"
                      title="Copy ID"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {copied && <p className="text-[10px] text-emerald-400 mt-1">✓ Copied to clipboard</p>}
                </div>

                <div className="p-3.5 rounded-xl bg-[#03150d]/90 border border-emerald-800/40">
                  <p className="text-[11px] font-semibold text-slate-400">{t.regActLabel}</p>
                  <p className="font-semibold text-slate-200 text-sm mt-1">
                    {ORG_INFO.registrationAct}
                  </p>
                  <p className="text-[10px] text-emerald-400/80 mt-1">
                    Canada Revenue Agency (CRA)
                  </p>
                </div>
              </div>

              {/* Compliance Info */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>CRA Registered & Audited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct Inquiry: <strong className="text-emerald-300">{ORG_INFO.contactEmail}</strong></span>
                </div>
              </div>

              {/* View Official Certificate Popup Trigger */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-800/50">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>Issuer: {ORG_INFO.issuer}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowCertificateModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#03150d] bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md shadow-emerald-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Voir le certificat d\'enregistrement officiel' : 'View Official Registration Certificate'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Certificate Modal Lightbox (Renders User-Uploaded Certificate Image) */}
        {showCertificateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="glass-panel max-w-3xl w-full rounded-3xl overflow-hidden border border-emerald-600/50 shadow-2xl relative max-h-[92vh] flex flex-col">
              
              {/* Modal Top Bar */}
              <div className="p-4 bg-[#03150d] border-b border-emerald-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Canada Revenue Agency • Official Notification of Registration</span>
                </div>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="p-1.5 rounded-full bg-emerald-950 text-slate-300 hover:text-white hover:bg-emerald-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Exact User-Uploaded Certificate Image Container */}
              <div className="p-6 overflow-y-auto bg-slate-900 flex justify-center items-center">
                <div className="bg-white rounded-xl shadow-2xl p-2 max-w-xl w-full border border-slate-200">
                  <img
                    src="/cra-certificate.png"
                    alt="Canada Revenue Agency Official Registration Certificate Scan"
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#03150d] border-t border-emerald-800/60 flex items-center justify-between text-xs text-slate-300">
                <span className="font-mono text-emerald-400">BN: {ORG_INFO.charityId}</span>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-[#03150d] bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  {lang === 'fr' ? 'Fermer' : 'Close Certificate View'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
