import Image from "next/image";
import {
  CONTACT,
  WHATSAPP_ORDER_MESSAGE,
} from "@/lib/site-data";
import gatsbyHeroImg from "@/public/menu/gatsby-hero-16x9.jpg";

function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black text-white min-h-[620px] md:min-h-[700px] flex items-center"
    >
      {/* Background High-Resolution 16:9 Landscape Food Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src={gatsbyHeroImg}
          alt="The Mega Mall Gatsby - Big Share Meal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 opacity-100"
        />
        {/* Balanced vertical gradient: 25% at top (detail area) to 55% at bottom (CTA area) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/55" />
        {/* Soft directional scrim behind the text column only */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:py-20 md:px-8 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Trust Badges Bar & Subline Kicker */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded bg-black/80 backdrop-blur-xs border border-teal/60 px-3 py-1 text-xs font-black uppercase tracking-wider text-teal shadow-md">
              {CONTACT.since}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded bg-emerald-950/90 backdrop-blur-xs border border-emerald-500/50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-400 shadow-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              100% Halal Certified
            </span>
            <span className="inline-flex items-center rounded bg-black/70 backdrop-blur-xs border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
              {CONTACT.branch}
            </span>
          </div>

          {/* Hero Headline with protective drop shadows */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
            Home of <br />
            <span className="text-teal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              The Gatsby
            </span>
          </h1>

          {/* Tagline Treatment in Red Accent Small Caps as on the official brand plate */}
          <div className="mt-4 sm:mt-5 flex items-center gap-2">
            <span className="font-display text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.2em] text-[#993C36] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {CONTACT.tagline}
            </span>
            <span className="h-0.5 w-12 bg-[#993C36]/80 hidden sm:inline-block" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-white font-medium max-w-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Welcome to The Mall Cafe Verulam. Serving authentic, mouth-watering comfort food since 1987 — famous for our giant OG Mega Mall Gatsby (feeds up to 4), charcoal flame-grilled tikka, whopper burgers, loaded rolls, and bunnies.
          </p>

          {/* CTAs - Teal as primary interactive CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#gatsbys"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-[#3D8583] px-7 py-4 font-display text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View The Gatsby</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 bg-black/50 backdrop-blur-sm px-6 py-3.5 font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black active:scale-[0.98]"
            >
              Full Menu (Prices in ZAR)
            </a>

            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-transform active:scale-[0.98]"
            >
              💬 WhatsApp: {CONTACT.whatsappDisplay}
            </a>
          </div>

          {/* Quick info badges below buttons */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/70 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-teal text-base">📍</span>
              <span>{CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal text-base">🛵</span>
              <span>{CONTACT.deliveryNote}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal text-base">🇿🇦</span>
              <span>{CONTACT.proudlySA}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal text-base">📞</span>
              <span>{CONTACT.phonePrimary}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
