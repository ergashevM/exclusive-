import Image from "next/image";
import Delivery from "@/assets/delivery.svg";
import Call from "@/assets/callCenter.svg";
import Guarantee from "@/assets/guarantee.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[950px] mx-auto my-30 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center gap-y-3">
          <Image src={Delivery} alt="delivery" />
          <h4 className="font-poppins font-semibold text-[20px] leading-[28px]">
            {t("free_fast_delivery")}
          </h4>
          <p className="font-poppins font-normal text-sm leading-[21px]">
            {t("free_delivery_info")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <Image src={Call} alt="call" />
          <h4 className="font-poppins font-semibold text-[20px] leading-[28px]">
            {t("customer_service")}
          </h4>
          <p className="font-poppins font-normal text-sm leading-[21px]">
            {t("customer_service_info")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <Image src={Guarantee} alt="guarantee" />
          <h4 className="font-poppins font-semibold text-[20px] leading-[28px]">
            {t("money_back_guarantee")}
          </h4>
          <p className="font-poppins font-normal text-sm leading-[21px]">
            {t("money_back_info")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
