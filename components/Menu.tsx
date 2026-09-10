import { MENU } from "@/lib/site-data";

export default function Menu() {
  return (
    <section id="menu" className="bg-cream py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 sm:mb-12 border-b-2 border-ink pb-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              The Menu
            </h2>
            <span className="rounded bg-ink/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-ink/70">
              Prices in ZAR
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            <span className="font-semibold text-chili">Sample Selection:</span> Official menu and pricing launching soon. Contact us on WhatsApp for today&apos;s specials and daily availability.
          </p>
        </div>

        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-16">
          {MENU.map((section) => (
            <div key={section.title} className="rounded-lg bg-sand/30 p-4 sm:bg-transparent sm:p-0">
              <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-chili border-b border-chili/20 pb-1.5 sm:border-0 sm:pb-0">
                {section.title}
              </h3>
              <ul className="mt-2 sm:mt-4 divide-y divide-ink/10">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-3 py-3.5 sm:py-4">
                    <div className="flex-1 pr-2">
                      <p className="font-display text-base font-bold leading-snug">
                        {item.name}
                      </p>
                      <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-ink/65 leading-normal">
                        {item.description}
                      </p>
                    </div>
                    <p className="shrink-0 whitespace-nowrap font-display text-base font-bold text-curry pt-0.5">
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
