import React from "react";

const accentMap = {
  blue: "37,99,235", indigo: "79,70,229", cyan: "8,145,178", emerald: "5,150,105",
  teal: "13,148,136", amber: "217,119,6", violet: "124,58,237", fuchsia: "192,38,211",
};

const divisionMeta = {
  "01": ["systems", "Systems Console"],
  "02": ["network", "Network Topology"],
  "03": ["cloud", "Cloud Workspace"],
  "04": ["data", "Analytics Dashboard"],
  "05": ["security", "Security Centre"],
  "06": ["software", "Application Build"],
  "07": ["engineering", "Engineering View"],
  "08": ["business", "Operations Desk"],
  "09": ["documents", "Document Suite"],
  "10": ["creative", "Design Workspace"],
  "11": ["research", "Research & Insight"],
  "12": ["organisation", "Organisation Map"],
  "13": ["consulting", "Advisory Roadmap"],
  "14": ["managed", "Managed Services"],
  "15": ["academy", "Learning Platform"],
  "16": ["community", "Community Network"],
};

function Bars({ values = [42,70,55,86,62,94], color }) {
  return <div className="flex h-full items-end gap-1.5">{values.map((h,i)=><span key={i} className="flex-1 rounded-t-md" style={{height:`${h}%`,background:`rgba(${color},${.48 + i*.06})`}} />)}</div>;
}

function Nodes({ color }) {
  const pts = [[50,13],[22,39],[78,39],[12,75],[38,75],[64,75],[89,75]];
  return <svg viewBox="0 0 100 88" className="h-full w-full"><g stroke={`rgba(${color},.48)`} strokeWidth="1.4">{[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[1,2]].map(([a,b],i)=><line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} />)}</g>{pts.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i===0?7:5} fill={`rgba(${color},${i===0?.95:.18})`} stroke={`rgba(${color},.8)`} strokeWidth="2"/><circle cx={x} cy={y} r="1.5" fill="white"/></g>)}</svg>;
}

