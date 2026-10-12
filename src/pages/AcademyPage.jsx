import React from "react";
import { ArrowRight, CheckCircle2, GraduationCap, Monitor, BarChart3, Briefcase, Users, Zap } from "lucide-react";
import CapabilityVisual from "../components/CapabilityVisual";
import { academyTracks } from "../data/siteData";

const trackAccents = ["blue", "cyan", "emerald", "violet", "amber"];
const trackIcons = [Monitor, BarChart3, Briefcase, Users, Zap];

export default function AcademyPage() {
  return (
    <>
      <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div>
            <div className="h-14 w-14 rounded-2xl bg-violet-500/15 border border-violet-300/20 text-violet-200 flex items-center justify-center"><GraduationCap size={27}/></div>
            <p className="mt-6 text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Eragonova Academy</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Practical skills for people, teams and organisations.</h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/70">Eragonova Academy brings together technology, data, business, professional development and engineering learning in practical formats designed around real capability.</p>
            <div className="mt-8"><a href="#/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 hover:-translate-y-0.5">Request Training <ArrowRight size={18}/></a></div>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-3 sm:p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-sm">
            <CapabilityVisual type="academy" />
            <div className="mt-3 flex items-center justify-between gap-3 px-1 text-[11px] font-semibold text-white/45"><span>Structured learning</span><span>Tracks • Labs • Progress</span></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-field opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Learning Tracks</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white">Five connected areas of development.</h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-300">Training can be arranged as focused workshops, structured short courses or organisation-specific capacity building depending on need.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyTracks.map(([track,items], index) => {
              const Icon = trackIcons[index % trackIcons.length];
              return (
                <div key={track} className="accent-card rounded-3xl p-7" data-accent={trackAccents[index % trackAccents.length]}>
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="accent-icon"><Icon size={23}/></div>
                    <span className="accent-kicker text-xs font-bold">0{index+1}</span>
                  </div>
                  <h3 className="relative z-10 mt-5 text-xl font-bold text-slate-950 dark:text-white">{track}</h3>
                  <div className="relative z-10 mt-4 flex flex-wrap gap-2">{items.map(item => <span key={item} className="accent-chip">{item}</span>)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-[0.22em]">Delivery Formats</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Training that can fit the context.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">Programme design can vary by audience, location, duration and organisational objective.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Instructor-led workshops","Team capacity building","Practical labs and guided exercises","Custom organisational training"].map((item,index) => (
              <div key={item} className="accent-card rounded-2xl p-5" data-accent={trackAccents[index % trackAccents.length]}>
                <CheckCircle2 className="accent-kicker relative z-10" size={19}/>
                <p className="relative z-10 mt-3 font-semibold text-slate-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="graphic-panel rounded-[2rem] bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative max-w-3xl"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need a training programme built around your team?</h2><p className="mt-3 text-white/65 leading-7">Tell us the audience, skill gap and outcome you want. We can shape the delivery around those needs.</p></div>
            <a href="#/contact" className="relative shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-violet-700 hover:bg-violet-50 transition">Request Training <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
