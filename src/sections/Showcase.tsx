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

        <div className="mt-14">
          <div className="mx-auto flex max-w-[220px] justify-center sm:hidden">
            <div className="relative w-full overflow-hidden rounded-[1.75rem] border-[5px] border-[#1c1c1e] bg-[#1c1c1e] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <div className="absolute left-1/2 top-2 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#1c1c1e] ring-1 ring-black/40" />
              <div className="relative aspect-[9/19.2] overflow-hidden bg-[#f8f9f8]">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between px-4 pt-5 pb-1 text-[10px] font-medium text-gray-800">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px]">LTE</span>
                      <span className="h-2 w-3.5 rounded-[2px] border border-gray-700">
                        <span className="ml-0.5 block h-full w-[70%] rounded-[1px] bg-gray-700" />
                      </span>
                    </div>
                  </div>

                  <div className="px-3.5 pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-gray-500">Welcome to</p>
                        <p className="text-[13px] font-semibold text-[#023719]">
                          Hibbullah
                        </p>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#023719]/10">
                        <span className="text-[10px] font-bold text-[#023719]">
                          H
                        </span>
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 shadow-sm">
                      <svg
                        className="h-3.5 w-3.5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="text-[10px] text-gray-400">
                        Search medicines…
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-hidden px-3.5 pb-2.5">
                    {["All", "Brands", "New", "Trending"].map((c, i) => (
                      <span
                        key={c}
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-medium ${
                          i === 0
                            ? "bg-[#023719] text-white"
                            : "bg-white text-gray-600 shadow-sm"
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="flex-1 space-y-2 overflow-hidden px-3.5 pb-2">
                    {[
                      {
                        name: "Paracetamol 500mg",
                        brand: "Square",
                        price: "৳12",
                      },
                      { name: "Napa Extra", brand: "Beximco", price: "৳8" },
                      { name: "Seclo 20mg", brand: "ACI", price: "৳6" },
                    ].map((p) => (
                      <div
                        key={p.name}
                        className="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-sm"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#023719]/10">
                          <span className="text-[9px] font-bold text-[#023719]">
                            Rx
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[11px] font-semibold text-gray-900">
                            {p.name}
                          </p>
                          <p className="text-[9px] text-gray-500">{p.brand}</p>
                        </div>
                        <span className="text-[11px] font-semibold text-[#A97104]">
                          {p.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex h-4 items-center justify-center bg-white">
                <div className="h-1 w-16 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-row sm:items-end sm:justify-center sm:gap-6 lg:gap-10">
            <div className="order-2 sm:order-1 sm:translate-y-0">
              <PhoneMockup
                variant="search"
                className="scale-[0.88] opacity-90 sm:scale-[0.9]"
              />
              <p className="mt-4 text-center text-xs font-medium text-gray-400 dark:text-gray-500">
                Search
              </p>
            </div>

            <div className="order-1 z-10 sm:order-2">
              <PhoneMockup
                variant="home"
                className="animate-none motion-safe:animate-none"
              />
              <p className="mt-4 text-center text-xs font-medium text-gray-600 dark:text-gray-300">
                Home
              </p>
            </div>

            <div className="order-3 sm:translate-y-0">
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
      </div>
    </section>
  );
}
