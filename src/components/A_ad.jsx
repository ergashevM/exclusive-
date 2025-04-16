"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import DownArrow from "@/assets/down.svg";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "uz", label: "Oʻzbekcha" },
];

const Ad = () => {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  if (!mounted) return null;

  const currentLang =
    languages.find((lang) => lang.code === i18n.language)?.label || "Language";

  return (
    <div className="w-full max-w-[1600px] h-auto lg:h-[48px] mx-auto bg-black text-white font-poppins flex flex-col lg:flex-row items-center justify-between lg:pl-120 lg:pr-47 py-2 gap-y-2 lg:gap-y-0">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-x-2">
        <p className="font-normal text-sm leading-[21px]">{t("ad_text")}</p>
        <button className="font-semibold text-sm leading-[24px] underline underline-offset-2 text-white whitespace-nowrap">
          {t("shop_now")}
        </button>
      </div>

      <div className="relative text-white text-sm sm:ml-0 md:ml-5">
        <button onClick={toggleDropdown} className="flex items-center gap-x-1">
          {currentLang}
          <span className="transform transition-transform duration-300">
            <Image src={DownArrow} alt="arrow" />
          </span>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-1 bg-white text-black rounded shadow-md z-50">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {lang.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ad;
