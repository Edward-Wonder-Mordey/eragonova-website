import React from "react";

function Shell({ children, accent = "blue", label }) {
  return (
    <div className="capability-visual" data-accent={accent} aria-label={label} role="img">
      <div className="capability-toolbar">
        <span /><span /><span />
        <div className="capability-address" />
      </div>
      <div className="capability-canvas">{children}</div>
    </div>
  );
}

function DataVisual() {
  return (
    <Shell accent="blue" label="Analytics dashboard preview">
      <div className="grid grid-cols-[1.15fr_.85fr] gap-3 h-full">
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-3 flex flex-col">
          <div className="flex items-center justify-between gap-2"><span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Revenue Mix</span><span className="h-2 w-10 rounded-full bg-blue-100 dark:bg-blue-500/15" /></div>
          <div className="flex-1 flex items-end gap-1.5 pt-3">
            {[42,70,55,86,62,94,76,88].map((h,i)=><span key={i} className="flex-1 rounded-t-md bg-blue-500/85" style={{height:`${h}%`}} />)}
          </div>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-400/10 p-3 relative overflow-hidden">
            <div className="absolute -right-5 -bottom-7 h-24 w-24 rounded-full border-[16px] border-indigo-500/80 border-l-indigo-100 dark:border-l-indigo-950" />
            <p className="text-[9px] font-bold uppercase tracking-wider text-indigo-500">Performance</p><p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">84%</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-3">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">KPI trend</p>
            <svg viewBox="0 0 120 52" className="mt-2 w-full h-12" aria-hidden="true"><polyline points="2,42 20,35 37,38 53,22 70,27 88,12 118,17" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"/><circle cx="88" cy="12" r="4" fill="currentColor" className="text-cyan-500"/></svg>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function NetworkVisual() {
  const nodes = [[50,13],[22,38],[78,38],[13,74],[38,74],[64,74],[88,74]];
  return (
    <Shell accent="indigo" label="Network infrastructure topology preview">
      <div className="h-full rounded-xl bg-slate-950 p-3 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 hero-grid" />
        <svg viewBox="0 0 100 90" className="relative w-full h-full" aria-hidden="true">
          <g stroke="rgba(129,140,248,.65)" strokeWidth="1.6">{[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[1,2]].map(([a,b],i)=><line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}</g>
          {nodes.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i===0?8:6} fill={i===0?"#6366f1":"#0f172a"} stroke={i===0?"#c7d2fe":"#818cf8"} strokeWidth="2"/><circle cx={x} cy={y} r="2" fill="#e0e7ff"/></g>)}
        </svg>
        <div className="absolute left-4 top-4 rounded-lg border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-indigo-200">Secure topology</div>
      </div>
    </Shell>
  );
}

function EngineeringVisual() {
  return (
    <Shell accent="amber" label="Engineering systems preview">
      <div className="grid grid-cols-[.9fr_1.1fr] gap-3 h-full">
        <div className="rounded-xl border border-amber-200 dark:border-amber-400/10 bg-amber-50 dark:bg-amber-500/10 p-3 flex flex-col justify-between">
          <div><p className="text-[9px] uppercase tracking-wider font-bold text-amber-600">Load profile</p><p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">230V</p></div>
          <div className="grid grid-cols-3 gap-1.5 items-end h-14">{[48,72,91].map((h,i)=><div key={i} className="rounded-md bg-amber-500/80" style={{height:`${h}%`}} />)}</div>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3 relative overflow-hidden">
          <svg viewBox="0 0 140 88" className="w-full h-full" aria-hidden="true"><g fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M10 45h25l8-18 14 38 13-28 12 15h18"/><rect x="100" y="22" width="27" height="42" rx="4"/><path d="M107 31h13M107 40h13M107 49h13"/></g><g fill="#f59e0b"><circle cx="35" cy="45" r="3"/><circle cx="100" cy="52" r="3"/></g></svg>
          <span className="absolute bottom-3 right-3 text-[9px] font-bold uppercase tracking-wider text-slate-400">System schematic</span>
        </div>
      </div>
    </Shell>
  );
}

function DocumentsVisual() {
  return (
    <Shell accent="emerald" label="Documentation and compliance preview">
      <div className="h-full grid grid-cols-[1fr_.78fr] gap-3">
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-4 shadow-sm">
          <div className="h-2.5 w-24 rounded-full bg-emerald-500/75"/><div className="mt-4 space-y-2">{[92,76,86,64,81].map((w,i)=><div key={i} className="h-1.5 rounded-full bg-slate-200 dark:bg-white/10" style={{width:`${w}%`}} />)}</div>
          <div className="mt-5 grid grid-cols-2 gap-2"><div className="h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10"/><div className="h-10 rounded-lg bg-slate-100 dark:bg-white/5"/></div>
        </div>
        <div className="space-y-3">
          {["Policy","Report","Proposal"].map((item,i)=><div key={item} className="rounded-xl border border-emerald-100 dark:border-emerald-400/10 bg-emerald-50/70 dark:bg-emerald-500/10 p-3"><div className="flex items-center gap-2"><span className="h-7 w-7 rounded-lg bg-emerald-500 text-white grid place-items-center text-[9px] font-bold">{i+1}</span><div><p className="text-[10px] font-bold text-slate-800 dark:text-white">{item}</p><p className="text-[8px] text-slate-400">Reviewed • organised</p></div></div></div>)}
        </div>
      </div>
    </Shell>
  );
}

