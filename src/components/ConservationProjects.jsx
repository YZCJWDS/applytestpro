import React from 'react';
import { ShieldCheck, Compass, Trees, Sprout, ArrowRight, Activity, MapPin } from 'lucide-react';
import { CONSERVATION_PROJECTS } from '../data/plantData';

export default function ConservationProjects({ onOpenDonate, onOpenVolunteer }) {
  return (
    <section id="projects" className="py-24 relative bg-[#03150d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active Initiatives (生态保护项目)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Conservation & Research Programs
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            By observing trends in plant health and climate shifts, we deploy target action plans to protect vulnerable ecosystems across North America.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONSERVATION_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-emerald-800/40 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {proj.badge}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" /> {proj.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {proj.focus}
                </p>
              </div>

              {/* Impact Highlight */}
              <div className="space-y-3 pt-4 border-t border-emerald-900/50">
                <div className="p-3 rounded-xl bg-[#03150d]/80 border border-emerald-800/40">
                  <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider">Quantified Impact</span>
                  <p className="text-xs text-slate-200 font-medium mt-0.5">{proj.impact}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" /> Status: <strong className="text-slate-200">{proj.status}</strong>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-10 border border-emerald-500/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              Support Plant Observation Science Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every tax-deductible contribution aids field equipment, botanical research sensors, and community observation workshops.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenDonate}
                className="px-6 py-3 rounded-xl text-xs font-bold text-[#03150d] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
              >
                Make a Tax-Deductible Donation
              </button>
              <button
                onClick={onOpenVolunteer}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/50 transition-all"
              >
                Apply as Field Observer Volunteer
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
