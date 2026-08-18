import { PhoneMockup } from "../components/PhoneMockup";

export function Showcase() {
  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-[1.75rem] dark:text-white">
            Designed for clarity
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
            Clean screens for browsing, searching, and ordering.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-end sm:gap-6 lg:gap-10">
          <div className="order-2 sm:order-1 sm:translate-y-4">
            <PhoneMockup
              variant="search"
              className="scale-[0.88] opacity-90 sm:scale-[0.9]"
            />
            <p className="mt-4 text-center text-xs font-medium text-gray-400 dark:text-gray-500">
              Search
            </p>
          </div>

          <div className="order-1 z-10 sm:order-2">
            <PhoneMockup variant="home" />
            <p className="mt-4 text-center text-xs font-medium text-gray-600 dark:text-gray-300">
              Home
            </p>
          </div>

          <div className="order-3 sm:translate-y-4">
            <PhoneMockup
              variant="cart"
              className="scale-[0.88] opacity-90 sm:scale-[0.9]"
            />
            <p className="mt-4 text-center text-xs font-medium text-gray-400 dark:text-gray-500">
              Cart & Order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
