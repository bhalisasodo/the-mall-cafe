import { MENU } from "@/lib/site-data";

export default function Menu() {
  return (
    <section id="menu" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 border-b-2 border-ink pb-4">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              The Menu
            </h2>
            <span className="hidden text-sm font-medium text-ink/60 md:block">
              Prices in ZAR
            </span>
          </div>
          <p className="mt-2 text-sm text-ink/70">
            <span className="font-semibold text-chili">Sample Selection:</span> Official menu and pricing launching soon. Contact us on WhatsApp for today&apos;s specials and daily availability.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16">
          {MENU.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-chili">
                {section.title}
              </h3>
              <ul className="mt-4 divide-y divide-ink/10">
                {section.items.map((item) => (
                  <li key={item.name} className="flex gap-4 py-4">
                    <div className="flex-1">
                      <p className="font-display text-base font-bold leading-snug">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-ink/65">
                        {item.description}
                      </p>
                    </div>
                    <p className="whitespace-nowrap font-display text-base font-bold text-curry">
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
