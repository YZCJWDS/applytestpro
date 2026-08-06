import React from 'react';
import { Leaf, Eye, BookOpen, Shield, ChevronRight, Activity, MapPin, Mail } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';
import { translations } from '../data/translations';

export default function Hero({ lang, onScrollTo, onOpenVolunteer }) {
  const t = translations[lang];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-radial-gradient overflow-hidden">
      {/* Background Decorative Dynamic Ambient Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge: Official Canadian Charity */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-700/60 shadow-lg backdrop-blur-md mb-8 animate-float">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-200">
            {t.charityBanner} #{ORG_INFO.charityId} • HQ: {ORG_INFO.headquarters}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-100">
              {t.heroTitleLine1} <br />
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
                {t.heroTitleLine2}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
              {t.heroSubtitle}
            </p>

            {/* Three Core Pillars Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl glass-panel border border-emerald-800/40">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-2">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-200">{t.pillarRecord}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">{t.pillarRecordDesc}</p>
              </div>

              <div className="p-3 rounded-xl glass-panel border border-emerald-800/40">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-2">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-200">{t.pillarObserve}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">{t.pillarObserveDesc}</p>
              </div>

              <div className="p-3 rounded-xl glass-panel border border-emerald-800/40">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-2">
                  <Leaf className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-200">{t.pillarConserve}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">{t.pillarConserveDesc}</p>
              </div>
            </div>

            {/* Action Callouts */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onScrollTo('recorder')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#03150d] bg-gradient-to-r from-emerald-400 via-nature-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/25 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Leaf className="w-4 h-4 fill-current" />
                {t.btnLogObs}
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollTo('explorer')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/50 backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                {t.btnBrowseDb}
              </button>
            </div>

          </div>

          {/* Right Live Interactive Stats Box */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-600/30 glow-emerald relative">
              <div className="flex items-center justify-between border-b border-emerald-800/50 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h2 className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">{t.liveMetricsTitle}</h2>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  {ORG_INFO.domain}
                </span>
              </div>

              {/* Grid Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/40">
                  <p className="text-xs text-slate-400 font-medium">{t.statLoggedObs}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">{ORG_INFO.stats.loggedObservations}</p>
                  <p className="text-[10px] text-emerald-300/60 mt-1 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400" /> Real-time NWT entries
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/40">
                  <p className="text-xs text-slate-400 font-medium">{t.statTrackedSpecies}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">{ORG_INFO.stats.trackedSpecies}</p>
                  <p className="text-[10px] text-emerald-300/60 mt-1 flex items-center gap-1">
                    <Leaf className="w-3 h-3 text-emerald-400" /> Subarctic & Boreal
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/40">
                  <p className="text-xs text-slate-400 font-medium">{t.statVolunteers}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">{ORG_INFO.stats.activeVolunteers}</p>
                  <p className="text-[10px] text-emerald-300/60 mt-1">Across NT & Canada</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#03150d]/80 border border-emerald-800/40">
                  <p className="text-xs text-slate-400 font-medium">{t.statHabitats}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">{ORG_INFO.stats.protectedHabitats}</p>
                  <p className="text-[10px] text-emerald-300/60 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" /> Peatland & Taiga
                  </p>
                </div>
              </div>

              {/* Verified Legal Footer inside Card */}
              <div className="mt-6 pt-4 border-t border-emerald-800/40 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Contact: <a href={`mailto:${ORG_INFO.contactEmail}`} className="text-emerald-300 font-mono hover:underline">{ORG_INFO.contactEmail}</a></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
