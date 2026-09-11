"use client";

import React, { useState, useEffect, useRef } from "react";
import { useCart, formatPrice } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    itemCount,
    formattedSubtotal,
    orderType,
    setOrderType,
    customerName,
    setCustomerName,
    customerNotes,
    setCustomerNotes,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    setItemNotes,
    clearCart,
    sendWhatsAppOrder,
    hasSqItems,
  } = useCart();

  const [confirmClear, setConfirmClear] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setConfirmClear(false);
    setEditingNoteId(null);
    closeCart();
  };

  // Close on Escape key press and manage body scroll locking
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    }

    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  // Auto-reset clear confirmation after 4 seconds
  useEffect(() => {
    if (!confirmClear) return;
    const timer = setTimeout(() => setConfirmClear(false), 4000);
    return () => clearTimeout(timer);
  }, [confirmClear]);

  if (!isCartOpen) return null;

  const isOrderReady = items.length > 0 && orderType !== null;

  const handleBrowseMenu = () => {
    handleClose();
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
        <div
          ref={drawerRef}
          className="relative flex w-screen max-w-md flex-col bg-white shadow-2xl border-l border-black/10 overflow-hidden"
        >
          {/* Header - Brand Black */}
          <div className="bg-black text-white px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-white">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </span>
              <div>
                <h2
                  id="cart-drawer-title"
                  className="font-display text-lg font-black uppercase tracking-tight text-white leading-tight"
                >
                  Your Order
                </h2>
                <p className="text-xs text-white/70">
                  {itemCount} {itemCount === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <div>
                  {confirmClear ? (
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-xs font-black uppercase tracking-wider bg-[#993C36] text-white px-2.5 py-1 rounded shadow-xs hover:bg-[#7d2f2a] transition-colors cursor-pointer"
                    >
                      Confirm Clear?
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmClear(true)}
                      className="text-xs font-bold uppercase tracking-wider text-white/60 hover:text-[#993C36] transition-colors px-2 py-1 cursor-pointer"
                      title="Clear all items from cart"
                    >
                      Clear
                    </button>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close cart drawer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {items.length === 0 ? (
              /* Empty State */
              <div className="flex flex-col items-center justify-center py-16 text-center px-4">
                <div className="h-20 w-20 rounded-full bg-sand flex items-center justify-center text-teal text-3xl mb-4 border border-black/10">
                  🛒
                </div>
                <h3 className="font-display text-xl font-black uppercase text-black">
                  Your cart is empty
                </h3>
                <p className="mt-2 text-sm text-neutral-600 max-w-xs leading-relaxed">
                  Browse our menu to add OG Mega Mall Gatsbys, Tikka grills, Shawarmas, or Durban Bunnies.
                </p>
                <button
                  type="button"
                  onClick={handleBrowseMenu}
                  className="mt-6 inline-flex items-center justify-center bg-teal hover:bg-[#3D8583] text-white px-6 py-3 rounded font-display text-xs font-black uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Line Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-black/10 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    <span>Order Items</span>
                    <span>Subtotal</span>
                  </div>

                  <ul className="divide-y divide-neutral-100">
                    {items.map((item) => (
                      <li key={item.id} className="py-3.5 space-y-2">
                        {/* Top row: Name, Variant & Line Total */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                              <h4 className="font-display text-sm font-black text-black leading-snug">
                                {item.name}
                              </h4>
                              {item.variant && (
                                <span className="inline-block bg-sand text-teal px-1.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider border border-teal/30">
                                  {item.variant}
                                </span>
                              )}
                            </div>
                            <div className="mt-0.5 text-xs text-neutral-500">
                              {formatPrice(item.unitPrice)} each
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="font-display text-sm font-black text-black">
                              {formatPrice(item.lineTotal)}
                            </span>
                          </div>
                        </div>

                        {/* Controls row: Quantity Stepper, Notes trigger, Remove */}
                        <div className="flex items-center justify-between gap-3 pt-1">
                          {/* Quantity Stepper */}
                          <div className="flex items-center border border-black/20 rounded bg-neutral-50 overflow-hidden shadow-xs">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="h-7 w-7 flex items-center justify-center text-black hover:bg-neutral-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-sm font-black cursor-pointer disabled:cursor-not-allowed"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs font-black text-black">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                              className="h-7 w-7 flex items-center justify-center text-black hover:bg-neutral-200 transition-colors text-sm font-black cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          {/* Item Note & Remove actions */}
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setEditingNoteId(
                                  editingNoteId === item.id ? null : item.id
                                )
                              }
                              className="text-[11px] font-bold text-teal hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span>✏️</span>
                              <span>{item.notes ? "Edit note" : "Add note"}</span>
                            </button>

                            <span className="text-black/20 text-xs">|</span>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.name} from order`}
                              className="text-xs font-bold text-neutral-400 hover:text-[#993C36] transition-colors p-1 cursor-pointer"
                              title="Remove item"
                            >
                              ✕
                            </button>
                          </div>
                        </div>

                        {/* Inline Item Note Input / Display */}
                        {editingNoteId === item.id ? (
                          <div className="pt-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                placeholder="e.g. no onions, sauce on side"
                                defaultValue={item.notes || ""}
                                onBlur={(e) => {
                                  setItemNotes(item.id, e.target.value);
                                  setEditingNoteId(null);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    setItemNotes(
                                      item.id,
                                      (e.target as HTMLInputElement).value
                                    );
                                    setEditingNoteId(null);
                                  }
                                }}
                                autoFocus
                                className="w-full text-xs px-2.5 py-1.5 border border-teal rounded focus:outline-none focus:ring-1 focus:ring-teal bg-white"
                              />
                              <button
                                type="button"
                                onClick={() => setEditingNoteId(null)}
                                className="text-xs bg-teal text-white px-2 py-1.5 rounded font-bold uppercase cursor-pointer shrink-0"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        ) : (
                          item.notes && (
                            <div className="bg-sand/60 px-2.5 py-1 rounded text-[11px] text-neutral-700 italic border-l-2 border-teal">
                              Note: {item.notes}
                            </div>
                          )
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Checkout Fields Section */}
                <div className="bg-sand/40 border border-black/10 rounded-xl p-4 space-y-3.5">
                  <div>
                    <span className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                      Order Type <span className="text-[#993C36]">*</span>
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderType("Pickup")}
                        className={`min-h-[42px] px-3 py-2 rounded-lg font-display text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                          orderType === "Pickup"
                            ? "bg-teal text-white border-teal shadow-xs scale-[1.02]"
                            : "bg-white text-black/80 border-black/15 hover:border-black/30 hover:bg-neutral-50"
                        }`}
                      >
                        <span>🛍️</span>
                        <span>Pickup</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderType("Delivery")}
                        className={`min-h-[42px] px-3 py-2 rounded-lg font-display text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                          orderType === "Delivery"
                            ? "bg-teal text-white border-teal shadow-xs scale-[1.02]"
                            : "bg-white text-black/80 border-black/15 hover:border-black/30 hover:bg-neutral-50"
                        }`}
                      >
                        <span>🛵</span>
                        <span>Delivery</span>
                      </button>
                    </div>
                  </div>

                  {/* Customer Name */}
                  <div>
                    <label
                      htmlFor="cart-customer-name"
                      className="block text-xs font-bold uppercase tracking-wider text-black/80 mb-1"
                    >
                      Customer Name <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="cart-customer-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your name for the order"
                      className="w-full text-xs px-3 py-2 border border-black/20 rounded-md focus:border-teal focus:ring-1 focus:ring-teal bg-white"
                    />
                  </div>

                  {/* Overall Order Notes */}
                  <div>
                    <label
                      htmlFor="cart-customer-notes"
                      className="block text-xs font-bold uppercase tracking-wider text-black/80 mb-1"
                    >
                      Special Instructions / Address <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="cart-customer-notes"
                      rows={2}
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="Delivery address or overall order notes..."
                      className="w-full text-xs px-3 py-2 border border-black/20 rounded-md focus:border-teal focus:ring-1 focus:ring-teal bg-white resize-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Pinned Bottom / Footer */}
          {items.length > 0 && (
            <div className="bg-black text-white p-4 sm:p-5 border-t border-white/10 shrink-0 space-y-3">
              {/* Running Subtotal */}
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-display text-xs font-black uppercase tracking-wider text-white/75">
                    Estimated Subtotal
                  </span>
                  {hasSqItems && (
                    <p className="text-[10px] text-teal">+ items on enquiry</p>
                  )}
                </div>
                <span className="font-display text-2xl font-black text-teal">
                  {formattedSubtotal}
                </span>
              </div>

              {/* Requirement Hint if order type not selected */}
              {!orderType && (
                <div className="bg-sand/10 border border-teal/40 rounded px-3 py-1.5 text-center text-xs font-bold text-teal">
                  👉 Please choose Pickup or Delivery to order
                </div>
              )}

              {/* Primary CTA: Order via WhatsApp */}
              <button
                type="button"
                onClick={sendWhatsAppOrder}
                disabled={!isOrderReady}
                className={`w-full min-h-[48px] rounded-lg font-display text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg ${
                  isOrderReady
                    ? "bg-teal hover:bg-[#3D8583] text-white cursor-pointer active:scale-[0.98]"
                    : "bg-neutral-800 text-white/40 cursor-not-allowed border border-white/10"
                }`}
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.146-.519-1.859-.764-3.048-2.656-3.14-2.778-.093-.122-.751-.998-.751-1.905 0-.907.476-1.353.646-1.538.169-.185.37-.231.494-.231.123 0 .247.001.354.006.113.005.263-.043.411.312.155.372.529 1.29.575 1.383.046.092.077.2.015.323-.061.123-.092.2-.185.308-.092.108-.194.241-.277.323-.092.093-.189.194-.081.379.108.185.479.79 1.028 1.278.708.631 1.305.826 1.49.919.185.092.293.077.401-.046.108-.124.462-.539.585-.724.124-.185.247-.154.416-.092.169.062 1.077.508 1.262.6.185.093.308.139.354.216.046.077.046.446-.098.851z" />
                </svg>
                <span>Order via WhatsApp</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
