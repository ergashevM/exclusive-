"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Trim from "@/assets/trim.svg";
import Star from "@/assets/star.svg";
import HalfStar from "@/assets/halfStar.svg";
import EmptyStar from "@/assets/emptyStar.svg";
import Eye from "@/assets/eye.svg";
import database from "@/app/database";
import { useTranslation } from "react-i18next";

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
  6: { uz: "Shimoliy Palto", ru: "Северное Пальто", en: "The North Coat" },
  7: { uz: "Gucci Sumka", ru: "Сумка Gucci", en: "Gucci Duffle Bag" },
  8: {
    uz: "RGB Suv CPU Sovutgichi",
    ru: "RGB Жидкостный CPU Охлаждитель",
    en: "RGB Liquid CPU Cooler",
  },
  9: {
    uz: "Kichik Kitob Javoni",
    ru: "Небольшая Книжная Полка",
    en: "Small Bookshelf",
  },
};

const JustForYou = () => {
  const { t, i18n } = useTranslation();

  const filteredProducts = database.slice(5, 9);

  return (
    <div className="w-full max-w-[1170px] mx-auto my-20 px-4 flex flex-col gap-y-10 pb-16">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-y-2">
          <h3 className="font-poppins font-semibold text-sm md:text-base text-[#DB4444] flex items-center gap-x-2">
            <Image src={Trim} alt="trim" />
            {t("just_for_you")}
          </h3>
        </div>
        <button className="w-[150px] h-[56px] rounded-[4px] border font-poppins text-base leading-[24px]">
          {t("see_all")}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const ratingValue = parseFloat(product.rating?.split("/")[0]) || 0;

          return (
            <div
              key={product.id}
              className="w-full h-[350px] flex flex-col justify-between rounded-md"
            >
              <div className="h-[250px] flex items-center justify-center bg-[#F5F5F5] rounded-md p-4 relative overflow-hidden group">
                <Image
                  src={product.mainImage}
                  alt={productNames[product.id][i18n.language]}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <Link
                  href={`/product/${product.id}`}
                  className="absolute top-3 right-2 bg-white rounded-2xl z-10"
                >
                  <Image
                    src={Eye}
                    alt="eye"
                    className="cursor-pointer p-1 w-[34px] h-[34px]"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 text-center py-2 bg-black text-white text-sm font-medium translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 cursor-pointer">
                  <span className="cursor-pointer">{t("add_to_cart")}</span>
                </div>
              </div>

              <div className="flex flex-col gap-y-1 mt-2">
                <h4 className="font-semibold text-base">
                  {productNames[product.id][i18n.language]}
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
    </div>
  );
};

export default JustForYou;
