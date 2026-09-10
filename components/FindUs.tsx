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
    <section id="find-us" className="bg-ink py-16 text-cream md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-3 md:gap-8 md:px-8">
        <div>
          <h2 className="font-display text-2xl font-extrabold">Find Us</h2>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-cream/80 underline decoration-chili decoration-2 underline-offset-4 hover:text-chili"
          >
            {CONTACT.address}
          </a>
          <div className="mt-3 space-y-1 text-sm text-cream/80">
            <p>
              Call:{" "}
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="text-turmeric hover:underline"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href={waLink(WHATSAPP_BOOKING_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-turmeric hover:underline"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-extrabold">Hours</h2>
          <ul className="mt-3 space-y-2 text-cream/80">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 text-sm">
                <span className="shrink-0">{h.day}</span>
                <span className="text-right text-turmeric">{h.time}</span>
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
              className="inline-block bg-chili px-5 py-3 text-center font-display text-sm font-bold text-ink transition-transform hover:scale-[1.02]"
            >
              Book a Table
            </a>
            <a
              href={waLink(WHATSAPP_DELIVERY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-curry px-5 py-3 text-center font-display text-sm font-bold text-cream transition-colors hover:bg-curry"
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
