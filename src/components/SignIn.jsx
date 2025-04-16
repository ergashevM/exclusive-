import Image from "next/image";
import Icon_Google from "@/assets/icon-google.svg";
import LeftImage from "@/assets/LeftImage.svg";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useTranslation } from "react-i18next";

const Sign_In = () => {
  const { t } = useTranslation();

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/account" });
  };

  return (
    <div className="w-full max-w-[1305px] py-15 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      <div>
        <Image src={LeftImage} alt="phone" />
      </div>
      <div className="w-full max-w-[371px] h-auto lg:h-[404px] flex flex-col gap-y-8">
        <h2 className="font-inter font-medium text-[36px] leading-[30px]">
          {t("log_in_title")}
        </h2>
        <p className="font-poppins font-normal text-base leading-[24px] mb-2">
          {t("enter_details")}
        </p>
        <input
          className="w-full max-w-[371px] border-b-2 border-gray-300 outline-none my-2"
          type="email"
          placeholder={t("email_placeholder")}
        />
        <input
          className="w-full max-w-[371px] border-b-2 border-gray-300 outline-none"
          type="password"
          placeholder={t("password_placeholder")}
        />
        <div className="flex items-center justify-between max-w-[371px] mt-4">
          <button className="w-full max-w-[143px] h-[56px] bg-[#DB4444] text-white rounded-[4px] font-poppins font-medium text-base leading-[24px] cursor-pointer hover:bg-red-600">
            {t("log_in")}
          </button>
          <button className="w-full h-[54px] rounded-[4px] font-poppins font-medium text-base leading-[24px] text-[#DB4444] cursor-pointer hover:underline">
            {t("forget_password")}
          </button>
        </div>
        <span className="flex items-center justify-center gap-x-3">
          <p className="font-poppins font-normal text-base leading-[24px]">
            {t("no_account")}
          </p>
          <Link
            className="font-poppins font-medium text-base leading-[24px]"
            href="/sign-up"
          >
            {t("sign_up")}
          </Link>
        </span>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-5 max-w-[371px] h-[54px] rounded-[4px] font-poppins font-medium text-base leading-[24px] border border-gray-300 flex items-center justify-center gap-x-3 hover:bg-[#CAE3E8] cursor-pointer"
        >
          <Image src={Icon_Google} alt="google icon" />
          {t("sign_in_with_google")}
        </button>
      </div>
    </div>
  );
};

export default Sign_In;
