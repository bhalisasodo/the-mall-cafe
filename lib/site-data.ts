// Central configuration for contact details, locations, hours, and structured menu items.
// Tailored for The Mall Cafe (Verulam branch).

import type { StaticImageData } from "next/image";
import gatsbyImg from "@/public/menu/gatsby-hero-16x9.jpg";
import classicBurgersImg from "@/public/menu/classic-burgers-food.jpg";
import smashBurgersImg from "@/public/menu/smash-burgers-food.jpg";
import chickenTikkaImg from "@/public/menu/chicken-tikka-food.jpg";
import shawarmaImg from "@/public/menu/shawarma-food.jpg";
import toastedSandwichImg from "@/public/menu/toasted-sandwich-food.jpg";
import bunnyChowImg from "@/public/menu/bunny-chow-food.jpg";

export const CONTACT = {
  tagline: "A Passion for Taste",
  brandName: "The Mall Cafe",
  branch: "Verulam",
  locationName: "Verulam",
  address: "94 Wick St, Verulam, 4339",
  addressMapsQuery: "94 Wick St, Verulam, 4339",
  phonePrimary: "081 577 6930",
  phoneSecondary: "031 530 7085",
  phoneTelPrimary: "+27815776930",
  phoneTelSecondary: "+27315307085",
  whatsappNumber: "27815776930",
  whatsappDisplay: "081 577 6930",
  isHalal: true,
  halalText: "Strictly 100% Halal Certified",
  // Social links
  instagram: "https://www.instagram.com/themallcafe",
  instagramHandle: "@themallcafe",
  tiktok: "https://www.tiktok.com/@the_mall_cafe",
  tiktokHandle: "@the_mall_cafe",
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
  "Hi! I'd like to order The Mega Mall Gatsby (Feeds 4) from The Mall Cafe Verulam.";
export const WHATSAPP_DELIVERY_MESSAGE =
  "Hi! I'd like to order delivery from The Mall Cafe Verulam.";

export type BadgeType = "HALAL" | "NEW" | "HOT" | "VEG" | "POPULAR" | "FEEDS 4" | "FLAGSHIP" | "SWEET";

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  mealPrice?: string; // For items with optional meal (w/chips)
  contents?: string;
  badge?: BadgeType;
  portionPrice?: string; // For alternative portions e.g. 500ml tub
  portionLabel?: string; // e.g. "500ml Tub"
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  tagline?: string;
  flavors?: string[];
  flavorPricingNote?: string;
  image: StaticImageData | string;
  accentColor: "teal" | "red" | "yellow" | "black";
  items: MenuItem[];
};

export const CATEGORIES_LIST: { id: string; name: string; image: StaticImageData | string; blurb: string }[] = [
  {
    id: "gatsby",
    name: "The Mega Gatsby",
    image: gatsbyImg,
    blurb: "Feeds 4 • 80's Style Legend",
  },
  {
    id: "classic-burgers",
    name: "Classic Mutton Burgers",
    image: classicBurgersImg,
    blurb: "Single patty classics from R28",
  },
  {
    id: "jumbo-burgers",
    name: "Jumbo & Chicken Burgers",
    image: classicBurgersImg,
    blurb: "Jumbo mutton, fillet & veg",
  },
  {
    id: "smash-burgers",
    name: "Smash Burgers",
    image: smashBurgersImg,
    blurb: "120g handcrafted smash patties",
  },
  {
    id: "tikka-grills",
    name: "Chicken Tikka & Grills",
    image: chickenTikkaImg,
    blurb: "Tandoori flame grills & feasts",
  },
  {
    id: "shawarma",
    name: "Pita Shawarma",
    image: shawarmaImg,
    blurb: "Loaded warm pita pockets",
  },
  {
    id: "sandwiches",
    name: "Toasted Sandwiches",
    image: toastedSandwichImg,
    blurb: "Old-school steak & melts",
  },
  {
    id: "bunnies-curries",
    name: "Bunnies & Curries",
    image: bunnyChowImg,
    blurb: "1/4 Durban bunnies & tubs",
  },
  {
    id: "sides",
    name: "Sides & Extras",
    image: bunnyChowImg,
    blurb: "Rotis, chips, salads & soji",
  },
];

