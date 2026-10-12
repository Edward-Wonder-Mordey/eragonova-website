import React from "react";
import { ArrowRight, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Engagement Terms</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Clear scope, responsibilities and delivery expectations.</h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">These public terms explain the general basis on which Eragonova presents and scopes services. Each actual project or service engagement may require its own written scope, quotation, proposal or agreement.</p>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-6">
          {[
            ["Website information", "Service descriptions on this website explain Eragonova's areas of capability. They do not by themselves create a contract, guaranteed availability, fixed price or obligation to deliver a particular service."],
            ["Project scope", "Before substantial work begins, the relevant scope should identify the intended deliverables, responsibilities, assumptions, dependencies, timing and commercial terms where applicable."],
            ["Client responsibilities", "Clients are responsible for providing accurate information, appropriate access, timely decisions and lawful authorisation for systems, data, equipment or locations involved in the engagement."],
            ["Changes to scope", "Material changes to requirements, deliverables, timing or dependencies may require the scope, schedule or fee to be revised before the additional work proceeds."],
            ["Third-party products and services", "Where delivery depends on third-party software, cloud platforms, hosting, hardware, licences, contractors or independent partners, their availability, pricing and terms may affect the engagement."],
            ["Responsible and authorised use", "Cybersecurity, technical administration, engineering and data services must be performed within legitimate and authorised scope. Eragonova does not treat a public enquiry as permission to access or test systems."],
            ["Intellectual property and deliverables", "Ownership, licence rights and permitted reuse of project-specific software, designs, reports, data outputs, templates or other deliverables should be stated in the applicable engagement documentation where relevant."],
            ["Acceptance and completion", "Project completion and acceptance should be assessed against the agreed scope and deliverables rather than expectations that were not documented as part of the engagement."],
          ].map(([title, text]) => <article key={title} className="rounded-3xl border border-slate-200 p-7 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]"><FileText className="text-blue-600 dark:text-blue-300" size={22}/><h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">{title}</h2><p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p></article>)}
          <div className="pt-4"><a href="#/contact" className="primary-button px-5 py-3">Discuss an Engagement <ArrowRight size={18}/></a></div>
        </div>
      </section>
    </>
  );
}
