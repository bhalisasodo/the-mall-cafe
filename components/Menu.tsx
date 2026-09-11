"use client";

import { useState } from "react";
import MenuCategorySection from "@/components/MenuCategorySection";
import { useCart } from "@/context/CartContext";
import {
  MENU,
  CONTACT,
  WHATSAPP_ORDER_MESSAGE,
  type MenuCategory,
} from "@/lib/site-data";

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
  const { itemCount, openCart } = useCart();

  const totalItemsCount = MENU.reduce(
    (acc, cat) => acc + getCategoryItemCount(cat),
    0
  );

  const filteredCategories =
    activeCategory === "all"
      ? MENU
      : MENU.filter((cat) => cat.id === activeCategory);

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
            {itemCount > 0 && (
              <button
                type="button"
                onClick={openCart}
                className="inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 px-4 py-2.5 rounded text-xs font-black uppercase tracking-wider shadow transition-all active:scale-95 cursor-pointer border border-white/20"
              >
                <span>🛒 View Cart</span>
                <span className="bg-teal text-white px-1.5 py-0.5 rounded-full text-[11px] font-black">
                  {itemCount}
                </span>
              </button>
            )}

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
            <MenuCategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
