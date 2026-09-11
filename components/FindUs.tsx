import Image from "next/image";
import logoImg from "@/public/logo.png";
import {
  CONTACT,
  HOURS,
  WHATSAPP_ORDER_MESSAGE,
  WHATSAPP_DELIVERY_MESSAGE,
  WHATSAPP_BOOKING_MESSAGE,
} from "@/lib/site-data";

function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function FindUs() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.addressMapsQuery
  )}`;

  return (
    <footer id="find-us" className="bg-black text-white pt-16 pb-28 md:pb-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Main 3-column contact grid */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand, Address, Delivery, Halal & Single Phone Number */}
          <div>
            <div className="flex items-center gap-3.5">
              <Image
                src={logoImg}
                alt="The Mall Cafe Logo"
                className="h-14 sm:h-16 w-auto object-contain shrink-0 drop-shadow"
              />
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-black uppercase text-white leading-tight">
                  The Mall Cafe
                </h2>
                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#993C36]">
                  {CONTACT.tagline}
                </p>
                <p className="text-[11px] text-white/60 font-medium">
                  {CONTACT.branch} • {CONTACT.since}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="font-bold text-white uppercase text-xs tracking-wider">Store Location:</p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white/95 font-medium underline decoration-teal decoration-2 underline-offset-4 hover:text-teal transition-colors"
              >
                {CONTACT.address} ↗
              </a>
              <p className="text-xs text-white/60 italic pt-1">
                Centrally located in Verulam. Fast takeaway &amp; local delivery.
              </p>
            </div>

            {/* Single Contact Number for all calls & WhatsApp */}
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`tel:${CONTACT.phoneTelPrimary}`}
                className="inline-flex items-center justify-between rounded bg-white/10 px-3.5 py-2.5 text-sm font-bold text-white hover:bg-white/15 transition-colors border border-white/10"
              >
                <span className="flex items-center gap-2">
                  <span>📞</span>
                  <span>Call Us (Store):</span>
                </span>
                <span className="text-teal font-black">{CONTACT.phonePrimary}</span>
              </a>

              <a
                href={waLink(WHATSAPP_ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-2.5 text-sm font-bold text-emerald-400 hover:bg-emerald-900/60 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>💬</span>
                  <span>WhatsApp (Orders &amp; Enquiries):</span>
                </span>
                <span className="font-black">{CONTACT.whatsappDisplay}</span>
              </a>
            </div>

            {/* Trust Badges: Halal + Proudly South African + We Deliver */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="rounded border border-emerald-500/40 bg-emerald-950/40 p-2.5 flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-display text-[11px] font-black uppercase tracking-wider text-emerald-400 leading-tight">
                    100% Halal
                  </p>
                  <p className="text-[10px] text-white/70">Certified strictly Halal</p>
                </div>
              </div>

              <div className="rounded border border-teal/40 bg-teal/10 p-2.5 flex items-center gap-2">
                <span className="text-base shrink-0">🇿🇦</span>
                <div>
                  <p className="font-display text-[11px] font-black uppercase tracking-wider text-teal leading-tight">
                    Proudly South African
                  </p>
                  <p className="text-[10px] text-white/70">Local flavour &amp; heritage</p>
                </div>
              </div>
            </div>

            <div className="mt-2.5 rounded bg-white/5 border border-white/10 px-3 py-2 text-xs text-white/80 flex items-center gap-2">
              <span className="text-teal">🛵</span>
              <span><strong>{CONTACT.deliveryNote}</strong> — Call or WhatsApp <strong className="text-white">{CONTACT.phonePrimary}</strong></span>
            </div>
          </div>

          {/* Col 2: Trading Hours */}
          <div>
            <h3 className="font-display text-lg font-black uppercase text-white border-b border-white/10 pb-2">
              Trading Hours
            </h3>
            <ul className="mt-4 divide-y divide-white/10 text-sm text-white/80">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="py-2.5 flex items-center justify-between gap-2"
                >
                  <span className="font-medium text-white">{h.day}</span>
                  <span className="text-teal font-mono font-semibold text-right">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded bg-white/5 p-3 text-xs text-white/70">
              <span className="font-bold text-teal">⚡ Orders, Bookings &amp; Deliveries:</span> All handled via our single dedicated line: <strong className="text-white">{CONTACT.phonePrimary}</strong>.
            </div>
          </div>

          {/* Col 3: Direct Quick Actions */}
          <div>
            <h3 className="font-display text-lg font-black uppercase text-white border-b border-white/10 pb-2">
              Order &amp; Enquiries
            </h3>
            <p className="mt-4 text-xs text-white/70 leading-relaxed">
              Place your order directly via WhatsApp or phone. We will confirm preparation time for collection at 94 Wick Street, Verulam, or arrange local delivery.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={waLink(WHATSAPP_ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[46px] items-center justify-center gap-2 bg-teal hover:bg-[#3D8583] px-4 py-3 text-center font-display text-sm font-black uppercase tracking-wider text-white shadow transition-all active:scale-[0.98]"
              >
                <span>WhatsApp Order (Fast)</span>
                <span aria-hidden="true">💬</span>
              </a>

              <a
                href={waLink(WHATSAPP_DELIVERY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[46px] items-center justify-center gap-2 border-2 border-teal bg-transparent px-4 py-3 text-center font-display text-sm font-bold uppercase tracking-wider text-teal transition-colors hover:bg-teal hover:text-white active:scale-[0.98]"
              >
                <span>Enquire Delivery</span>
                <span aria-hidden="true">🛵</span>
              </a>

              <a
                href={waLink(WHATSAPP_BOOKING_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 border border-white/20 bg-white/5 px-4 py-2.5 text-center font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
              >
                <span>Bookings &amp; Events</span>
                <span aria-hidden="true">📅</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Sub-bar with Icon-Only Social Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-white/70">
          <div>
            <p>
              &copy; {new Date().getFullYear()} {CONTACT.brandName} {CONTACT.branch}. All rights reserved.
            </p>
            <p className="text-[#993C36] font-display uppercase tracking-widest text-[11px] font-black mt-0.5">
              &ldquo;{CONTACT.tagline}&rdquo;
            </p>
          </div>

          {/* 
            ICON-ONLY, CLICKABLE SOCIAL LINKS: INSTAGRAM & TIKTOK
            PLACEHOLDER: Update href with client's official social profile URLs before launch
          */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60 font-medium">Follow Us:</span>

            {/* 
              Instagram Icon Link 
              PLACEHOLDER: Replace href="#" with actual Instagram URL upon client supply
            */}
            <a
              href={CONTACT.instagramPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-teal hover:border-teal hover:text-white hover:scale-110 active:scale-95"
              title="Instagram (Placeholder - awaiting client profile URL)"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* 
              TikTok Icon Link 
              PLACEHOLDER: Replace href="#" with actual TikTok URL upon client supply
            */}
            <a
              href={CONTACT.tiktokPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-teal hover:border-teal hover:text-white hover:scale-110 active:scale-95"
              title="TikTok (Placeholder - awaiting client profile URL)"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
