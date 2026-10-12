import React from "react";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import HeroSection from "../components/HeroSection.new";
import ProjectsSection from "../components/ProjectsSection.new";
import { servicePillars, sectors, academyTracks } from "../data/siteData";

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">{title}</h2>
      {copy && <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">{copy}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <HeroSection />

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeading eyebrow="About Eragonova" title="A multidisciplinary enterprise built around practical outcomes." copy="Eragonova Enterprise combines technology, engineering, data, documentation, business support, training and organisational development so clients can solve connected problems through one structured relationship." />
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#/about" className="primary-button px-5 py-3">About Eragonova <ArrowRight size={18}/></a>
              <a href="#/services" className="secondary-button px-5 py-3">Explore Services</a>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-7 sm:p-9 text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Enterprise Direction</p>
            <p className="relative mt-3 text-xl leading-9 font-semibold">Practical Technology. Reliable Infrastructure. Sustainable Growth.</p>
            <div className="relative mt-7 space-y-3 text-sm text-white/70">
              {["Multidisciplinary service delivery","Remote, on-site and hybrid support","Business, institutional and community focus"].map(item => <div key={item} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-300"/><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading eyebrow="Services" title="Three capability pillars. Sixteen service divisions." copy="The full service portfolio is organised so visitors can understand the breadth without getting lost in a wall of service cards." />
            <a href="#/services" className="secondary-button px-5 py-3 shrink-0">View All Services <ArrowRight size={17}/></a>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {servicePillars.map((pillar, index) => <article key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><span className="text-xs font-bold tracking-[0.18em] text-blue-600 dark:text-blue-300">0{index+1}</span><h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{pillar.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{pillar.description}</p><p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">{pillar.divisions.length} divisions</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Solutions" title="Built around the organisations we serve." copy="Technology and engineering only create value when they fit the operating context. Eragonova starts with the organisation and the outcome, then selects the right capabilities." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map(([Icon,title,text]) => <article key={title} className="rounded-3xl border border-slate-200 p-7 dark:border-white/10 dark:bg-white/[0.03]"><Icon className="text-blue-600 dark:text-blue-300" size={23}/><h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></article>)}
          </div>
        </div>
      </section>

      <ProjectsSection />

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Eragonova Academy</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em]">Skills that move people and organisations forward.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-white/65">Practical learning across technology, data, business, professional development and engineering.</p>
            <a href="#/academy" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition">Explore Academy <ArrowRight size={18}/></a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {academyTracks.map(([track, items]) => <div key={track} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"><h3 className="font-bold text-blue-200">{track}</h3><p className="mt-3 text-sm leading-6 text-white/60">{items.slice(0,3).join(" • ")}{items.length > 3 ? " • ..." : ""}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-[2rem] border border-slate-200 p-8 dark:border-white/10 dark:bg-white/[0.03]"><Users className="text-blue-600 dark:text-blue-300" size={28}/><p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">Community</p><h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">Technology should create human impact.</h2><p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">Community programmes connect digital literacy, youth development, entrepreneurship, church technology support and self-reliance.</p><a href="#/community" className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600 dark:text-blue-300">Explore Community Work <ArrowRight size={17}/></a></div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Strategic Partnerships</p><h2 className="mt-3 text-3xl font-bold">Independent expertise, connected when it adds value.</h2><p className="mt-4 text-base leading-7 text-white/65">Eragonova's partnership model allows complementary organisations to work alongside the enterprise while keeping responsibilities and identities clear.</p><a href="#/partners" className="mt-6 inline-flex items-center gap-2 font-bold text-blue-300">View Partnerships <ArrowRight size={17}/></a></div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-[2rem] bg-blue-600 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl"><p className="text-sm font-semibold text-blue-100">Start with the problem.</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Tell us what you need to solve.</h2><p className="mt-3 text-blue-100 leading-7">We can help determine which service, discipline or combination of capabilities fits the situation.</p></div>
            <a href="#/contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50 transition">Start a Project <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </div>
  );
}
