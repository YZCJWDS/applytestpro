import React, { useState } from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Copy, Download, ExternalLink, Award, Sparkles, Building2 } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';

export default function CharityVerification() {
  const [copied, setCopied] = useState(false);

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
            <span>Official Non-Profit Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Government Registration & Governance
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Our organization maintains total public transparency. Verified as a tax-exempt registered charity under the Canada Revenue Agency (CRA) and compliant with the Alberta Charitable Fund-raising Act.
          </p>
        </div>

        {/* Certificate / Verification Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-600/40 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Badge Effect */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Shield Icon & Status */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#03150d]/80 border border-emerald-800/60">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 via-nature-500 to-emerald-300 p-0.5 shadow-xl shadow-emerald-950/80 mb-4">
                <div className="w-full h-full bg-[#03150d] rounded-[14px] flex items-center justify-center">
                  <Award className="w-10 h-10 text-emerald-400" />
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Active Charity Status
              </span>

              <p className="text-xs text-slate-400 mt-3 font-mono">
                Jurisdiction: {ORG_INFO.country}
              </p>
              <p className="text-[11px] text-emerald-300/70 mt-1">
                Effective: {ORG_INFO.effectiveDate}
              </p>
            </div>

            {/* Right Official Registration Details */}
            <div className="md:col-span-8 space-y-5">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Registered Entity Full Legal Name</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-snug mt-1">
                  {ORG_INFO.fullName}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#03150d]/90 border border-emerald-800/40">
                  <p className="text-[11px] font-semibold text-slate-400">Organization Registration ID / BN</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono text-emerald-300 font-bold text-base sm:text-lg tracking-wider">
                      {ORG_INFO.charityId}
                    </span>
                    <button
                      onClick={handleCopyId}
                      className="p-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 hover:text-white transition-colors"
                      title="Copy Registration ID"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {copied && <p className="text-[10px] text-emerald-400 mt-1">✓ Copied to clipboard</p>}
                </div>

                <div className="p-3.5 rounded-xl bg-[#03150d]/90 border border-emerald-800/40">
                  <p className="text-[11px] font-semibold text-slate-400">Governing Registration Act</p>
                  <p className="font-semibold text-slate-200 text-sm mt-1">
                    {ORG_INFO.registrationAct}
                  </p>
                  <p className="text-[10px] text-emerald-400/80 mt-1">
                    Canada Revenue Agency (CRA)
                  </p>
                </div>
              </div>

              {/* Compliance Checklist */}
              <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Tax-Exempt Status Granted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Public Benefit Audited</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>CRA Annual Returns Filed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Subdomain: {ORG_INFO.domain}</span>
                </div>
              </div>

              {/* Official Certificate Verification Banner */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-800/50">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>Issuer: {ORG_INFO.issuer}</span>
                </div>
                <a
                  href={`https://apps.cra-arc.gc.ca/ebci/hdbc/cgi-bin/welcome?lang=en`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:underline"
                >
                  Lookup on Canada CRA Registry <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
