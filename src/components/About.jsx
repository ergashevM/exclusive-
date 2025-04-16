"use client";
import Link from "next/link";
import Image from "next/image";
import Bg_girls from "@/assets/bg-girls.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 pt-10 lg:pl-44">
      <div className="flex flex-wrap items-center gap-x-2 mb-8 font-poppins text-sm">
        <Link className="text-gray-500" href="/">
          {t("home")}
        </Link>
        <span className="text-gray-500">/</span>
        <h4 className="text-sm">{t("nav_about")}</h4>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:max-w-[505px]">
          <h3 className="font-inter font-semibold text-[36px] md:text-[48px] lg:text-[54px] leading-tight mb-6">
            {t("story")}
          </h3>
          <div className="font-poppins font-normal text-base leading-[26px] text-justify">
            <p className="mb-4">{t("paragraphOne")}</p>
            <p>{t("paragraphTwo")}</p>
          </div>
        </div>
        <div className="w-full">
          <Image src={Bg_girls} alt="right-side image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
