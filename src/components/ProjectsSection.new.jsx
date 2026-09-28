import React from "react";
import { ArrowUpRight, BarChart3, Printer, Palette, Building2 } from "lucide-react";

const experience = [
  ["Data analysis & quality review", "Springboard · 2025", "Edward cleaned and validated complex datasets, then moved into an auditor role reviewing participant records, discrepancies, and compliance. This experience informs our reporting and quality-focused work.", BarChart3],
  ["Digital services & operations", "Collins Printing Press & Internet Café · 2026–present", "Document preparation, printing, scanning, design, online registrations, customer payments, supply monitoring, and everyday computer and printer support in a customer-facing operation.", Printer],
  ["Graphic design & production", "Shalom.Net Company Ltd · 2023", "Print and digital design work developed through client briefs, revisions, organized files, and production requirements, using CorelDRAW and image-editing tools.", Palette],
  ["Enterprise platform & service design", "Eragonova Enterprise · 2025–present", "Building our digital presence, service materials, documentation, and delivery processes to make technical support easier to understand and request.", Building2],
];

export default function ProjectsSection() {
  return <section id="projects" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50"><div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"><div className="max-w-2xl"><p className="eyebrow">Experience behind our work</p><h2 className="section-title">Practical work, <span className="text-blue-600 dark:text-blue-400">real responsibility.</span></h2><p className="section-lead">Our founder brings experience in data quality, customer operations, design, and technical support to the services Eragonova is developing.</p></div><a href="#contact" className="secondary-button px-5 py-3 shrink-0">Discuss your project <ArrowUpRight size={17}/></a></div>
    <div className="grid md:grid-cols-2 gap-5">{experience.map(([title,context,description,Icon])=><article key={title} className="project-card"><div className="project-icon"><Icon size={21}/></div><div className="mt-10"><p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">{context}</p><h3 className="text-xl font-bold mt-2">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p></div></article>)}</div>
    <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">The Springboard, Collins Printing Press, and Shalom.Net roles are Edward Wonder Mordey’s professional experience. They are not presented as Eragonova client engagements.</p>
  </div></section>;
}
