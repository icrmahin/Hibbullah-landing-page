import { DownloadIcon, ArrowRightIcon } from "../components/Icons";
import { PhoneMockup } from "../components/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Modern Pharmacy Shopping
            </p>

            <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Your trusted{" "}
              <span className="text-primary">pharmacy</span>{" "}
              in your pocket
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
              Hibbullah makes buying medicines simple. Search products, browse brands, and order with cash on delivery — all from one elegant Android app.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/downloads/hibbullah.apk"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/25 sm:w-auto"
                download
              >
                <DownloadIcon size={16} aria-hidden="true" />
                Download for Android
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
              >
                Learn more
                <ArrowRightIcon size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMockup variant="home" className="relative z-10 animate-float" />
              <div
                className="absolute -inset-6 -z-10 rounded-[2.5rem] border border-primary/10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
