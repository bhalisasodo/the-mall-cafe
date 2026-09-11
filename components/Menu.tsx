"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/Badge";
import {
  MENU,
  CONTACT,
  WHATSAPP_ORDER_MESSAGE,
  type MenuCategory,
  type MenuItem,
} from "@/lib/site-data";

function waItemLink(itemName: string, category: string) {
  const msg = `Hi The Mall Cafe! I'd like to order "${itemName}" from the ${category} menu.`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    msg
  )}`;
}

function getCategoryItemCount(cat: MenuCategory): number {
  let count = cat.items ? cat.items.length : 0;
  if (cat.subsections) {
    for (const sub of cat.subsections) {
      count += sub.items.length;
    }
  }
  return count;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const totalItemsCount = MENU.reduce(
    (acc, cat) => acc + getCategoryItemCount(cat),
    0
  );

  const filteredCategories =
    activeCategory === "all"
      ? MENU
      : MENU.filter((cat) => cat.id === activeCategory);

  const renderItem = (item: MenuItem, categoryTitle: string) => (
    <li
      key={item.id}
      className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 hover:bg-neutral-50/80 transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded"
    >
      {/* Left: Item Name, Badges, and Description */}
      <div className="flex-1 pr-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-display text-base sm:text-lg font-black text-black leading-tight">
            {item.name}
          </span>
          {item.badge && <Badge type={item.badge} />}
        </div>
        {item.contents && (
          <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-normal">
            {item.contents}
          </p>
        )}
        {item.note && (
          <p className="mt-1 text-[11px] sm:text-xs text-teal font-semibold italic">
            * {item.note}
          </p>
        )}
      </div>

      {/* Leader dots for desktop */}
      <div className="hidden md:block dotted-leader opacity-25" />

      {/* Right: Price & Quick WhatsApp Order */}
      <div className="shrink-0 flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
        <span className="font-display text-base sm:text-lg font-black text-black">
          {item.price}
        </span>

        {/* 1-tap WhatsApp order button with accessible touch target */}
        <a
          href={waItemLink(item.name, categoryTitle)}
          target="_blank"
          rel="noopener noreferrer"
          title={`Order ${item.name} on WhatsApp`}
          aria-label={`Order ${item.name} on WhatsApp`}
          className="text-emerald-600 hover:text-emerald-700 active:scale-90 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-full hover:bg-emerald-50 active:bg-emerald-100"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.146-.519-1.859-.764-3.048-2.656-3.14-2.778-.093-.122-.751-.998-.751-1.905 0-.907.476-1.353.646-1.538.169-.185.37-.231.494-.231.123 0 .247.001.354.006.113.005.263-.043.411.312.155.372.529 1.29.575 1.383.046.092.077.2.015.323-.061.123-.092.2-.185.308-.092.108-.194.241-.277.323-.092.093-.189.194-.081.379.108.185.479.79 1.028 1.278.708.631 1.305.826 1.49.919.185.092.293.077.401-.046.108-.124.462-.539.585-.724.124-.185.247-.154.416-.092.169.062 1.077.508 1.262.6.185.093.308.139.354.216.046.077.046.446-.098.851z" />
          </svg>
        </a>
      </div>
    </li>
  );

  return (
    <section id="menu" className="bg-sand/30 py-14 sm:py-20 scroll-mt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-8 border-b-2 border-black pb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-teal text-white px-2.5 py-0.5 text-xs font-black uppercase tracking-wider rounded">
                Official Menu
              </span>
              <span className="text-xs font-bold text-black/70 uppercase tracking-wider">
                Strictly 100% Halal
              </span>
              <span className="hidden sm:inline text-black/40">•</span>
              <span className="hidden sm:inline text-xs font-semibold text-black/70">
                Verulam
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
              The Menu
            </h2>
            <p className="mt-1 text-sm text-black/75">
              Cooked fresh to order. All prices in South African Rands (ZAR). Single contact number for orders &amp; deliveries: <strong className="text-black font-black">{CONTACT.phonePrimary}</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                WHATSAPP_ORDER_MESSAGE
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal hover:bg-[#3D8583] text-white px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider shadow transition-all active:scale-95"
            >
              <span>WhatsApp Quick Order</span>
              <span aria-hidden="true">💬</span>
            </a>
          </div>
        </div>

        {/* Sticky Category Filter Tabs */}
        <div className="sticky top-[73px] sm:top-[85px] md:top-[98px] z-30 -mx-4 px-4 py-2.5 bg-sand/95 backdrop-blur-md border-y border-black/10 overflow-x-auto no-scrollbar mb-8 sm:mb-10 shadow-sm">
          <div className="flex items-center gap-2 min-w-max">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-teal text-white shadow-sm"
                  : "bg-white/80 text-black/80 hover:bg-white"
              }`}
            >
              All Items ({totalItemsCount})
            </button>
            {MENU.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  const el = document.getElementById(cat.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-teal text-white shadow-sm"
                    : "bg-white/80 text-black/80 hover:bg-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories List */}
        <div className="space-y-10 sm:space-y-14">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-36 sm:scroll-mt-44 rounded-2xl bg-white border border-black/10 shadow-sm overflow-hidden"
            >
              {/* Category Header Banner with Teal / Black brand colors */}
              <div
                className={`p-5 sm:p-6 text-white ${
                  category.accentColor === "black" ? "bg-black" : "bg-teal"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black tracking-widest text-white/80 uppercase">
                        The Mall Cafe Verulam
                      </span>
                      {category.id === "gatsbys" && (
                        <span className="bg-black/30 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded border border-white/30">
                          Flagship Dish
                        </span>
                      )}
                    </div>
                    <h3 className="mt-0.5 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/90 font-medium">
                      {category.subtitle}
                    </p>
                  </div>

                  {category.image && (
                    <div className="hidden sm:block shrink-0 relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden border-2 border-white/30 shadow">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Optional Tagline / Notice Strip */}
                {(category.tagline || category.notice) && (
                  <div className="mt-3 pt-3 border-t border-white/20 flex flex-wrap items-center gap-2 text-xs">
                    {category.tagline && (
                      <span className="font-semibold text-white/95">
                        {category.tagline}
                      </span>
                    )}
                    {category.notice && (
                      <span className="bg-black/40 text-white px-2.5 py-1 rounded font-black tracking-wider uppercase border border-white/20">
                        🔔 {category.notice}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Subsections if present (e.g. Bunnies vs Curries, Mutton vs Chicken Whoppers) */}
              {category.subsections ? (
                <div className="divide-y divide-neutral-200">
                  {category.subsections.map((sub) => (
                    <div key={sub.id} className="p-4 sm:p-6">
                      <div className="mb-3 flex items-baseline justify-between border-b border-neutral-200 pb-2">
                        <h4 className="font-display text-lg sm:text-xl font-black uppercase text-black tracking-tight">
                          {sub.title}
                        </h4>
                        {sub.note && (
                          <span className="text-xs font-semibold text-neutral-500 italic">
                            *({sub.note})
                          </span>
                        )}
                      </div>
                      <ul className="divide-y divide-neutral-200/80">
                        {sub.items.map((item) =>
                          renderItem(item, `${category.title} - ${sub.title}`)
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                /* Flat items list */
                category.items && (
                  <ul className="divide-y divide-neutral-200/80 px-4 sm:px-6">
                    {category.items.map((item) =>
                      renderItem(item, category.title)
                    )}
                  </ul>
                )
              )}

              {/* Footnote if present (e.g. Wick Street Whoppers footnote) */}
              {category.footnote && (
                <div className="bg-neutral-100 px-5 py-3 border-t border-neutral-200 text-xs text-neutral-600 italic">
                  ℹ️ {category.footnote}
                </div>
              )}

              {/* Category Footer Bar */}
              <div className="bg-neutral-50 px-5 py-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600">
                <span>Ready to order from {category.title}?</span>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    `Hi! I'd like to order from the ${category.title} section.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal hover:underline flex items-center gap-1"
                >
                  <span>Order via WhatsApp ({CONTACT.whatsappDisplay})</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
