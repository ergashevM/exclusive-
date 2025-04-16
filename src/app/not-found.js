"use client";
import { useEffect, useState } from "react";
import "@/i18n";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Footer from "@/components/K_Footer";
import Custom404 from "@/components/custom404";

const Custom404Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <Custom404 />
      <Footer />
    </div>
  );
};

export default Custom404Page;
