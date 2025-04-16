"use client";

import { SessionProvider } from "next-auth/react";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext"; 
import "./globals.css";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <SessionProvider session={session}>
          <WishlistProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </WishlistProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
