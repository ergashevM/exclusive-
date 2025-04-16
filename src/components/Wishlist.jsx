"use client";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";
import Delete from "@/assets/delete.svg";
import Trim from "@/assets/trim.svg";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useCart } from "@/context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { t } = useTranslation();
  const { addMultipleToCart } = useCart();

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
    <div className="w-full max-w-[1170px] h-auto mx-auto flex flex-col gap-y-6 py-10">
      <div className="w-full flex items-center justify-between">
        <h4 className="font-poppins font-normal text-[20px] leading-[26px]">
          {t("wishlist_count", { count: wishlist.length })}
        </h4>
        {wishlist.length > 0 && (
          <button
            className="w-[223px] h-[56px] rounded-[4px] border font-poppins text-base leading-[24px] cursor-pointer"
            onClick={() => addMultipleToCart(wishlist)}
          >
            {t("move_all_to_bag")}
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <div className="h-146 text-center text-white text-2xl font-poppins py-10 emptyBox flex items-center justify-center pl-13">
          {t("no_products_in_wishlist")}
        </div>
      ) : (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((product) => {
            const translation =
              productDescriptions[product.id]?.[i18n.language];

            return (
              <div
                key={product.id}
                className="w-full h-[300px] flex flex-col justify-between rounded-md"
              >
                <div className="relative group h-[250px] bg-[#F5F5F5] rounded-md p-4 overflow-hidden flex items-center justify-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src={product.mainImage}
                      alt={product.productname}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {product.percent && (
                    <>
                      <Image
                        src={Trim}
                        alt="trim"
                        className="absolute top-1 left-5 rotate-90"
                      />
                      <span className="font-poppins text-[11px] text-white absolute top-[16px] left-4">
                        {product.percent}
                      </span>
                    </>
                  )}

                  <div className="absolute top-3 right-2 bg-white rounded-2xl z-10">
                    <Image
                      src={Delete}
                      alt="trash"
                      className="cursor-pointer p-1 w-[34px] h-[34px]"
                      onClick={() => removeFromWishlist(product.id)}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 text-center py-2 bg-black text-white text-sm font-medium translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full h-full cursor-pointer">
                      {t("add_to_cart")}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-y-1 mt-2">
                  <h4 className="font-semibold text-base">
                    {translation?.name || product.productname}
                  </h4>
                  <span className="flex gap-x-3 text-sm">
                    <p className="text-[#DB4444] font-medium">
                      ${product.price.current}
                    </p>
                    {product.price.old && (
                      <p className="line-through text-gray-400">
                        ${product.price.old}
                      </p>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
