import {
  CONTACT,
  HOURS,
  WHATSAPP_BOOKING_MESSAGE,
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
    <section id="find-us" className="bg-ink py-14 pb-28 text-cream md:py-24 md:pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 px-5 md:grid-cols-3 md:gap-8 md:px-8">
        <div>
          <h2 className="font-display text-2xl font-extrabold">Find Us</h2>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-cream/80 underline decoration-chili decoration-2 underline-offset-4 hover:text-chili"
          >
            <span>{CONTACT.address}</span>
            <span className="text-xs text-chili" aria-hidden="true">↗</span>
          </a>
          <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex min-h-[40px] items-center gap-2 rounded bg-cream/10 px-3.5 py-2 text-turmeric transition-colors hover:bg-cream/15 active:scale-98"
            >
              <svg className="h-4 w-4 shrink-0 text-turmeric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: <strong className="text-cream">{CONTACT.phoneDisplay}</strong></span>
            </a>
            <a
              href={waLink(WHATSAPP_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded bg-cream/10 px-3.5 py-2 text-turmeric transition-colors hover:bg-cream/15 active:scale-98"
            >
              <svg className="h-4 w-4 shrink-0 text-turmeric" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.146-.519-1.859-.764-3.048-2.656-3.14-2.778-.093-.122-.751-.998-.751-1.905 0-.907.476-1.353.646-1.538.169-.185.37-.231.494-.231.123 0 .247.001.354.006.113.005.263-.043.411.312.155.372.529 1.29.575 1.383.046.092.077.2.015.323-.061.123-.092.2-.185.308-.092.108-.194.241-.277.323-.092.093-.189.194-.081.379.108.185.479.79 1.028 1.278.708.631 1.305.826 1.49.919.185.092.293.077.401-.046.108-.124.462-.539.585-.724.124-.185.247-.154.416-.092.169.062 1.077.508 1.262.6.185.093.308.139.354.216.046.077.046.446-.098.851z" />
              </svg>
              <span>WhatsApp: <strong className="text-cream">{CONTACT.phoneDisplay}</strong></span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-extrabold">Hours</h2>
          <ul className="mt-3 divide-y divide-cream/10 text-cream/80 sm:divide-none sm:space-y-2">
            {HOURS.map((h) => (
              <li key={h.day} className="flex flex-col gap-0.5 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0">
                <span className="font-medium text-cream/90">{h.day}</span>
                <span className="font-medium text-turmeric sm:text-right">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-extrabold">
            Book &amp; Order
          </h2>
          <div className="mt-3 flex flex-col gap-3">
            <a
              href={waLink(WHATSAPP_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center bg-chili px-5 py-3 text-center font-display text-sm font-bold text-ink transition-transform active:scale-[0.98] hover:scale-[1.02]"
            >
              Book a Table
            </a>
            <a
              href={waLink(WHATSAPP_DELIVERY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center border-2 border-curry px-5 py-3 text-center font-display text-sm font-bold text-cream transition-colors hover:bg-curry active:scale-[0.98]"
            >
              Order Delivery
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-cream/15 px-5 pt-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-cream/60 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} The Mall Cafe. All rights reserved.</p>
          <div className="flex gap-5">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chili"
            >
              Instagram {CONTACT.instagramHandle}
            </a>
            <a
              href={CONTACT.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chili"
            >
              TikTok {CONTACT.tiktokHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
