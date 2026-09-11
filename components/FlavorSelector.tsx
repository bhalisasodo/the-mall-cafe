"use client";

import React from "react";

export type VariantOption = {
  id?: string;
  name: string;
  price?: string;
  badge?: string;
};

interface FlavorSelectorProps {
  options: (string | VariantOption)[];
  selectedOption: string | null;
  onSelectOption: (optionName: string, price?: string) => void;
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  size?: "sm" | "md";
}

export default function FlavorSelector({
  options,
  selectedOption,
  onSelectOption,
  label = "Select option:",
  hasError = false,
  errorMessage = "Please choose an option first",
  size = "sm",
}: FlavorSelectorProps) {
  if (!options || options.length === 0) return null;

  const normalizedOptions: VariantOption[] = options.map((opt) =>
    typeof opt === "string" ? { name: opt } : opt
  );

  return (
    <div className="mt-2 w-full">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-black/70">
          {label}
        </span>
        {hasError && (
          <span
            role="alert"
            className="text-[11px] font-bold text-[#993C36] animate-pulse flex items-center gap-1"
          >
            <span>⚠️</span>
            <span>{errorMessage}</span>
          </span>
        )}
      </div>

      <div
        role="radiogroup"
        aria-label={label}
        className={`flex flex-wrap items-center gap-1.5 p-1 rounded-lg transition-colors ${
          hasError ? "bg-[#993C36]/10 ring-1 ring-[#993C36]" : "bg-black/5"
        }`}
      >
        {normalizedOptions.map((opt) => {
          const isSelected = selectedOption === opt.name;
          return (
            <button
              key={opt.name}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectOption(opt.name, opt.price)}
              className={`rounded-md font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                size === "sm"
                  ? "px-2.5 py-1 text-[11px] tracking-wider"
                  : "px-3 py-1.5 text-xs tracking-wider"
              } ${
                isSelected
                  ? "bg-teal text-white shadow-xs scale-[1.02]"
                  : "bg-white text-black/80 hover:bg-white/90 border border-black/10 hover:border-teal/40"
              }`}
            >
              <span>{opt.name}</span>
              {opt.price && (
                <span
                  className={`text-[10px] font-black ${
                    isSelected ? "text-white/90" : "text-teal"
                  }`}
                >
                  ({opt.price})
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
