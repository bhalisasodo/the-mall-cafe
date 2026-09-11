// Central configuration for contact details, locations, hours, and structured menu items.
// Tailored for The Mall Cafe (Verulam branch) — authoritative source of truth.

import type { StaticImageData } from "next/image";
import gatsbyImg from "@/public/menu/gatsby-hero-16x9.jpg";
import classicBurgersImg from "@/public/menu/classic-burgers-food.jpg";
import chickenTikkaImg from "@/public/menu/chicken-tikka-food.jpg";
import shawarmaImg from "@/public/menu/shawarma-food.jpg";
import toastedSandwichImg from "@/public/menu/toasted-sandwich-food.jpg";
import bunnyChowImg from "@/public/menu/bunny-chow-food.jpg";
import rollsImg from "@/public/menu/smash-burgers-food.jpg";

export const CONTACT = {
  brandName: "The Mall Cafe",
  branch: "Verulam",
  since: "Since 1987",
  headline: "Home of The Gatsby",
  tagline: "Passion for Taste",
  address: "94 Wick Street, Verulam",
  addressMapsQuery: "94 Wick Street, Verulam, 4339",
  // Single contact number site-wide for calls, WhatsApp, bookings, and deliveries:
  phonePrimary: "081 577 6930",
  phoneTelPrimary: "+27815776930",
  whatsappNumber: "27815776930",
  whatsappDisplay: "081 577 6930",
  isHalal: true,
  halalText: "Strictly 100% Halal Certified",
  deliveryNote: "We Deliver (T's & C's apply)",
  proudlySA: "Proudly South African",
  // Social links (placeholder href="#" until client supplies actual profile URLs)
  // PLACEHOLDER: Update href with client's official Instagram URL before launch
  instagramPlaceholder: "#",
  // PLACEHOLDER: Update href with client's official TikTok URL before launch
  tiktokPlaceholder: "#",
};

export const HOURS = [
  { day: "Monday – Thursday", time: "10:00 – 19:30" },
  { day: "Friday", time: "10:00 – 12:00, 13:30 – 20:00" },
  { day: "Saturday", time: "10:00 – 20:00" },
  { day: "Sunday", time: "10:00 – 19:30" },
];

export const WHATSAPP_ORDER_MESSAGE =
  "Hi! I'd like to place an order at The Mall Cafe Verulam.";
export const WHATSAPP_GATSBY_MESSAGE =
  "Hi! I'd like to order the OG Mega Mall Gatsby (Feeds up to 4) from The Mall Cafe Verulam.";
export const WHATSAPP_DELIVERY_MESSAGE =
  "Hi! I'd like to enquire about delivery from The Mall Cafe Verulam.";
export const WHATSAPP_BOOKING_MESSAGE =
  "Hi! I'd like to make a booking enquiry at The Mall Cafe Verulam.";

export type BadgeType = "HALAL" | "NEW" | "HOT" | "VEG" | "FEEDS 4" | "FLAGSHIP" | "SPECIAL";

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  contents?: string;
  badge?: BadgeType;
  note?: string;
};

export type MenuSubSection = {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  tagline?: string;
  flavors?: string[];
  notice?: string;
  footnote?: string;
  image?: StaticImageData | string;
  accentColor?: "teal" | "red" | "black";
  items?: MenuItem[];
  subsections?: MenuSubSection[];
};

export const CATEGORIES_LIST: {
  id: string;
  name: string;
  image: StaticImageData | string;
  blurb: string;
}[] = [
  {
    id: "gatsbys",
    name: "OG Mega Mall Gatsbys",
    image: gatsbyImg,
    blurb: "Flagship Dish • Feeds up to 4",
  },
  {
    id: "wick-street-whoppers",
    name: "Wick Street Whoppers",
    image: classicBurgersImg,
    blurb: "Mutton, Chicken, Soya & Crunch",
  },
  {
    id: "tikka-trail",
    name: "Verulam's Tikka Trail",
    image: chickenTikkaImg,
    blurb: "Charcoal Flame Grills & Combos",
  },
  {
    id: "village-chows",
    name: "The Village Chows",
    image: bunnyChowImg,
    blurb: "Bunnies, Curries & Rice, Tubs",
  },
  {
    id: "dykes-river-rolls",
    name: "Dykes River Rolls",
    image: rollsImg,
    blurb: "Loaded Jumbo Rolls & Melts",
  },
  {
    id: "best-on-bread",
    name: "Verulam's Best on Bread",
    image: toastedSandwichImg,
    blurb: "Toasted Sandwiches & Dagwoods",
  },
  {
    id: "shwarma",
    name: "Pita Sharwamas",
    image: shawarmaImg,
    blurb: "Sautéed Garlic Pita Pockets",
  },
  {
    id: "pasta-la-vista",
    name: "Pasta La Vista, Verulam",
    image: rollsImg,
    blurb: "Hearty Chicken, Steak & Cheese",
  },
  {
    id: "morning-market",
    name: "The Morning Market",
    image: toastedSandwichImg,
    blurb: "Hearty Breakfast Grills & Omelettes",
  },
  {
    id: "top-ups-sides",
    name: "Top-Ups & Sides",
    image: bunnyChowImg,
    blurb: "Fries, Handmade Roti & Garlic Pita",
  },
  {
    id: "friday-biryani",
    name: "Friday = Biryani & Specials",
    image: bunnyChowImg,
    blurb: "Authentic Durban Biryani & Akhni",
  },
  {
    id: "salads",
    name: "Fresh Salads",
    image: bunnyChowImg,
    blurb: "Garden Salad & Grilled Chicken",
  },
];

