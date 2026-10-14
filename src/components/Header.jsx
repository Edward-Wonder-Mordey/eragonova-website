import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight, ChevronDown } from "lucide-react";
import LOGO from "../assets/headerLogo";

const primaryItems = [
  { name: "Home", href: "/", route: "home" },
  { name: "About", href: "/about", route: "about" },
  { name: "Services", href: "/services", route: "services" },
  { name: "Projects", href: "/projects", route: "projects" },
  { name: "Academy", href: "/academy", route: "academy" },
  { name: "Resources", href: "/resources", route: "resources" },
];

const moreItems = [
  { name: "Community", href: "/community", route: "community" },
  { name: "Partners", href: "/partners", route: "partners" },
  { name: "Careers", href: "/careers", route: "careers" },
  { name: "Client Portal", href: "/portal", route: "portal" },
  { name: "Contact", href: "/contact", route: "contact" },
  { name: "Legal", href: "/legal", route: "legal" },
  { name: "Privacy", href: "/privacy", route: "privacy" },
  { name: "Terms", href: "/terms", route: "terms" },
];

export default function Header({ currentRoute = "home" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("eragonova-theme") === "dark");

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("eragonova-theme", next ? "dark" : "light");
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const linkClass = (route) => `nav-link ${currentRoute === route ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300" : ""}`;
  const moreIsActive = moreItems.some(item => item.route === currentRoute);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl">
      <div className="glass-nav rounded-2xl px-4 sm:px-5 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center min-w-0" aria-label="Eragonova Enterprise home">
            <img src={LOGO} alt="Eragonova Enterprise logo" className="h-10 sm:h-11 w-auto max-w-[9.5rem] sm:max-w-[11rem] rounded-xl object-contain bg-white px-1.5 py-1 shadow-sm" />
          </a>

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {primaryItems.map((item) => <a key={item.name} href={item.href} className={linkClass(item.route)} aria-current={currentRoute === item.route ? "page" : undefined}>{item.name}</a>)}
            <details className="relative group">
              <summary className={`nav-link cursor-pointer list-none gap-1 ${moreIsActive ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300" : ""}`}>More <ChevronDown size={14} className="transition group-open:rotate-180" /></summary>
              <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-slate-950">
                {moreItems.map((item) => <a key={item.name} href={item.href} className={`${linkClass(item.route)} flex w-full`} aria-current={currentRoute === item.route ? "page" : undefined}>{item.name}</a>)}
              </div>
            </details>
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleTheme} className="icon-button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>{darkMode ? <Sun size={18}/> : <Moon size={18}/>}</button>
            <a href="/contact" className="hidden md:inline-flex primary-button py-2.5 px-4 text-sm">Start a Project <ArrowUpRight size={16}/></a>
            <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="icon-button xl:hidden" aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">{isMobileMenuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="glass-nav mt-2 rounded-2xl p-3 xl:hidden max-h-[76vh] overflow-y-auto">
          <nav className="grid sm:grid-cols-2 gap-1" aria-label="Mobile navigation">
            {[...primaryItems, ...moreItems].map((item) => <a key={item.name} href={item.href} onClick={closeMobileMenu} className={`${linkClass(item.route)} rounded-xl px-4 py-3`} aria-current={currentRoute === item.route ? "page" : undefined}>{item.name}</a>)}
            <a href="/contact" onClick={closeMobileMenu} className="primary-button mt-2 sm:col-span-2 justify-center py-3">Start a Project <ArrowUpRight size={17}/></a>
          </nav>
        </div>
      )}
    </header>
  );
}
