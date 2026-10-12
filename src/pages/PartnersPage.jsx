import React from "react";
import { ArrowRight, Users, ShieldCheck, Layers } from "lucide-react";

export default function PartnersPage() {
  const principles = [
    [ShieldCheck,"Independent identity","Partners retain their own identity, responsibilities and service boundaries.","fuchsia"],
    [Layers,"Complementary capability","Collaboration is used where another organisation adds relevant capability Eragonova does not need to duplicate.","violet"],
    [Users,"Client clarity","Referrals and joint work should make it clear who is delivering what.","rose"],
  ];

  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-fuchsia-300 text-xs font-bold uppercase tracking-[0.22em]">Strategic Partnerships</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Independent expertise, connected when it adds value.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova works with independent organisations where complementary capability creates a better path for the client or community.</p>
            <div className="mt-8"><a href="#/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-fuchsia-600/20 transition hover:bg-fuchsia-500 hover:-translate-y-0.5">Discuss Partnership <ArrowRight size={18}/></a></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-field opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="accent-card rounded-[2rem] p-8 sm:p-10 grid lg:grid-cols-[.8fr_1.2fr] gap-10" data-accent="fuchsia">
            <div className="relative z-10">
              <div className="accent-icon"><Users size={26}/></div>
              <p className="accent-kicker mt-5 text-xs font-bold uppercase tracking-[0.16em]">Independent Strategic Partner</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">Elyra Suite</h2>
              <p className="accent-kicker mt-1 font-semibold">Beauty • Business • Excellence</p>
            </div>
            <div className="relative z-10">
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">Elyra Suite operates independently and provides beauty services, hair and wig solutions, makeup services, nail care, business support, administrative services, training programmes and women's empowerment programmes.</p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">Where appropriate, clients requiring complementary beauty, wellness, personal development or related support may be referred to Elyra Suite.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-fuchsia-600 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-[0.22em]">Partnership Principles</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Clear boundaries. Complementary value.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Strategic partnerships should make service delivery clearer, not blur responsibility.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {principles.map(([Icon,title,text,accent]) => (
              <div key={title} className="accent-card rounded-3xl p-7" data-accent={accent}>
                <div className="accent-icon"><Icon size={23}/></div>
                <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-fuchsia-950 to-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Interested in working with Eragonova?</h2>
              <p className="mt-3 text-white/65 leading-7">Share the capability, opportunity or collaboration model you have in mind and we can discuss fit, responsibilities and next steps.</p>
            </div>
            <a href="#/contact" className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-fuchsia-700 hover:bg-fuchsia-50 transition">Contact Eragonova <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
