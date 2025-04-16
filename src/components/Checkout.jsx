"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "react-i18next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import En from "@/assets/en.gif";
import Ru from "@/assets/ru.gif";
import Uz from "@/assets/uz.gif";
import Nagad from "@/assets/Nagad.png";
import Bkash from "@/assets/Bkash.png";
import Visa from "@/assets/Visa.png";
import Mastercard from "@/assets/Mastercard.png";

const Checkout = () => {
  const { cartItems } = useCart();
  const { t, i18n } = useTranslation();
  const { data: session } = useSession();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const total = cartItems.reduce(
    (acc, item) => acc + item.price.current * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!session) {
      setMessage(
        <div className="flex flex-col gap-y-15 my-10  relative">
          <span>
            Please <br /> register to complete your order
          </span>
          <Image
            src={En}
            className="absolute w-[50px] h-[50px] -top-12 left-0"
            alt="eng"
          />
          <span>
            Пожалуйста, <br /> зарегистрируйтесь для покупки
          </span>
          <Image
            src={Ru}
            className="absolute w-[50px] h-[50px] top-18 -left-1"
            alt="eng"
          />
          <span>
            Iltimos, <br /> xarid uchun ro'yxatdan o'ting
          </span>
          <Image
            src={Uz}
            className="absolute w-[50px] h-[50px] top-47 -left-2"
            alt="eng"
          />
        </div>
      );
    } else {
      setMessage(
        <div className="flex flex-col gap-y-25 mt-20 mb-10 relative">
          <span>Your order has been received</span>
          <Image
            src={En}
            className="absolute w-[50px] h-[50px] -top-12 left-0"
            alt="eng"
          />
          <span>Ваш заказ принят</span>
          <Image
            src={Ru}
            className="absolute w-[50px] h-[50px] top-18 -left-1"
            alt="eng"
          />
          <span>Arizangiz qabul qilindi</span>
          <Image
            src={Uz}
            className="absolute w-[50px] h-[50px] top-50 -left-2"
            alt="eng"
          />
        </div>
      );
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const productDescriptions = {
    1: {
      uz: { name: "HAVIT HV-G92 o‘yin joystigi" },
      ru: { name: "Игровой джойстик HAVIT HV-G92" },
      en: { name: "HAVIT HV-G92 Gamepad" },
    },
    2: {
      uz: { name: "AK-900 simli klaviatura" },
      ru: { name: "Проводная клавиатура AK-900" },
      en: { name: "AK-900 Wired Keyboard" },
    },
    3: {
      uz: { name: "IPS LCD o‘yin monitori" },
      ru: { name: "Игровой монитор IPS LCD" },
      en: { name: "IPS LCD Gaming Monitor" },
    },
    4: {
      uz: { name: "S-Series qulay stul" },
      ru: { name: "Удобное кресло S-Series" },
      en: { name: "S-Series Comfort Chair" },
    },
    5: {
      uz: { name: "Memo DL05 sovutgich" },
      ru: { name: "Охладитель Memo DL05" },
      en: { name: "Memo DL05 Funcooler" },
    },
    6: {
      uz: { name: "The North palto" },
      ru: { name: "Пальто The North" },
      en: { name: "The North Coat" },
    },
    7: {
      uz: { name: "Gucci sport sumkasi" },
      ru: { name: "Сумка Gucci Duffle" },
      en: { name: "Gucci Duffle Bag" },
    },
    8: {
      uz: { name: "RGB suyuqlik CPU sovutgichi" },
      ru: { name: "Жидкостный охладитель CPU с RGB" },
      en: { name: "RGB Liquid CPU Cooler" },
    },
    9: {
      uz: { name: "Kichik kitob javoni" },
      ru: { name: "Небольшая книжная полка" },
      en: { name: "Small Bookshelf" },
    },
    10: {
      uz: { name: "Breed quruq it ozuqasi" },
      ru: { name: "Сухой корм для собак Breed" },
      en: { name: "Breed Dry Dog Food" },
    },
    11: {
      uz: { name: "Canon EOS DSLR kamera" },
      ru: { name: "Камера Canon EOS DSLR" },
      en: { name: "Canon EOS DSLR Camera" },
    },
    12: {
      uz: { name: "ASUS FHD o‘yin noutbuki" },
      ru: { name: "Игровой ноутбук ASUS FHD" },
      en: { name: "ASUS FHD Gaming Laptop" },
    },
    13: {
      uz: { name: "Curology mahsulot to‘plami" },
      ru: { name: "Набор продуктов Curology" },
      en: { name: "Curology Product Set" },
    },
    14: {
      uz: { name: "Bolalar elektr mashinasi" },
      ru: { name: "Электромобиль для детей" },
      en: { name: "Kids Electric Car" },
    },
    15: {
      uz: { name: "Jr. Zoom futbol butsalari" },
      ru: { name: "Футбольные бутсы Jr. Zoom" },
      en: { name: "Jr. Zoom Soccer Cleats" },
    },
    16: {
      uz: { name: "GP11 Shooter USB o‘yin joystigi" },
      ru: { name: "Игровой контроллер USB GP11 Shooter" },
      en: { name: "GP11 Shooter USB Gamepad" },
    },
    17: {
      uz: { name: "Tikilgan atlas kurtka" },
      ru: { name: "Стёганая атласная куртка" },
      en: { name: "Quilted Satin Jacket" },
    },
    18: {
      uz: { name: "AUDEMARS PIGUET GREY7490 soat" },
      ru: { name: "Часы AUDEMARS PIGUET GREY7490" },
      en: { name: "AUDEMARS PIGUET GREY7490" },
    },
    19: {
      uz: { name: "Red Dead nashrli krujka" },
      ru: { name: "Кружка с принтом Red Dead" },
      en: { name: "Mug with Red Dead print" },
    },
  };

  return (
    <div className="w-full max-w-[1170px] mx-auto pt-15 pb-30 relative">
      {message && (
        <div className="absolute left-1/2 top-100 transform -translate-x-1/2 bg-white border-black border text-black font-poppins text-xl px-6 py-3 rounded-md shadow-lg z-50 w-100 h-100 flex items-center justify-center">
          {message}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-x-2 mb-15 font-poppins text-sm">
        <Link className="text-gray-500" href="/">
          {t("home")}
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="/cart" className="text-sm text-gray-500">
          {t("cart_title")}
        </Link>
        <span className="text-gray-500">/</span>
        <h4 className="text-sm">{t("checkout_")}</h4>
      </div>

      <h3 className="font-inter font-medium text-2xl sm:text-3xl leading-[30px] mb-15">
        {t("billing")}
      </h3>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-x-10">
        <div className="w-full max-w-full lg:max-w-[470px] flex flex-col gap-y-6">
          {[
            { id: "name", label: t("form.first_name"), type: "text" },
            { id: "CompanyName", label: t("form.company_name"), type: "text" },
            {
              id: "StreetAddress",
              label: t("form.street_address"),
              type: "text",
            },
            { id: "apartment", label: t("form.apartment"), type: "text" },
            { id: "city", label: t("form.city"), type: "text" },
            { id: "number", label: t("form.phone_number"), type: "number" },
            { id: "email", label: t("form.email_address"), type: "email" },
          ].map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="text-gray-400 text-base flex gap-1"
              >
                {field.label} <span className="text-[#DB4444]">*</span>
              </label>
              <input
                id={field.id}
                type={field.type}
                className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] pl-5 outline-[#7FFFD4]"
              />
            </div>
          ))}

          <div className="flex items-center gap-x-3">
            <input
              id="check"
              type="checkbox"
              className="w-[20px] h-[20px] accent-[#DB4444]"
            />
            <label htmlFor="check" className="text-base leading-[24px]">
              {t("form.save_info")}
            </label>
          </div>
        </div>

        <div className="w-full max-w-full lg:max-w-[470px] h-auto lg:h-[400px] p-5 rounded-md">
          {cartItems.length === 0 ? (
            <div className="text-center font-medium text-lg">
              <p className="text-red-600">{t("cart_empty")} 🛒</p>
              <Link
                className="underline underline-offset-8 text-[#000] hover:text-red-600"
                href="/"
              >
                {t("go_back_home")}
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-x-3">
                    <Image
                      src={item.mainImage}
                      alt={item.productname}
                      width={40}
                      height={40}
                      className="object-cover p-1"
                    />
                    <span className="font-medium text-base">
                      {productDescriptions[item.id]?.[i18n.language]?.name ||
                        item.name}
                    </span>
                  </div>
                  <span className="text-base font-semibold">
                    ${(item.price.current * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="border-t border-gray-300 pt-4 text-base space-y-2">
                <div className="flex justify-between border-b border-gray-300 pb-4">
                  <span className=" text-gray-600">{t("subtotal")}:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-4">
                  <span className="text-gray-600">{t("shipping")}:</span>
                  <span className="text-green-500 font-medium">
                    {t("free")}
                  </span>
                </div>
                <div className="flex justify-between font-semibold pt-2">
                  <span>{t("total")}:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    className="w-[20px] h-[20px] accent-black"
                  />
                  <label htmlFor="bank" className="text-base">
                    {t("bank")}
                  </label>
                  <div className="flex items-center gap-2 ml-auto">
                    <Image
                      src={Bkash}
                      className="w-[40px] h-[38px]"
                      alt="bkash"
                    />
                    <Image
                      src={Visa}
                      className="w-[38px] h-[12px]"
                      alt="visa"
                    />
                    <Image
                      src={Mastercard}
                      className="w-[42px] h-[28px]"
                      alt="mastercard"
                    />
                    <Image
                      src={Nagad}
                      className="w-[40px] h-[38px]"
                      alt="nagad"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    defaultChecked
                    className="w-[20px] h-[20px] accent-black"
                  />
                  <label htmlFor="cod" className="text-base">
                    {t("cash_on_delivery")}
                  </label>
                </div>
              </div>

              {/* Coupon Input */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                <input
                  type="text"
                  placeholder={t("coupon_placeholder")}
                  className="flex-1 border rounded px-3 h-[50px] w-full"
                />
                <button className="bg-[#DB4444] text-white px-5 py-2 rounded h-[50px] w-full sm:w-auto">
                  {t("apply_coupon")}
                </button>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full bg-[#DB4444] text-white py-3 rounded text-base font-semibold cursor-pointer"
              >
                {t("place_order")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
