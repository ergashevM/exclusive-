"use client";
import { useEffect, useState } from "react";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Footer from "@/components/K_Footer";
import Sign_In from "@/components/SignIn";
import "@/i18n";

const SignIn = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <Sign_In />
      <Footer />
    </div>
  );
};

export default SignIn;

