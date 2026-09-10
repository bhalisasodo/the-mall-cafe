"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import {
  CONTACT,
  WHATSAPP_BOOKING_MESSAGE,
  WHATSAPP_DELIVERY_MESSAGE,
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-chili focus:text-ink focus:px-4 focus:py-2 focus:font-bold focus:shadow-md"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 bg-ink text-cream border-b border-cream/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
          <Link
            href="#top"
            className="flex items-center"
            aria-label="The Mall Cafe - Back to top"
            onClick={closeMenu}
          >
            <Image
              src={logoImg}
              alt="The Mall Cafe"
              priority
              className="h-12 w-auto md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-8 text-sm font-medium md:flex"
          >
            <Link
              href="#menu"
              className="transition-colors hover:text-chili focus-visible:text-chili"
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-chili focus-visible:text-chili"
            >
              Our Story
            </Link>
            <Link
              href="#find-us"
              className="transition-colors hover:text-chili focus-visible:text-chili"
            >
              Find Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={waLink(WHATSAPP_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chili px-5 py-2 text-sm font-bold text-ink transition-transform hover:scale-[1.03]"
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Right Controls: Quick Book + Hamburger Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href={waLink(WHATSAPP_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[38px] items-center justify-center bg-chili px-3.5 py-1.5 text-xs font-bold text-ink transition-transform active:scale-95"
            >
              Book
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center text-cream transition-transform active:scale-95 hover:text-chili focus-visible:text-chili"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-cream/15 bg-ink px-5 py-6 text-cream shadow-2xl md:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col font-display text-lg font-bold"
            >
              <Link
                href="#menu"
                onClick={closeMenu}
                className="block border-b border-cream/10 py-3.5 transition-colors hover:text-chili focus-visible:text-chili"
              >
                The Menu
              </Link>
              <Link
                href="#about"
                onClick={closeMenu}
                className="block border-b border-cream/10 py-3.5 transition-colors hover:text-chili focus-visible:text-chili"
              >
                Our Story
              </Link>
              <Link
                href="#find-us"
                onClick={closeMenu}
                className="block border-b border-cream/10 py-3.5 transition-colors hover:text-chili focus-visible:text-chili"
              >
                Find Us &amp; Hours
              </Link>
            </nav>

            <div className="mt-6 flex flex-col gap-3 font-display">
              <a
                href={waLink(WHATSAPP_BOOKING_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block min-h-[44px] bg-chili px-4 py-3.5 text-center text-sm font-bold text-ink transition-transform active:scale-[0.98]"
              >
                Book a Table on WhatsApp
              </a>
              <a
                href={waLink(WHATSAPP_DELIVERY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block min-h-[44px] border-2 border-curry px-4 py-3.5 text-center text-sm font-bold text-cream transition-colors hover:bg-curry active:scale-[0.98]"
              >
                Order Delivery on WhatsApp
              </a>
            </div>

            <div className="mt-6 flex justify-between border-t border-cream/10 pt-4 text-xs text-cream/70">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 hover:text-chili"
              >
                Instagram {CONTACT.instagramHandle}
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 hover:text-chili"
              >
                TikTok {CONTACT.tiktokHandle}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
