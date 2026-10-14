import React from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Download,
  Globe2,
  Mail,
  Phone,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const LOGO = `${process.env.PUBLIC_URL}/eragonova-logo.jpg`;
const QR = `${process.env.PUBLIC_URL}/eragonova-website-qr.png`;
const GUIDE_PDF = "/Eragonova_Quick_Technology_Health_Check.pdf";
const PUBLIC_SITE = "https://edward-wonder-mordey.github.io/eragonova-website/";

const checks = [
  {
    number: 1,
    level: "green",
    title: "Slow Computer",
    time: "5-15 minutes",
    items: [
      "Restart the computer.",
      "Close unused applications and browser tabs.",
      "Check available storage space.",
      "Install official operating system updates.",
      "Run a trusted antivirus scan if appropriate.",
    ],
    avoid: 'Unknown "PC cleaner" applications from untrusted sources.',
  },
  {
    number: 2,
    level: "green",
    title: "Internet or Wi-Fi Keeps Disconnecting",
    time: "5-10 minutes",
    items: [
      "Check whether other devices have the same issue.",
      "Restart the router once.",
      "Move closer to the wireless access point.",
      "Confirm network cables and power connections.",
      "Check if your internet provider is experiencing an outage.",
    ],
    avoid: "Repeatedly changing network settings without understanding their purpose.",
  },
  {
    number: 3,
    level: "green",
    title: "Printer Will Not Print",
    time: "10-20 minutes",
    items: [
      "Verify paper availability.",
      "Check toner or ink levels.",
      "Confirm power and cable connections.",
      "Ensure the correct printer is selected.",
      "Clear any stuck print jobs before reinstalling drivers.",
    ],
  },
  {
    number: 4,
    level: "green",
    title: "Storage Is Almost Full",
    time: "10-30 minutes",
    items: [
      "Remove unnecessary downloads.",
      "Empty the Recycle Bin.",
      "Move large archives to approved storage.",
      "Review duplicate files.",
      "Consider cloud or external backup storage.",
    ],
    avoid: "Deleting system files or folders to gain space.",
  },
  {
    number: 5,
    level: "green",
    title: "Important File Appears Missing",
    time: "10-30 minutes",
    items: [
      "Search by file name.",
      "Check Recent Files.",
      "Check Recycle Bin or Trash.",
      "Review cloud storage version history.",
      "Check shared folders and alternate save locations.",
    ],
    avoid: "Creating replacement files until you confirm the original cannot be recovered.",
  },
  {
    number: 6,
    level: "yellow",
    title: "Suspicious Email or Link",
    time: "Immediate action",
    items: [
      "Verify the sender through another communication channel.",
      "Check for unusual spelling, links, or requests.",
      "Delete obvious phishing emails.",
      "Report suspicious messages where possible.",
    ],
    afterTitle: "If you clicked:",
    afterItems: [
      "Change affected passwords immediately.",
      "Enable multi-factor authentication.",
      "Monitor account activity.",
      "Inform your administrator if applicable.",
    ],
  },
  {
    number: 7,
    level: "yellow",
    title: "Shared Passwords",
    time: "15-30 minutes",
    items: [
      "Assign separate accounts to each user.",
      "Use strong unique passwords.",
      "Enable MFA on critical accounts.",
      "Review access permissions regularly.",
    ],
    afterTitle: "Important systems include:",
    afterItems: ["Email", "Banking", "Business applications", "Administrative accounts"],
  },
  {
    number: 8,
    level: "green",
    title: "No Reliable Backup",
    time: "20-60 minutes",
    items: [
      "Maintain at least one independent backup.",
      "Test file restoration periodically.",
      "Keep important copies separate from primary devices.",
    ],
    note: "Cloud synchronisation is not always a complete backup solution.",
  },
  {
    number: 9,
    level: "red",
    title: "Device Overheating or Unstable",
    time: "Stop and assess",
    intro: "Immediately power down the device if:",
    items: [
      "A burning smell is present.",
      "Sparks are observed.",
      "A battery is swollen.",
      "Excessive heat develops rapidly.",
      "The device repeatedly powers off.",
    ],
    note: "Do NOT attempt to open power supplies, batteries, or electrical equipment yourself.",
  },
  {
    number: 10,
    level: "yellow",
    title: "Updates Keep Failing",
    time: "10-20 minutes",
    items: [
      "Record the exact error message.",
      "Confirm system date and time are correct.",
      "Verify internet connectivity.",
      "Restart and retry once.",
      "Check available storage space.",
    ],
    note: "Repeated failures may require technical troubleshooting.",
  },
  {
    number: 11,
    level: "yellow",
    title: "Account May Be Compromised",
    time: "Immediate action",
    intro: "Signs include:",
    items: [
      "Unexpected password reset emails.",
      "Login alerts from unfamiliar locations.",
      "Locked-out accounts.",
      "Unrecognised account activity.",
    ],
    afterTitle: "Actions:",
    afterItems: [
      "Change passwords immediately.",
      "Enable MFA.",
      "Review recent sign-ins.",
      "Sign out of unrecognised devices.",
      "Report incidents where necessary.",
    ],
  },
  {
    number: 12,
    level: "yellow",
    title: "Suspicious SMS, WhatsApp, or Social Media Messages",
    time: "Immediate action",
    items: [
      "Do not click unknown links.",
      "Verify requests independently.",
      "Avoid sharing verification codes.",
      "Report fraudulent messages.",
      "Block persistent scam accounts.",
    ],
  },
];

