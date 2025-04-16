"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Custom404 = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col items-start justify-center pt-20 pb-40 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-wrap items-center gap-x-2 font-poppins text-sm mb-30 sm:mb-8">
        <Link className="text-gray-500" href="/">
          {t("home")}
        </Link>
        <span className="text-gray-500">/</span>
        <h4 className="text-sm">{t("error")}</h4>
      </div>

      <div className="w-full items-center justify-center flex flex-col text-center px-4">
        <p className="font-inter font-medium text-[80px] sm:text-[90px] md:text-[110px] leading-[115px] tracking-wider mb-6 break-words">
          {t("not_found_message")}
        </p>

        <Link
          href="/"
          className="font-poppins text-base font-normal leading-[24px] text-gray-600 underline underline-offset-4 mb-4"
        >
          {t("goo_back_home")}
        </Link>

        <button className="w-[254px] h-[56px] flex items-center justify-center bg-[#DB4444] text-white font-poppins text-base font-normal leading-[24px] mt-10 rounded-[4px] hover:bg-red-600 transition duration-300">
          {t("go_back_home_button")}
        </button>
      </div>
    </div>
  );
};

export default Custom404;
