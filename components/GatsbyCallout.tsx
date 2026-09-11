import Image from "next/image";
import Badge from "@/components/Badge";
import { CONTACT, WHATSAPP_GATSBY_MESSAGE } from "@/lib/site-data";
import gatsbyImg from "@/public/menu/gatsby-hero-16x9.jpg";

function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function GatsbyCallout() {
  const gatsbyItems = [
    {
      name: "Soya Gatsby",
      tag: "VEG" as const,
      price: "R115",
      desc: "Seasoned grilled soya cuts, chips, crisp greens & sauce",
    },
    {
      name: "Chicken Gatsby",
      tag: "POPULAR" as const,
      price: "R130",
      desc: "Tender seasoned chicken fillet cubes, golden chips & house sauce",
    },
    {
      name: "Steak Gatsby",
      tag: "FLAGSHIP" as const,
      price: "R148",
      desc: "Grilled tender steak slices, chips, fried onions & signature sauce",
    },
  ];

  return (
    <section
      id="gatsby-feature"
      className="relative bg-zinc-950 text-white py-14 sm:py-20 border-y border-white/10"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Banner Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/15">
          <div className="flex items-center gap-2">
            <span className="bg-chili text-white text-xs font-black uppercase px-2.5 py-1 tracking-wider">
              Flagship Feast
            </span>
            <span className="text-turmeric text-xs font-bold uppercase tracking-wider">
              80&apos;s Style Heritage • Verulam
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70 font-bold uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            100% Halal • Feeds 4 Generously
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Image with authentic badge overlays */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-black group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={gatsbyImg}
                  alt="The Mega Mall Gatsby - The Big Share Meal Feeds 4"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating badges on image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-black/85 backdrop-blur-md border border-amber-400/80 text-turmeric px-3 py-1 font-display text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg rounded">
                  Feeds 4 Hungry People
                </span>
                <span className="bg-red-600/90 text-white px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider w-fit rounded">
                  Big Share Meal
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <span className="bg-black/90 border border-white/30 text-white px-3 py-1 text-xs font-bold uppercase rounded backdrop-blur-md">
                  From R115
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Flavours, and Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-turmeric font-display text-sm font-bold uppercase tracking-widest">
                The Legend of The Mall Cafe Verulam
              </p>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                The Mega Mall Gatsby
              </h2>
              <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
                The legendary share meal that made us famous. An enormous, freshly baked loaf stuffed from crust to crust with seasoned meat or veg, golden spiced chips, crisp salad, and drenched in our mouth-watering signature sauces.
              </p>

              {/* Sauce selector pill block */}
              <div className="mt-5 rounded-lg bg-white/5 border border-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-turmeric">
                  Choose Your Flavor:
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-chili/20 border border-chili px-3 py-1 text-xs font-bold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-chili" />
                    Creamy Mexican Sauce
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/20 border border-teal px-3 py-1 text-xs font-bold text-teal">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    Original Mall Sauce
                  </span>
                </div>
              </div>

              {/* 3 Flavors / Options List with Dotted Leader */}
              <div className="mt-6 space-y-3.5">
                {gatsbyItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 pb-3 border-b border-white/10"
                  >
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display text-lg sm:text-xl font-black text-white uppercase">
                          {item.name}
                        </span>
                        <Badge type={item.tag} />
                      </div>
                      <p className="mt-0.5 text-xs text-white/70">
                        {item.desc}
                      </p>
                    </div>

                    <div className="hidden sm:block dotted-leader opacity-25" />

                    <div className="flex items-baseline justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
                      <span className="sm:hidden text-xs font-semibold text-turmeric/80 uppercase">
                        Feeds 4
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-black text-turmeric">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(WHATSAPP_GATSBY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-chili px-6 py-4 font-display text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all hover:bg-red-700 active:scale-98"
              >
                <span>Order Mega Gatsby on WhatsApp</span>
                <span aria-hidden="true">💬</span>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center border border-white/30 bg-transparent px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
              >
                Explore Full Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
