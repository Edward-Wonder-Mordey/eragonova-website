import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 30, retry: 1, refetchOnWindowFocus: false },
  },
});

const footerLinks = [
  ["Company", [["About", "#about"], ["Projects", "#projects"], ["Partners", "#partners"], ["Careers", "#careers"]]],
  ["Explore", [["Services", "#services"], ["Solutions", "#solutions"], ["Academy", "#academy"], ["Resources", "#resources"]]],
  ["Connect", [["Community", "#community"], ["Client Portal", "#portal"], ["Contact", "#contact"], ["Legal", "#legal"]]],
];

export default function RootLayout({ children }) {
  useEffect(() => {
    const saved = localStorage.getItem("eragonova-theme");
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
            <div className="grid lg:grid-cols-[1.3fr_.7fr_.7fr_.7fr] gap-10">
              <div className="max-w-md">
                <p className="text-xl font-bold">Eragonova Enterprise</p>
                <p className="mt-2 text-sm font-semibold text-blue-300">Technology · Engineering · Growth</p>
                <p className="mt-4 text-sm leading-6 text-white/55">Practical Technology. Reliable Infrastructure. Sustainable Growth.</p>
              </div>
              {footerLinks.map(([heading, links]) => (
                <div key={heading}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{heading}</p>
                  <div className="mt-4 space-y-3">{links.map(([label, href]) => <a key={label} href={href} className="block text-sm text-white/65 hover:text-blue-300 transition">{label}</a>)}</div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
              <p>© {new Date().getFullYear()} Eragonova Enterprise. All rights reserved.</p>
              <p>Ghana · Serving clients and communities across locations</p>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
