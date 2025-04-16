// components/OurProducts.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Trim from "@/assets/trim.svg";
import Indicator from "@/assets/indicator.svg";
import Star from "@/assets/star.svg";
import HalfStar from "@/assets/halfStar.svg";
import EmptyStar from "@/assets/emptyStar.svg";
import Heart from "@/assets/blackHeart.png";
import RedHeart from "@/assets/redHeart.png";
import Eye from "@/assets/eye.svg";
import database from "@/app/database";
import { useTranslation } from "react-i18next";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext"; // 🛒 Qo‘shildi

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <span className="flex items-center gap-x-1">
      {[...Array(full)].map((_, i) => (
        <Image key={`full-${i}`} src={Star} alt="star" width={16} height={16} />
      ))}
      {[...Array(half)].map((_, i) => (
        <Image
          key={`half-${i}`}
          src={HalfStar}
          alt="half star"
          width={16}
          height={16}
        />
      ))}
      {[...Array(empty)].map((_, i) => (
        <Image
          key={`empty-${i}`}
          src={EmptyStar}
          alt="empty star"
          width={16}
          height={16}
        />
      ))}
    </span>
  );
};

const productNames = {
  10: { uz: "Quruq It Oziq-ovqat", ru: "Сухой корм для собак", en: "Breed Dry Dog Food" },
  11: { uz: "CANON EOS DSLR Kamera", ru: "Камера CANON EOS DSLR", en: "CANON EOS DSLR Camera" },
  12: { uz: "ASUS FHD O'yin Noutbuki", ru: "Игровой Ноутбук ASUS FHD", en: "ASUS FHD Gaming Laptop" },
  13: { uz: "Curology Mahsulotlar To'plami", ru: "Набор продуктов Curology", en: "Curology Product Set" },
  14: { uz: "Bolalar Elektr Avtomobili", ru: "Электрический Автомобиль для Детей", en: "Kids Electric Car" },
  15: { uz: "Jr. Zoom Futbol Poyafzallari", ru: "Футбольные Кроссовки Jr. Zoom", en: "Jr. Zoom Soccer Cleats" },
  16: { uz: "GP11 Shooter USB O'yin Pult", ru: "USB Геймпад GP11 Shooter", en: "GP11 Shooter USB Gamepad" },
  17: { uz: "Kishel Qoplamali Kurtka", ru: "Куртка с Квадратным Узором", en: "Quilted Satin Jacket" },
  18: { uz: "AUDEMARS PIGUET GREY7490", ru: "AUDEMARS PIGUET GREY7490", en: "AUDEMARS PIGUET GREY7490" },
  19: { uz: "Chop etilgan Mug", ru: "Кружка с Печатью", en: "Mug with print: Red Dead..." },
};

const OurProducts = () => {
  const { t, i18n } = useTranslation();
  const [startIndex, setStartIndex] = useState(9);
  const maxIndex = database.length - 8;

  const nextSlide = () => setStartIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  const prevSlide = () => setStartIndex((prev) => (prev > 9 ? prev - 1 : prev));
  const visibleProducts = database.slice(startIndex, startIndex + 8);

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart(); // 🛒 Cart funksiyasini chaqirdik

  const isLiked = (id) => wishlist.some((product) => product.id === id);
  const toggleLike = (product) => {
    isLiked(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="w-full max-w-[1170px] mx-auto my-20 flex flex-col gap-y-10 pb-15">
      <div className="h-auto flex flex-col gap-y-4">
        <div className="flex flex-col items-start gap-y-2">
          <h3 className="font-poppins font-semibold text-sm md:text-base text-[#DB4444] flex items-center gap-x-2">
            <Image src={Trim} alt="trim" />
            {t("our_products")}
          </h3>
          <p className="text-xs md:text-sm font-medium text-[#DB4444]">
            {t("showing_products", {
              start: startIndex + 1,
              end: Math.min(startIndex + 8, database.length),
              total: database.length,
            })}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-y-4 md:gap-y-0">
          <div className="flex items-center gap-x-30">
            <h3 className="font-inter font-semibold text-2xl md:text-4xl text-black">
              {t("explore_products")}
            </h3>
          </div>
          <span className="flex items-center gap-x-2">
            <button onClick={prevSlide}>
              <Image className="cursor-pointer" src={Indicator} alt="left" />
            </button>
            <button onClick={nextSlide}>
              <Image className="rotate-180 cursor-pointer" src={Indicator} alt="right" />
            </button>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => {
          const ratingValue = parseFloat(product.rating?.split("/")[0]) || 0;

          return (
            <div
              key={product.id}
              className="w-full h-[310px] flex flex-col justify-between rounded-md"
            >
              <div className="h-[250px] flex items-center justify-center bg-[#F5F5F5] rounded-md p-10 relative overflow-hidden group">
                <Image
                  src={product.mainImage}
                  alt={productNames[product.id][currentLanguage]}
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                {product.percent && (
                  <span className="font-poppins text-[11px] text-white absolute top-[16px] left-3 px-2 py-0.5 rounded-[4px] bg-[#00FF66]">
                    {product.percent}
                  </span>
                )}

                <Image
                  src={isLiked(product.id) ? RedHeart : Heart}
                  alt="like"
                  className={`w-[34px] p-2 absolute top-3 right-2 bg-white rounded-2xl cursor-pointer z-10 transition-transform duration-300 ${
                    isLiked(product.id) ? "scale-110" : "scale-100"
                  }`}
                  onClick={() => toggleLike(product)}
                />

                <Link href={`/product/${product.id}`} className="absolute top-14 right-2 bg-white rounded-2xl z-10">
                  <Image src={Eye} alt="eye" className="cursor-pointer p-1 w-[34px] h-[34px]" />
                </Link>

                {/* 🛒 Cart qo‘shish */}
                <div
                  className="absolute bottom-0 left-0 right-0 text-center py-2 bg-black text-white text-sm font-medium translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  {t("add_to_cart")}
                </div>
              </div>

              <div className="flex flex-col gap-y-1 mt-2">
                <h4 className="font-semibold text-base">
                  {productNames[product.id][currentLanguage]}
                </h4>
                <span className="flex gap-x-3 text-sm">
                  <p className="text-[#DB4444] font-medium">
                    ${product.price.current}
                  </p>
                  <div className="flex items-center gap-x-2">
                    {renderStars(ratingValue)}
                    <p className="text-sm text-gray-500">({product.grades})</p>
                  </div>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <button className="w-full sm:w-[234px] h-[56px] rounded-md font-medium bg-[#DB4444] text-white text-base cursor-pointer">
          {t("view_all_products")}
        </button>
      </div>
    </div>
  );
};

export default OurProducts;

