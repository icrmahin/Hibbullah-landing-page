import { DownloadIcon, SmartphoneIcon } from "../components/Icons";

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light/40 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold">
            <SmartphoneIcon size={28} aria-hidden="true" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Get Hibbullah on Android
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Download the app and start ordering medicines with ease. Simple, trusted, and built for Bangladesh.
          </p>

          <a
            href="/downloads/hibbullah.apk"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:bg-gold-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            download
          >
            <DownloadIcon size={20} aria-hidden="true" />
            Download APK
          </a>

          <p className="mt-4 text-xs text-white/50">
            Compatible with Android 6.0 and above
          </p>
        </div>
      </div>
    </section>
  );
}
