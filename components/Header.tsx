"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import {
  CONTACT,
  WHATSAPP_ORDER_MESSAGE,
} from "@/lib/site-data";

function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-chili focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:shadow-md"
      >
        Skip to content
      </a>

      {/* Top Banner with phone & halal guarantee */}
      <div className="bg-neutral-900 border-b border-white/10 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs text-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 font-bold text-turmeric uppercase tracking-wider">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Strictly Halal
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline font-semibold text-white/75">
              Verulam Branch
            </span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4 truncate text-right">
            <a
              href={`tel:${CONTACT.phoneTelPrimary}`}
              className="font-display font-semibold hover:text-turmeric transition-colors shrink-0"
            >
              📞 {CONTACT.phonePrimary}
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-emerald-400 font-semibold hover:underline truncate"
            >
              💬 WhatsApp: {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-ink text-cream border-b border-cream/10 shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3.5 py-2 sm:px-6 md:px-8">
          <Link
            href="#top"
            className="flex items-center gap-2.5 sm:gap-3.5 py-1 group min-w-0"
            aria-label="The Mall Cafe Verulam - Home of The Gatsby"
            onClick={closeMenu}
          >
            <div className="relative h-14 sm:h-16 md:h-20 lg:h-22 w-auto flex items-center shrink-0">
              <Image
                src={logoImg}
                alt="The Mall Cafe Logo"
                priority
                className="h-14 w-auto sm:h-16 md:h-20 lg:h-22 object-contain drop-shadow-md transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col text-left justify-center min-w-0">
              <div className="flex items-center flex-wrap gap-x-1.5 sm:gap-x-2 leading-none">
                <span className="font-display font-black tracking-tight text-white text-base sm:text-xl md:text-2xl lg:text-3xl leading-none">
                  THE MALL CAFE
                </span>
                <span className="inline-block rounded bg-turmeric/20 border border-turmeric/50 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[11px] md:text-xs font-black text-turmeric uppercase tracking-wider">
                  VERULAM
                </span>
              </div>
              <span className="text-[10px] sm:text-xs md:text-sm font-extrabold text-turmeric/95 uppercase tracking-wider sm:tracking-widest mt-1 sm:mt-1.5 truncate">
                Home of The Gatsby
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-4 lg:gap-7 text-xs lg:text-sm font-bold uppercase tracking-wider md:flex"
          >
            <Link
              href="#gatsby-feature"
              className="text-turmeric hover:text-white transition-colors"
            >
              The Gatsby
            </Link>
            <Link
              href="#menu"
              className="hover:text-teal transition-colors"
            >
              Full Menu
            </Link>
            <Link
              href="#why-us"
              className="hover:text-teal transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="#find-us"
              className="hover:text-teal transition-colors"
            >
              Find Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2.5 lg:gap-3 md:flex shrink-0">
            <a
              href={`tel:${CONTACT.phoneTelPrimary}`}
              className="border border-white/25 px-3.5 py-2 lg:px-4 lg:py-2 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chili px-4 py-2 lg:px-5 lg:py-2 text-xs font-black uppercase tracking-wider text-white shadow-md transition-all hover:bg-red-700 hover:scale-[1.03] active:scale-95 flex items-center gap-1.5"
            >
              <span>Order Now</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile Right Controls: Quick Order Button + Hamburger */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[40px] items-center justify-center rounded bg-chili px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white transition-transform active:scale-95 shadow-sm"
            >
              Order
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded text-cream transition-transform active:scale-95 hover:text-teal focus-visible:ring-2 focus-visible:ring-turmeric"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-[73px] sm:top-[85px] bg-black/60 backdrop-blur-xs z-40 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <div
              id="mobile-menu"
              ref={menuRef}
              className="relative z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-cream/15 bg-ink/98 px-5 py-6 text-cream shadow-2xl md:hidden"
            >
              <nav
                aria-label="Mobile Navigation"
                className="flex flex-col font-display text-base sm:text-lg font-bold uppercase tracking-wider"
              >
                <Link
                  href="#gatsby-feature"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-cream/10 py-4 text-turmeric active:text-amber-300"
                >
                  <span>🔥 The Mega Gatsby (Feeds 4)</span>
                  <span className="text-xs text-white/50">→</span>
                </Link>
                <Link
                  href="#menu"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-cream/10 py-4 transition-colors hover:text-teal active:text-teal"
                >
                  <span>Full Menu</span>
                  <span className="text-xs text-white/50">→</span>
                </Link>
                <Link
                  href="#why-us"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-cream/10 py-4 transition-colors hover:text-teal active:text-teal"
                >
                  <span>Why The Mall Cafe</span>
                  <span className="text-xs text-white/50">→</span>
                </Link>
                <Link
                  href="#find-us"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-cream/10 py-4 transition-colors hover:text-teal active:text-teal"
                >
                  <span>Find Us &amp; Hours</span>
                  <span className="text-xs text-white/50">→</span>
                </Link>
              </nav>

              <div className="mt-6 flex flex-col gap-3 font-display">
                <a
                  href={waLink(WHATSAPP_ORDER_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex min-h-[46px] items-center justify-center bg-chili px-4 py-3.5 text-center text-sm font-black uppercase tracking-wider text-white transition-transform active:scale-[0.98] shadow-md rounded"
                >
                  Order on WhatsApp ({CONTACT.whatsappDisplay})
                </a>
                <a
                  href={`tel:${CONTACT.phoneTelPrimary}`}
                  onClick={closeMenu}
                  className="flex min-h-[46px] items-center justify-center border-2 border-turmeric px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-turmeric transition-colors hover:bg-turmeric hover:text-ink active:scale-[0.98] rounded"
                >
                  Call Us: {CONTACT.phonePrimary}
                </a>
              </div>

              <div className="mt-6 flex justify-between border-t border-cream/10 pt-4 text-xs text-cream/70">
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
