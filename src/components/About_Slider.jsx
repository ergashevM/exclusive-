"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ManOne from "@/assets/manOne.png";
import GirlOne from "@/assets/womanOne.png";
import ManTwo from "@/assets/manTwo.png";
import GirlTwo from "@/assets/womanTwo.png";
import ManThree from "@/assets/manThree.png";
import RedDot from "@/assets/redDotTwo.svg";
import Dot from "@/assets/grayDot.svg";
import Icon_Twitter from "@/assets/Icon-Twitter.svg";
import Icon_Instagram from "@/assets/icon-instagram.svg";
import Icon_Linkedin from "@/assets/Icon-Linkedin.svg";
import { useTranslation } from "react-i18next";

const teamMembers = [
  { name: "Dexter Watts", role: "Founder & Chairman", img: ManOne },
  { name: "Ellie Clark", role: "Managing Director", img: GirlOne },
  { name: "Bruno Talley", role: "Product Designer", img: ManTwo },
  { name: "Ella Marshall", role: "Marketing Head", img: GirlTwo },
  { name: "Johann Hill", role: "Tech Lead", img: ManThree },
];

const About_Slider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + 3);
  if (visibleMembers.length < 3) {
    visibleMembers.push(...teamMembers.slice(0, 3 - visibleMembers.length));
  }

  return (
    <div className="w-full max-w-[1170px] mx-auto px-4 flex flex-col items-center mb-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {visibleMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center w-full md:w-[300px] lg:w-[370px]"
          >
            <div className="bg-gray-100 rounded-xl overflow-hidden w-full h-[350px] sm:h-[400px] md:h-[430px] flex items-end justify-center">
              <Image
                src={member.img}
                alt={member.name}
                className="object-contain w-full h-auto max-h-[100%]"
              />
            </div>
            <h3 className="font-inter font-medium mt-4 mb-2 text-[24px] md:text-[28px] lg:text-[32px]">
              {member.name}
            </h3>
            <p className="font-poppins font-normal text-sm md:text-base">
              {t(`teamMembers.${member.name}`)}
            </p>
            <div className="flex items-center gap-4 mt-3 text-lg">
              <Image className="white-icons-to-black" src={Icon_Twitter} alt="twitter" />
              <Image className="white-icons-to-black" src={Icon_Instagram} alt="instagram" />
              <Image className="white-icons-to-black" src={Icon_Linkedin} alt="linkedin" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4">
        {teamMembers.map((_, idx) => (
          <Image
            key={idx}
            src={idx === currentIndex ? RedDot : Dot}
            alt="dot"
            width={idx === currentIndex ? 20 : 16}
            height={idx === currentIndex ? 20 : 16}
            className="transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default About_Slider;

