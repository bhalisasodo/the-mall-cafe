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
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-[#993C36] text-white shadow-xs ${sizeClasses} ${className}`}
          title="Spicy / Hot"
        >
          <span aria-hidden="true">🌶</span>
          <span>HOT</span>
        </span>
      );
    case "NEW":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-teal text-white shadow-xs ${sizeClasses} ${className}`}
          title="New Item"
        >
          <span aria-hidden="true">🆕</span>
          <span>NEW</span>
        </span>
      );
    case "VEG":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-emerald-700 text-white shadow-xs ${sizeClasses} ${className}`}
          title="Vegetarian / Soya"
        >
          <span aria-hidden="true">🌱</span>
          <span>VEG</span>
        </span>
      );
    case "FEEDS 4":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-black text-white border border-teal/50 shadow-xs ${sizeClasses} ${className}`}
        >
          <span>FEEDS 4</span>
        </span>
      );
    case "FLAGSHIP":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-teal text-white shadow-xs ${sizeClasses} ${className}`}
        >
          <span>FLAGSHIP</span>
        </span>
      );
    case "HALAL":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-black text-emerald-400 border border-emerald-500/40 ${sizeClasses} ${className}`}
        >
          <span>HALAL</span>
        </span>
      );
    case "SPECIAL":
      return (
        <span
          className={`inline-flex items-center gap-1 rounded font-black uppercase tracking-wider bg-black text-white border border-teal/40 ${sizeClasses} ${className}`}
        >
          <span>SPECIAL</span>
        </span>
      );
    default:
      return null;
  }
}
