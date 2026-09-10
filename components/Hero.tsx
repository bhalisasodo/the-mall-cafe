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

export default function Hero() {
  return (
    <section
      id="top"
      className="torn-edge relative overflow-hidden bg-ink pb-16 pt-14 text-cream md:pb-24 md:pt-20"
    >
      {/* subtle chili-fleck texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FF6B35 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-body text-sm font-medium text-turmeric">
          {CONTACT.address}
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl break-words">
          South African Indian street food, done properly.
        </h1>

        <p className="mt-5 max-w-xl text-base text-cream/80 sm:mt-6 md:text-lg">
          Bunny chow, akhni, curry chips and fusion plates cooked fresh, fast,
          and full of flavour — eat in, take out, or have it delivered.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={waLink(WHATSAPP_BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-chili px-6 py-3.5 font-display text-base font-bold text-ink transition-transform active:scale-[0.98] hover:scale-[1.02]"
          >
            Book a Table on WhatsApp
          </a>
          <a
            href={waLink(WHATSAPP_DELIVERY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border-2 border-curry bg-transparent px-6 py-3.5 font-display text-base font-bold text-cream transition-colors hover:bg-curry active:scale-[0.98]"
          >
            Order Delivery on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
