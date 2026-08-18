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
    <section id="features" className="bg-gray-50/80 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Everything you need
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            A focused pharmacy experience designed for everyday use in Bangladesh.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-primary/15 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <f.icon size={20} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
