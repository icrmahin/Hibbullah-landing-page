import { Logo } from "../components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white dark:border-white/[0.04] dark:bg-[#0a0f0c]">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              A modern pharmacy shopping application for Android. Browse, order, and receive medicines with ease.
            </p>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p className="font-medium text-gray-800 dark:text-gray-200">Contact</p>
            <p className="mt-1.5">support@hibbullah.com</p>
            <p className="mt-0.5">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center dark:border-white/[0.04]">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {year} Hibbullah. All rights reserved.
          </p>
          <a
            href="#privacy"
            className="text-xs text-gray-400 transition-colors hover:text-primary dark:text-gray-500 dark:hover:text-emerald-400"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
