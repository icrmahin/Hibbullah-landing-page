import { DownloadIcon, ArrowRightIcon } from "../components/Icons";
import { PhoneMockup } from "../components/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      {/* Soft ambient light — deference to content */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-3xl dark:bg-primary/10" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-black/[0.02] px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Android Pharmacy App
            </p>

            <h1 className="text-balance text-[1.85rem] font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12] dark:text-white">
              Your trusted{" "}
              <span className="text-primary dark:text-emerald-400">pharmacy</span>
              <br className="hidden sm:block" />
              {" "}in your pocket
            </h1>

            <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-gray-500 sm:text-base lg:mx-0 dark:text-gray-400">
              Search medicines, browse brands, and order with cash on delivery — from one simple Android app.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/downloads/hibbullah.apk"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light active:scale-[0.97] sm:w-auto"
                download
              >
                <DownloadIcon size={15} aria-hidden="true" />
                Download APK
              </a>
              <a
                href="#showcase"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 sm:w-auto dark:text-gray-400 dark:hover:text-white"
              >
                See the app
                <ArrowRightIcon size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Android device */}
          <div className="relative mx-auto flex justify-center lg:justify-end">
            <PhoneMockup variant="home" className="relative z-10 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