function VisualBody({ type, color }) {
  switch (type) {
    case "systems": return <div className="grid h-full grid-cols-[1fr_.75fr] gap-2"><div className="space-y-2">{[86,67,92].map((w,i)=><div key={i} className="rounded-lg border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-slate-900"><div className="flex items-center justify-between"><span className="h-2 w-9 rounded-full" style={{background:`rgba(${color},.65)`}}/><span className="h-2 w-2 rounded-full bg-emerald-500"/></div><div className="mt-2 h-1.5 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-full rounded-full" style={{width:`${w}%`,background:`rgb(${color})`}}/></div></div>)}</div><div className="rounded-lg bg-slate-950 p-2 text-[8px] text-white/60"><div className="font-bold uppercase tracking-wider" style={{color:`rgb(${color})`}}>Status</div><div className="mt-3 space-y-2">{["AD DS","Backup","Storage","Users"].map(x=><div key={x} className="flex justify-between"><span>{x}</span><span className="text-emerald-300">●</span></div>)}</div></div></div>;
    case "network": return <Nodes color={color}/>;
    case "cloud": return <div className="relative h-full"><div className="absolute left-2 top-8 h-12 w-20 rounded-[2rem] border" style={{borderColor:`rgba(${color},.45)`,background:`rgba(${color},.08)`}}/><div className="absolute left-12 top-3 h-14 w-14 rounded-full" style={{background:`rgba(${color},.16)`}}/><div className="absolute right-3 top-7 grid grid-cols-2 gap-2">{["AZ","AWS","365","IaC"].map(x=><div key={x} className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-[8px] font-bold dark:border-white/10 dark:bg-slate-900" style={{color:`rgb(${color})`}}>{x}</div>)}</div><div className="absolute bottom-3 left-4 right-4 h-1 rounded-full bg-slate-200 dark:bg-white/10"><div className="h-full w-[76%] rounded-full" style={{background:`rgb(${color})`}}/></div></div>;
    case "data": return <div className="grid h-full grid-cols-[1.1fr_.9fr] gap-2"><div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-slate-900"><Bars values={[38,65,52,84,66,92,78]} color={color}/></div><div className="space-y-2"><div className="rounded-lg p-2" style={{background:`rgba(${color},.09)`}}><div className="text-[8px] uppercase tracking-wider text-slate-400">KPI</div><div className="text-lg font-black" style={{color:`rgb(${color})`}}>84%</div></div><svg viewBox="0 0 100 46" className="w-full rounded-lg bg-white p-1 dark:bg-slate-900"><polyline points="3,38 20,32 35,35 50,18 66,25 82,10 97,14" fill="none" stroke={`rgb(${color})`} strokeWidth="4" strokeLinecap="round"/></svg></div></div>;
    case "security": return <div className="grid h-full grid-cols-[.8fr_1.2fr] gap-2"><div className="grid place-items-center rounded-lg" style={{background:`rgba(${color},.09)`}}><svg viewBox="0 0 80 88" className="h-20 w-20"><path d="M40 5 68 15v25c0 20-11 34-28 43C23 74 12 60 12 40V15Z" fill={`rgba(${color},.12)`} stroke={`rgb(${color})`} strokeWidth="4"/><rect x="29" y="37" width="22" height="18" rx="4" fill={`rgb(${color})`}/><path d="M34 37v-5a6 6 0 0 1 12 0v5" fill="none" stroke="white" strokeWidth="3"/></svg></div><div className="space-y-2">{[["Risk",72],["Logs",88],["Policy",64]].map(([x,w])=><div key={x} className="rounded-lg border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-slate-900"><div className="flex justify-between text-[8px]"><span>{x}</span><span>{w}%</span></div><div className="mt-1.5 h-1.5 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-full rounded-full" style={{width:`${w}%`,background:`rgb(${color})`}}/></div></div>)}</div></div>;
    case "software": return <div className="grid h-full grid-cols-[1.25fr_.75fr] gap-2"><div className="rounded-lg bg-slate-950 p-2 font-mono text-[8px]"><div style={{color:`rgb(${color})`}}>const service = &#123;</div><div className="mt-1 text-white/55">&nbsp;&nbsp;build: true,</div><div className="text-white/55">&nbsp;&nbsp;secure: true,</div><div className="text-white/55">&nbsp;&nbsp;scale: "ready"</div><div style={{color:`rgb(${color})`}}>&#125;;</div><div className="mt-2 h-1.5 w-3/4 rounded-full" style={{background:`rgba(${color},.6)`}}/></div><div className="grid grid-rows-3 gap-2">{["WEB","APP","API"].map(x=><div key={x} className="grid place-items-center rounded-lg border border-slate-200 bg-white text-[8px] font-black dark:border-white/10 dark:bg-slate-900" style={{color:`rgb(${color})`}}>{x}</div>)}</div></div>;
    case "engineering": return <svg viewBox="0 0 180 90" className="h-full w-full"><g fill="none" stroke={`rgb(${color})`} strokeWidth="3"><path d="M10 48h30l10-23 17 49 16-35 15 20h25"/><rect x="128" y="18" width="37" height="53" rx="5"/><path d="M137 30h18M137 41h18M137 52h18"/></g><circle cx="40" cy="48" r="4" fill={`rgb(${color})`}/><circle cx="128" cy="59" r="4" fill={`rgb(${color})`}/></svg>;
    case "business": return <div className="grid h-full grid-cols-3 gap-2">{[["Today",[70,45,82]],["Clients",[54,78,61]],["Tasks",[88,66,38]]].map(([t,vals])=><div key={t} className="rounded-lg border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-slate-900"><div className="text-[8px] font-bold uppercase text-slate-400">{t}</div><div className="mt-3 space-y-2">{vals.map((w,i)=><div key={i} className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-full rounded-full" style={{width:`${w}%`,background:`rgba(${color},${.45+i*.18})`}}/></div>)}</div></div>)}</div>;
    case "documents": return <div className="relative h-full"><div className="absolute left-3 top-3 h-[76%] w-[55%] rotate-[-4deg] rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-slate-900"><div className="h-2 w-12 rounded-full" style={{background:`rgb(${color})`}}/><div className="mt-3 space-y-1.5">{[90,76,84,62].map((w,i)=><div key={i} className="h-1 rounded-full bg-slate-200 dark:bg-white/10" style={{width:`${w}%`}}/>)}</div></div><div className="absolute right-3 bottom-3 h-[70%] w-[48%] rotate-[4deg] rounded-lg border p-2 shadow-sm" style={{borderColor:`rgba(${color},.25)`,background:`rgba(${color},.08)`}}><div className="text-[8px] font-bold uppercase" style={{color:`rgb(${color})`}}>Approved</div><div className="mt-3 grid grid-cols-2 gap-1">{[1,2,3,4].map(i=><div key={i} className="h-7 rounded-md bg-white/80 dark:bg-white/5"/>)}</div></div></div>;
    case "creative": return <div className="grid h-full grid-cols-[.7fr_1.3fr] gap-2"><div className="grid grid-cols-2 gap-1.5 rounded-lg bg-slate-950 p-2">{["#7c3aed","#ec4899","#0ea5e9","#f59e0b","#10b981","#111827"].map(c=><span key={c} className="rounded-md" style={{background:c}}/>)}</div><div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-900"><div className="absolute -right-5 -bottom-6 h-20 w-20 rounded-full" style={{background:`rgba(${color},.18)`}}/><div className="text-[8px] font-black uppercase tracking-wider" style={{color:`rgb(${color})`}}>Brand</div><div className="mt-2 max-w-[90px] text-sm font-black leading-tight text-slate-900 dark:text-white">Clear visual systems.</div></div></div>;
    case "research": return <div className="grid h-full grid-cols-[.85fr_1.15fr] gap-2"><div className="grid place-items-center rounded-lg" style={{background:`rgba(${color},.08)`}}><svg viewBox="0 0 80 80" className="h-20 w-20"><circle cx="33" cy="31" r="20" fill="none" stroke={`rgb(${color})`} strokeWidth="6"/><line x1="48" y1="47" x2="68" y2="68" stroke={`rgb(${color})`} strokeWidth="7" strokeLinecap="round"/></svg></div><div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-slate-900"><div className="text-[8px] uppercase text-slate-400">Evidence</div><div className="mt-2 h-[72%]"><Bars values={[28,54,76,49,88]} color={color}/></div></div></div>;
    case "organisation": return <Nodes color={color}/>;
    case "consulting": return <div className="flex h-full items-center justify-between gap-2">{["Assess","Plan","Deliver","Review"].map((x,i)=><React.Fragment key={x}><div className="grid h-14 w-14 place-items-center rounded-full border text-center text-[8px] font-bold" style={{borderColor:`rgba(${color},.35)`,background:`rgba(${color},.08)`,color:`rgb(${color})`}}>{x}</div>{i<3&&<div className="h-[2px] flex-1" style={{background:`rgba(${color},.35)`}}/>}</React.Fragment>)}</div>;
    case "managed": return <div className="grid h-full grid-cols-3 gap-2">{[["UP",99],["SLA",94],["MON",87]].map(([x,v])=><div key={x} className="rounded-lg border border-slate-200 bg-white p-2 text-center dark:border-white/10 dark:bg-slate-900"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full border-[5px]" style={{borderColor:`rgba(${color},.7)`,color:`rgb(${color})`}}><span className="text-[9px] font-black">{v}%</span></div><div className="mt-2 text-[8px] font-bold text-slate-400">{x}</div></div>)}</div>;
    case "academy": return <div className="grid h-full grid-cols-[.9fr_1.1fr] gap-2"><div className="rounded-lg bg-violet-950 p-2 text-white"><div className="text-[8px] uppercase text-violet-300">Track</div><div className="mt-1 text-sm font-bold">Linux & Cloud</div><div className="mt-3 space-y-1.5">{["Learn","Practice","Apply"].map((x,i)=><div key={x} className="flex items-center gap-2 text-[8px] text-white/65"><span className="grid h-4 w-4 place-items-center rounded bg-violet-500/30">{i+1}</span>{x}</div>)}</div></div><div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-slate-900"><div className="text-[8px] uppercase text-slate-400">Progress</div><div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-full w-[72%] rounded-full bg-violet-500"/></div><div className="mt-3 grid grid-cols-2 gap-1.5">{[1,2,3,4].map(i=><div key={i} className="h-8 rounded-md bg-violet-50 dark:bg-violet-500/10"/>)}</div></div></div>;
    case "community": return <div className="h-full"><Nodes color={color}/></div>;
    default: return <Bars color={color}/>;
  }
}

export default function DivisionVisual({ number, accent = "blue" }) {
  const [type, label] = divisionMeta[number] || ["data", "Service Preview"];
  const color = accentMap[accent] || accentMap.blue;
  return (
    <div className="division-visual" style={{"--dv-rgb":color}} role="img" aria-label={`${label} preview`}>
      <div className="division-visual-toolbar"><span/><span/><span/><div/></div>
      <div className="division-visual-label">{label}</div>
      <div className="division-visual-canvas"><VisualBody type={type} color={color}/></div>
    </div>
  );
}