const levelStyles = {
  green: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
    bar: "bg-emerald-500",
    label: "Safe first check",
  },
  yellow: {
    badge: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
    bar: "bg-amber-500",
    label: "Caution / security",
  },
  red: {
    badge: "bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/20",
    bar: "bg-red-500",
    label: "Stop / safety",
  },
};

const urgentReasons = [
  "There is a burning smell.",
  "Sparks are visible.",
  "Liquid damage has occurred.",
  "A battery is swollen.",
  "Repeated data loss is occurring.",
  "Ransomware is suspected.",
  "An unknown administrator account appears.",
  "Critical business systems are affected.",
  "Financial accounts may be compromised.",
];

const whyProblemsWorsen = [
  "Follow random online fixes.",
  "Install untrusted software.",
  "Delete important files.",
  "Change settings without documentation.",
  "Ignore warning signs until failures occur.",
];

const services = [
  "Computer Troubleshooting",
  "Printer Setup & Support",
  "Wi-Fi & Network Diagnostics",
  "Data Backup Solutions",
  "Cybersecurity Awareness Checks",
  "Device Health Assessments",
  "IT Advisory Services",
  "Digital Documentation & Business Support",
];

function CheckList({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-600 dark:text-blue-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckCard({ check }) {
  const style = levelStyles[check.level];
  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
      <div className={`absolute left-0 top-0 h-full w-1.5 ${style.bar}`} />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${style.badge}`}>{style.label}</span>
          <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{check.number}. {check.title}</h3>
        </div>
        <div className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Clock size={15} /> {check.time}
        </div>
      </div>

      {check.intro && <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">{check.intro}</p>}
      <CheckList items={check.items} />

      {check.afterItems && (
        <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-white/5">
          <p className="text-sm font-bold text-slate-900 dark:text-white">{check.afterTitle}</p>
          <CheckList items={check.afterItems} />
        </div>
      )}
      {check.avoid && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-800 dark:bg-red-500/10 dark:text-red-200"><strong>Avoid:</strong> {check.avoid}</p>}
      {check.note && <p className="mt-4 rounded-xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900 dark:bg-blue-500/10 dark:text-blue-100"><strong>{check.number === 9 ? "Important:" : "Remember:"}</strong> {check.note}</p>}
    </article>
  );
}

export default function DigitalHealthGuidePage() {
  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div className="max-w-4xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Free resource · No signup · No payment · Version 2.0</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Free Technology Health Check Guide</h1>
            <p className="mt-5 text-xl font-semibold text-blue-100">Safe First Checks for Common Technology Problems</p>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Practical first-response checks for computers, internet connections, printers, email security, data protection, and everyday technology issues.</p>
            <h2 className="mt-8 max-w-3xl text-2xl sm:text-3xl font-bold tracking-tight">Start Simple. Protect Your Data. Avoid Making A Small Problem Worse.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">This guide provides safe, low-risk checks that can be performed before seeking professional support.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={GUIDE_PDF} download className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition"><Download size={18}/> Download Version 2.0 PDF</a>
              <a href="/contact/" className="secondary-button px-5 py-3 border-white/20 text-white hover:bg-white/10">Need professional help? <ArrowRight size={18}/></a>
            </div>
          </div>

          <div className="graphic-panel rounded-[2rem] bg-white/5 border border-white/10 p-8">
            <div className="rounded-2xl bg-white p-4 sm:p-5 border border-blue-200/30 shadow-xl">
              <img src={LOGO} alt="Eragonova Enterprise official logo" className="w-full max-w-md mx-auto object-contain" loading="eager" />
            </div>
            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-5">
              <div className="flex items-start gap-3"><ShieldAlert size={22} className="mt-0.5 shrink-0 text-amber-300"/><p className="text-sm leading-7 text-white/80"><strong className="text-white">Important:</strong> This guide is not a substitute for qualified electrical, networking, cybersecurity, engineering, or repair services.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Quick self-checks</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Twelve practical checks, ordered around safety and risk.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Start with simple, reversible actions. Protect your information, avoid uncontrolled changes, and stop when the warning signs call for qualified help.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-5">
            {checks.map((check) => <CheckCard key={check.number} check={check} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8 dark:border-red-500/20 dark:bg-red-500/10">
            <div className="flex items-center gap-3 text-red-700 dark:text-red-300"><AlertTriangle size={24}/><p className="text-xs font-bold uppercase tracking-[0.16em]">Immediate assistance recommended</p></div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">When to stop and get professional help.</h2>
            <ul className="mt-6 space-y-3">
              {urgentReasons.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"><AlertTriangle size={17} className="mt-1 shrink-0 text-red-600 dark:text-red-300"/><span>{item}</span></li>)}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-blue-200 bg-blue-50 p-8 dark:border-blue-500/20 dark:bg-blue-500/10">
            <div className="flex items-center gap-3 text-blue-700 dark:text-blue-300"><ShieldCheck size={24}/><p className="text-xs font-bold uppercase tracking-[0.16em]">Why this guide matters</p></div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">Small technology problems often grow because the first response increases the risk.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-300">Many technology problems become worse because users:</p>
            <ul className="mt-4 space-y-3">
              {whyProblemsWorsen.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"><CheckCircle2 size={17} className="mt-1 shrink-0 text-blue-600 dark:text-blue-300"/><span>{item}</span></li>)}
            </ul>
            <p className="mt-5 text-sm leading-7 font-semibold text-slate-900 dark:text-white">This guide helps you perform safe first checks before taking action that could increase risk.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Need professional assistance?</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Eragonova Enterprise</h2>
            <p className="mt-3 text-lg font-bold text-violet-700 dark:text-violet-300">Technology • Engineering • Business Solutions</p>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">We help homes, professionals, churches, and small businesses solve practical technology challenges.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => <div key={service} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"><CheckCircle2 size={19} className="text-violet-600 dark:text-violet-300"/><p className="mt-3 text-sm font-bold leading-6 text-slate-900 dark:text-white">{service}</p></div>)}
          </div>

          <div className="mt-12 graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 sm:p-10 lg:p-12 text-white grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="relative">
              <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em]">Contact</p>
              <div className="mt-5 space-y-4 text-sm sm:text-base">
                <a href="mailto:eragonovaenterprise@gmail.com" className="flex items-start gap-3 text-white/80 hover:text-white"><Mail size={19} className="mt-0.5 shrink-0 text-blue-300"/><span>eragonovaenterprise@gmail.com</span></a>
                <a href={PUBLIC_SITE} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/80 hover:text-white"><Globe2 size={19} className="mt-0.5 shrink-0 text-blue-300"/><span className="break-all">{PUBLIC_SITE}</span></a>
                <a href="tel:+233505374537" className="flex items-start gap-3 text-white/80 hover:text-white"><Phone size={19} className="mt-0.5 shrink-0 text-blue-300"/><span>+233 505 374 537</span></a>
              </div>
              <div className="mt-7 border-t border-white/10 pt-6 text-xs leading-6 text-white/55">
                <p><strong className="text-white/80">Quick Technology Health Check Guide</strong> · Version 2.0</p>
                <p>Published by Eragonova Enterprise · © Eragonova Enterprise. All rights reserved.</p>
              </div>
            </div>
            <div className="relative rounded-2xl bg-white p-4 text-center shadow-xl">
              <img src={QR} alt="QR code linking to the Eragonova website" className="mx-auto h-36 w-36 object-contain" loading="lazy" />
              <p className="mt-2 text-xs font-bold text-slate-700">Scan to visit the website</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative max-w-3xl"><p className="text-sm font-semibold text-blue-100">Start with the symptom, not a risky fix.</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">If the safe checks do not resolve it, describe what happened before making more changes.</h2><p className="mt-3 text-blue-100 leading-7">Share the error message, what changed, and what you already tried. That gives professional troubleshooting a cleaner starting point.</p></div>
            <a href="/contact/" className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50 transition">Contact Eragonova <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
