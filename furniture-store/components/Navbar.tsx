"use client";

import Link from "next/link";
import { useCart } from "./cart-context";

const Navbar = () => {
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur border-b border-border">
      <nav className="app-container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
            D
          </span>
          <span className="font-heading font-semibold text-lg">
            DecoraHaus
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
          <Link href="/">Home</Link>
          <Link href="/category">Shop</Link>
          <Link href="#collections">Collections</Link>
          <Link href="#about">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-secondary text-[11px] text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
