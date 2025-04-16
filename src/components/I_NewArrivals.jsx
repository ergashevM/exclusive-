"use client";
import Image from "next/image";
import Trim from "@/assets/trim.svg";
import { useTranslation } from "react-i18next"; // i18next hook

const NewArrivals = () => {
  const { t } = useTranslation(); // Tarjima qilish uchun t funksiyasini olish

  return (
    <div className="w-full max-w-[1170px] mx-auto px-4">
      <div className="h-auto flex flex-col gap-y-4 mb-15 fade-in">
        <div className="flex flex-col items-start gap-y-2">
          <h3 className="font-poppins font-semibold text-sm md:text-base text-[#DB4444] flex items-center gap-x-2">
            <Image src={Trim} alt="trim" />
            {t("featured")} {/* Tarjima qilish */}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-y-4 md:gap-y-0">
          <h3 className="font-inter font-semibold text-2xl md:text-4xl text-black">
            {t("new_arrival")} {/* Tarjima qilish */}
          </h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="ps5 w-full lg:w-1/2 h-[600px] flex flex-col items-start justify-end gap-y-3 bg-black text-white rounded-[4px] p-10 hover:scale-105 transition-transform duration-500 ease-in-out">
          <h4 className="font-inter font-semibold text-[24px] leading-[24px]">
            {t("playstation_5")} {/* Tarjima qilish */}
          </h4>
          <p className="font-poppins font-normal text-sm leading-[21px]">
            {t("ps5_description")} {/* Tarjima qilish */}
          </p>
          <button className="text-white underline underline-offset-2 hover:text-[#DB4444] transition-colors duration-300">
            {t("shop_now")} {/* Tarjima qilish */}
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
          <div className="woman h-[284px] flex flex-col items-start justify-end gap-y-3 pb-6 pl-6 bg-[#0D0D0D] text-white rounded-[4px] hover:scale-105 transition-transform duration-500 ease-in-out">
            <h4 className="font-inter font-semibold text-[24px] leading-[24px]">
              {t("womens_collections")} {/* Tarjima qilish */}
            </h4>
            <p className="font-poppins font-normal text-sm leading-[21px]">
              {t("womens_description")} {/* Tarjima qilish */}
            </p>
            <button className="text-white underline underline-offset-3 hover:text-[#DB4444] transition-colors duration-300">
              {t("shop_now")} {/* Tarjima qilish */}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="speaker w-full sm:w-1/2 h-[284px] flex flex-col items-start justify-end gap-y-3 pb-6 pl-6 bg-black text-white rounded-[4px] hover:scale-105 transition-transform duration-500 ease-in-out">
              <h4 className="font-inter font-semibold text-[24px] leading-[24px]">
                {t("speakers")} {/* Tarjima qilish */}
              </h4>
              <p className="font-poppins font-normal text-sm leading-[21px]">
                {t("speakers_description")} {/* Tarjima qilish */}
              </p>
              <button className="text-white underline underline-offset-3 hover:text-[#DB4444] transition-colors duration-300">
                {t("shop_now")} {/* Tarjima qilish */}
              </button>
            </div>

            <div className="perfume w-full sm:w-1/2 h-[284px] flex flex-col items-start justify-end gap-y-3 pb-6 pl-6 bg-black text-white rounded-[4px] hover:scale-105 transition-transform duration-500 ease-in-out">
              <h4 className="font-inter font-semibold text-[24px] leading-[24px]">
                {t("perfume")} {/* Tarjima qilish */}
              </h4>
              <p className="font-poppins font-normal text-sm leading-[21px]">
                {t("perfume_description")} {/* Tarjima qilish */}
              </p>
              <button className="text-white underline underline-offset-3 hover:text-[#DB4444] transition-colors duration-300">
                {t("shop_now")} {/* Tarjima qilish */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;

