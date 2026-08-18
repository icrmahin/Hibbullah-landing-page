import { DownloadIcon, SmartphoneIcon } from "../components/Icons";

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-primary dark:bg-primary-dark" />

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-sm text-center">
          <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-gold">
            <SmartphoneIcon size={22} aria-hidden="true" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
            Get Hibbullah on Android
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/65">
            Download the app and start ordering medicines with ease.
          </p>

          <a
            href="/downloads/hibbullah.apk"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-light active:scale-[0.97]"
            download
          >
            <DownloadIcon size={15} aria-hidden="true" />
            Download APK
          </a>

          <p className="mt-4 text-xs text-white/35">
            Android 6.0 and above
          </p>
        </div>
      </div>
    </section>
  );
}
