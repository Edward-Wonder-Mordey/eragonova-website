import React from "react";
import { ArrowRight, ShieldCheck, Globe2, Layers } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center pt-24">
      <div className="absolute inset-0">
        <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Professionals collaborating on technology, engineering and business solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/45" />
        <div className="absolute inset-0 opacity-20 hero-grid" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-sm mb-7">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" /> Based in Ghana · Built to serve globally
          </div>
          <p className="text-blue-300 text-sm font-bold uppercase tracking-[0.2em] mb-4">Technology · Engineering · Growth</p>
          <h1 className="font-bold text-white leading-[0.98] tracking-[-0.04em] text-5xl sm:text-6xl lg:text-8xl max-w-5xl">
            Practical technology.<br />Reliable infrastructure.<br /><span className="text-gradient">Sustainable growth.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/75">
            Eragonova Enterprise brings technology, engineering, data, documentation, business support, training and organisational development together to deliver practical solutions for organisations, institutions and communities across industries and borders.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="#/contact" className="primary-button px-6 py-3.5">Start a Project <ArrowRight size={18} /></a>
            <a href="#/services" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">Explore Enterprise Services</a>
          </div>
          <div className="mt-14 grid sm:grid-cols-3 gap-5 max-w-4xl">
            {[
              [ShieldCheck, "Professional delivery", "Structured work, clear communication and dependable execution"],
              [Globe2, "Global-ready delivery", "Remote, on-site and hybrid support across locations and borders"],
              [Layers, "Multidisciplinary", "Connected technology, engineering, business and development capability"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex gap-3 items-start">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-300"><Icon size={18} /></div>
                <div><p className="font-semibold text-white text-sm">{title}</p><p className="text-white/55 text-xs mt-1 leading-5">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
