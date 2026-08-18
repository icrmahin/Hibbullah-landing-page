import { Logo } from "../components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              A modern pharmacy shopping application for Android. Browse, order, and receive medicines with ease.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p className="font-medium text-gray-700">Contact</p>
            <p className="mt-1">support@hibbullah.com</p>
            <p className="mt-0.5">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-400">
            © {year} Hibbullah. All rights reserved.
          </p>
          <a
            href="#privacy"
            className="text-xs text-gray-400 transition-colors hover:text-primary"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
