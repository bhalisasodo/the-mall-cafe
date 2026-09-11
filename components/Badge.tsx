import type { BadgeType } from "@/lib/site-data";

interface BadgeProps {
  type: BadgeType;
  className?: string;
  size?: "sm" | "md";
}

export default function Badge({ type, className = "", size = "sm" }: BadgeProps) {
  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-[10px] sm:text-xs"
      : "px-2.5 py-1 text-xs sm:text-sm";

  switch (type) {
    case "HOT":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-chili text-white shadow-sm ${sizeClasses} ${className}`}
          title="Spicy / Hot"
        >
          <span aria-hidden="true">🌶</span>
          <span>HOT</span>
        </span>
      );
    case "NEW":
      return (
        <span
          className={`inline-flex items-center rounded font-black uppercase tracking-wider bg-[#FF3B30] text-white shadow-sm ${sizeClasses} ${className}`}
        >
          NEW
        </span>
      );
    case "VEG":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-green-700 text-white shadow-sm ${sizeClasses} ${className}`}
          title="Vegetarian"
        >
          <span aria-hidden="true">🌱</span>
          <span>VEG</span>
        </span>
      );
    case "POPULAR":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-turmeric text-ink shadow-sm ${sizeClasses} ${className}`}
        >
          <span aria-hidden="true">★</span>
          <span>POPULAR</span>
        </span>
      );
    case "FEEDS 4":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-ink text-turmeric border border-turmeric/40 shadow-sm ${sizeClasses} ${className}`}
        >
          <span>FEEDS 4</span>
        </span>
      );
    case "FLAGSHIP":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-teal text-white shadow-sm ${sizeClasses} ${className}`}
        >
          <span>FLAGSHIP</span>
        </span>
      );
    case "HALAL":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-ink/90 text-cream border border-cream/30 ${sizeClasses} ${className}`}
        >
          <span>HALAL</span>
        </span>
      );
    case "SWEET":
      return (
        <span
          className={`inline-flex items-center rounded font-black uppercase tracking-wider bg-amber-600 text-white ${sizeClasses} ${className}`}
        >
          SWEET
        </span>
      );
    default:
      return null;
  }
}
