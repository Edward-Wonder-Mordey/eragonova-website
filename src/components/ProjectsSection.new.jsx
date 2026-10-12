import React from "react";
import { ArrowUpRight, BarChart3, Printer, Palette, Building2 } from "lucide-react";
import CapabilityVisual from "./CapabilityVisual";

const capabilities = [
  ["Data analysis & quality review", "Data & reporting", "Dataset cleaning, validation, discrepancy review, audit documentation, and reporting that make information easier to trust and use.", BarChart3, "blue", "data"],
  ["Digital services & operations", "Service operations", "Document preparation, print and digital services, online registrations, customer support, and everyday computer and printer troubleshooting.", Printer, "emerald", "documents"],
  ["Graphic design & production", "Visual communication", "Print and digital materials shaped by clear briefs, careful revisions, production requirements, and organized design files.", Palette, "violet", "creative"],
  ["Enterprise platform & service design", "Digital presence", "Web content, service materials, documentation, and practical processes that help organizations explain their work and connect with customers.", Building2, "amber", "portal"],
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-field opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow">In practice</p>
            <h2 className="section-title">Useful work, <span className="text-blue-600 dark:text-blue-400">clear delivery.</span></h2>
            <p className="section-lead">These are the practical areas that shape how we approach technology, information, operations, and communication.</p>
          </div>
          <a href="#/contact" className="secondary-button px-5 py-3 shrink-0">Discuss your project <ArrowUpRight size={17}/></a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map(([title, context, description, Icon, accent, visual]) => (
            <article key={title} className="project-card" data-accent={accent}>
              <CapabilityVisual type={visual} />
              <div className="mt-6 relative z-10 flex items-start gap-4">
                <div className="project-icon shrink-0"><Icon size={21}/></div>
                <div>
                  <p className="project-context text-xs font-bold uppercase tracking-[0.15em]">{context}</p>
                  <h3 className="text-xl font-bold mt-2 text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
