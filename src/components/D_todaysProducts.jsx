"use client";
import Image from "next/image";
import { useState } from "react";
import Trim from "@/assets/trim.svg";
import Indicator from "@/assets/indicator.svg";
import Star from "@/assets/star.svg";
import HalfStar from "@/assets/halfStar.svg";
import EmptyStar from "@/assets/emptyStar.svg";
import Heart from "@/assets/blackHeart.png";
import RedHeart from "@/assets/redHeart.png";
import Eye from "@/assets/eye.svg";
import Countdown from "./d_counter";
import database from "@/app/database";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";


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
  1: {
    uz: "HAVIT HV-G92 Gamepad",
    ru: "HAVIT HV-G92 Геймпад",
    en: "HAVIT HV-G92 Gamepad",
  },
  2: {
    uz: "AK-900 Simli Klaviatura",
    ru: "AK-900 Провода Клавиатура",
    en: "AK-900 Wired Keyboard",
  },
  3: {
    uz: "IPS LCD O'yin Monitori",
    ru: "IPS LCD Игровой Монитор",
    en: "IPS LCD Gaming Monitor",
  },
  4: {
    uz: "S-Series Komfort O'tirgi",
    ru: "S-Series Комфортное Кресло",
    en: "S-Series Comfort Chair",
  },
  5: {
    uz: "Memo DL05 Funcooler",
    ru: "Memo DL05 Funcooler",
    en: "Memo DL05 Funcooler",
  },
};

const TodaysProducts = () => {
  const { t, i18n } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = database.slice(0, 5);
  const maxIndex = visibleProducts.length - 4;
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();


  const isLiked = (id) => wishlist.some((product) => product.id === id);

  const toggleLike = (product) => {
    if (isLiked(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  const nextSlide = () =>
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  const prevSlide = () => setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));

  const productsToDisplay = visibleProducts.slice(startIndex, startIndex + 4);

  const currentLanguage = i18n.language;

  return (
    <div className="w-full max-w-[1170px] mx-auto my-20 flex flex-col gap-y-10 pb-15 border-b border-gray-300">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col items-start gap-y-2">
          <div className="flex flex-col items-start gap-y-2">
            <h3 className="font-poppins font-semibold text-sm md:text-base text-[#DB4444] flex items-center gap-x-2">
              <Image src={Trim} alt="trim" />
              {t("todays_products")}
            </h3>
            <p className="text-xs md:text-sm font-medium text-[#DB4444]">
              {t("showing_products", {
                start: startIndex + 1,
                end: Math.min(
                  startIndex + productsToDisplay.length,
                  visibleProducts.length
                ),
                total: visibleProducts.length,
              })}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-y-4 md:gap-y-0">
          <div className="flex items-center gap-x-30">
            <h3 className="font-inter font-semibold text-2xl md:text-4xl text-black">
              {t("flash_sales")}
            </h3>
            <Countdown />
          </div>
          <span className="flex items-center gap-x-2">
            <button onClick={prevSlide}>
              <Image className="cursor-pointer" src={Indicator} alt="left" />
            </button>
            <button onClick={nextSlide}>
              <Image
                className="rotate-180 cursor-pointer"
                src={Indicator}
                alt="right"
              />
            </button>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsToDisplay.map((product) => {
            const ratingValue = parseFloat(product.rating?.split("/")[0]) || 0;

            return (
              <div
                key={product.id}
                className="w-full h-[350px] flex flex-col justify-between rounded-md"
              >
                <div className="relative group h-[250px] flex items-center justify-center bg-[#F5F5F5] rounded-md p-4 overflow-hidden">
                  <Image
                    src={product.mainImage}
                    alt={productNames[product.id][currentLanguage]}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />

                  <Image
                    src={Trim}
                    alt="trim"
                    className="absolute top-1 left-5 rotate-90"
                  />
                  <span className="font-poppins text-[11px] text-white absolute top-[16px] left-4">
                    {product.percent}
                  </span>

                  <Image
                    src={isLiked(product.id) ? RedHeart : Heart}
                    alt="like"
                    className={`w-[34px] p-2 absolute top-3 right-2 bg-white rounded-2xl cursor-pointer z-10 transition-transform duration-300 ${
                      isLiked(product.id) ? "scale-110" : "scale-100"
                    }`}
                    onClick={() => toggleLike(product)}
                  />

                  <Link
                    href={`/product/${product.id}`}
                    className="absolute top-14 right-2 bg-white rounded-2xl z-10"
                  >
                    <Image
                      src={Eye}
                      alt="eye"
                      className="cursor-pointer p-1 w-[34px] h-[34px]"
                    />
                  </Link>

                  <div className="absolute bottom-0 left-0 right-0 text-center py-2 bg-black text-white text-sm font-medium translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <button
                      className="w-full h-full cursor-pointer"
                      onClick={() => addToCart(product)}
                    >
                      {t("add_to_cart")}
                    </button>
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
                    <p className="line-through text-gray-400">
                      ${product.price.old}
                    </p>
                  </span>
                  <div className="flex items-center gap-x-2 mt-1">
                    {renderStars(ratingValue)}
                    <p className="text-sm text-gray-500">({product.grades})</p>
                  </div>
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
    </div>
  );
};

export default TodaysProducts;
