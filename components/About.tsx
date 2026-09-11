import { CONTACT } from "@/lib/site-data";

export default function About() {
  const trustPoints = [
    {
      icon: "🔥",
      title: "Home of The Gatsby",
      desc: "Our legendary 80's style Mega Mall Gatsby feeds four generously with authentic, bold flavours and secret sauces.",
    },
    {
      icon: "✨",
      title: "100% Halal Certified",
      desc: "Strictly Halal ingredients and preparation across all beef, chicken, mutton, and vegetarian dishes.",
    },
    {
      icon: "⚡",
      title: "Cooked Fresh to Order",
      desc: "From our flame-grilled chicken tikka to our 120g smash patties and hand-folded sandwiches — made hot and fresh.",
    },
    {
      icon: "🛵",
      title: "Takeaway & Delivery",
      desc: "Easy direct ordering on WhatsApp or phone call. Collect piping hot or get fast local delivery.",
    },
  ];

  return (
    <section id="why-us" className="bg-ink text-white py-16 sm:py-24 border-y border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-widest text-turmeric">
            Why The Mall Cafe
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            &ldquo;{CONTACT.tagline}&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Rooted in local fast-food heritage, The Mall Cafe delivers the hearty, unapologetic comfort food South Africa loves. From giant share Gatsbys to flame-charred tandoori chicken tikka, rich Durban bunnies, and juicy smash burgers — every item is crafted with intense flavour and quality ingredients.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-white/15 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{point.icon}</div>
              <h3 className="font-display text-lg font-black uppercase tracking-wide text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
