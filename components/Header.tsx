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
      <div className="bg-neutral-900 border-b border-white/10 px-4 py-1.5 text-xs text-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-bold text-turmeric uppercase tracking-wider">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Strictly Halal
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline font-semibold text-white/75">
              Verulam Branch
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT.phoneTelPrimary}`}
              className="font-display font-semibold hover:text-turmeric transition-colors"
            >
              📞 {CONTACT.phonePrimary}
            </a>
            <span className="text-white/40">|</span>
            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-semibold hover:underline"
            >
              💬 WhatsApp: {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-ink text-cream border-b border-cream/10 shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 md:px-8">
          <Link
            href="#top"
            className="flex items-center gap-3 py-1 group"
            aria-label="The Mall Cafe Verulam - Home of The Gatsby"
            onClick={closeMenu}
          >
            <div className="relative h-12 w-auto md:h-16 flex items-center">
              <Image
                src={logoImg}
                alt="The Mall Cafe Logo"
                priority
                className="h-11 w-auto sm:h-14 md:h-16 object-contain drop-shadow transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-display font-black tracking-tight text-white text-base leading-none">
                THE MALL CAFE <span className="text-turmeric text-xs font-bold uppercase tracking-wider ml-1">VERULAM</span>
              </span>
              <span className="text-[11px] font-semibold text-turmeric uppercase tracking-wider mt-0.5">
                Home of The Gatsby
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wider md:flex"
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
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${CONTACT.phoneTelPrimary}`}
              className="border border-white/25 px-4 py-2 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chili px-5 py-2 text-xs font-black uppercase tracking-wider text-white shadow-md transition-all hover:bg-red-700 hover:scale-[1.03] active:scale-95 flex items-center gap-1.5"
            >
              <span>Order Now</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile Right Controls: Quick Order Button + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[38px] items-center justify-center bg-chili px-3 py-1 text-xs font-black uppercase tracking-wider text-white transition-transform active:scale-95"
            >
              Order
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center text-cream transition-transform active:scale-95 hover:text-teal"
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
          <div
            id="mobile-menu"
            ref={menuRef}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-cream/15 bg-ink px-5 py-6 text-cream shadow-2xl md:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col font-display text-lg font-bold uppercase tracking-wider"
            >
              <Link
                href="#gatsby-feature"
                onClick={closeMenu}
                className="block border-b border-cream/10 py-3.5 text-turmeric"
              >
                🔥 The Mega Gatsby (Feeds 4)
              </Link>
              <Link
                href="#menu"
                onClick={closeMenu}
                className="block border-b border-cream/10 py-3.5 transition-colors hover:text-teal"
              >
                Full Menu
              </Link>
              <Link
                href="#why-us"
                onClick={closeMenu}
                className="block border-b border-cream/10 py-3.5 transition-colors hover:text-teal"
              >
                Why The Mall Cafe
              </Link>
              <Link
                href="#find-us"
                onClick={closeMenu}
                className="block border-b border-cream/10 py-3.5 transition-colors hover:text-teal"
              >
                Find Us &amp; Hours
              </Link>
            </nav>

            <div className="mt-6 flex flex-col gap-3 font-display">
              <a
                href={waLink(WHATSAPP_ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block min-h-[46px] bg-chili px-4 py-3.5 text-center text-sm font-black uppercase tracking-wider text-white transition-transform active:scale-[0.98] shadow-md"
              >
                Order on WhatsApp ({CONTACT.whatsappDisplay})
              </a>
              <a
                href={`tel:${CONTACT.phoneTelPrimary}`}
                onClick={closeMenu}
                className="block min-h-[46px] border-2 border-turmeric px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-turmeric transition-colors hover:bg-turmeric hover:text-ink active:scale-[0.98]"
              >
                Call Us: {CONTACT.phonePrimary}
              </a>
            </div>

            <div className="mt-6 flex justify-between border-t border-cream/10 pt-4 text-xs text-cream/70">
              <span>{CONTACT.address}</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
