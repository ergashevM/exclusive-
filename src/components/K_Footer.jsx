import Image from "next/image";
import Send from "@/assets/send.svg";
import Qr from "@/assets/qr.svg";
import GooglePlay from "@/assets/GooglePlay.svg";
import AppStore from "@/assets/appStore.svg";
import Icon_Facebook from "@/assets/Icon-Facebook.svg";
import Icon_Twitter from "@/assets/Icon-Twitter.svg";
import Icon_Instagram from "@/assets/icon-instagram.svg";
import Icon_Linkedin from "@/assets/Icon-Linkedin.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1600px] h-auto lg:h-[440px] lg:px-47.5 bg-black text-white flex items-start justify-between flex-wrap pt-20 gap-10">
      <ul className="w-[217px] flex flex-col gap-y-6">
        <li className="font-inter font-bold text-[24px] leading-[24px]">
          {t("exclusive")}
        </li>
        <li className="font-poppins font-medium text-[20px] leading-[28px] my-2">
          {t("subscribe")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("subscribe_info")}
        </li>
        <li className="relative w-full max-w-[217px]">
          <input
            className="w-full h-[48px] pl-5 pr-9 outline-none bg-[#000] text-gray-300 rounded-[4px] font-poppins font-normal text-[16px] leading-[24px] border border-white"
            type="text"
            placeholder={t("enter_email")}
          />
          <Image className="absolute top-3.5 right-2" src={Send} alt="send" />
        </li>
      </ul>
      <ul className="w-[175px] flex flex-col gap-y-5">
        <li className="font-poppins font-medium text-[20px] leading-[28px] mb-3">
          {t("support")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("address_us")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("email_us")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("phone")}
        </li>
      </ul>
      <ul className="w-[123px] flex flex-col gap-y-5">
        <li className="font-poppins font-medium text-[20px] leading-[28px] mb-3">
          {t("account")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("my_account")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("login_register")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("cart")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("wishlist")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("shop")}
        </li>
      </ul>
      <ul className="w-[109px] flex flex-col gap-y-5">
        <li className="font-poppins font-medium text-[20px] leading-[28px] mb-3">
          {t("quick_link")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("privacy_policy")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("terms_of_use")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("faq")}
        </li>
        <li className="font-poppins font-normal text-base leading-[24px]">
          {t("contact")}
        </li>
      </ul>
      <div className="w-[198px] flex flex-col">
        <h3 className="font-poppins font-medium text-[20px] leading-[28px] mb-7">
          {t("download_app")}
        </h3>
        <p className="font-poppins font-medium text-xs leading-[18px] text-gray-300">
          {t("app_offer")}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div>
            <Image src={Qr} alt="qr code" />
          </div>
          <div className="flex flex-col items-center justify-between gap-y-2 pb-1">
            <Image src={GooglePlay} alt="store" />
            <Image className="ml-0.5" src={AppStore} alt="store" />
          </div>
        </div>
        <span className="flex items-center justify-between mt-5">
          <Image src={Icon_Facebook} alt="social media icon" />
          <Image src={Icon_Twitter} alt="social media icon" />
          <Image src={Icon_Instagram} alt="social media icon" />
          <Image src={Icon_Linkedin} alt="social media icon" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
