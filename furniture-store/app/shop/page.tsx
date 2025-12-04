"use client";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/components/cart-context";
import Image from "next/image";

export default function ShopPage() {
  const { addToCart } = useCart();

  // 20 Dummy Furniture Products
  const products = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 100,
    name: [
      "Luxury Sofa",
      "Minimal Table",
      "Night Lamp",
      "Modern Chair",
      "Wooden Desk",
      "Premium Rug",
      "LED Wall Light",
      "Reading Chair",
      "Glass Center Table",
      "Modular Wardrobe",
    ][i % 10],
    slug: `product-${i + 100}`,
    price: Math.floor(Math.random() * 50000) + 2000,
    category: ["Living Room", "Office", "Bedroom", "Chairs"][i % 4],
    image:
      [
        "https://i.pinimg.com/736x/88/5b/2d/885b2dd46474298208cf5e60f7afa1b6.jpg",
        "https://i.pinimg.com/736x/c1/dc/e5/c1dce58027d968bbe810740eb21c4007.jpg",
        "https://i.pinimg.com/1200x/1d/e8/30/1de83077cf35c3a7daa16f9bd4c84b46.jpg",
        "https://i.pinimg.com/1200x/b7/79/97/b77997e5d806d9f56f83c2a0cc8c6935.jpg",
        "https://i.pinimg.com/736x/b3/21/e2/b321e2485da40c0dde2685c3a4fdcb56.jpg",
      ][i % 5],
    shortDescription: "Premium quality furniture designed for modern homes.",
  }));

  return (
    <div className="app-container py-10">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-semibold">Shop All Furniture</h1>
        <p className="text-sm text-text-secondary">
          Explore premium décor & furniture curated for every room.
        </p>
      </div>

      {/* GRID LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="rounded-xl overflow-hidden shadow-sm bg-surface hover:shadow-card transition">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={400}
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="mt-3">
              <h3 className="font-heading text-sm font-semibold">{product.name}</h3>
              <p className="text-xs text-text-secondary">{product.category}</p>
              <p className="font-heading text-sm font-semibold text-primary mt-1">
                NPR {product.price.toLocaleString()}
              </p>

              <button
                onClick={() => addToCart(product, 1)}
                className="mt-2 w-full h-9 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
