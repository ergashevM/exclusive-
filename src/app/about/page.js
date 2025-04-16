"use client";
import { useEffect, useState } from "react";
import "@/i18n";
import Ad from "@/components/A_ad";
import About from "@/components/About";
import Navigation from "@/components/B_navigation";
import AnotherServices from "@/components/J_anotherServices";
import Footer from "@/components/K_Footer";
import About_Slider from "@/components/About_Slider";
import Services from "@/components/J_Services";

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <About />
      <AnotherServices />
      <About_Slider />
      <Services />
      <Footer />
    </div>
  );
};

export default AboutPage;
