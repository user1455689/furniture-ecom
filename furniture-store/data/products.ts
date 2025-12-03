export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  shortDescription: string;
  image: string; // public/images/...
  badges?: string[];
  colors?: string[]; // hex
}

export const products: Product[] = [
  {
    id: "1",
    slug: "amber-night-lamp",
    name: "Amber Night Lamp",
    price: 2499,
    category: "Lighting",
    shortDescription: "Soft glow for cozy evenings.",
    image: "/images/products/lamp-01.jpg",
    badges: ["New", "Trending"],
    colors: ["#FDCB6E", "#FFEAA7"],
  },
  {
    id: "2",
    slug: "cloudy-lounge-sofa",
    name: "Cloudy Lounge Sofa",
    price: 38999,
    category: "Sofas",
    shortDescription: "Perfect for Netflix marathons.",
    image: "/images/products/sofa-01.jpg",
    badges: ["Best Seller"],
    colors: ["#D1CCC0", "#B2BEC3"],
  },
  {
    id: "3",
    slug: "minimal-coffee-table",
    name: "Minimal Coffee Table",
    price: 10499,
    category: "Tables",
    shortDescription: "Clean lines, solid build.",
    image: "/images/products/table-01.jpg",
    colors: ["#FFEAA7"],
  },
  {
    id: "4",
    slug: "color-pop-rug",
    name: "Color Pop Rug",
    price: 5999,
    category: "Rugs",
    shortDescription: "Add life to your floors.",
    image: "/images/products/rug-01.jpg",
    badges: ["New"],
    colors: ["#FF7675", "#55EFC4", "#74B9FF"],
  },
];

export const categories = [
  "Living Room",
  "Bedroom",
  "Lighting",
  "Tables",
  "Rugs",
  "Plants",
];
