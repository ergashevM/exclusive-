"use client";
import { useEffect, useState } from "react";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Footer from "@/components/K_Footer";
import Sign_Up from "@/components/SignUp";
import "@/i18n";

const SignUp = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <Sign_Up />
      <Footer />
    </div>
  );
};

export default SignUp;

