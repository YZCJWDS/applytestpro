import React, { useState, useEffect } from 'react';
import { Leaf, ShieldCheck, Menu, X, Globe, Mail, MapPin } from 'lucide-react';
import { ORG_INFO } from '../data/plantData';
import { translations } from '../data/translations';

export default function Header({ lang, setLang, onOpenDonate, onOpenVolunteer, onScrollTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#03150d]/95 backdrop-blur-md border-b border-emerald-900/40 py-3 shadow-2xl' : 'bg-transparent py-4'
    }`}>
      {/* Top Banner Notice */}
      <div className="hidden lg:block bg-gradient-to-r from-emerald-950 via-[#042014] to-emerald-950 border-b border-emerald-800/30 text-xs py-1.5 px-4 text-emerald-200/90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{t.charityBanner} <strong>{ORG_INFO.charityId}</strong></span>
            <span className="text-emerald-500/40">•</span>
            <span>{t.actNotice}</span>
            <span className="text-emerald-500/40">•</span>
            <span className="text-emerald-300 font-semibold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400" /> {t.hqNotice}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-300 flex items-center gap-1 font-mono text-[11px]">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> {ORG_INFO.contactEmail}
            </span>
            <span className="text-emerald-500/40">|</span>
            
            {/* Explicit Language Switcher Buttons (EN | FR) */}
            <div className="flex items-center rounded-lg bg-emerald-950/80 p-0.5 border border-emerald-700/60 text-[11px] font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded transition-all ${
                  lang === 'en'
                    ? 'bg-emerald-400 text-[#03150d] shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-2.5 py-0.5 rounded transition-all ${
                  lang === 'fr'
                    ? 'bg-emerald-400 text-[#03150d] shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                Français
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Org Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-nature-600 to-emerald-800 p-0.5 shadow-lg shadow-emerald-900/50 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#03150d] rounded-[10px] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-emerald-200 via-white to-emerald-400 bg-clip-text text-transparent">
                  PlantProtect
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                  NWT, Canada
                </span>
              </div>
              <p className="text-[10px] text-emerald-300/70 font-medium tracking-wide max-w-[280px] sm:max-w-xs truncate hidden md:block">
                Recording, Observation & Conservation of Plants
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => onScrollTo('explorer')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {t.navDatabase}
            </button>
            <button 
              onClick={() => onScrollTo('recorder')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {t.navRecorder}
            </button>
            <button 
              onClick={() => onScrollTo('projects')}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {t.navConservation}
            </button>
            <button 
              onClick={() => onScrollTo('verification')}
              className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {t.navCharityInfo}
            </button>
          </nav>

          {/* Explicit Language Switcher & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center rounded-lg bg-emerald-950/80 p-0.5 border border-emerald-700/60 text-xs font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded transition-all ${
                  lang === 'en'
                    ? 'bg-emerald-400 text-[#03150d] shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1 rounded transition-all ${
                  lang === 'fr'
                    ? 'bg-emerald-400 text-[#03150d] shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>

            <button
              onClick={onOpenVolunteer}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/50 transition-all shadow-sm"
            >
              {t.btnVolunteer}
            </button>
            <button
              onClick={onOpenDonate}
              className="px-4 py-2 rounded-lg text-xs font-bold text-[#03150d] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            >
              {t.btnDonate}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center rounded bg-emerald-950 p-0.5 border border-emerald-700 text-xs font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded ${lang === 'en' ? 'bg-emerald-400 text-[#03150d]' : 'text-emerald-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-1.5 py-0.5 rounded ${lang === 'fr' ? 'bg-emerald-400 text-[#03150d]' : 'text-emerald-300'}`}
              >
                FR
              </button>
            </div>
            <button
              onClick={onOpenDonate}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#03150d] bg-emerald-400"
            >
              {t.btnDonate}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#052215]/95 border-b border-emerald-800/60 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-xl animate-fadeIn">
          <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-xs text-emerald-300 space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Canadian Registered NPO
            </div>
            <p className="text-[11px] text-emerald-400/80">BN: {ORG_INFO.charityId}</p>
            <p className="text-[11px] text-slate-300 flex items-center gap-1 pt-1">
              <Mail className="w-3 h-3 text-emerald-400" /> {ORG_INFO.contactEmail}
            </p>
          </div>

          <button 
            onClick={() => { onScrollTo('explorer'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-emerald-400 font-medium"
          >
            {t.navDatabase}
          </button>
          <button 
            onClick={() => { onScrollTo('recorder'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-emerald-400 font-medium"
          >
            {t.navRecorder}
          </button>
          <button 
            onClick={() => { onScrollTo('projects'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-emerald-400 font-medium"
          >
            {t.navConservation}
          </button>
          <button 
            onClick={() => { onScrollTo('verification'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-emerald-400 font-medium"
          >
            {t.navCharityInfo}
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { onOpenVolunteer(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-900/60 border border-emerald-700/50"
            >
              {t.btnVolunteer}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
