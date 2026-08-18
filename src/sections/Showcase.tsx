import { PhoneMockup } from "../components/PhoneMockup";

export function Showcase() {
  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Designed for clarity
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Clean screens for browsing, searching, and ordering — built for real everyday use.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-6 lg:gap-10">
          <div className="order-2 sm:order-1 sm:-mt-6 sm:translate-y-4">
            <PhoneMockup variant="search" className="opacity-90 scale-[0.92] sm:scale-95" />
            <p className="mt-4 text-center text-sm font-medium text-gray-500">Search</p>
          </div>

          <div className="order-1 sm:order-2 z-10">
            <PhoneMockup variant="home" />
            <p className="mt-4 text-center text-sm font-medium text-gray-700">Home</p>
          </div>

          <div className="order-3 sm:-mt-6 sm:translate-y-4">
            <PhoneMockup variant="cart" className="opacity-90 scale-[0.92] sm:scale-95" />
            <p className="mt-4 text-center text-sm font-medium text-gray-500">Cart & Order</p>
          </div>
        </div>
      </div>
    </section>
  );
}
