import React from "react";
import { ArrowUpRight, Database, Leaf, Globe, FileText, Sun } from "lucide-react";

const projects = [
  ["Eragonova Website", "IT & Systems", "A scalable digital presence designed to communicate enterprise capabilities clearly.", Globe],
  ["Community Poultry Initiative", "Community Development", "A self-reliance initiative supporting local farmers through feed distribution and training.", Leaf],
  ["PromisedLand Data Center", "IT Infrastructure", "Hybrid infrastructure concept integrating Azure and AWS for scalable operations.", Database],
  ["Professional Branding Campaign", "Branding", "Contract-ready corporate profiles, proposals and reports for organizations and enterprises.", FileText],
  ["Renewable Energy Pilot", "Engineering", "Solar hybrid implementation and safety-focused electrical work for SME environments.", Sun],
];

export default function ProjectsSection() {
  return <section id="projects" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50"><div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"><div className="max-w-2xl"><p className="eyebrow">Selected work</p><h2 className="section-title">Built for <span className="text-blue-600 dark:text-blue-400">real-world impact.</span></h2><p className="section-lead">A growing portfolio of technology, engineering, branding and community initiatives.</p></div><a href="#contact" className="secondary-button px-5 py-3 shrink-0">Discuss your project <ArrowUpRight size={17}/></a></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{projects.map(([title,category,description,Icon],i)=><article key={title} className={`project-card ${i===0 ? "lg:row-span-2" : ""}`}><div className="flex items-center justify-between"><div className="project-icon"><Icon size={21}/></div><span className="text-xs font-semibold uppercase tracking-wider text-slate-400">0{i+1}</span></div><div className="mt-16"><p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">{category}</p><h3 className="text-xl font-bold mt-2">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p></div></article>)}</div>
  </div></section>;
}
