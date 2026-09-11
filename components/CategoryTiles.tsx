import Image from "next/image";
import Link from "next/link";
import { CATEGORIES_LIST } from "@/lib/site-data";

export default function CategoryTiles() {
  return (
    <section className="bg-sand/40 py-12 sm:py-16 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-teal">
              Browse By Category
            </span>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
              Craving Something Good?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-black/70 max-w-sm">
            Tap any category to jump directly to its menu items, flavours, and combo pricing.
          </p>
        </div>

        {/* Responsive Grid of Category Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES_LIST.map((cat) => (
            <Link
              key={cat.id}
              href={`#${cat.id}`}
              className="group relative overflow-hidden rounded-xl border border-black/15 bg-black shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-teal"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Title and blurb at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 text-white">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal line-clamp-1">
                  {cat.blurb}
                </p>
                <h3 className="mt-0.5 font-display text-xs sm:text-sm md:text-base font-black uppercase tracking-tight text-white group-hover:text-teal transition-colors leading-tight">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
