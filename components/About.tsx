import { CONTACT } from "@/lib/site-data";

export default function About() {
  const trustPoints = [
    {
      icon: "🔥",
      title: "Home of The Gatsby",
      desc: "Our legendary OG Mega Mall Gatsby feeds up to four generously with toasted garlic butter naan, crisp salads, chips, and signature sauces.",
    },
    {
      icon: "✨",
      title: "100% Halal Certified",
      desc: "Strictly Halal certified preparation and ingredients across all chicken, mutton, steak, and vegetarian dishes.",
    },
    {
      icon: "⚡",
      title: "Cooked Fresh to Order",
      desc: "From flame-kissed chicken tikka on the grill to whopper burgers, loaded rolls, and toasted sandwiches — made hot and fresh.",
    },
    {
      icon: "🛵",
      title: "We Deliver & Takeaway",
      desc: `Fast takeaway & local delivery (T's & C's apply). One contact line for all orders, bookings, and deliveries: ${CONTACT.phonePrimary}.`,
    },
  ];

  return (
    <section id="why-us" className="bg-black text-white py-16 sm:py-24 border-y border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-teal">
              Why The Mall Cafe
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs font-bold uppercase tracking-wider text-white/70">
              {CONTACT.since} • {CONTACT.branch}
            </span>
          </div>

          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#993C36] leading-tight">
            &ldquo;{CONTACT.tagline}&rdquo;
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Rooted in Verulam fast-food heritage since 1987, The Mall Cafe delivers the authentic, unapologetic comfort food South Africa loves. From giant share Gatsbys to flame-grilled chicken tikka, hearty Durban bunnies, whopper burgers, and fresh pastas — every item is crafted with intense flavour and quality ingredients.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-white/15 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-teal/50"
            >
              <div className="text-3xl mb-3">{point.icon}</div>
              <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-wide text-white">
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
