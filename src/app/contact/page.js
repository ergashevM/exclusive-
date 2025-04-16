"use client";
import { useEffect, useState } from "react";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/K_Footer";
import "@/i18n";

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;

