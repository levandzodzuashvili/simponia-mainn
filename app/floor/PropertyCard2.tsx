import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
// import { useRouter } from "next/navigation";

export interface PropertyCardProps {
  title: string;
  price: string;
  size: string;
  rooms: string;
  thumbnail: string;
  address: string;
  balconies: string;
  forSale: boolean;
}

export default function PropertyCard({
  title,
  price,
  thumbnail,
  address,
  size,
  forSale,
}: PropertyCardProps) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col text-whit overflow-hidden p-[30px] border dark:border-[#D7A56909] border-primary cursor-pointer dark:hover:bg-slate-700/20 hover:bg-slate-700/10">
      {/* Thumbnail Section */}
      <div
        className={`${
          forSale ? "bg-primary" : "bg-[#6A6A6A]"
        } relative w-full max-w-[400px] h-[400px] flex items-center justify-center overflow-hidden`}
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          priority
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          className="max-w-full max-h-full"
        />
      </div>
      {/* Details Section */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[24px] font-medium ">{title}</h2>
            <p className="text-[14px] font-thin">
              {forSale ? (
                ""
              ) : (
                <span className="bg-[#6A6A6A] p-1">
                  {language === "ge" ? "გაყიდულია" : "Sold"}
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-col justify-end items-end">
            <h2 className="text-[24px] italic font-thin ">
              {price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $
            </h2>
          </div>
        </div>
        <p className="text-gray-400 mb-4">{address}</p>

        <div className="flex justify-between text-sm dark:text-gray-400 text-gray-600 border-t border-[#D7A569] pt-4">
          <div>
            <p className="font-normal">
              {language === "ge" ? "საძინებელი" : "Bedroom"}
            </p>
            <p className="text-[#D7A569]">Studio</p>
          </div>
          <div>
            <p className=" font-normal">
              {language === "ge" ? "საერთო ფართი" : "Total Area"}
            </p>
            <p className="text-[#D7A569] text-right">
              {size} {language === "ge" ? "მ²" : "m²"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
