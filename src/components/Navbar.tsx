import { useState, useEffect } from "react";
import { MenuIcon, XIcon, DownloadIcon } from "./Icons";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "App" },
  { href: "#download", label: "Download" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/downloads/hibbullah.apk"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            download
          >
            <DownloadIcon size={16} aria-hidden="true" />
            Download App
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-out ${
          open
            ? "max-h-80 opacity-100 border-t border-gray-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white px-4 pb-6 pt-2 shadow-lg">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/downloads/hibbullah.apk"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light"
            download
            onClick={() => setOpen(false)}
          >
            <DownloadIcon size={16} aria-hidden="true" />
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
