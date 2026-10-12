import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 30, retry: 1, refetchOnWindowFocus: false },
  },
});

const footerLinks = [
  ["Company", [["About", "#/about"], ["Projects", "#/projects"], ["Partners", "#/partners"], ["Careers", "#/careers"]]],
  ["Explore", [["Services", "#/services"], ["Academy", "#/academy"], ["Resources", "#/resources"], ["Community", "#/community"]]],
  ["Connect", [["Client Portal", "#/portal"], ["Contact", "#/contact"], ["Privacy", "#/privacy"], ["Terms", "#/terms"]]],
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
                <a href="#/home" className="text-xl font-bold hover:text-blue-300 transition">Eragonova Enterprise</a>
                <p className="mt-2 text-sm font-semibold text-blue-300">Technology · Engineering · Growth</p>
                <p className="mt-4 text-sm leading-6 text-white/55">Practical Technology. Reliable Infrastructure. Sustainable Growth.</p>
                <p className="mt-4 text-xs leading-5 text-white/35">A multidisciplinary technology, engineering and business solutions company based in Ghana and built to serve clients across Africa and internationally.</p>
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
              <div className="flex flex-wrap gap-4"><a href="#/legal" className="hover:text-white transition">Legal</a><a href="#/privacy" className="hover:text-white transition">Privacy</a><a href="#/terms" className="hover:text-white transition">Terms</a></div>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
