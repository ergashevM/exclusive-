"use client";
import React from "react";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1170px] mx-auto py-15 pb-30">
      <p className="text-gray-500 mb-20">
        {t("contact_.breadcrumb_home")} <span className="mx-2">/</span>
        <span className="text-black">{t("contact_.breadcrumb_contact")}</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[340px] p-5 space-y-0 bg-white">
          <div className="flex flex-col items-start gap-4 pb-2">
            <div className="flex items-center gap-x-3">
              <div className="p-3 bg-[#DB4444] text-[#fff] rounded-full">
                <Phone size={24} />
              </div>
              <h3 className="font-poppins font-semibold text-base leading-[24px]">
                {t("contact_.call_to_us")}
              </h3>
            </div>
            <div>
              <p className="font-poppins text-sm leading-[21px] mb-3">
                {t("contact_.call_description")}
              </p>
              <p className="font-poppins text-sm leading-[21px] mb-4">
                {t("contact_.phone_number")}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-2 mb-9" />

          <div className="flex flex-col items-start gap-4 pb-2">
            <div className="flex items-center gap-x-3">
              <div className="p-3 bg-[#DB4444] text-[#fff] rounded-full">
                <Mail size={24} />
              </div>
              <h3 className="font-poppins font-semibold text-base leading-[24px]">
                {t("contact_.write_to_us")}
              </h3>
            </div>
            <div>
              <p className="font-poppins text-sm leading-[21px] mb-3">
                {t("contact_.write_description")}
              </p>
              <p className="font-poppins text-sm leading-[21px] mb-3">
                {t("contact_.email_customer")}
              </p>
              <p className="font-poppins text-sm leading-[21px] mb-3">
                {t("contact_.email_support")}
              </p>
            </div>
          </div>
        </div>

        <form className="w-full lg:w-[calc(100%-360px)] flex flex-col items-end p-5 space-y-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <input
              type="text"
              placeholder={t("contact_.placeholder_name")}
              className="w-full h-[50px] px-4 py-2 bg-[#F5F5F5] rounded focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder={t("contact_.placeholder_email")}
              className="w-full h-[50px] px-4 py-2 bg-[#F5F5F5] rounded focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder={t("contact_.placeholder_phone")}
              className="w-full h-[50px] px-4 py-2 bg-[#F5F5F5] rounded focus:outline-none"
              required
            />
          </div>
          <textarea
            placeholder={t("contact_.placeholder_message")}
            rows="6"
            className="w-full h-[207px] px-4 py-2 bg-[#F5F5F5] rounded focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#DB4444] text-white px-10 py-3 rounded hover:bg-red-700 transition-all font-poppins font-medium text-base leading-[24px] cursor-pointer"
          >
            {t("contact_.send_message")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

