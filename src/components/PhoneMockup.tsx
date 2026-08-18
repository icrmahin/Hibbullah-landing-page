interface PhoneMockupProps {
  variant?: "home" | "search" | "cart";
  className?: string;
}

export function PhoneMockup({ variant = "home", className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[220px] sm:w-[240px] md:w-[260px] ${className}`}
      role="img"
      aria-label={`Hibbullah app ${variant} screen preview`}
    >
      {/* Phone frame */}
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl shadow-gray-900/30">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

        {/* Screen */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-white">
          {variant === "home" && <HomeScreen />}
          {variant === "search" && <SearchScreen />}
          {variant === "cart" && <CartScreen />}
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-7 pb-1 text-[10px] font-medium text-gray-800">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="h-2 w-3 rounded-sm border border-gray-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      {/* Header */}
      <div className="px-3 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-gray-500">Welcome to</p>
            <p className="text-sm font-bold text-primary">Hibbullah</p>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
            <span className="text-[10px] font-semibold text-primary">H</span>
          </div>
        </div>
        {/* Search bar */}
        <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
          <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[10px] text-gray-400">Search medicines…</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-hidden px-3 pb-2">
        {["All", "Brands", "New", "Trending"].map((c, i) => (
          <span
            key={c}
            className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-medium ${
              i === 0 ? "bg-primary text-white" : "bg-white text-gray-600 shadow-sm"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Product cards */}
      <div className="flex-1 space-y-2 overflow-hidden px-3 pb-3">
        {[
          { name: "Paracetamol 500mg", brand: "Square", price: "৳12" },
          { name: "Napa Extra", brand: "Beximco", price: "৳8" },
          { name: "Seclo 20mg", brand: "ACI", price: "৳6" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-2.5 rounded-xl bg-white p-2 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-[10px] font-bold text-primary">Rx</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-gray-900">{p.name}</p>
              <p className="text-[9px] text-gray-500">{p.brand}</p>
            </div>
            <span className="text-[11px] font-bold text-gold">{p.price}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex justify-around border-t border-gray-100 bg-white py-2">
        {["Home", "Search", "Bag", "Orders"].map((t, i) => (
          <div key={t} className="flex flex-col items-center gap-0.5">
            <div className={`h-1 w-1 rounded-full ${i === 0 ? "bg-primary" : "bg-transparent"}`} />
            <span className={`text-[8px] ${i === 0 ? "font-semibold text-primary" : "text-gray-400"}`}>
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchScreen() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="px-3 pb-2">
        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-primary/20">
          <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[10px] text-gray-800">Napa</span>
        </div>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden px-3">
        {[
          { name: "Napa 500mg", brand: "Beximco", price: "৳5" },
          { name: "Napa Extra", brand: "Beximco", price: "৳8" },
          { name: "Napa Extend", brand: "Beximco", price: "৳10" },
          { name: "Napa Rapid", brand: "Beximco", price: "৳12" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10">
              <span className="text-[9px] font-bold text-gold">Rx</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-gray-900">{p.name}</p>
              <p className="text-[9px] text-gray-500">{p.brand}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-primary">{p.price}</p>
              <p className="text-[8px] text-gray-400">Add</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartScreen() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="px-3 pb-2">
        <p className="text-sm font-bold text-gray-900">Your Bag</p>
        <p className="text-[9px] text-gray-500">3 items</p>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden px-3">
        {[
          { name: "Paracetamol 500mg", qty: 2, price: "৳24" },
          { name: "Napa Extra", qty: 1, price: "৳8" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-[9px] font-bold text-primary">Rx</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-gray-900">{p.name}</p>
              <p className="text-[9px] text-gray-500">Qty: {p.qty}</p>
            </div>
            <span className="text-[11px] font-bold text-gold">{p.price}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 bg-white p-3">
        <div className="mb-2 flex justify-between text-[11px]">
          <span className="text-gray-500">Total</span>
          <span className="font-bold text-gray-900">৳32</span>
        </div>
        <div className="rounded-xl bg-primary py-2.5 text-center text-[11px] font-semibold text-white">
          Place Order · COD
        </div>
      </div>
    </div>
  );
}
