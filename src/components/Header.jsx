import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 font-montserrat">
        {/* Rounded pill container */}
        <div className="bg-white dark:bg-[#1E1E1E] rounded-full shadow-lg border border-gray-200 dark:border-gray-700 px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img
              src="https://ucarecdn.com/5a1b0204-f8a6-4ec2-ad3c-4c98cee46735/-/format/auto/"
              alt="Eragonova Enterprise - Innovating Beyond Borders"
              className="h-8 sm:h-10 w-auto mr-8"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative flex items-center space-x-1 text-[14px] xl:text-[16px] font-medium transition-all duration-150 ease-in-out
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-opacity-50 focus-visible:ring-offset-2
                    active:scale-95 whitespace-nowrap
                    ${
                      index === 0
                        ? "text-[#2563eb]"
                        : "text-[#4B4B4B] dark:text-white/70 hover:text-[#2563eb] dark:hover:text-[#3b82f6] active:text-[#1d4ed8] dark:active:text-[#2563eb]"
                    }
                  `}
                >
                  <span>{item.name}</span>
                  {index === 0 && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#2563eb] rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-[#4B4B4B] dark:text-white/70 transition-all duration-150 ease-in-out hover:text-[#2563eb] dark:hover:text-[#3b82f6] active:text-[#1d4ed8] dark:active:text-[#2563eb] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-opacity-50 focus-visible:ring-offset-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 lg:hidden w-80 max-w-[90vw]">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    relative flex items-center space-x-2 text-[16px] font-medium transition-all duration-150 ease-in-out py-2 px-3 rounded-lg
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-opacity-50 focus-visible:ring-offset-2
                    active:scale-95
                    ${
                      index === 0
                        ? "text-[#2563eb] bg-[#2563eb]/10"
                        : "text-[#4B4B4B] dark:text-white/70 hover:text-[#2563eb] dark:hover:text-[#3b82f6] hover:bg-gray-50 dark:hover:bg-gray-800 active:text-[#1d4ed8] dark:active:text-[#2563eb]"
                    }
                  `}
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}



