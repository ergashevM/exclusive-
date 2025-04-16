"use client";
import { useEffect, useState } from "react";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Checkout from "@/components/Checkout";
import Footer from "@/components/K_Footer";
import "@/i18n";

const CheckoutPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutPage;

