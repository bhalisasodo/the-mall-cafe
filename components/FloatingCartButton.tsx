"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function FloatingCartButton() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open shopping cart with ${itemCount} items`}
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-teal text-white shadow-2xl transition-all duration-200 hover:bg-[#3D8583] hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-black/20 cursor-pointer border-2 border-white/30 group"
    >
      {/* Shopping Cart Icon */}
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 transition-transform group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>

      {/* Item count badge (hidden when cart is empty) */}
      {itemCount > 0 && (
        <span
          aria-hidden="true"
          className="absolute -top-1.5 -right-1.5 flex min-h-[22px] min-w-[22px] items-center justify-center rounded-full bg-black text-white px-1.5 py-0.5 text-xs font-black uppercase tracking-wider border-2 border-teal shadow-md animate-scale-in"
        >
          {itemCount}
        </span>
      )}
    </button>
  );
}
