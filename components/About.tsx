export default function About() {
  return (
    <section id="about" className="bg-sand py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-8">
        <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
          Verulam flavour, no shortcuts.
        </h2>
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
          <p>
            The Mall Cafe started as a street-food stall built on one idea:
            South African Indian food, cooked properly, served fast. Every
            curry is made from scratch, every roti is rolled by hand, and
            every bunny is hollowed to order — because street food doesn&apos;t
            mean rushed food.
          </p>
          <p>
            We fold in the fusion dishes our regulars kept asking for —
            masala boerie rolls, loaded curry chips, paneer tikka fries —
            without losing the flavour our stall was built on.
          </p>
        </div>
      </div>
    </section>
  );
}
