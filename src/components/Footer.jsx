import React from 'react';
import { Leaf, ShieldCheck, Globe, Heart, Mail, MapPin } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';

export default function Footer({ onScrollTo, onOpenDonate, onOpenVolunteer }) {
  return (
    <footer className="bg-[#02140b] border-t border-emerald-900/60 pt-16 pb-12 text-slate-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/40">
          
          {/* Left Org Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 p-0.5 shadow-lg shadow-emerald-950">
                <div className="w-full h-full bg-[#03150d] rounded-[10px] flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                PlantProtect
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              <strong className="text-emerald-300">{ORG_INFO.fullName}</strong> is dedicated to recording, observing, and conserving plant biodiversity to protect fragile ecosystems for future generations.
            </p>

            <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-xs space-y-1">
              <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Canadian Registered Charity
              </div>
              <p className="text-slate-300">Registration Number (BN): <strong className="text-slate-100 font-mono">{ORG_INFO.charityId}</strong></p>
              <p className="text-[11px] text-slate-400">Act: {ORG_INFO.registrationAct} • Canada Revenue Agency</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Navigation & Tools</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onScrollTo('explorer')} className="hover:text-emerald-300 transition-colors">
                  Plant Observation Database
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('recorder')} className="hover:text-emerald-300 transition-colors">
                  Citizen Science Field Recorder
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('projects')} className="hover:text-emerald-300 transition-colors">
                  Conservation Projects
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('verification')} className="hover:text-emerald-300 transition-colors">
                  Government Charity Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Subdomain Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Cloudflare Hosting & Contact</h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Domain: <strong className="text-slate-100 font-mono">{ORG_INFO.domain}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Contact: contact@{ORG_INFO.domain}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Headquarters: Alberta, Canada</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={onOpenDonate}
                className="px-4 py-2 rounded-lg text-xs font-bold text-[#03150d] bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Support Charity
              </button>
              <button
                onClick={onOpenVolunteer}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950 border border-emerald-800 hover:bg-emerald-900 transition-colors"
              >
                Volunteer
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {ORG_INFO.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-emerald-400/80">
              Cloudflare Edge Deployed • plantprotect.npu.codes
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
