"use client";
import React, { useEffect, useState } from "react";
import "@/i18n";
import Ad from "@/components/A_ad";
import Navigation from "@/components/B_navigation";
import Footer from "@/components/K_Footer";
import MyAccount from "@/components/MyAccount";

const Account = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Ad />
      <Navigation />
      <MyAccount />
      <Footer />
    </div>
  );
};

export default Account;
