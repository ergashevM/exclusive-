"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Countdown = () => {
  const { t } = useTranslation();
  const targetDate = new Date("2025-05-21T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 mb-[8px]">
      <div className="flex flex-col items-center">
        <span className="text-xs font-semibold font-poppins leading-[18px]">
          {t("days")}
        </span>
        <span className="text-3xl font-inter leading-[30px] font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#E07575] text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-xs font-semibold font-poppins leading-[18px]">
          {t("hours")}
        </span>
        <span className="text-3xl font-inter leading-[30px] font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#E07575] text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-xs font-semibold font-poppins leading-[18px]">
          {t("minutes")}
        </span>
        <span className="text-3xl font-inter leading-[30px] font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#E07575] text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-xs font-semibold font-poppins leading-[18px]">
          {t("seconds")}
        </span>
        <span className="text-3xl font-inter leading-[30px] font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
