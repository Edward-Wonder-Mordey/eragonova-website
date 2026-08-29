import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 30, retry: 1, refetchOnWindowFocus: false },
  },
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const saved = localStorage.getItem("eragonova-theme");
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
        <main>{children}</main>
        <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
            <div><p className="font-bold">Eragonova Enterprise</p><p className="text-slate-500 dark:text-slate-400 mt-1">Technology · Engineering · Growth</p></div>
            <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Eragonova Enterprise. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
