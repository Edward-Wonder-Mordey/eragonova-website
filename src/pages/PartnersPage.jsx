import React from "react";
import { ArrowRight, Users, ShieldCheck, Layers } from "lucide-react";

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Strategic Partnerships</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Independent expertise, connected when it adds value.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova works with independent organisations where complementary capability creates a better path for the client or community.</p>
            <div className="mt-8"><a href="#/contact" className="primary-button px-6 py-3.5">Discuss Partnership <ArrowRight size={18}/></a></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-[2rem] border border-slate-200 p-8 sm:p-10 dark:border-white/10 dark:bg-white/[0.03] grid lg:grid-cols-[.8fr_1.2fr] gap-10">
            <div>
              <div className="h-14 w-14 rounded-2xl bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 flex items-center justify-center"><Users size={26}/></div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Independent Strategic Partner</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">Elyra Suite</h2>
              <p className="mt-1 font-semibold text-fuchsia-600 dark:text-fuchsia-300">Beauty • Business • Excellence</p>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">Elyra Suite operates independently and provides beauty services, hair and wig solutions, makeup services, nail care, business support, administrative services, training programmes and women's empowerment programmes.</p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">Where appropriate, clients requiring complementary beauty, wellness, personal development or related support may be referred to Elyra Suite.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Partnership Principles</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Clear boundaries. Complementary value.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Strategic partnerships should make service delivery clearer, not blur responsibility.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              [ShieldCheck,"Independent identity","Partners retain their own identity, responsibilities and service boundaries."],
              [Layers,"Complementary capability","Collaboration is used where another organisation adds relevant capability Eragonova does not need to duplicate."],
              [Users,"Client clarity","Referrals and joint work should make it clear who is delivering what."],
            ].map(([Icon,title,text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]">
                <Icon className="text-blue-600 dark:text-blue-300" size={23}/>
                <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Interested in working with Eragonova?</h2>
              <p className="mt-3 text-white/65 leading-7">Share the capability, opportunity or collaboration model you have in mind and we can discuss fit, responsibilities and next steps.</p>
            </div>
            <a href="#/contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition">Contact Eragonova <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
