"use client";

import React, { useState } from "react";
import Badge from "@/components/Badge";
import FlavorSelector from "@/components/FlavorSelector";
import { useCart } from "@/context/CartContext";
import { CONTACT, type MenuItem } from "@/lib/site-data";

function waItemLink(itemName: string, category: string) {
  const msg = `Hi The Mall Cafe! I'd like to order "${itemName}" from the ${category} menu.`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    msg
  )}`;
}

interface MenuItemRowProps {
  item: MenuItem;
  categoryId: string;
  categoryTitle: string;
}

export function getVariantsForItem(
  item: MenuItem,
  categoryId: string
): { label: string; options: string[] } | null {
  // 1. Gatsby category - Flagship dish proteins
  if (categoryId === "gatsbys") {
    // Individual gatsby items already have distinct protein names
    return null;
  }

  // 2. Pita Shawarmas - Sauce selection
  if (categoryId === "shwarma") {
    return {
      label: "Choose Sauce:",
      options: ["Garlic Sauce", "Peri-Peri", "Sweet Chilli", "BBQ", "Tahini"],
    };
  }

  // 3. Tikka Trail - Spice / Flavor selection
  if (categoryId === "tikka-trail" && !item.name.toLowerCase().includes("roti")) {
    return {
      label: "Choose Tikka Flavour:",
      options: ["Mild", "Medium", "Hot", "Lemon & Herb"],
    };
  }

  // 4. Items with explicit Chicken or Mutton choice
  if (
    item.name.toLowerCase().includes("chicken or mutton") ||
    item.id === "friday-biryani-item" ||
    item.id === "special-dhall-rice"
  ) {
    return {
      label: "Choose Protein:",
      options: ["Chicken", "Mutton"],
    };
  }

  // 5. Classic chicken sandwich assorted flavours
  if (item.id === "classic-chicken-sandwich") {
    return {
      label: "Choose Flavour:",
      options: ["Tikka", "BBQ", "Mayo", "Peri-Peri"],
    };
  }

  return null;
}

export default function MenuItemRow({
  item,
  categoryId,
  categoryTitle,
}: MenuItemRowProps) {
  const { addToCart, getItemQuantity } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [hasVariantError, setHasVariantError] = useState<boolean>(false);
  const [isRecentlyAdded, setIsRecentlyAdded] = useState<boolean>(false);

  const variantConfig = getVariantsForItem(item, categoryId);
  const requiresVariant = variantConfig !== null;

  // Resolve base item display name and variant for Gatsbys
  let cartItemName = item.name;
  let cartVariant: string | undefined = selectedVariant || undefined;

  if (categoryId === "gatsbys") {
    cartItemName = "OG Mega Mall Gatsby";
    if (item.id === "gatsby-steak") cartVariant = "Steak";
    else if (item.id === "gatsby-chicken") cartVariant = "Chicken";
    else if (item.id === "gatsby-soya") cartVariant = "Soya";
    else cartVariant = item.name;
  }

  const currentQtyInCart = getItemQuantity(item.id, cartVariant);

  const handleSelectVariant = (variantName: string) => {
    setSelectedVariant(variantName);
    setHasVariantError(false);
  };

  const handleAddToCart = () => {
    // If item requires a variant selection and none was chosen, prevent adding
    if (requiresVariant && !selectedVariant) {
      setHasVariantError(true);
      return;
    }

    addToCart({
      id: item.id,
      name: cartItemName,
      variant: cartVariant,
      price: item.price,
      categoryTitle,
    });

    // Trigger brief button micro-animation
    setIsRecentlyAdded(true);
    setTimeout(() => {
      setIsRecentlyAdded(false);
    }, 1200);
  };

  return (
    <li className="py-3.5 sm:py-4 flex flex-col justify-between gap-2 sm:gap-3 hover:bg-neutral-50/80 transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
        {/* Left: Item Name, Badges, and Description */}
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display text-base sm:text-lg font-black text-black leading-tight">
              {item.name}
            </span>
            {item.badge && <Badge type={item.badge} />}
            {currentQtyInCart > 0 && (
              <span className="bg-teal/15 text-teal border border-teal/40 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                {currentQtyInCart} in cart
              </span>
            )}
          </div>
          {item.contents && (
            <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-normal">
              {item.contents}
            </p>
          )}
          {item.note && (
            <p className="mt-1 text-[11px] sm:text-xs text-teal font-semibold italic">
              * {item.note}
            </p>
          )}
        </div>

        {/* Leader dots for desktop */}
        <div className="hidden md:block dotted-leader opacity-25" />

        {/* Right: Price & Actions */}
        <div className="shrink-0 flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
          <span className="font-display text-base sm:text-lg font-black text-black">
            {item.price}
          </span>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Add ${item.name} to cart`}
            className={`min-h-[38px] px-3.5 py-1.5 rounded-md font-display text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95 ${
              isRecentlyAdded
                ? "bg-emerald-600 text-white scale-105"
                : "bg-teal hover:bg-[#3D8583] text-white"
            }`}
          >
            {isRecentlyAdded ? (
              <>
                <span className="text-sm">✓</span>
                <span>Added</span>
              </>
            ) : (
              <>
                <span className="text-sm leading-none">+</span>
                <span>Add</span>
              </>
            )}
          </button>

          {/* 1-tap single-item WhatsApp link sitting alongside */}
          <a
            href={waItemLink(item.name, categoryTitle)}
            target="_blank"
            rel="noopener noreferrer"
            title={`Single-item WhatsApp enquiry for ${item.name}`}
            aria-label={`Enquire about ${item.name} on WhatsApp`}
            className="text-neutral-400 hover:text-emerald-600 active:scale-90 transition-transform min-h-[38px] min-w-[38px] flex items-center justify-center p-1.5 rounded-full hover:bg-emerald-50 active:bg-emerald-100"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.146-.519-1.859-.764-3.048-2.656-3.14-2.778-.093-.122-.751-.998-.751-1.905 0-.907.476-1.353.646-1.538.169-.185.37-.231.494-.231.123 0 .247.001.354.006.113.005.263-.043.411.312.155.372.529 1.29.575 1.383.046.092.077.2.015.323-.061.123-.092.2-.185.308-.092.108-.194.241-.277.323-.092.093-.189.194-.081.379.108.185.479.79 1.028 1.278.708.631 1.305.826 1.49.919.185.092.293.077.401-.046.108-.124.462-.539.585-.724.124-.185.247-.154.416-.092.169.062 1.077.508 1.262.6.185.093.308.139.354.216.046.077.046.446-.098.851z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Variant / Flavor Selector if applicable */}
      {variantConfig && (
        <div className="pt-1">
          <FlavorSelector
            label={variantConfig.label}
            options={variantConfig.options}
            selectedOption={selectedVariant}
            onSelectOption={handleSelectVariant}
            hasError={hasVariantError}
            errorMessage="Please select an option before adding"
          />
        </div>
      )}
    </li>
  );
}
