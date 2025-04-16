import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Countdown = () => {
  const { t } = useTranslation();

  const calculateTimeLeft = () => {
    const difference = new Date("2025-05-05T00:00:00") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-6">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div
          key={unit}
          className="flex flex-col items-center justify-center bg-white rounded-full w-[65px] h-[65px]"
        >
          <span className="text-black text-xl font-bold leading-none">
            {timeLeft[unit] !== undefined
              ? String(timeLeft[unit]).padStart(2, "0")
              : "00"}
          </span>
          <span className="text-[10px] text-black mt-1 capitalize">
            {t(`${unit}`)} 
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
