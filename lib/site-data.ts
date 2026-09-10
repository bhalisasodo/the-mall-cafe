// Central place to update contact details, hours, and menu items.
// Swap WHATSAPP_NUMBER for the real number (international format, no spaces or +).

export const CONTACT = {
  address: "94 Wick St, Verulam, 4339",
  addressMapsQuery: "94 Wick St, Verulam, 4339",
  whatsappNumber: "27815776930",
  phoneDisplay: "081 577 6930",
  phoneTel: "+27815776930",
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

export const WHATSAPP_BOOKING_MESSAGE =
  "Hi! I'd like to book a table at The Mall Cafe.";
export const WHATSAPP_DELIVERY_MESSAGE =
  "Hi! I'd like to place a delivery order from The Mall Cafe.";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

// TODO: PLACEHOLDER DATA — replace with confirmed client menu items, descriptions, and ZAR prices
export const MENU: MenuSection[] = [
  {
    title: "Street Starters",
    items: [
      {
        name: "Masala Chilli Bites",
        description: "Split pea fritters, green chilli, coriander chutney",
        price: "R45",
      },
      {
        name: "Samoosas (4)",
        description: "Hand-folded, mince or vegetable, tamarind dip",
        price: "R38",
      },
      {
        name: "Curry Chips",
        description: "Hand-cut chips loaded with mutton curry gravy",
        price: "R55",
      },
    ],
  },
  {
    title: "Bunny & Breads",
    items: [
      {
        name: "Half Bunny — Mutton",
        description: "Quarter loaf hollowed and filled, slow mutton curry",
        price: "R95",
      },
      {
        name: "Half Bunny — Chickpea & Butternut",
        description: "Slow-cooked chickpea and butternut curry",
        price: "R75",
      },
      {
        name: "Roti Wrap",
        description: "Chicken tikka, sliced onion, mint yoghurt, house roti",
        price: "R60",
      },
    ],
  },
  {
    title: "Fusion Plates",
    items: [
      {
        name: "Akhni Biryani Bowl",
        description: "Chicken akhni, crispy onions, dhania sambal",
        price: "R85",
      },
      {
        name: "Masala Boerie Roll",
        description: "Grilled boerewors, tomato-onion masala, sugar bean chutney",
        price: "R65",
      },
      {
        name: "Paneer Tikka Loaded Fries",
        description: "Peri-masala fries, grilled paneer, mint drizzle",
        price: "R70",
      },
    ],
  },
  {
    title: "To Finish",
    items: [
      {
        name: "Falooda",
        description: "Rose syrup, vermicelli, basil seeds, ice cream",
        price: "R48",
      },
      {
        name: "Gulab Jamun (3)",
        description: "Warm milk dumplings in cardamom syrup",
        price: "R35",
      },
      {
        name: "Sugar Cane Juice",
        description: "Fresh-pressed, ginger and lime",
        price: "R30",
      },
    ],
  },
];
