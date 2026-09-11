import Image from "next/image";
import {
  CONTACT,
  WHATSAPP_GATSBY_MESSAGE,
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
      className="relative overflow-hidden bg-black text-white min-h-[600px] md:min-h-[680px] flex items-center"
    >
      {/* Background High-Resolution 16:9 Landscape Food Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src={gatsbyHeroImg}
          alt="The Mega Mall Gatsby - Big Share Meal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark cinematic gradient scrim for high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-radial-[at_left_center] from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:py-20 md:px-8 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Trust Badges Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              100% Halal Certified
            </span>
            <span className="inline-flex items-center gap-1.5 rounded bg-amber-500/20 border border-amber-400/50 px-3 py-1 text-xs font-black uppercase tracking-wider text-turmeric">
              ★ FEEDS 4
            </span>
            <span className="inline-flex items-center rounded bg-teal/20 border border-teal/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
              Verulam
            </span>
          </div>

          {/* Non-negotiable Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
            Home of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">
              The Gatsby
            </span>
          </h1>

          {/* Subhead with flyer heritage tone */}
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-white/90 leading-snug">
            80&apos;s Style. Big Share Meals. A Passion for Taste.
          </p>

          <p className="mt-3 text-sm sm:text-base text-white/75 max-w-lg leading-relaxed">
            Welcome to The Mall Cafe Verulam. Famous for our giant Mega Mall Gatsby, flame-grilled chicken tikka, handcrafted smash burgers, and loaded street food — made fresh to order.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#gatsby-feature"
              className="inline-flex items-center justify-center gap-2 bg-chili px-7 py-4 font-display text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View The Gatsby</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 bg-black/40 backdrop-blur-sm px-6 py-3.5 font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black active:scale-[0.98]"
            >
              Full Menu (Prices in ZAR)
            </a>

            <a
              href={waLink(WHATSAPP_ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center gap-2 bg-emerald-600 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-transform active:scale-[0.98]"
            >
              💬 Order on WhatsApp
            </a>
          </div>

          {/* Quick info badges below buttons */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/70 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-turmeric text-base">📍</span>
              <span>{CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-turmeric text-base">⚡</span>
              <span>Collection &amp; Verulam Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-turmeric text-base">🔥</span>
              <span>Cooked Fresh to Order</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
