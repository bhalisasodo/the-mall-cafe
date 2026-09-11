import Image from "next/image";
import logoImg from "@/public/logo.png";
import {
  CONTACT,
  HOURS,
  WHATSAPP_ORDER_MESSAGE,
  WHATSAPP_DELIVERY_MESSAGE,
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
    <footer id="find-us" className="bg-neutral-950 text-white pt-16 pb-28 md:pb-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Main 3-column contact grid */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand, Address & Phone */}
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
                <p className="text-xs sm:text-sm text-turmeric font-bold uppercase tracking-wide">
                  Verulam Branch • &ldquo;{CONTACT.tagline}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="font-medium text-white">Visit Us in Verulam:</p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white/90 underline decoration-teal decoration-2 underline-offset-4 hover:text-teal transition-colors"
              >
                {CONTACT.address} ↗
              </a>
              <p className="text-xs text-white/60 italic pt-1">
                Centrally located in Verulam. Fast takeaway &amp; local delivery.
              </p>
            </div>

            {/* Direct Call & WhatsApp Buttons */}
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`tel:${CONTACT.phoneTelPrimary}`}
                className="inline-flex items-center gap-2.5 rounded bg-white/10 px-3.5 py-2 text-sm font-bold text-white hover:bg-white/15 transition-colors"
              >
                <span>📞 Call Store:</span>
                <span className="text-turmeric">{CONTACT.phonePrimary}</span>
              </a>
              <a
                href={`tel:${CONTACT.phoneTelSecondary}`}
                className="inline-flex items-center gap-2.5 rounded bg-white/10 px-3.5 py-2 text-sm font-bold text-white hover:bg-white/15 transition-colors"
              >
                <span>📞 Landline:</span>
                <span className="text-turmeric">{CONTACT.phoneSecondary}</span>
              </a>
              <a
                href={waLink(WHATSAPP_ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-900/60 transition-colors"
              >
                <span>💬 WhatsApp Order:</span>
                <span>{CONTACT.whatsappDisplay}</span>
              </a>
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
                  <span className="text-turmeric font-mono font-semibold text-right">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded bg-white/5 p-3 text-xs text-white/70">
              <span className="font-bold text-emerald-400">⚡ Takeaway &amp; Delivery:</span> Hot and freshly prepared for the Verulam community.
            </div>
          </div>

          {/* Col 3: Direct Quick Order Paths */}
          <div>
            <h3 className="font-display text-lg font-black uppercase text-white border-b border-white/10 pb-2">
              Order Online
            </h3>
            <p className="mt-4 text-xs text-white/70 leading-relaxed">
              Place your order directly via WhatsApp or phone. We will confirm preparation time and deliver or have it ready for collection at our Verulam branch.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={waLink(WHATSAPP_ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[46px] items-center justify-center gap-2 bg-chili px-4 py-3 text-center font-display text-sm font-black uppercase tracking-wider text-white shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>WhatsApp Order (Fast)</span>
                <span aria-hidden="true">💬</span>
              </a>

              <a
                href={waLink(WHATSAPP_DELIVERY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[46px] items-center justify-center gap-2 border-2 border-turmeric bg-transparent px-4 py-3 text-center font-display text-sm font-bold uppercase tracking-wider text-turmeric transition-colors hover:bg-turmeric hover:text-black active:scale-[0.98]"
              >
                <span>Request Delivery</span>
                <span aria-hidden="true">🛵</span>
              </a>
            </div>

            {/* Halal Badge Box */}
            <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-3.5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xl font-bold">
                ✓
              </div>
              <div>
                <p className="font-display text-xs font-black uppercase tracking-wider text-emerald-400">
                  Strictly Halal Certified
                </p>
                <p className="text-[11px] text-white/70">
                  All meats and ingredients certified strictly Halal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} The Mall Cafe Verulam. All rights reserved. &ldquo;{CONTACT.tagline}&rdquo;.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turmeric transition-colors"
            >
              Instagram {CONTACT.instagramHandle}
            </a>
            <span>•</span>
            <a
              href={CONTACT.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turmeric transition-colors"
            >
              TikTok {CONTACT.tiktokHandle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
