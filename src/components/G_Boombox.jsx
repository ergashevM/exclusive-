import Image from "next/image";
import Countdown from "./g_countdown";
import BigBoombox from "@/assets/bigBoombox.svg";
import { useTranslation } from "react-i18next";

const Boombox = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between bg-black text-white p-6 md:p-10 gap-y-10 lg:gap-y-0">
      {/* Text Section */}
      <div className="flex flex-col items-start justify-between gap-y-6 md:gap-y-9 text-center lg:text-left">
        <h4 className="text-[#00FF66] font-poppins font-semibold text-sm md:text-base leading-[20px]">
          {t("category")}
        </h4>
        <h1 className="font-inter font-semibold text-[32px] md:text-[48px] leading-snug md:leading-[60px]">
          {t("enhance_music_experience")}
        </h1>
        <Countdown />
        <button className="animated-border-btn relative inline-flex items-center justify-center w-[150px] md:w-[170px] h-[50px] md:h-[56px] text-white rounded-[4px] z-10 overflow-hidden bg-[#00FF66] mt-3">
          <span className="z-10 relative">{t("buy_now")}</span>
        </button>
      </div>

      <div className="relative w-full max-w-[600px] flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[300px] rounded-full bg-white blur-3xl opacity-30 z-0" />
        <Image
          src={BigBoombox}
          alt="boombox"
          className="relative z-10 w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Boombox;
