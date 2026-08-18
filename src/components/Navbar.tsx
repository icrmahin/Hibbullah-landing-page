import { useState, useEffect } from "react";
import {
  MenuIcon,
  XIcon,
  DownloadIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "App" },
  { href: "#download", label: "Download" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  // Light mode as default
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-black/[0.04] bg-white/75 backdrop-blur-2xl dark:border-white/[0.06] dark:bg-[#0a0f0c]/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-12 max-w-5xl items-center justify-between px-5 sm:h-14 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo size={28} />

        {/* Desktop links — centered (Apple-style restraint) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:bg-black/[0.04] hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-black/[0.04] hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>

          <a
            href="/downloads/hibbullah.apk"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[13px] font-semibold text-white transition-all hover:bg-primary-light active:scale-[0.97] md:inline-flex"
            download
          >
            <DownloadIcon size={13} aria-hidden="true" />
            Download
          </a>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-black/[0.04] dark:text-gray-300 dark:hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-black/[0.04] bg-white/90 px-5 pb-5 pt-2 backdrop-blur-2xl dark:border-white/[0.06] dark:bg-[#0a0f0c]/95">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-gray-700 transition-colors hover:bg-black/[0.03] hover:text-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/downloads/hibbullah.apk"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light active:scale-[0.97]"
            download
            onClick={() => setOpen(false)}
          >
            <DownloadIcon size={15} aria-hidden="true" />
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
