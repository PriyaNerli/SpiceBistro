import type { NavLink, Dish } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Menu" },
  { href: "/about", label: "About Us" },
];

export const DUMMY_DISHES: Dish[] = [
  {
    id: "1",
    name: "Butter Chicken",
    description:
      "Creamy tomato-based curry with tender chicken pieces, a classic North Indian delight.",
    price: 450,
    imageSrc: "/butter-chicken.jpg", // <--- CORRECTED: Removed "/public"
    imageHint: "butter chicken",
    category: "Main Course",
  },
  {
    id: "2",
    name: "Palak Paneer",
    description: "Soft paneer cubes in a smooth, mildly spiced spinach gravy.",
    price: 380,
    imageSrc: "/Palak Paneer.jpg", // <--- CHANGE THIS! Assuming file is 'Palak Paneer.jpg' directly in public
    imageHint: "palak paneer",
    category: "Main Course",
  },
  {
    id: "3",
    name: "Garlic Naan",
    description: "Soft, fluffy Indian bread topped with garlic and butter.",
    price: 80,
    imageSrc: "/Garlic Naan.jpg", // <--- CHANGE THIS! Assuming file is 'Garlic Naan.jpg' directly in public
    imageHint: "garlic naan",
    category: "Breads",
  },
  {
    id: "4",
    name: "Masala Dosa",
    description:
      "Crispy rice crepe filled with spiced potato masala, served with sambar and chutney.",
    price: 250,
    imageSrc: "/Masala Dosa.jpg", // <--- CHANGE THIS! Assuming file is 'Masala Dosa.jpg' directly in public
    imageHint: "masala dosa",
    category: "South Indian",
  },
  {
    id: "5",
    name: "Gulab Jamun",
    description:
      "Deep-fried milk solids dumplings soaked in sugar syrup, a popular Indian dessert.",
    price: 150,
    imageSrc: "/Gulab Jamun.jpg", // <--- CHANGE THIS! Assuming file is 'Gulab Jamun.jpg' directly in public
    imageHint: "gulab jamun",
    category: "Desserts",
  },
  {
    id: "6",
    name: "Chicken Biryani",
    description:
      "Aromatic basmati rice cooked with chicken and a blend of exotic spices.",
    price: 480,
    imageSrc: "/Chicken Biryani.jpg", // <--- CHANGE THIS! Assuming file is 'Chicken Biryani.jpg' directly in public
    imageHint: "chicken biryani",
    category: "Main Course",
  },
  {
    id: "7",
    name: "Samosa (2 pcs)",
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney.",
    price: 120,
    imageSrc: "/Samosa.jpg", // <--- CHANGE THIS! Assuming file is 'Samosa.jpg' directly in public
    imageHint: "samosa indian",
    category: "Appetizers",
  },
  {
    id: "8",
    name: "Mango Lassi",
    description: "Refreshing yogurt-based drink blended with sweet mango pulp.",
    price: 180,
    imageSrc: "/Mango Lassi.jpg", // <--- CHANGE THIS! Assuming file is 'Mango Lassi.jpg' directly in public
    imageHint: "mango lassi",
    category: "Beverages",
  },
];