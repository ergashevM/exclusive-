"use client";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";

const MyAccount = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordChange = () => {
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      alert(t("fill_all_fields"));
      return;
    }
    if (passwords.new !== passwords.confirm) {
      alert(t("passwords_do_not_match"));
      return;
    }

    console.log("Password changed:", passwords);
  };

  if (!session) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-5">
        <h1 className="text-2xl font-bold mb-6">{t("please_log_in")}</h1>
        <p>{t("sign_in_to_access")}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1170px] h-auto lg:h-[670px] mx-auto flex flex-col items-start justify-between py-10">
      <div className="w-full flex items-center justify-between">
        <p className="flex items-center gap-x-2">
          <Link className="font-poppins text-sm text-gray-500" href="/">
            {t("home")}
          </Link>
          <span>/</span>
          <span className="font-poppins text-sm">{t("my_account")}</span>
        </p>
        <p className="flex items-center gap-x-2 font-poppins text-sm">
          {t("welcome")}{" "}
          <span className="text-[#DB4444]">{session?.user?.name}</span>
        </p>
      </div>

      <div className="max-w-[870px] h-auto flex flex-col items-start gap-y-3 py-6">
        <p className="text-[#DB4444] text-[20px] font-medium">
          {t("edit_your_profile")}
        </p>

        {/* First & Last Name */}
        <div className="flex items-center justify-between gap-x-5 w-full">
          <span className="flex flex-col gap-y-2 w-full max-w-[330px]">
            <p className="text-sm">{t("first_name")}</p>
            <input
              className="h-[50px] rounded bg-[#F5F5F5] pl-4 text-sm text-gray-500"
              type="text"
              placeholder={t("first_name_placeholder")}
              defaultValue={session?.user?.name?.split(" ")[0]}
            />
          </span>
          <span className="flex flex-col gap-y-2 w-full max-w-[330px]">
            <p className="text-sm">{t("last_name")}</p>
            <input
              className="h-[50px] rounded bg-[#F5F5F5] pl-4 text-sm text-gray-500"
              type="text"
              placeholder={t("last_name_placeholder")}
              defaultValue={session?.user?.name?.split(" ")[1]}
            />
          </span>
        </div>

        {/* Email & Address */}
        <div className="flex items-center justify-between gap-x-5 w-full">
          <span className="flex flex-col gap-y-2 w-full max-w-[330px]">
            <p className="text-sm">{t("email")}</p>
            <input
              className="h-[50px] rounded bg-[#F5F5F5] pl-4 text-sm text-gray-500"
              type="email"
              placeholder={t("email_placeholder")}
              defaultValue={session?.user?.email}
            />
          </span>
          <span className="flex flex-col gap-y-2 w-full max-w-[330px]">
            <p className="text-sm">{t("address")}</p>
            <input
              className="h-[50px] rounded bg-[#F5F5F5] pl-4 text-sm text-gray-500"
              type="text"
              placeholder={t("address_placeholder")}
            />
          </span>
        </div>

        {/* Password section */}
        <span className="w-full flex flex-col gap-y-2">
          <p className="text-sm">{t("password_changes")}</p>

          {["current", "new", "confirm"].map((field) => (
            <div key={field} className="relative w-full max-w-[710px]">
              <input
                className="w-full h-[50px] rounded bg-[#F5F5F5] pl-4 pr-10 text-sm text-gray-500"
                type={showPasswords[field] ? "text" : "password"}
                placeholder={t(`${field}_password_placeholder`)}
                value={passwords[field]}
                onChange={(e) =>
                  setPasswords((prev) => ({ ...prev, [field]: e.target.value }))
                }
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswords((prev) => ({
                    ...prev,
                    [field]: !prev[field],
                  }))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPasswords[field] ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          ))}
        </span>

        {/* Buttons */}
        <div className="flex gap-x-4 mt-4">
          <button
            onClick={handlePasswordChange}
            className="px-6 py-2 bg-[#DB4444] text-white rounded hover:bg-red-600 text-sm cursor-pointer"
          >
            {t("save_changes")}
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-6 py-2 border border-gray-400 hover:text-white rounded hover:bg-[#DB4444] text-sm cursor-pointer"
          >
            {t("sign_out")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
