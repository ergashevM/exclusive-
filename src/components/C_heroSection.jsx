"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Right from "@/assets/arrowRight.svg";
import AnotherRight from "@/assets/anotherRight.svg";
import Iphone from "@/assets/iphone.svg";
import Phone from "@/assets/phoneBanner.png";
import Gamepad from "@/assets/gamepadBanner.png";
import Computer from "@/assets/computerBanner.png";
import Boombox from "@/assets/boomboxBanner.png";
import Laptop from "@/assets/laptopBanner.png";
import Dot from "@/assets/dot.svg";
import RedDot from "@/assets/redDot.svg";

const slides = [
  {
    id: 1,
    title: "iphone",
    description: "description",
    image: Phone,
    logo: Iphone,
  },
  {
    id: 2,
    title: "gamepad",
    description: "description",
    image: Gamepad,
  },
  {
    id: 3,
    title: "computer",
    description: "description",
    image: Computer,
  },
  {
    id: 4,
    title: "boombox",
    description: "description",
    image: Boombox,
  },
  {
    id: 5,
    title: "laptop",
    description: "description",
    image: Laptop,
  },
];

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row gap-x-15">
      <div className="flex items-center lg:justify-center ml-5 lg:ml-0 lg:w-[200px] lg:border-r border-gray-300 font-poppins text-sm">
        <ul className="flex flex-col gap-y-3 pt-4 lg:pt-10 pr-6">
          <li className="flex items-center gap-x-10 hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.womens_fashion")} <Image src={Right} alt="right" />
          </li>
          <li className="flex items-center gap-x-16.5 hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.mens_fashion")} <Image src={Right} alt="right" />
          </li>
          <li className="hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.electronics")}
          </li>
          <li className="hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.home_lifestyle")}
          </li>
          <li className="hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.medicine")}
          </li>
          <li className="hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.sports_outdoor")}
          </li>
          <li className="hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.babys_toys")}
          </li>
          <li className="hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.groceries_pets")}
          </li>
          <li className="hover:scale-110 hover:underline hover:underline-offset-2">
            {t("categories.health_beauty")}
          </li>
        </ul>
      </div>
      <div className="w-full max-w-[900px] bg-black text-white rounded-2xl overflow-hidden mt-8 ml-2 lg:h-[300px] flex flex-col">
        <div className="flex-1 flex items-center justify-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[300px] lg:-mt-20">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-full h-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-14 py-6 transition-opacity duration-700 ${
                index === currentIndex ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-col gap-y-4 w-full flex-wrap md:w-1/2">
                <div className="flex items-center gap-x-3">
                  {slide.logo && <Image src={slide.logo} alt="logo" />}
                  <p className="font-poppins text-base">
                    {t(`carousel.${slide.title}`)}
                  </p>
                </div>
                <p className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  {t("carousel.description")}
                </p>
                <button className="flex items-center gap-x-2 font-medium">
                  <span className="border-b border-white">
                    {t("carousel.shop_now")}
                  </span>
                  <Image src={AnotherRight} alt="right" />
                </button>
              </div>

              <div className="w-full md:w-1/2 sm:flex items-center justify-center mt-6 md:mt-0">
                <Image
                  src={slide.image}
                  alt="slide"
                  className="h-[200px] sm:h-[260px] md:h-[300px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-x-2 pb-4 -mt-20">
          {slides.map((slide, idx) => (
            <Image
              key={idx}
              src={idx === currentIndex ? RedDot : Dot}
              alt={`Slide indicator ${idx + 1}`}
              className="transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
