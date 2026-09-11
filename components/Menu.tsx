"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/Badge";
import {
  MENU,
  CONTACT,
  WHATSAPP_ORDER_MESSAGE,
} from "@/lib/site-data";

function waItemLink(itemName: string, category: string) {
  const msg = `Hi The Mall Cafe! I'd like to order "${itemName}" from the ${category} menu.`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    msg
  )}`;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? MENU
      : MENU.filter((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="bg-sand/20 py-14 sm:py-20 scroll-mt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-8 border-b-2 border-ink pb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-ink text-turmeric px-2.5 py-0.5 text-xs font-black uppercase tracking-wider rounded">
                Official Menu
              </span>
              <span className="text-xs font-bold text-ink/70 uppercase tracking-wider">
                Strictly 100% Halal
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink">
              The Menu
            </h2>
            <p className="mt-1 text-sm text-ink/75">
              Cooked fresh to order. All prices listed in South African Rands (ZAR).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                WHATSAPP_ORDER_MESSAGE
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider shadow transition-transform active:scale-95"
            >
              <span>WhatsApp Quick Order</span>
              <span aria-hidden="true">💬</span>
            </a>
          </div>
        </div>

        {/* Sticky / Scrollable Category Filter Tabs */}
        <div className="sticky top-[61px] sm:top-[69px] z-30 -mx-4 px-4 py-2.5 bg-sand/90 backdrop-blur-md border-y border-black/10 overflow-x-auto no-scrollbar mb-10 shadow-sm">
          <div className="flex items-center gap-2 min-w-max">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeCategory === "all"
                  ? "bg-ink text-white shadow-sm"
                  : "bg-white/80 text-ink/80 hover:bg-white"
              }`}
            >
              All Items ({MENU.reduce((acc, cat) => acc + cat.items.length, 0)})
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-chili text-white shadow-sm"
                    : "bg-white/80 text-ink/80 hover:bg-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories List */}
        <div className="space-y-16">
          {filteredCategories.map((category) => {
            // Determine if category has dual pricing (e.g. Burger vs Meal w/chips)
            const hasMealPricing = category.items.some((item) => !!item.mealPrice);

            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-32 rounded-2xl bg-white border border-black/10 shadow-sm overflow-hidden"
              >
                {/* Category Header Banner with color blocking */}
                <div
                  className={`p-5 sm:p-6 text-white ${
                    category.accentColor === "red"
                      ? "bg-[#C1121F]"
                      : category.accentColor === "teal"
                      ? "bg-[#1B6F7B]"
                      : category.accentColor === "yellow"
                      ? "bg-[#9A6200]"
                      : "bg-ink"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black tracking-widest text-turmeric uppercase">
                          The Mall Cafe
                        </span>
                        {category.id === "gatsby" && (
                          <span className="bg-white/20 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                            Flagship Feast
                          </span>
                        )}
                      </div>
                      <h3 className="mt-0.5 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-white/85 font-medium">
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

                  {/* Optional Flavours / Tagline Strip */}
                  {(category.tagline || category.flavors) && (
                    <div className="mt-3 pt-3 border-t border-white/20 flex flex-wrap items-center gap-2 text-xs">
                      {category.tagline && (
                        <span className="font-bold text-turmeric">
                          {category.tagline}
                        </span>
                      )}
                      {category.flavorPricingNote && (
                        <span className="bg-black/30 px-2 py-0.5 rounded text-white/90 font-medium">
                          {category.flavorPricingNote}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Pricing Table Column Headers (if dual pricing) */}
                {hasMealPricing && (
                  <div className="hidden sm:flex items-center justify-between px-5 sm:px-6 py-2.5 bg-neutral-100 border-b border-neutral-200 text-xs font-black uppercase tracking-wider text-ink/70">
                    <span>Item &amp; Description</span>
                    <div className="flex items-center gap-8 w-44 justify-end text-right">
                      <span className="w-16">
                        {category.id === "bunnies-curries" ? "¼ Bunny" : category.id === "sides" ? "Single" : "Burger"}
                      </span>
                      <span className="w-20 text-curry">
                        {category.id === "bunnies-curries" ? "500ml Tub" : category.id === "sides" ? "12 / Dozen" : "Meal w/chips"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Items List */}
                <ul className="divide-y divide-neutral-200/80 px-4 sm:px-6">
                  {category.items.map((item) => (
                    <li
                      key={item.id}
                      className="py-4 sm:py-4.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 hover:bg-neutral-50/60 transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded"
                    >
                      {/* Left: Name, Badges, and Contents */}
                      <div className="flex-1 pr-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
                            {item.name}
                          </span>
                          {item.badge && <Badge type={item.badge} />}
                        </div>
                        {item.contents && (
                          <p className="mt-1 text-xs sm:text-sm text-ink/70 leading-normal">
                            {item.contents}
                          </p>
                        )}
                      </div>

                      {/* Leader dots for desktop when single price */}
                      {!hasMealPricing && (
                        <div className="hidden md:block dotted-leader opacity-30" />
                      )}

                      {/* Right: Prices */}
                      <div className="shrink-0 flex items-baseline justify-between sm:justify-end gap-4 pt-1 sm:pt-0">
                        {/* Mobile label fallback if dual pricing */}
                        {item.mealPrice ? (
                          <div className="flex items-center gap-4 sm:gap-8 sm:w-44 justify-end text-right">
                            <div className="flex sm:block items-baseline gap-1.5">
                              <span className="sm:hidden text-[10px] font-bold text-ink/50 uppercase">
                                {category.id === "bunnies-curries" ? "¼ Bunny:" : category.id === "sides" ? "Single:" : "Single:"}
                              </span>
                              <span className="font-display text-base sm:text-lg font-bold text-ink">
                                {item.price}
                              </span>
                            </div>

                            <div className="flex sm:block items-baseline gap-1.5">
                              <span className="sm:hidden text-[10px] font-bold text-curry uppercase">
                                {category.id === "bunnies-curries" ? "Tub:" : category.id === "sides" ? "Doz:" : "Meal:"}
                              </span>
                              <span className="font-display text-base sm:text-lg font-extrabold text-chili">
                                {item.mealPrice}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span className="font-display text-lg sm:text-xl font-black text-ink">
                              {item.price}
                            </span>
                          </div>
                        )}

                        {/* Fast 1-tap WhatsApp order button */}
                        <a
                          href={waItemLink(item.name, category.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Order ${item.name} on WhatsApp`}
                          aria-label={`Order ${item.name} on WhatsApp`}
                          className="opacity-75 hover:opacity-100 text-emerald-600 hover:text-emerald-700 transition-all p-1"
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
                  ))}
                </ul>

                {/* Category Footer: Callout to order */}
                <div className="bg-neutral-50 px-5 py-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600">
                  <span>
                    Ready to order from {category.title}?
                  </span>
                  <a
                    href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                      `Hi! I'd like to order from the ${category.title} section.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-chili hover:underline flex items-center gap-1"
                  >
                    <span>Order via WhatsApp</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
