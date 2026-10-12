import React, { useState } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight, ChevronDown } from "lucide-react";

const LOGO = `${process.env.PUBLIC_URL}/eragonova.jpeg`;

const primaryItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Projects", href: "#projects" },
  { name: "Academy", href: "#academy" },
];

const moreItems = [
  { name: "Resources", href: "#resources" },
  { name: "Community", href: "#community" },
  { name: "Partners", href: "#partners" },
  { name: "Careers", href: "#careers" },
  { name: "Client Portal", href: "#portal" },
  { name: "Contact", href: "#contact" },
  { name: "Legal", href: "#legal" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("eragonova-theme") === "dark");

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("eragonova-theme", next ? "dark" : "light");
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl">
      <div className="glass-nav rounded-2xl px-4 sm:px-5 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 min-w-0" aria-label="Eragonova Enterprise home">
            <img src={LOGO} alt="Eragonova Enterprise logo" className="h-11 w-11 rounded-xl object-contain bg-white shadow-sm" />
            <div className="hidden sm:block leading-tight">
              <span className="block font-bold text-sm tracking-tight text-slate-900 dark:text-white">Eragonova</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Enterprise</span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {primaryItems.map((item) => <a key={item.name} href={item.href} className="nav-link">{item.name}</a>)}
            <details className="relative group">
              <summary className="nav-link cursor-pointer list-none gap-1">More <ChevronDown size={14} className="transition group-open:rotate-180" /></summary>
              <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-slate-950">
                {moreItems.map((item) => <a key={item.name} href={item.href} className="nav-link flex w-full">{item.name}</a>)}
              </div>
            </details>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="icon-button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>{darkMode ? <Sun size={18}/> : <Moon size={18}/>}</button>
            <a href="#contact" className="hidden md:inline-flex primary-button py-2.5 px-4 text-sm">Start a Project <ArrowUpRight size={16}/></a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="icon-button xl:hidden" aria-label="Toggle navigation">{isMobileMenuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="glass-nav mt-2 rounded-2xl p-3 xl:hidden max-h-[76vh] overflow-y-auto">
          <nav className="grid sm:grid-cols-2 gap-1" aria-label="Mobile navigation">
            {[...primaryItems, ...moreItems].map((item) => <a key={item.name} href={item.href} onClick={closeMobileMenu} className="nav-link rounded-xl px-4 py-3">{item.name}</a>)}
            <a href="#contact" onClick={closeMobileMenu} className="primary-button mt-2 sm:col-span-2 justify-center py-3">Start a Project <ArrowUpRight size={17}/></a>
          </nav>
        </div>
      )}
    </header>
  );
}
