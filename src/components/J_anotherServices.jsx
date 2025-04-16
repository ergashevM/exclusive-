import Image from "next/image";
import Shop from "@/assets/shop.svg";
import Call from "@/assets/sale.svg";
import ShoppingBag from "@/assets/Icon-Shopping bag.svg";
import Moneybag from "@/assets/moneybag.png";
import { useTranslation } from "react-i18next";

const AnotherServices = () => {
  const { t, i18n } = useTranslation();
  const isUzOrRu = i18n.language === "uz" || i18n.language === "ru";

  return (
    <div className="w-full max-w-[1170px] mx-auto my-30 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div className="group flex flex-col items-center justify-center gap-y-3 bg-white relative border border-[#0000004D] w-[270px] h-[230px] rounded-[4px] hover:bg-[#DB4444]">
          <span className="w-20 h-20 bg-[rgba(47,46,48,0.2)] rounded-[50px]"></span>
          <span className="w-14.5 h-14.5 absolute bg-black rounded-[50px] top-11.5 group-hover:bg-white"></span>
          <Image
            className="shop w-[40px] top-[57px] absolute group-hover:filter group-hover:invert-0 group-hover:sepia-[7%] group-hover:saturate-[100%] group-hover:hue-rotate-[306deg] group-hover:brightness-0 group-hover:contrast-[109%]"
            src={Shop}
            alt="shop"
          />
          <h4 className="font-inter font-bold text-[32px] leading-[30px] group-hover:text-white">
            10.5k
          </h4>
          <p className="font-poppins font-normal text-base leading-[24px] group-hover:text-white">
            {t("oNe")}
          </p>
        </div>

        <div className="group flex flex-col items-center justify-center gap-y-3 bg-white relative border border-[#0000004D] w-[270px] h-[230px] rounded-[4px] hover:bg-[#DB4444]">
          <span className="w-20 h-20 bg-[rgba(47,46,48,0.2)] rounded-[50px]"></span>
          <span className="w-14.5 h-14.5 absolute bg-black rounded-[50px] top-11.5 group-hover:bg-white"></span>
          <Image
            className="sale w-[40px] top-[55px] absolute"
            src={Call}
            alt="call"
          />
          <h4 className="font-inter font-bold text-[32px] leading-[30px] group-hover:text-white">
            33k
          </h4>
          <p className="font-poppins font-normal text-base leading-[24px] group-hover:text-white">
            {t("tWo")}
          </p>
        </div>

        <div className="group flex flex-col items-center justify-center gap-y-3 bg-white relative border border-[#0000004D] w-[270px] h-[230px] rounded-[4px] hover:bg-[#DB4444]">
          <span className="w-20 h-20 bg-[rgba(47,46,48,0.2)] rounded-[50px]"></span>
          <span className="w-14.5 h-14.5 absolute bg-black rounded-[50px] top-11.5 group-hover:bg-white"></span>
          <Image
            className="shop w-[40px] top-[57px] absolute group-hover:filter group-hover:invert-0 group-hover:sepia-[7%] group-hover:saturate-[100%] group-hover:hue-rotate-[306deg] group-hover:brightness-0 group-hover:contrast-[109%]"
            src={ShoppingBag}
            alt="call"
          />
          <h4 className="font-inter font-bold text-[32px] leading-[30px] group-hover:text-white">
            45.5k
          </h4>
          <p className="font-poppins font-normal text-base leading-[24px] group-hover:text-white">
            {t("thRee")}
          </p>
        </div>
        <div className="group flex flex-col items-center justify-center gap-y-3 bg-white relative border border-[#0000004D] rounded-[4px] w-[270px] h-[230px] hover:bg-[#DB4444]">
      <span className="w-20 h-20 bg-[rgba(47,46,48,0.2)] rounded-[50px]"></span>

      <span
        className={`w-14.5 h-14.5 absolute bg-black rounded-[50px] ${
          isUzOrRu ? "top-9" : "top-11.5"
        } group-hover:bg-white`}
      ></span>

      <Image
        className={`w-[45px] absolute ${
          isUzOrRu ? "top-[45px]" : "top-[53.5px]"
        } group-hover:filter group-hover:invert-0 group-hover:sepia-[7%] group-hover:saturate-[100%] group-hover:hue-rotate-[306deg] group-hover:brightness-0 group-hover:contrast-[109%]`}
        src={Moneybag}
        alt="moneybag"
      />

      <h4 className="font-inter font-bold text-[32px] leading-[30px] group-hover:text-white">
        25k
      </h4>
      <p className="font-poppins font-normal text-base leading-[24px] text-center group-hover:text-white">
        {t("fOUr")}
      </p>
    </div>
      </div>
    </div>
  );
};

export default AnotherServices;