function CreativeVisual() {
  return (
    <Shell accent="fuchsia" label="Branding and design workspace preview">
      <div className="grid grid-cols-[.65fr_1.35fr] gap-3 h-full">
        <div className="rounded-xl bg-slate-950 p-3"><div className="grid grid-cols-2 gap-2">{["#7c3aed","#ec4899","#0ea5e9","#f59e0b","#10b981","#111827"].map(c=><span key={c} className="aspect-square rounded-lg" style={{background:c}} />)}</div></div>
        <div className="rounded-xl border border-fuchsia-200 dark:border-fuchsia-400/10 bg-gradient-to-br from-fuchsia-50 via-white to-violet-50 dark:from-fuchsia-500/10 dark:via-slate-900 dark:to-violet-500/10 p-4 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-fuchsia-500/20"/><div className="absolute right-7 top-6 h-16 w-16 rounded-2xl rotate-12 bg-violet-500/20"/>
          <p className="relative text-[9px] uppercase tracking-[.18em] font-bold text-fuchsia-600">Visual identity</p><p className="relative mt-2 max-w-[130px] text-lg leading-tight font-black text-slate-900 dark:text-white">Brand systems that stay coherent.</p><div className="relative mt-5 flex gap-1.5"><span className="h-2 w-10 rounded-full bg-fuchsia-500"/><span className="h-2 w-6 rounded-full bg-violet-500"/><span className="h-2 w-4 rounded-full bg-cyan-500"/></div>
        </div>
      </div>
    </Shell>
  );
}

function AcademyVisual() {
  return (
    <Shell accent="violet" label="Learning platform preview">
      <div className="grid grid-cols-[.8fr_1.2fr] gap-3 h-full">
        <div className="rounded-xl bg-violet-950 p-3 text-white"><p className="text-[9px] uppercase tracking-wider font-bold text-violet-300">Learning track</p><p className="mt-2 text-lg font-bold">Linux & Cloud</p><div className="mt-4 space-y-2">{["Fundamentals","Administration","Practical Lab"].map((t,i)=><div key={t} className="flex items-center gap-2 text-[9px] text-white/70"><span className="h-5 w-5 rounded-md bg-violet-500/25 grid place-items-center font-bold">{i+1}</span>{t}</div>)}</div></div>
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3"><div className="flex items-center justify-between"><p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Progress</p><span className="text-[10px] font-bold text-violet-600">72%</span></div><div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden"><div className="h-full w-[72%] rounded-full bg-violet-500"/></div><div className="mt-4 grid grid-cols-2 gap-2">{["Networking","Data","Business","Engineering"].map((t,i)=><div key={t} className="rounded-lg bg-slate-50 dark:bg-white/5 p-2"><div className={`h-5 w-5 rounded-md ${i===0?'bg-blue-500':i===1?'bg-cyan-500':i===2?'bg-emerald-500':'bg-amber-500'}`}/><p className="mt-2 text-[9px] font-semibold text-slate-600 dark:text-slate-300">{t}</p></div>)}</div></div>
      </div>
    </Shell>
  );
}

function PortalVisual() {
  return (
    <Shell accent="cyan" label="Client portal dashboard preview">
      <div className="grid grid-cols-[.7fr_1.3fr] gap-3 h-full">
        <div className="rounded-xl bg-slate-950 p-3 text-white"><p className="text-[9px] uppercase tracking-wider font-bold text-cyan-300">Client workspace</p><div className="mt-4 space-y-2">{["Overview","Documents","Support","Reports"].map((t,i)=><div key={t} className={`rounded-lg px-2.5 py-2 text-[9px] ${i===0?'bg-cyan-500/20 text-cyan-100':'text-white/55'}`}>{t}</div>)}</div></div>
        <div className="grid grid-rows-[.75fr_1.25fr] gap-3"><div className="grid grid-cols-3 gap-2">{[["Milestones","6/8"],["Documents","14"],["Open items","3"]].map(([a,b])=><div key={a} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-2"><p className="text-[8px] text-slate-400">{a}</p><p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">{b}</p></div>)}</div><div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3"><p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Engagement progress</p><div className="mt-3 space-y-2">{[82,64,91].map((w,i)=><div key={i}><div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden"><div className="h-full rounded-full bg-cyan-500" style={{width:`${w}%`}}/></div></div>)}</div></div></div>
      </div>
    </Shell>
  );
}

export default function CapabilityVisual({ type = "data" }) {
  const visuals = { data: DataVisual, network: NetworkVisual, engineering: EngineeringVisual, documents: DocumentsVisual, creative: CreativeVisual, academy: AcademyVisual, portal: PortalVisual };
  const Visual = visuals[type] || DataVisual;
  return <Visual />;
}