export const MENU: MenuCategory[] = [
  {
    id: "morning-market",
    title: "The Morning Market",
    subtitle: "Breakfast Classics Served Fresh",
    accentColor: "teal",
    image: toastedSandwichImg,
    items: [
      {
        id: "fairview-farmhouse",
        name: "Fairview Farmhouse",
        price: "R39.90",
        contents: "Egg, Toast, Patty, Chips and Sauce",
      },
      {
        id: "hazelmere-sunrise",
        name: "Hazelmere Sunrise",
        price: "R45.00",
        contents: "Egg, Toast, Sausage, Chips & Sauce",
      },
      {
        id: "powergrill",
        name: "Powergrill",
        price: "R65.00",
        contents: "2 Eggs, Toast, Patty, Sausage, Chips & Sauce",
      },
      {
        id: "oaklands-omelette",
        name: "The Oaklands Omelette",
        price: "R35.90",
        contents: "2 Egg Omelette, served with 2 slices of toast",
      },
    ],
  },
  {
    id: "village-chows",
    title: "The Village Chows (Bunnies)",
    subtitle: "Famous Quarter Bunnies, Curry & Rice, and Takeaway Tubs",
    accentColor: "teal",
    image: bunnyChowImg,
    subsections: [
      {
        id: "village-bunnies",
        title: "Bunnies",
        items: [
          {
            id: "broad-beans-bunny",
            name: "Broad Beans Bunny",
            price: "R35.00",
            badge: "VEG",
          },
          {
            id: "sugar-beans-bunny",
            name: "Sugar Beans Bunny",
            price: "R30.00",
            badge: "VEG",
          },
          {
            id: "chicken-bunny",
            name: "Chicken Bunny",
            price: "R45.00",
          },
          {
            id: "mutton-bunny",
            name: "Mutton Bunny",
            price: "R95.00",
          },
        ],
      },
      {
        id: "curry-and-rice",
        title: "Curry and Rice",
        items: [
          {
            id: "sugar-beans-rice",
            name: "Sugar Beans & Rice",
            price: "R35.00",
            badge: "VEG",
          },
          {
            id: "broad-beans-rice",
            name: "Broad Beans & Rice",
            price: "R30.00",
            badge: "VEG",
          },
          {
            id: "chicken-rice",
            name: "Chicken & Rice",
            price: "R50.00",
          },
          {
            id: "mutton-rice",
            name: "Mutton & Rice",
            price: "R95.00",
          },
        ],
      },
      {
        id: "tub-curries",
        title: "Tub Curries",
        items: [
          {
            id: "sugar-beans-tub",
            name: "Sugar Beans",
            price: "R35.00",
            badge: "VEG",
          },
          {
            id: "broad-beans-tub",
            name: "Broad Beans",
            price: "R30.00",
            badge: "VEG",
          },
          {
            id: "chicken-tub",
            name: "Chicken",
            price: "R50.00",
          },
          {
            id: "mutton-tub",
            name: "Mutton",
            price: "R95.00",
          },
        ],
      },
    ],
  },
  {
    id: "dykes-river-rolls",
    title: "Dykes River Rolls (Jumbo Rolls)",
    subtitle: "Loaded Toasted Jumbo Rolls Packed with Flavour",
    accentColor: "black",
    image: rollsImg,
    items: [
      {
        id: "chicken-mayo-roll",
        name: "Chicken & Mayo Roll",
        price: "R45.00",
      },
      {
        id: "chicken-cheese-stack",
        name: "Chicken Cheese-Stack",
        price: "R50.00",
      },
      {
        id: "steak-roll",
        name: "Steak Roll",
        price: "R55.00",
      },
      {
        id: "steak-cheese-stack",
        name: "Steak Cheese-Stack",
        price: "R65.00",
      },
      {
        id: "cheese-chip-mushroom-roll",
        name: "Cheese Chip & Mushroom Roll",
        price: "R40.00",
        badge: "VEG",
      },
      {
        id: "chip-roll",
        name: "Chip Roll",
        price: "R25.00",
        badge: "VEG",
      },
    ],
  },
  {
    id: "wick-street-whoppers",
    title: "Wick Street Whoppers (Burgers)",
    subtitle: "Signature Mutton, Fillet Chicken, Soya & Crunchy Burgers",
    accentColor: "teal",
    footnote: "Pictures are serving suggestions. Prices subject to change without notice. E&OE.",
    image: classicBurgersImg,
    subsections: [
      {
        id: "mighty-mutton",
        title: "Mighty Mutton",
        note: "excludes chips",
        items: [
          {
            id: "mighty-mall",
            name: "Mighty Mall",
            price: "R40.00",
          },
          {
            id: "hot-mex",
            name: "Hot Mex (X-Hot)",
            price: "R40.00",
            badge: "HOT",
          },
          {
            id: "mighty-cheese",
            name: "Mighty Cheese",
            price: "R45.00",
          },
          {
            id: "mighty-egg",
            name: "Mighty Egg",
            price: "R45.00",
          },
          {
            id: "double-dealer",
            name: "Double Dealer",
            price: "R65.00",
          },
          {
            id: "double-melter",
            name: "Double Melter",
            price: "R70.00",
          },
        ],
      },
      {
        id: "mighty-chicken",
        title: "Mighty Chicken Fillet",
        note: "excludes chips",
        items: [
          {
            id: "chicken-fillet",
            name: "Chicken Fillet",
            price: "R45.00",
          },
          {
            id: "prego-chicken",
            name: "Prego Chicken",
            price: "R45.00",
          },
          {
            id: "chicken-cheese",
            name: "Chicken Cheese",
            price: "R50.00",
          },
          {
            id: "double-chick",
            name: "Double Chick",
            price: "R65.00",
          },
          {
            id: "double-chick-melter",
            name: "Double Chick Melter",
            price: "R70.00",
          },
        ],
      },
      {
        id: "mighty-soya",
        title: "Mighty Soya",
        note: "excludes chips",
        items: [
          {
            id: "veggie-burger-soya",
            name: "The Veggie Burger (Soya)",
            price: "R30.00",
            badge: "VEG",
          },
          {
            id: "veggie-burger-soya-hot",
            name: "The Veggie Burger (Soya) (X-Hot)",
            price: "R30.00",
            badge: "HOT",
          },
          {
            id: "soya-cheese",
            name: "Soya Cheese",
            price: "R35.00",
            badge: "VEG",
          },
          {
            id: "soya-double-dealer",
            name: "Soya Double Dealer",
            price: "R40.00",
            badge: "VEG",
          },
          {
            id: "soya-double-melter",
            name: "Soya Double Melter",
            price: "R45.00",
            badge: "VEG",
          },
        ],
      },
      {
        id: "crunch-burger-section",
        title: "Crunch Burger",
        items: [
          {
            id: "crunch-burger",
            name: "Crunch Burger",
            price: "R55.00",
            badge: "NEW",
            contents:
              "A crispy chicken fillet in our signature crunchy coating, and special sauces on a toasted bun!",
          },
        ],
      },
    ],
  },
  {
    id: "tikka-trail",
    title: "Verulam's Tikka Trail",
    subtitle: "Charcoal Flame-Grilled Chicken Tikka, Kebabs & Big Feast Combos",
    accentColor: "teal",
    notice: "Swap outs at R15 per swap.",
    image: chickenTikkaImg,
    items: [
      {
        id: "tikka-quarter-leg",
        name: "¼ Tikka Meal (Leg)",
        price: "R55.00",
        contents: "Served with roti, chips, sauce & lemon",
      },
      {
        id: "tikka-quarter-breast",
        name: "¼ Tikka Meal (Breast)",
        price: "R65.00",
        contents: "Served with roti, chips, sauce & lemon",
      },
      {
        id: "tikka-half-meal",
        name: "½ Tikka Meal",
        price: "R100.00",
        contents: "Served with 2 roti, chips, sauce & lemon",
      },
      {
        id: "awesome-foursome",
        name: "Awesome Foursome",
        price: "R190.00",
        badge: "FEEDS 4",
        contents:
          "4× ¼ Tikka, 4× Roti, 4× Lemon, 4× Sauce, Large Portion Chips (no swap outs)",
      },
      {
        id: "the-big-feed",
        name: "The Big Feed",
        price: "R295.00",
        badge: "FEEDS 4",
        contents:
          "4× ¼ Tikka, 4× Cubes Malai, 4× Cubes Tukras (Boti), 2× Skewer Kebabs, 5× Roti, 5× Sachet Sauce, 5× Lemon & Large Chips (no swap outs)",
      },
      {
        id: "tikka-mash-up",
        name: "Tikka Mash-Up (Breast)",
        price: "R110.00",
        contents:
          "¼ Tikka, 1× Skewer Kebab, served with 2× Roti, Chips, Sauce & Lemon",
      },
      {
        id: "the-2-2-2-combo",
        name: "The 2-2-2 Combo",
        price: "R190.00",
        contents:
          "2× ¼ Tikka, 2× Skewer Kebab, 2× Cubes Malai, 2× Cube Tukras, served with 4× Roti, Chips, Sauce & Lemon",
      },
      {
        id: "malai-meal",
        name: "Malai Meal",
        price: "R65.00",
        contents:
          "4× Boneless Chicken Cubes marinated in a creamy sauce, served with Roti, Chips, Sauce & Lemon",
      },
      {
        id: "kebab-meal",
        name: "Kebab Meal",
        price: "R60.00",
        contents: "2× Skewer Kebabs served with Roti, Chips, Sauce & Lemon",
      },
      {
        id: "tukra-meal",
        name: "Tukra Meal",
        price: "R60.00",
        contents:
          "4× Cubes Tukras (Boti) served with Roti, Chips, Sauce & Lemon",
      },
    ],
  },
  {
    id: "best-on-bread",
    title: "Verulam's Best on Bread (Sandwiches)",
    subtitle: "Toasted sandwiches with delicious fillings",
    accentColor: "black",
    image: toastedSandwichImg,
    items: [
      {
        id: "cheesy-chippy",
        name: "Cheesy Chippy",
        price: "R18.00",
      },
      {
        id: "cheese-tomato",
        name: "Cheese & Tomato",
        price: "R25.00",
        badge: "VEG",
      },
      {
        id: "cheese-mushroom",
        name: "Cheese & Mushroom",
        price: "R29.90",
        badge: "VEG",
      },
      {
        id: "egg-and-mayo",
        name: "Egg and Mayo",
        price: "R25.90",
      },
      {
        id: "baked-beans-chips",
        name: "Baked Beans & Chips",
        price: "R40.00",
        badge: "VEG",
      },
      {
        id: "classic-chicken-sandwich",
        name: "Classic Chicken (assorted flavours)",
        price: "R40.00",
      },
      {
        id: "steak-gobble",
        name: "Steak Gobble",
        price: "R60.00",
      },
      {
        id: "steak-cheese-gobble",
        name: "Steak & Cheese Gobble",
        price: "R65.00",
      },
      {
        id: "mall-dagwood",
        name: "Mall Dagwood",
        price: "R55.00",
      },
      {
        id: "dagwood-double-d",
        name: "Dagwood Double-D",
        price: "R60.00",
        note: "Triple stack sandwich with polony, mutton pattie & egg (standard excl. egg).",
      },
    ],
  },
  {
    id: "shwarma",
    title: "Pita Sharwamas",
    subtitle:
      "Garlic pita with your choice of filling, sautéed with onion and bell peppers, salads and sauce",
    accentColor: "teal",
    image: shawarmaImg,
    items: [
      {
        id: "chicken-shawarma",
        name: "Chicken Shawarma",
        price: "R50.00",
      },
      {
        id: "steak-shawarma",
        name: "Steak Shawarma",
        price: "R65.00",
      },
      {
        id: "soya-shawarma",
        name: "Soya Shawarma",
        price: "R35.00",
        badge: "VEG",
      },
      {
        id: "soya-mushroom-shawarma",
        name: "Soya & Mushroom Shawarma",
        price: "R45.00",
        badge: "VEG",
      },
    ],
  },
  {
    id: "pasta-la-vista",
    title: "Pasta La Vista, Verulam (Pastas)",
    subtitle: "Hot, Hearty & Freshly Made Savoury Pastas",
    accentColor: "teal",
    image: rollsImg,
    items: [
      {
        id: "pasta-chicken-cheese",
        name: "Chicken & Cheese",
        price: "R59.90",
      },
      {
        id: "pasta-steak-cheese",
        name: "Steak & Cheese",
        price: "R69.90",
      },
      {
        id: "pasta-mushroom-cheese",
        name: "Mushroom & Cheese",
        price: "R59.90",
        badge: "VEG",
      },
      {
        id: "pasta-soya-cheese",
        name: "Soya & Cheese",
        price: "R39.90",
        badge: "VEG",
      },
      {
        id: "pasta-mac-cheese",
        name: "Mac & Cheese Pasta",
        price: "R40.00",
        badge: "VEG",
      },
    ],
  },
  {
    id: "gatsbys",
    title: "OG Mega Mall Gatsbys — flagship dish",
    subtitle: "The Big Share Meal • Feeds up to 4",
    tagline:
      "Toasted naan smothered in garlic butter, loaded with your choice of juicy steak or tender chicken, fresh salads, polony, crispy chips, cheese, and finished with our signature sauces. Feeds up to 4.",
    accentColor: "teal",
    image: gatsbyImg,
    items: [
      {
        id: "gatsby-steak",
        name: "Steak",
        price: "R140.00",
        badge: "FLAGSHIP",
        contents:
          "Toasted naan smothered in garlic butter, juicy steak, fresh salads, polony, crispy chips, cheese & signature sauces",
      },
      {
        id: "gatsby-chicken",
        name: "Chicken",
        price: "R130.00",
        badge: "FLAGSHIP",
        contents:
          "Toasted naan smothered in garlic butter, tender chicken, fresh salads, polony, crispy chips, cheese & signature sauces",
      },
      {
        id: "gatsby-soya",
        name: "Soya (includes mushroom)",
        price: "R110.00",
        badge: "VEG",
        contents:
          "Toasted naan smothered in garlic butter, seasoned grilled soya with mushroom, fresh salads, crispy chips, cheese & signature sauces",
      },
    ],
  },
  {
    id: "top-ups-sides",
    title: "Top-Ups & Sides",
    subtitle: "Hot Seasoned Chips, Rotis & Garlic Pita",
    accentColor: "black",
    image: bunnyChowImg,
    items: [
      {
        id: "side-med-fries",
        name: "Medium Fries",
        price: "R20.00",
        badge: "VEG",
      },
      {
        id: "side-large-fries",
        name: "Large Fries",
        price: "R25.00",
        badge: "VEG",
      },
      {
        id: "side-xl-fries",
        name: "Extra Large Fries",
        price: "R35.00",
        badge: "VEG",
      },
      {
        id: "side-roti",
        name: "Roti",
        price: "R5.00",
        badge: "VEG",
      },
      {
        id: "side-garlic-pita",
        name: "Garlic Pita",
        price: "R15.00",
        badge: "VEG",
      },
    ],
  },
  {
    id: "friday-biryani",
    title: "Friday = Biryani",
    subtitle: "Traditional Layered Durban Biryani",
    tagline:
      "Layered Chicken/Mutton Biryani served with Salad and Sour Milk — Price on enquiry (S/Q)",
    accentColor: "teal",
    image: bunnyChowImg,
    items: [
      {
        id: "friday-biryani-item",
        name: "Layered Chicken or Mutton Biryani",
        price: "Price on enquiry (S/Q)",
        badge: "SPECIAL",
        contents: "Layered Chicken/Mutton Biryani served with Salad and Sour Milk",
      },
    ],
  },
  {
    id: "daily-specials",
    title: "Daily Specials",
    subtitle: "Enquire on availability",
    accentColor: "teal",
    image: bunnyChowImg,
    items: [
      {
        id: "special-mutton-biryani",
        name: "Mutton Biryani",
        price: "Enquire on availability",
        badge: "SPECIAL",
      },
      {
        id: "special-veg-biryani",
        name: "Veg Biryani",
        price: "Enquire on availability",
        badge: "VEG",
      },
      {
        id: "special-chicken-palau",
        name: "Chicken Palau / Akhni",
        price: "Enquire on availability",
        badge: "SPECIAL",
      },
      {
        id: "special-dhall-rice",
        name: "Dhall & Rice (Chicken or Mutton)",
        price: "Enquire on availability",
        badge: "SPECIAL",
      },
    ],
  },
  {
    id: "salads",
    title: "Salad",
    subtitle: "Lettuce, onion, cucumber, tomato, bell peppers & salad dressing",
    accentColor: "black",
    image: bunnyChowImg,
    items: [
      {
        id: "garden-salad",
        name: "Garden Salad",
        price: "R45.00",
        badge: "VEG",
        contents: "Lettuce, onion, cucumber, tomato, bell peppers & salad dressing",
      },
      {
        id: "grilled-chicken-salad",
        name: "Grilled Chicken Salad",
        price: "R60.00",
        contents:
          "Crisp garden salad topped with seasoned grilled chicken strips & dressing",
      },
    ],
  },
];
