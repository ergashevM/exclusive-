"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "react-i18next";
import Top from "@/assets/arrow.svg";

const Cart = () => {
  
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();
  const { t, i18n } = useTranslation();

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price.current * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="h-146 text-center text-white text-2xl font-poppins py-10 emptyBox flex flex-col items-center justify-center pl-13 my-10">
        <h2 className="text-2xl font-semibold">{t("cart_empty")}</h2>
        <Link
          href="/"
          className="text-red-500 underline underline-offset-4 mt-4 block cursor-pointer"
        >
          <p className="mb-10">{t("go_back_home")}</p>
        </Link>
      </div>
    );
  }

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
    <div className="w-full max-w-[1170px] mx-auto pt-15 pb-30">
      <div className="flex items-center gap-x-2 mb-16 font-poppins text-sm">
        <Link className="text-gray-500" href="/">
          {t("home")}
        </Link>
        <span className="text-gray-500">/</span>
        <h4 className="text-sm">{t("cart_title")}</h4>
      </div>

      <div className="hidden md:flex items-center justify-between px-5 mb-6 font-semibold">
        <h3 className="w-1/4">{t("product")}</h3>
        <h3 className="w-1/4 text-center">{t("price")}</h3>
        <h3 className="w-1/4 text-center">{t("quantity")}</h3>
        <h3 className="w-1/4 text-right">{t("subtotal")}</h3>
      </div>

      {cartItems.map((item) => {
        const translation = productDescriptions[item.id]?.[i18n.language];

        return (
          <div
            key={item.id}
            className="w-full flex flex-col md:flex-row items-center justify-between px-5 py-4 border-t border-gray-100 gap-4"
          >
            <div className="w-full md:w-1/4 flex items-center gap-x-3">
              <Image
                src={item.mainImage}
                alt={item.productname}
                width={40}
                height={40}
                className="object-cover"
              />
              <h4 className="font-poppins text-base font-normal leading-[24px]">
                {translation?.name || item.productname}
              </h4>
            </div>
            <h3 className="w-full md:w-1/4 text-center font-poppins text-base font-normal leading-[24px]">
              ${item.price.current.toFixed(2)}
            </h3>
            <div className="w-full md:w-1/4 flex justify-center">
              <span className="w-[72px] h-[44px] border border-gray-400 flex items-center justify-between px-3 rounded text-base">
                {String(item.quantity).padStart(2, "0")}
                <span className="flex flex-col cursor-pointer">
                  <Image
                    src={Top}
                    alt="up"
                    onClick={() =>
                      item.quantity < 99 && increaseQuantity(item.id)
                    }
                  />
                  <Image
                    src={Top}
                    alt="down"
                    className="rotate-180"
                    onClick={() =>
                      item.quantity > 1 && decreaseQuantity(item.id)
                    }
                  />
                </span>
              </span>
            </div>
            <h3 className="w-full md:w-1/4 text-right font-poppins text-base font-normal leading-[24px]">
              ${(item.price.current * item.quantity).toFixed(2)}
            </h3>
          </div>
        );
      })}

      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
        <Link href="/">
          <button className="w-full md:w-[218px] h-[56px] border rounded font-medium cursor-pointer">
            {t("return_shop")}
          </button>
        </Link>
        <button
          onClick={clearCart}
          className="w-full md:w-[195px] h-[56px] border rounded font-medium cursor-pointer"
        >
          {t("update_cart")}
        </button>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between mt-10 gap-y-8">
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <input
            placeholder={t("coupon_code")}
            className="w-full sm:w-[300px] h-[56px] border rounded pl-5 outline-none"
          />
          <button className="w-full sm:w-[211px] h-[56px] bg-[#DB4444] text-white rounded cursor-pointer">
            {t("apply_coupon")}
          </button>
        </div>

        <div className="w-full lg:w-[470px] border rounded p-6 flex flex-col gap-y-5">
          <h3 className="text-xl font-medium">{t("cart_total")}</h3>
          <div className="flex justify-between border-b border-gray-200 pb-4 font-poppins text-base font-normal leading-[24px]">
            <span>{t("subtotal")}:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-4 font-poppins text-base font-normal leading-[24px]">
            <span>{t("shipping")}:</span>
            <span>{t("free")}</span>
          </div>
          <div className="flex justify-between font-poppins text-base font-normal leading-[24px]">
            <span>{t("total")}:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <button className="w-full h-[56px] bg-[#DB4444] text-white rounded mt-2 cursor-pointer">
              {t("checkout")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
