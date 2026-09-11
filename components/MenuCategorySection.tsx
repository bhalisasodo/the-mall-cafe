"use client";

import React from "react";
import Image from "next/image";
import MenuItemRow from "@/components/MenuItemRow";
import { CONTACT, type MenuCategory } from "@/lib/site-data";

interface MenuCategorySectionProps {
  category: MenuCategory;
}

export default function MenuCategorySection({
  category,
}: MenuCategorySectionProps) {
  return (
    <div
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
                {sub.items.map((item) => (
                  <MenuItemRow
                    key={item.id}
                    item={item}
                    categoryId={category.id}
                    categoryTitle={`${category.title} - ${sub.title}`}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        /* Flat items list */
        category.items && (
          <ul className="divide-y divide-neutral-200/80 px-4 sm:px-6">
            {category.items.map((item) => (
              <MenuItemRow
                key={item.id}
                item={item}
                categoryId={category.id}
                categoryTitle={category.title}
              />
            ))}
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
  );
}
