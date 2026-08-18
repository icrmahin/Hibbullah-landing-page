import {
  SearchIcon,
  BuildingIcon,
  TrendingIcon,
  BagIcon,
  PackageIcon,
  BanknoteIcon,
} from "../components/Icons";

const features = [
  {
    icon: SearchIcon,
    title: "Search medicines",
    description: "Find products quickly by name, brand, or manufacturer.",
  },
  {
    icon: BuildingIcon,
    title: "Browse brands",
    description: "Explore trusted manufacturers and popular brands.",
  },
  {
    icon: TrendingIcon,
    title: "Trending & new",
    description: "Discover what’s popular and newly available.",
  },
  {
    icon: BagIcon,
    title: "Add to bag",
    description: "Build your order with a simple, clear cart.",
  },
  {
    icon: PackageIcon,
    title: "Easy ordering",
    description: "Place orders in a few taps with clear confirmation.",
  },
  {
    icon: BanknoteIcon,
    title: "Cash on delivery",
    description: "Pay when your order arrives — simple and trusted.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-y border-black/[0.04] bg-[#fafafa] py-16 sm:py-20 lg:py-24 dark:border-white/[0.04] dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-[1.75rem] dark:text-white">
            Everything you need
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
            A focused pharmacy experience for everyday use in Bangladesh.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-black/[0.04] bg-white p-5 transition-colors hover:border-primary/15 dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:border-primary/20"
            >
              <div className="mb-3.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/15 dark:text-emerald-400 dark:group-hover:bg-primary dark:group-hover:text-white">
                <f.icon size={17} aria-hidden="true" />
              </div>
              <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
