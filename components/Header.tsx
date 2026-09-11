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

const NAV_ITEMS = [
  { id: "gatsbys", label: "The Gatsby", mobileLabel: "OG Mega Mall Gatsbys (Feeds 4)" },
  { id: "menu", label: "Full Menu", mobileLabel: "Full Menu" },
  { id: "why-us", label: "Why Us", mobileLabel: "Why The Mall Cafe" },
  { id: "find-us", label: "Find Us", mobileLabel: "Find Us & Hours" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("gatsbys");
  const menuRef = useRef<HTMLDivElement>(null);

  // Dynamic scrollspy: track active section as customer scrolls
  useEffect(() => {
    const sectionIds = ["gatsbys", "menu", "why-us", "find-us"];
    let rafId: number | null = null;

    function updateActiveSection() {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;

      if (isBottom) {
        setActiveSection("find-us");
        return;
      }

      const headerOffset = 160;
      let current = "gatsbys";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= headerOffset) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    }

    function handleScroll() {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateActiveSection();
        rafId = null;
      });
    }

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-teal focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:shadow-md"
      >
        Skip to content
      </a>

      {/* Top Banner with single phone & halal guarantee */}
      <div className="bg-black border-b border-white/10 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs text-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 font-bold text-teal uppercase tracking-wider">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Strictly Halal
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline font-semibold text-white/75">
              {CONTACT.since} • {CONTACT.branch}
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline font-black uppercase text-[#993C36] text-[11px] tracking-wider">
              {CONTACT.tagline}
            </span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4 truncate text-right">
            <a
              href={`tel:${CONTACT.phoneTelPrimary}`}
              className="font-display font-bold text-white hover:text-teal transition-colors shrink-0"
            >
              📞 {CONTACT.phonePrimary}
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-emerald-400 font-bold hover:underline truncate"
            >
              💬 WhatsApp: {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10 shadow-lg">
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
                <span className="inline-block rounded bg-teal/20 border border-teal/50 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[11px] md:text-xs font-black text-teal uppercase tracking-wider">
                  VERULAM
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
                <span className="text-[10px] sm:text-xs md:text-sm font-extrabold text-white/90 uppercase tracking-wider truncate">
                  Home of The Gatsby
                </span>
                <span className="text-white/40 text-[10px] hidden sm:inline">•</span>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#993C36] hidden sm:inline">
                  {CONTACT.tagline}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-4 lg:gap-7 text-xs lg:text-sm font-bold uppercase tracking-wider md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative py-1.5 transition-colors ${
                    isActive
                      ? "text-teal font-black"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-1 h-0.5 bg-teal rounded-full shadow-[0_0_8px_rgba(74,156,154,0.7)]"
                    />
                  )}
                </Link>
              );
            })}
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
              className="bg-teal hover:bg-[#3D8583] px-4 py-2 lg:px-5 lg:py-2 text-xs font-black uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-1.5"
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
              className="flex min-h-[40px] items-center justify-center rounded bg-teal px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white transition-transform active:scale-95 shadow-xs"
            >
              Order
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded text-white transition-transform active:scale-95 hover:text-teal focus-visible:ring-2 focus-visible:ring-teal"
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
              className="relative z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-white/15 bg-black/98 px-5 py-6 text-white shadow-2xl md:hidden"
            >
              <nav
                aria-label="Mobile Navigation"
                className="flex flex-col font-display text-base sm:text-lg font-bold uppercase tracking-wider"
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => {
                        setActiveSection(item.id);
                        closeMenu();
                      }}
                      className={`flex items-center justify-between border-b border-white/10 py-4 transition-colors ${
                        isActive
                          ? "text-teal font-black bg-white/5 px-2.5 -mx-2.5 rounded"
                          : "text-white hover:text-teal active:text-teal"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="inline-block h-2 w-2 rounded-full bg-teal shadow-[0_0_6px_rgba(74,156,154,0.8)]"
                          />
                        )}
                        <span>{item.mobileLabel}</span>
                      </span>
                      <span
                        className={`text-xs ${
                          isActive ? "text-teal font-bold" : "text-white/50"
                        }`}
                      >
                        {isActive ? "●" : "→"}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 flex flex-col gap-3 font-display">
                <a
                  href={waLink(WHATSAPP_ORDER_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex min-h-[46px] items-center justify-center bg-teal hover:bg-[#3D8583] px-4 py-3.5 text-center text-sm font-black uppercase tracking-wider text-white transition-transform active:scale-[0.98] shadow-md rounded"
                >
                  Order on WhatsApp ({CONTACT.whatsappDisplay})
                </a>
                <a
                  href={`tel:${CONTACT.phoneTelPrimary}`}
                  onClick={closeMenu}
                  className="flex min-h-[46px] items-center justify-center border-2 border-teal px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-teal transition-colors hover:bg-teal hover:text-white active:scale-[0.98] rounded"
                >
                  Call Us: {CONTACT.phonePrimary}
                </a>
              </div>

              <div className="mt-6 flex justify-between border-t border-white/10 pt-4 text-xs text-white/70">
                <span>{CONTACT.address}</span>
                <span className="text-[#993C36] font-black uppercase">{CONTACT.tagline}</span>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
