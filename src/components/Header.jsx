import React, { useState } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

const LOGO = `${process.env.PUBLIC_URL}/eragonova.jpeg`;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("eragonova-theme") === "dark");

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("eragonova-theme", next ? "dark" : "light");
  };

  const navigationItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="glass-nav rounded-2xl px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 min-w-0" aria-label="Eragonova Enterprise home">
            <img src={LOGO} alt="Eragonova Enterprise logo" className="h-11 w-11 rounded-xl object-contain bg-white shadow-sm" />
            <div className="hidden sm:block leading-tight">
              <span className="block font-bold text-sm tracking-tight text-slate-900 dark:text-white">Eragonova</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Enterprise</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigationItems.map((item) => <a key={item.name} href={item.href} className="nav-link">{item.name}</a>)}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="icon-button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="hidden sm:inline-flex primary-button py-2.5 px-4 text-sm">Start a Project <ArrowUpRight size={16} /></a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="icon-button lg:hidden" aria-label="Toggle navigation">
              {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="glass-nav mt-2 rounded-2xl p-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigationItems.map((item) => <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="nav-link rounded-xl px-4 py-3">{item.name}</a>)}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="primary-button mt-2 justify-center">Start a Project <ArrowUpRight size={17} /></a>
          </nav>
        </div>
      )}
    </header>
  );
}
