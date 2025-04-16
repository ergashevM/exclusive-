"use client";
import React, { useEffect, useState } from "react";
import "@/i18n";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Footer from "@/components/K_Footer";
import Cart from "@/components/Cart";

const CartPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;

