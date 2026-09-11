"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toastMessage, dismissToast, openCart, itemCount } = useCart();

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-24 right-4 sm:right-6 md:bottom-8 md:right-24 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-auto animate-bounce-short"
    >
      <div className="flex items-center justify-between gap-3 bg-black text-white px-4 py-3 rounded-xl shadow-2xl border border-teal/40">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white text-xs font-black">
            ✓
          </span>
          <p className="text-xs sm:text-sm font-semibold truncate text-white/95">
            {toastMessage}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={openCart}
            className="text-xs font-black uppercase tracking-wider text-teal hover:text-teal/80 underline underline-offset-2 px-1 py-0.5 cursor-pointer"
          >
            View ({itemCount})
          </button>
          <button
            type="button"
            onClick={dismissToast}
            aria-label="Dismiss notification"
            className="text-white/60 hover:text-white text-base leading-none p-1 rounded hover:bg-white/10 cursor-pointer"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
