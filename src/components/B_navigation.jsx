"use client";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext"; // ✅ Cart kontekstini import qildik
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

import Search from "@/assets/search.svg";
import Heart from "@/assets/heart.svg";
import Basket from "@/assets/basket.svg";
import User from "@/assets/user.svg";

const Navigation = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { wishlist } = useWishlist();
  const { cartItems } = useCart(); // ✅ Cart contextdan foydalanamiz
  const [mounted, setMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsSticky(window.scrollY > 136);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { href: "/", label: t("nav_home") },
    { href: "/contact", label: t("nav_contact") },
    { href: "/about", label: t("nav_about") },
    {
      href: session ? "/account" : "/sign-up",
      label: session ? t("nav_account") : t("nav_signup"),
    },
  ];

  return (
    <div
      className={`w-full bg-white border-b border-gray-300 ${
        isSticky ? "fixed top-0 left-0 z-50 shadow-md" : "relative"
      }`}
    >
      <div className="w-full max-w-[1170px] h-auto lg:h-[88px] flex flex-col lg:flex-row items-center justify-between py-3 gap-y-4 mx-auto">
        <h2 className="font-inter font-bold text-[24px] leading-[24px]">
          {t("exclusive")}
        </h2>

        <ul className="flex flex-wrap items-center justify-center gap-x-7 text-sm font-medium font-poppins">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:underline hover:underline-offset-5 ${
                  pathname === item.href ? "border-b-2 border-[#000000]" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-x-4 w-full lg:w-auto justify-center">
          <li className="relative w-full max-w-[250px]">
            <input
              className="w-full h-[38px] pl-5 pr-9 outline-none bg-[#F5F5F5] text-[#000000] rounded-[4px] font-poppins font-normal text-[12px] leading-[18px]"
              type="text"
              placeholder={t("nav_search_placeholder")}
            />
            <Image
              className="absolute top-2 right-2"
              src={Search}
              alt="search"
            />
          </li>

          {/* Wishlist */}
          <li className="relative">
            <Link href="/wishlist">
              <Image
                className="w-[47px] h-[47px] cursor-pointer"
                src={Heart}
                alt="heart"
              />
              {wishlist.length > 0 && (
                <span className="absolute top-1.5 -right-1 bg-[#DB4444] text-white text-[10px] w-[16px] h-[16px] rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </li>

          {/* Cart */}
          <li className="relative">
            <Link href="/cart">
              <Image className="w-[42px] h-[42px]" src={Basket} alt="basket" />
              {cartItems.length > 0 && (
                <span className="absolute top-1.5 -right-1 bg-[#DB4444] text-white text-[10px] w-[16px] h-[16px] rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

          {/* User / Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#F5F5F5]"
            >
              {session ? (
                <span className="w-[32px] h-[32px] rounded-full bg-[#DB4444] text-white flex items-center justify-center text-sm font-semibold pb-0.5">
                  {session?.user?.name?.charAt(0).toUpperCase()}
                </span>
              ) : (
                <Image src={User} alt="user" />
              )}
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded shadow-md z-10 min-w-[160px]">
                {session ? (
                  <>
                    <li>
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("nav_manage_my_account")}
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => signOut()}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      >
                        {t("nav_sign_out")}
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      href="/sign-up"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {t("nav_signup")}
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
