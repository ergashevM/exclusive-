"use client";
import { useEffect, useState } from "react";
import "@/i18n";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Footer from "@/components/K_Footer";
import Wishlist from "@/components/Wishlist";
import JustForYou from "@/components/f_justForYou";

const WishlistPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <Wishlist />
      <JustForYou />
      <Footer />
    </div>
  );
};

export default WishlistPage;

