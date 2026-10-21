import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Privacy</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Privacy principles for website and client enquiries.</h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">This page explains how information submitted through the Eragonova website is intended to be handled. Project-specific confidentiality requirements can be documented separately for an engagement.</p>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-6">
          {[
            ["Information you provide", "When you contact Eragonova, you may provide your name, email address, phone number, organisation, service interest and project or enquiry details."],
            ["How information is used", "Information submitted through the website is used to understand enquiries, communicate with you, scope requested services, administer engagements and provide relevant follow-up."],
            ["Sensitive information", "Do not submit passwords, authentication secrets, payment credentials or unnecessary sensitive data through the public contact form. Where sensitive project information is required, an appropriate channel should be agreed first."],
            ["Third-party services", "The website may rely on third-party services for hosting, form delivery or other technical functions. Information processed through those services may also be subject to their applicable terms and privacy practices."],
            ["Website analytics", "Eragonova uses Google Analytics 4 to understand how visitors use the website and improve it. Analytics may collect usage information such as pages viewed, interactions, browser and device details, and an event when a contact form is successfully submitted. The event may include the selected service category and contact method, but the form message, name, email address and phone number are not sent to Google Analytics. Google may use cookies or similar identifiers and process information under its own terms and privacy practices. You can manage cookies through your browser settings."],
            ["Retention and access", "Information should be retained only as reasonably needed for communication, legitimate business records and active or potential engagements. Requests about information previously submitted can be raised through the Eragonova contact page."],
            ["Updates", "This privacy notice may be updated as the website, services or legal requirements evolve. The version published on the website is the current public notice."],
          ].map(([title, text]) => <article key={title} className="rounded-3xl border border-slate-200 p-7 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]"><ShieldCheck className="text-blue-600 dark:text-blue-300" size={22}/><h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">{title}</h2><p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">{text}</p></article>)}
          <div className="pt-4"><a href="#/contact" className="primary-button px-5 py-3">Privacy Question <ArrowRight size={18}/></a></div>
        </div>
      </section>
    </>
  );
}
