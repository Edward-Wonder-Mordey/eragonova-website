import React from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Download, ShieldCheck } from "lucide-react";

const LOGO = `${process.env.PUBLIC_URL}/eragonova-logo.jpg`;

const checks = [
  ["Slow computer", "Restart first. Close unused apps and browser tabs, check free storage, and install normal system updates. Avoid unknown 'cleaner' apps that promise instant fixes."],
  ["Internet or Wi-Fi drops", "Check whether other devices are affected. Restart the router once, move closer to it, and confirm cables and power. Do not keep changing router settings you do not understand."],
  ["Printer will not print", "Check paper, ink or toner, power, cable or Wi-Fi connection, and the selected printer. Clear a stuck print queue before reinstalling drivers."],
  ["Storage is almost full", "Remove unnecessary downloads, empty the recycle bin, and move large archives to approved storage. Do not delete system folders just to free space."],
  ["A file seems missing", "Search by file name or type, check Recent files, Recycle Bin or Trash, shared-drive folders, and cloud version history before recreating or deleting anything."],
  ["Suspicious email or link", "Do not open attachments or enter passwords. Verify the sender another way. If you already clicked, change the affected password from a trusted device and report the incident."],
  ["Passwords are shared", "Give each person their own account where possible. Use strong unique passwords and enable multi-factor authentication on important email, finance, cloud, and admin accounts."],
  ["No reliable backup", "Keep at least one separate backup of important files and test that you can restore from it. A sync folder alone is not always a complete backup."],
  ["Device is overheating or unstable", "Shut it down if it becomes unusually hot, smells burnt, sparks, swells, or repeatedly powers off. Do not open power supplies, batteries, or mains equipment yourself."],
  ["Updates keep failing", "Record the exact error, confirm date and time settings and internet access, restart once, and retry. Repeated failures may need proper troubleshooting instead of repeated forced installs."],
];

const habits = [
  ["Daily", "Pause before opening unexpected links or attachments. Save important work to the correct approved location and lock devices when stepping away."],
  ["Weekly", "Restart devices that stay on continuously, check free storage, review failed updates, and confirm that important files are reaching the expected backup location."],
  ["Monthly", "Review user accounts and access, test at least one restore from backup, update critical software, remove unused applications, and confirm who is responsible for support."],
];

export default function DigitalHealthGuidePage() {
  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div className="max-w-4xl">
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Free visitor resource · No signup · No payment</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Quick Technology Health Check</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Simple, safe first checks for common computer, internet, printer, storage, account and data problems before a small issue becomes a bigger one.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/Eragonova_Quick_Technology_Health_Check.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50 transition"><Download size={18}/> Download free PDF</a>
              <a href="/contact/" className="secondary-button px-5 py-3 border-white/20 text-white hover:bg-white/10">Need technical help? <ArrowRight size={18}/></a>
            </div>
          </div>
          <div className="graphic-panel rounded-[2rem] bg-white/5 border border-white/10 p-8">
            <div className="rounded-2xl bg-white p-4 sm:p-5 border border-blue-200/30 shadow-xl">
              <img src={LOGO} alt="Eragonova Enterprise official logo" className="w-full max-w-md mx-auto object-contain" loading="eager" />
            </div>
            <h2 className="mt-6 text-2xl font-bold">Start simple. Protect your data.</h2>
            <p className="mt-3 text-white/65 leading-7">These checks are deliberately low-risk. The goal is to rule out common causes without deleting data, bypassing security, opening electrical equipment, or making uncontrolled changes.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Technology first aid</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Ten common problems and safe first checks.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Use these as a first response, not as a substitute for qualified repair, electrical, network or cybersecurity work.</p>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-5">
            {checks.map(([title, text], index) => (
              <article key={title} className="accent-card rounded-3xl p-7" data-accent={index < 5 ? "blue" : "indigo"}>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="accent-icon shrink-0"><span className="font-bold">{index + 1}</span></div>
                  <div><h3 className="text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-[0.22em]">Preventive habits</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">A little maintenance prevents a lot of disruption.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {habits.map(([title, text]) => (
              <article key={title} className="accent-card rounded-3xl p-7" data-accent="emerald">
                <div className="accent-icon"><CheckCircle2 size={22}/></div>
                <h3 className="relative z-10 mt-5 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8 dark:border-red-500/20 dark:bg-red-500/10">
            <div className="flex items-center gap-3 text-red-700 dark:text-red-300"><AlertTriangle size={24}/><p className="text-xs font-bold uppercase tracking-[0.16em]">Stop and get help</p></div>
            <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">Some symptoms should not be treated as a DIY problem.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">Stop and seek appropriate support if there is a burning smell, sparks, liquid damage, a swollen battery, repeated data loss, suspected ransomware, an unknown administrator account, or an issue affecting critical business systems.</p>
          </div>
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 text-white">
            <div className="h-14 w-14 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-200"><ShieldCheck size={26}/></div>
            <h2 className="mt-5 text-2xl font-bold">Keep the fix proportional to the problem.</h2>
            <p className="mt-4 text-sm leading-7 text-white/65">A good first response protects information, records what happened, avoids unnecessary changes, and knows when to escalate. That principle applies at home, in a small business, and across larger organisations.</p>
            <a href="/Eragonova_Quick_Technology_Health_Check.pdf" download className="mt-6 inline-flex items-center gap-2 font-bold text-blue-300">Download the one-page checklist <Download size={17}/></a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative max-w-3xl"><p className="text-sm font-semibold text-blue-100">Still not resolved?</p><h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Describe the problem before making more changes.</h2><p className="mt-3 text-blue-100 leading-7">Tell Eragonova what happened, what changed, any error message you saw, and what you have already tried. That gives troubleshooting a cleaner starting point.</p></div>
            <a href="/contact/" className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50 transition">Contact Eragonova <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