export const MENU: MenuCategory[] = [
  {
    id: "gatsby",
    title: "The Mega Mall Gatsby",
    subtitle: "The Big Share Meal — Feeds 4",
    tagline: "80's Style — What Makes Us Legends",
    flavors: ["Creamy Mexican Sauce", "Original Mall Sauce"],
    image: gatsbyImg,
    accentColor: "red",
    items: [
      {
        id: "gatsby-soya",
        name: "Soya Gatsby",
        price: "R115",
        contents: "Loaded with seasoned grilled soya, chips, lettuce & signature sauce in a giant Gatsby loaf",
        badge: "VEG",
      },
      {
        id: "gatsby-chicken",
        name: "Chicken Gatsby",
        price: "R130",
        contents: "Tender seasoned chicken fillet cubes, fresh chips, salad & signature sauce",
        badge: "POPULAR",
      },
      {
        id: "gatsby-steak",
        name: "Steak Gatsby",
        price: "R148",
        contents: "Grilled tender steak pieces, crisp spiced chips, onions & signature sauce",
        badge: "FLAGSHIP",
      },
    ],
  },
  {
    id: "classic-burgers",
    title: "Classic Mutton Burgers",
    subtitle: "Single Patty Classics",
    image: classicBurgersImg,
    accentColor: "black",
    items: [
      {
        id: "classic-mall",
        name: "Classic Mall Burger",
        price: "R28",
        mealPrice: "R38",
        contents: "Mutton patty, toasted bun, signature sauce & salad",
      },
      {
        id: "classic-cheese",
        name: "Classic Cheese Burger",
        price: "R33",
        mealPrice: "R43",
        contents: "Mutton patty with melted slice cheese & sauce",
      },
      {
        id: "classic-egg",
        name: "Classic Egg Burger",
        price: "R34",
        mealPrice: "R44",
        contents: "Mutton patty topped with a fresh fried egg",
      },
      {
        id: "classic-mexican",
        name: "Classic Mexican Burger",
        price: "R37",
        mealPrice: "R47",
        badge: "HOT",
        contents: "Mutton Patty, Salami, Mexican Sauce",
      },
      {
        id: "classic-double-melter",
        name: "Classic Double Melter",
        price: "R59",
        mealPrice: "R69",
        contents: "2× Mutton Patty, 2× Cheese",
      },
      {
        id: "classic-dagwood",
        name: "Classic Dagwood",
        price: "R75",
        mealPrice: "R85",
        badge: "POPULAR",
        contents: "Patty, Cheese, Fried Egg, Grilled Steak, Salami",
      },
    ],
  },
  {
    id: "jumbo-burgers",
    title: "Jumbo Mutton Burgers",
    subtitle: "Thick Jumbo Patties with Big Flavour",
    image: classicBurgersImg,
    accentColor: "black",
    items: [
      {
        id: "jumbo-burger",
        name: "Jumbo Burger",
        price: "R41",
        mealPrice: "R51",
        contents: "Thick jumbo mutton patty on a sesame bun with garnish",
      },
      {
        id: "jumbo-cheese",
        name: "Cheese Burger (Jumbo)",
        price: "R47",
        mealPrice: "R57",
        contents: "Jumbo mutton patty layered with melted cheese",
      },
      {
        id: "jumbo-egg",
        name: "Egg Burger (Jumbo)",
        price: "R48",
        mealPrice: "R58",
        contents: "Jumbo mutton patty crowned with a fried egg",
      },
      {
        id: "jumbo-mexican",
        name: "Mexican Burger (Jumbo)",
        price: "R58",
        mealPrice: "R68",
        badge: "HOT",
        contents: "Mutton Patty, Salami, Mexican Sauce",
      },
      {
        id: "jumbo-double-melter",
        name: "Double Melter (Jumbo)",
        price: "R73",
        mealPrice: "R83",
        contents: "2× Mutton Patty, 2× Cheese",
      },
      {
        id: "jumbo-mighty-dagwood",
        name: "Mighty Dagwood",
        price: "R88",
        mealPrice: "R98",
        badge: "POPULAR",
        contents: "Patty, Cheese, Fried Egg, Grilled Steak, Salami",
      },
      {
        id: "mighty-mall-burger",
        name: "Mighty Mall Burger",
        price: "R95",
        mealPrice: "R105",
        badge: "POPULAR",
        contents: "3× Mutton Patty, 3 Slices Cheese",
      },
    ],
  },
  {
    id: "chicken-burgers",
    title: "Chicken & Soya Veg Burgers",
    subtitle: "Fillet, Crunchy Crumb & Plant-Based Patties",
    image: classicBurgersImg,
    accentColor: "teal",
    items: [
      {
        id: "prego-chicken",
        name: "Classic Prego (Chicken Fillet)",
        price: "R37",
        mealPrice: "R47",
        contents: "Tender chicken fillet basted in spicy prego marinade",
      },
      {
        id: "prego-cheese",
        name: "Classic Prego Cheese (Chicken Fillet)",
        price: "R42",
        mealPrice: "R52",
        contents: "Prego basted chicken fillet with melted cheese",
      },
      {
        id: "chicken-tikka-burger",
        name: "Chicken Tikka (Chicken Fillet)",
        price: "R37",
        mealPrice: "R47",
        contents: "Flame-grilled chicken fillet in aromatic tikka spices",
      },
      {
        id: "classic-chicken-patty",
        name: "Classic Chicken Patty",
        price: "R24",
        mealPrice: "R34",
        badge: "NEW",
        contents: "Chicken Patty, Onions, Lettuce, Creamy Mexican Sauce",
      },
      {
        id: "classic-crunch",
        name: "Classic Crunch",
        price: "R43",
        mealPrice: "R53",
        badge: "NEW",
        contents: "Golden Crunchy Chicken Fillet, Sliced Cheese, Lettuce, Creamy White Sauce",
      },
      {
        id: "soya-burger",
        name: "Soya Burger",
        price: "R28",
        mealPrice: "R38",
        badge: "VEG",
        contents: "Grilled seasoned soya patty, crisp salad & sauce",
      },
      {
        id: "soya-cheese-burger",
        name: "Soya Cheese Burger",
        price: "R33",
        mealPrice: "R43",
        badge: "VEG",
        contents: "Grilled soya patty with melted cheese",
      },
      {
        id: "soya-mushroom-burger",
        name: "Soya Mushroom Burger",
        price: "R45",
        mealPrice: "R55",
        badge: "VEG",
        contents: "Grilled soya patty smothered in creamy mushroom sauce",
      },
    ],
  },
  {
    id: "smash-burgers",
    title: "Smash Burgers",
    subtitle: "\"Get Smashed in Verulam\"",
    tagline: "Handcrafted 120g pure smash patties seared on the flat-top, served with side chips",
    image: smashBurgersImg,
    accentColor: "red",
    items: [
      {
        id: "bbq-smash",
        name: "BBQ Smash",
        price: "R69",
        contents: "120g Smash Pattie, Cheese, Gherkins, Caramelised Onions, Smoked BBQ Sauce, Side Chips",
      },
      {
        id: "pink-smash",
        name: "Pink Smash",
        price: "R69",
        badge: "POPULAR",
        contents: "120g Smash Pattie, Cheese, Peppadews, Gherkins, Onions, Pink Mall Sauce, Side Chips",
      },
      {
        id: "jalapeno-smash",
        name: "Jalapeno Smash",
        price: "R71",
        badge: "HOT",
        contents: "120g Smash Pattie, Cheese, Jalapeno, Chilli, Jalapeno Sauce, Side Chips",
      },
      {
        id: "fiesta-smash",
        name: "Fiesta",
        price: "R75",
        badge: "HOT",
        contents: "120g Smash Pattie, Cheese, Salami, Caramelised Onions, Jalapeno, Hot Creamy Mexican Sauce, Side Chips",
      },
      {
        id: "smashroom",
        name: "Smashroom",
        price: "R75",
        contents: "120g Smash Pattie, Cheese, Mushrooms, Caramelised Onions, Mushroom Sauce, Side Chips",
      },
      {
        id: "double-smash",
        name: "Double Smash",
        price: "R105",
        badge: "POPULAR",
        contents: "2× 120g Smash Pattie, 2× Cheese, Gherkins, Caramelised Onions, Smoked BBQ Sauce, Side Chips",
      },
    ],
  },
  {
    id: "tikka-grills",
    title: "Chicken Tikka & Grills",
    subtitle: "Flame-Kissed Charcoal Tikka, Kebabs & Big Feast Combos",
    tagline: "Flavours: Traditional • Portuguese Hot • Portuguese Mild • Kashmiri Hot • Kashmiri Mild • Jalapeno",
    flavorPricingNote: "Add flavours: Portion +R3.50 | Full Chicken +R15",
    image: chickenTikkaImg,
    accentColor: "yellow",
    items: [
      {
        id: "tikka-quarter-leg",
        name: "¼ Tikka Leg (Traditional)",
        price: "R57",
        contents: "Quarter Leg, Roti, Sauce, Chips",
      },
      {
        id: "tikka-quarter-breast",
        name: "¼ Tikka Breast (Traditional)",
        price: "R67",
        contents: "Quarter Breast, Roti, Sauce, Chips",
      },
      {
        id: "tikka-half-meal",
        name: "½ Tikka Meal (Traditional)",
        price: "R112",
        contents: "1 Leg Quarter, 1 Breast Quarter, 2 Rotis, 2 Sauce, Chips",
      },
      {
        id: "tikka-full-chicken-only",
        name: "Full Chicken Only (Traditional)",
        price: "R175",
        contents: "2 Leg Quarters, 2 Breast Quarters",
      },
      {
        id: "tikka-awesome-foursome",
        name: "Awesome Foursome — Full Chicken",
        price: "R199",
        badge: "POPULAR",
        contents: "2 Leg Quarters, 2 Breast Quarters, 4 Rotis, 4 Sauces, Salad, Large Chips",
      },
      {
        id: "kebab-2-skewer",
        name: "2 Skewer Kebab",
        price: "R70",
        contents: "2 Kebabs, Roti, Chips, Sauce",
      },
      {
        id: "kebab-4-skewer",
        name: "4 Skewer Kebab",
        price: "R120",
        contents: "4 Kebabs, 2 Rotis, Chips, Sauce",
      },
      {
        id: "malai-4-cube",
        name: "4 Cube Malai",
        price: "R70",
        contents: "Fillet Chicken Breast Cubes in Creamy Marinade, Roti, Chips, Tikka Sauce",
      },
      {
        id: "malai-8-cube",
        name: "8 Cube Malai",
        price: "R120",
        contents: "Fillet Chicken Breast Cubes in Creamy Marinade, 2 Rotis, Chips, Tikka Sauce",
      },
      {
        id: "boti-4-cube",
        name: "4 Cube Boti",
        price: "R70",
        contents: "Fillet Chicken Breast Pieces in Tikka Masala Marinade, Roti, Chips, Tikka Sauce",
      },
      {
        id: "boti-8-cube",
        name: "8 Cube Boti",
        price: "R120",
        contents: "Fillet Chicken Breast Pieces in Tikka Masala Marinade, 2 Rotis, Chips, Tikka Sauce",
      },
      {
        id: "mixed-grill",
        name: "Mixed Grill",
        price: "R137",
        badge: "POPULAR",
        contents: "¼ Tikka, 2 Malai Cubes, 2 Boti Cubes, 2 Skewer Kebabs, 2 Rotis, Chips",
      },
      {
        id: "combo-meal-kl",
        name: "Combo Meal KL",
        price: "R104",
        contents: "¼ Tikka Leg, 2 Skewer Kebab, 2 Rotis, Chips",
      },
      {
        id: "chefs-combo",
        name: "Chef's Combo",
        price: "R299",
        badge: "FEEDS 4",
        contents: "1 Breast Tikka, 1 Leg Tikka, 4 Cubes Malai, 4 Cubes Boti, 4 Skewer Kebab, 4 Rotis, Sauce, Large Chips",
      },
      {
        id: "big-family-meal",
        name: "Big Family Meal",
        price: "R365",
        badge: "FEEDS 4",
        contents: "Full Chicken Tikka, 4 Cubes Malai, 4 Cubes Boti, 4 Skewer Kebab, 8 Rotis, Sauce, XL Chips",
      },
      {
        id: "managers-deal",
        name: "Managers Deal",
        price: "R300",
        badge: "FEEDS 4",
        contents: "3 Breast, 3 Leg Quarters Tikka, 6 Rotis, 6 Sauces, Extra Large Chips",
      },
    ],
  },
  {
    id: "shawarma",
    title: "Pita Shawarma",
    subtitle: "Warm Stuffed Pita Pockets",
    tagline: "Now available in 2 exciting flavours: Peri Mayo or Spicy Mall Sauce",
    image: shawarmaImg,
    accentColor: "yellow",
    items: [
      {
        id: "shawarma-chicken",
        name: "Chicken Shawarma",
        price: "R49",
        mealPrice: "R59",
        contents: "Chicken Cubes, Pepper, Onions, Tomato, Sauce",
      },
      {
        id: "shawarma-steak",
        name: "Steak Shawarma",
        price: "R60",
        mealPrice: "R70",
        contents: "Steak, Pepper, Onions, Tomato, Sauce",
      },
      {
        id: "shawarma-soya",
        name: "Soya Shawarma",
        price: "R45",
        mealPrice: "R55",
        badge: "VEG",
        contents: "Grilled Soya, Pepper, Onions, Tomato, Sauce",
      },
    ],
  },
  {
    id: "sandwiches",
    title: "Toasted Sandwiches",
    subtitle: "Old-School Griddled Favourites",
    image: toastedSandwichImg,
    accentColor: "black",
    items: [
      {
        id: "toast-steak",
        name: "Steak (Famous Old-School Sandwich)",
        price: "R61",
        badge: "POPULAR",
        contents: "Grilled Steak, Home Made Sauce, Chillie, Pepper, Onions, Tomato, Chips",
      },
      {
        id: "toast-mutton-patty",
        name: "Mutton Patty Sandwich",
        price: "R30",
        contents: "Mutton Patty, Burger Sauce",
      },
      {
        id: "toast-bbq-chicken",
        name: "BBQ Chicken Sandwich",
        price: "R38",
        contents: "Chicken in BBQ Sauce, Pepper, Onions, Tomato, Sandwich Sauce, Chips",
      },
      {
        id: "toast-chicken-mayo",
        name: "Chicken Mayo Sandwich",
        price: "R38",
        contents: "Chicken Cubes Grilled with Creamy Mayo Sauce",
      },
      {
        id: "toast-cheese-mushroom",
        name: "Cheese & Mushroom",
        price: "R38",
        contents: "Cheese, Mushroom, Chillie, Tomato, Onions",
      },
      {
        id: "toast-chilli-cheese",
        name: "Chilli Cheese",
        price: "R28",
        badge: "HOT",
        contents: "Cheese, Onion, Chillies",
      },
      {
        id: "toast-dagwood",
        name: "Dagwood Sandwich",
        price: "R80",
        badge: "POPULAR",
        contents: "Mutton Patty, Fried Egg, Salami, Sliced Cheese, 3× Sliced Bread",
      },
    ],
  },
  {
    id: "bunnies-curries",
    title: "Bunnies & Curries",
    subtitle: "1/4 Durban Bunny & 500ml Takeaway Tubs",
    image: bunnyChowImg,
    accentColor: "yellow",
    items: [
      {
        id: "bunny-sugar-beans",
        name: "Sugar Beans",
        price: "R29",
        mealPrice: "R39", // ¼ Bunny: R29, 500ml Tub: R39
        badge: "VEG",
        contents: "Slow-cooked sugar beans curry. ¼ Bunny (R29) or 500ml Tub (R39)",
      },
      {
        id: "bunny-broad-beans",
        name: "Broad Beans",
        price: "R30",
        mealPrice: "R40", // ¼ Bunny: R30, 500ml Tub: R40
        badge: "VEG",
        contents: "Traditional rich broad beans curry. ¼ Bunny (R30) or 500ml Tub (R40)",
      },
      {
        id: "bunny-chicken",
        name: "Chicken Curry",
        price: "R60",
        mealPrice: "R70", // ¼ Bunny: R60, 500ml Tub: R70
        badge: "POPULAR",
        contents: "Tender chicken cooked in rich Durban masala. ¼ Bunny (R60) or 500ml Tub (R70)",
      },
    ],
  },
  {
    id: "sides",
    title: "Side Items & Treats",
    subtitle: "Hot Chips, Roti, Salads & Sweet Soji",
    image: bunnyChowImg,
    accentColor: "teal",
    items: [
      {
        id: "side-roti",
        name: "Handmade Roti",
        price: "R6 each",
        mealPrice: "R30 / doz",
        badge: "VEG",
        contents: "Fresh flaky hand-rolled roti (R6 each or R30 per dozen)",
      },
      {
        id: "side-garden-salad",
        name: "Garden Salad",
        price: "R35",
        badge: "VEG",
        contents: "Fresh crisp garden greens, tomato & dressing",
      },
      {
        id: "side-grilled-chicken-salad",
        name: "Grilled Chicken Salad",
        price: "R55",
        contents: "Grilled seasoned chicken strips over crisp garden salad",
      },
      {
        id: "side-chicken-strips",
        name: "Chicken Strips (4) & Chips",
        price: "R70",
        badge: "POPULAR",
        contents: "4 Crispy Fried Chicken Strips served with golden chips",
      },
      {
        id: "side-med-chips",
        name: "Medium Chips",
        price: "R25",
        badge: "VEG",
        contents: "Golden fried chips with Mall secret seasoning",
      },
      {
        id: "side-large-chips",
        name: "Large Chips",
        price: "R30",
        badge: "VEG",
        contents: "Generous portion of seasoned hot chips",
      },
      {
        id: "side-xl-chips",
        name: "Extra Large Chips",
        price: "R45",
        badge: "VEG",
        contents: "Family-size portion of seasoned hot chips",
      },
      {
        id: "side-soji-100",
        name: "Tub Soji (100ml)",
        price: "R15",
        badge: "SWEET",
        contents: "Traditional sweet semolina soji with cream, almonds & sultanas",
      },
      {
        id: "side-soji-350",
        name: "Tub Soji (350ml)",
        price: "R40",
        badge: "SWEET",
        contents: "Large tub of traditional sweet semolina soji",
      },
    ],
  },
];
