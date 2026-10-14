import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { trackEvent } from "../analytics";

const serviceOptions = [
  "IT & Systems Administration",
  "Networking & Infrastructure",
  "Cloud & Digital Transformation",
  "Data & Analytics",
  "Cybersecurity & Information Protection",
  "Software & Digital Solutions",
  "Electrical & Electronic Engineering",
  "Administration & Business Support",
  "Documentation & Compliance Services",
  "Branding, Media & Print Services",
  "Research & Intelligence Services",
  "Organisational Development",
  "Consulting Services",
  "Managed Services",
  "Eragonova Academy",
  "Community Development Programmes",
  "Partnership / Collaboration",
  "Careers / Collaboration",
  "Client Portal Access",
  "Other / General Inquiry",
];

const initialForm = { name: "", email: "", phone: "", service: "", message: "", consent: false, _gotcha: "" };

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("https://formspree.io/f/mwvegdqp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          privacy_consent: formData.consent ? "Yes" : "No",
          _gotcha: formData._gotcha,
          source: "eragonova.com contact form",
        }),
      });
      if (response.ok) {
        setSubmitStatus("success");
        trackEvent("generate_lead", { service: formData.service || "General inquiry", method: "contact_form" });
        setFormData(initialForm);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    [Phone, "Phone", "+233 50 537 4537", "tel:+233505374537", "phone"],
    [MessageCircle, "WhatsApp", "Message us on WhatsApp", "https://wa.me/233505374537?text=Hello%20Eragonova%20Enterprise%2C%20I%20would%20like%20to%20make%20an%20inquiry.", "whatsapp"],
    [Mail, "Email", "Eragonovaenterprise@gmail.com", "mailto:Eragonovaenterprise@gmail.com", "email"],
    [MapPin, "Location", "Kumasi, Ghana", null, null],
  ];

  const fieldClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:border-blue-400";

  return (
    <section id="contact" className="py-24 sm:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-12 lg:gap-20">
          <div>
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Contact</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Tell us what you need to solve.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Whether the need is technical, operational, administrative, creative, analytical, engineering-focused or community-based, start with the problem. We can discuss the right scope from there.</p>

            <div className="mt-8 space-y-3">
              {contacts.map(([Icon, label, value, href, eventName]) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 flex items-center justify-center"><Icon size={20}/></div>
                    <div><p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-400">{label}</p><p className="mt-1 font-semibold text-slate-900 dark:text-white break-all">{value}</p></div>
                  </div>
                );
                const isExternal = href?.startsWith("http");
                return href ? <a key={label} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} onClick={() => trackEvent("contact_click", { method: eventName })} className="block hover:-translate-y-0.5 transition">{content}</a> : <div key={label}>{content}</div>;
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Start a conversation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Share enough detail for us to understand the request. Specific scope, delivery approach and next steps can be discussed directly.</p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="company_website">Leave this field empty</label>
                <input id="company_website" name="_gotcha" type="text" value={formData._gotcha} onChange={handleChange} tabIndex="-1" autoComplete="off" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name *</label><input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required autoComplete="name" className={fieldClass} placeholder="Your name" /></div>
                <div><label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address *</label><input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required autoComplete="email" className={fieldClass} placeholder="you@example.com" /></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="phone" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label><input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" className={fieldClass} placeholder="+233 ..." /></div>
                <div><label htmlFor="service" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Service / Inquiry *</label><select id="service" name="service" value={formData.service} onChange={handleChange} required className={`${fieldClass} contact-select`}><option value="">Select...</option>{serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}</select></div>
              </div>

              <div><label htmlFor="message" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Message *</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" className={fieldClass} placeholder="Tell us about the problem, project, organisation or support you need..." /></div>

              <label className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                <input name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} required className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span>I agree that Eragonova may use the information I submit to respond to this enquiry, as described in the <a href="/privacy" className="font-semibold text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-700 dark:text-blue-300">Privacy Notice</a>. *</span>
              </label>

              <button type="submit" disabled={isSubmitting} className="primary-button w-full sm:w-auto px-6 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? "Sending..." : "Send Message"} <Send size={17}/></button>

              <div aria-live="polite" aria-atomic="true">
                {submitStatus === "success" && <p role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">Your message has been sent successfully. We will review the details and respond using the contact information provided.</p>}
                {submitStatus === "error" && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-500/10 dark:text-red-300">The message could not be sent. Please try again or use the phone, WhatsApp, or email details shown here.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
