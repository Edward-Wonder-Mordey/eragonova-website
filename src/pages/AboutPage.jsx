import React from "react";
import { ArrowRight, CheckCircle2, Globe2, Layers, ShieldCheck } from "lucide-react";
import { values } from "../data/siteData";

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">{title}</h2>
      {copy && <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">{copy}</p>}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">About Eragonova</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">One enterprise. Multiple disciplines. One standard of delivery.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova Enterprise is a multidisciplinary technology, engineering and business solutions company delivering practical solutions to organisations, institutions and communities across industries and borders.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#/services" className="primary-button px-6 py-3.5">Explore Services <ArrowRight size={18}/></a>
              <a href="#/contact" className="secondary-button px-6 py-3.5 border-white/25 bg-white/10 text-white hover:bg-white/15">Contact Eragonova</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-slate-950 p-8 text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Mission</p>
            <p className="relative mt-3 text-lg leading-8 text-white/80">To empower organisations and communities through technology, engineering excellence, administrative support, structured systems, practical innovation and professional development.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">Vision</p>
            <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-slate-300">To become one of Africa's most trusted multidisciplinary technology and engineering enterprises, delivering scalable, sustainable and transformative solutions that improve organisations, communities and lives.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Global Outlook" title="Based in Ghana. Built to serve globally." copy="Eragonova's base is part of its identity, not a boundary on where it can create value. Remote, on-site and hybrid delivery models allow the enterprise to support clients across Africa and internationally where the scope and service model are suitable." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              [Globe2,"Cross-border capability","Work can be structured for clients across locations through remote, hybrid or coordinated on-site delivery."],
              [Layers,"Multidisciplinary scope","Technology, engineering, data, documentation, administration and development capabilities can be combined around one outcome."],
              [ShieldCheck,"Professional delivery","Clear scope, communication, documentation and responsible execution remain central regardless of geography."],
            ].map(([Icon,title,text]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={24}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Core Values" title="The standards behind the work." copy="Eragonova's values shape how projects are planned, communicated, delivered and improved." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"><CheckCircle2 className="text-blue-600 dark:text-blue-300" size={20}/><h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Have a problem that crosses more than one discipline?</h2><p className="mt-3 text-white/65 leading-7">Describe the outcome you need. Eragonova can structure the right combination of services around it.</p></div>
            <a href="#/contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition">Start a Project <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
