import React from "react";
import { ArrowUpRight, BarChart3, Printer, Palette, Building2 } from "lucide-react";
import CapabilityVisual from "./CapabilityVisual";
import TestimonialsSection from "./TestimonialsSection";

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

        <article id="elyra-suite-case-study" className="mt-8 overflow-hidden rounded-3xl border border-blue-200/70 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-950">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="eyebrow">Featured client project · October 2026</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Elyra Suite website design &amp; development</h3>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Eragonova Enterprise designed and launched a responsive website for Elyra Suite, giving the independent beauty and business brand a polished online presence. The project brought its services, brand story and customer pathways together in one place.
              </p>
              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700 dark:text-blue-300">Project scope</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                  <li>• Responsive visual design and implementation</li>
                  <li>• Beauty, bridal, business and Academy pages</li>
                  <li>• Portfolio, resources and partnership sections</li>
                  <li>• Contact pathways, policies and search metadata</li>
                </ul>
              </div>
              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                Brief received 11 October 2026 · Work began 12 October · Completed 13 October 2026
              </p>
              <a href="https://edward-wonder-mordey.github.io/elyra-suite-website/#/home" target="_blank" rel="noopener noreferrer" className="primary-button mt-7 inline-flex items-center gap-2 px-5 py-3">
                View the Elyra Suite website <ArrowUpRight size={17}/>
              </a>
            </div>
            <aside className="flex flex-col justify-center border-t border-blue-100 bg-blue-50/70 p-7 dark:border-slate-800 dark:bg-slate-900/70 sm:p-10 lg:border-l lg:border-t-0">
              <p className="eyebrow">Project outcome</p>
              <p className="mt-4 text-xl leading-relaxed text-slate-800 dark:text-slate-100">
                A responsive, polished online presence that brings Elyra Suite’s services, brand story and customer pathways together.
              </p>
              <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">The approved client testimonial appears with other verified feedback below.</p>
            </aside>    </aside>
          </div>
        </article>
        <TestimonialsSection />
      </div>
    </section>
  );
}
