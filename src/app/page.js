"use client";
import { useEffect, useState } from "react";
import "../i18n";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import HeroSection from "@/components/C_heroSection";
import TodaysProducts from "@/components/D_todaysProducts";
import Category from "@/components/E_category";
import BestSelling from "@/components/F_BestSelling";
import Boombox from "@/components/G_Boombox";
import OurProducts from "@/components/H_OurProducts";
import NewArrivals from "@/components/I_NewArrivals";
import Services from "@/components/J_Services";
import Footer from "@/components/K_Footer";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <HeroSection />
      <TodaysProducts />
      <Category />
      <BestSelling />
      <Boombox />
      <OurProducts />
      <NewArrivals />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;

