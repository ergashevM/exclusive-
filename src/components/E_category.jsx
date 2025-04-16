"use client";
import Image from "next/image";
import { useState } from "react";
import Trim from "@/assets/trim.svg";
import Indicator from "@/assets/indicator.svg";
import Phone from "@/assets/Phones.svg";
import SmartWatch from "@/assets/Smart Watches.svg";
import Camera from "@/assets/Cameras.svg";
import Headphones from "@/assets/HeadphonesIcon.svg";
import Computer from "@/assets/Computers.svg";
import Gaming from "@/assets/Gaming.svg";
import Boombox from "@/assets/boomboxIcon.png";
import { useTranslation } from "react-i18next";

const categories = [
  { icon: Phone, label: { uz: "Telefonlar", ru: "Телефоны", en: "Phones" } },
  { icon: Computer, label: { uz: "Kompyuterlar", ru: "Компьютеры", en: "Computers" } },
  { icon: SmartWatch, label: { uz: "Smart Soatlar", ru: "Умные Часы", en: "SmartWatch" } },
  { icon: Camera, label: { uz: "Kameralar", ru: "Камеры", en: "Camera" } },
  { icon: Headphones, label: { uz: "Quloqchinlar", ru: "Наушники", en: "Headphones" } },
  { icon: Gaming, label: { uz: "O'yinlar", ru: "Игры", en: "Gaming" } },
  { icon: Boombox, label: { uz: "Boombokslar", ru: "Бумбоксы", en: "Boombox" } },
];

const Category = () => {
  const { t, i18n } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = categories.length - 6;

  const nextSlide = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const visibleCategories = categories.slice(startIndex, startIndex + 6);
  const currentLanguage = i18n.language;

  return (
    <div className="w-full max-w-[1170px] h-auto mx-auto border-b border-gray-300 pb-15">
      <div className="h-auto md:h-[103px] gap-y-4 flex flex-col justify-between">
        <div className="flex flex-col items-start gap-y-2 md:gap-y-5">
          <h3 className="font-poppins font-semibold text-sm md:text-base leading-[20px] text-[#DB4444] flex items-center gap-x-2 md:gap-x-4">
            <Image src={Trim} alt="trim" />
            {t("category")}
          </h3>
          <p className="text-xs md:text-sm font-medium text-[#DB4444]">
            {t("showing_categories", {
              start: startIndex + 1,
              end: Math.min(startIndex + visibleCategories.length, categories.length),
              total: categories.length,
            })}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h3 className="font-inter font-semibold text-xl md:text-3xl text-black">
            {t("browse_by_category")}
          </h3>
          <span className="flex items-center gap-x-2">
            <button onClick={prevSlide}>
              <Image src={Indicator} alt="left" className="cursor-pointer" />
            </button>
            <button onClick={nextSlide}>
              <Image
                src={Indicator}
                alt="right"
                className="rotate-180 cursor-pointer"
              />
            </button>
          </span>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-25 transition-all duration-300 ease-in-out">
        {visibleCategories.map((category, index) => (
          <div
            key={index}
            className="group w-[170px] h-[145px] flex flex-col items-center justify-center rounded-md hover:scale-105 hover:bg-[#DB4444] hover:text-white border border-[#0000004D] p-4 cursor-pointer transition-all duration-300 ease-in-out"
          >
            <Image
              src={category.icon}
              alt={category.label[currentLanguage]}
              className="group-hover:brightness-0 group-hover:invert transition duration-300"
            />
            <h4 className="mt-2 font-medium text-sm text-center">
              {category.label[currentLanguage]}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
