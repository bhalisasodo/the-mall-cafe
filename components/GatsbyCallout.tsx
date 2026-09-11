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
      name: "Soya (includes mushroom)",
      tag: "VEG" as const,
      price: "R110.00",
      desc: "Toasted naan smothered in garlic butter, seasoned grilled soya with mushroom, fresh salads, crispy chips, cheese & signature sauces",
    },
    {
      name: "Chicken",
      tag: "FLAGSHIP" as const,
      price: "R130.00",
      desc: "Toasted naan smothered in garlic butter, tender chicken, fresh salads, polony, crispy chips, cheese & signature sauces",
    },
    {
      name: "Steak",
      tag: "FLAGSHIP" as const,
      price: "R140.00",
      desc: "Toasted naan smothered in garlic butter, juicy steak, fresh salads, polony, crispy chips, cheese & signature sauces",
    },
  ];

  return (
    <section
      id="gatsbys"
      className="relative bg-black text-white py-14 sm:py-20 border-y border-white/10"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Banner Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/15">
          <div className="flex items-center gap-2">
            <span className="bg-teal text-white text-xs font-black uppercase px-2.5 py-1 tracking-wider rounded">
              Flagship Dish
            </span>
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
              {CONTACT.since} • {CONTACT.branch}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/80 font-bold uppercase">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              100% Halal
            </span>
            <span>•</span>
            <span className="text-teal">Feeds Up To 4</span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Image with authentic badge overlays */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-black group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={gatsbyImg}
                  alt="OG Mega Mall Gatsbys - Flagship Dish Feeds up to 4"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
              </div>

              {/* Floating badges on image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-black/90 backdrop-blur-md border border-teal text-teal px-3 py-1 font-display text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg rounded">
                  Feeds Up To 4
                </span>
                <span className="bg-teal text-white px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider w-fit rounded">
                  Flagship Dish
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <span className="bg-black/90 border border-white/30 text-white px-3 py-1 text-xs font-bold uppercase rounded backdrop-blur-md">
                  From R110.00
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Description, and Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-teal font-display text-xs sm:text-sm font-bold uppercase tracking-widest">
                The Mall Cafe Verulam • {CONTACT.since}
              </p>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                OG Mega Mall Gatsbys
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">
                Toasted naan smothered in garlic butter, loaded with your choice of juicy steak or tender chicken, fresh salads, polony, crispy chips, cheese, and finished with our signature sauces. <strong className="text-teal font-black">Feeds up to 4.</strong>
              </p>

              {/* 3 Flavors / Options List with Dotted Leader */}
              <div className="mt-6 space-y-3.5">
                {gatsbyItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 pb-3 border-b border-white/10"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display text-base sm:text-lg font-black text-white uppercase">
                          {item.name}
                        </span>
                        <Badge type={item.tag} />
                      </div>
                      <p className="mt-0.5 text-xs text-white/70 leading-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="hidden sm:block dotted-leader opacity-25" />

                    <div className="flex items-baseline justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
                      <span className="sm:hidden text-xs font-semibold text-teal uppercase">
                        Feeds 4
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-black text-teal">
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
                className="flex-1 inline-flex items-center justify-center gap-2 bg-teal hover:bg-[#3D8583] px-6 py-4 font-display text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all active:scale-[0.98]"
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
