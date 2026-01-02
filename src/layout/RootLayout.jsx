import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212] text-[#111] dark:text-white/90">
        {/* Navigation */}
        <header className="w-full bg-[#2563eb] dark:bg-[#1d4ed8] text-white shadow">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1
              className="font-bold text-lg"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              Eragonova Enterprise
            </h1>
            <nav className="space-x-6">
              <a href="#hero" className="hover:underline">
                Home
              </a>
              <a href="#services" className="hover:underline">
                Services
              </a>
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </nav>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-6 px-3 py-1 rounded bg-white text-[#2563eb] hover:bg-gray-100 dark:bg-[#121212] dark:text-white dark:hover:bg-[#1e293b] transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-[#2563eb] dark:bg-[#1d4ed8] text-white mt-12">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center">
            <p
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
              className="text-sm"
            >
              © {new Date().getFullYear()} Eragonova Enterprise. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
