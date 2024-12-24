import Square from "@/public/Square";
import Image from "next/image";
import ApartmentListingPage from "../components/flooor/FloorTest";
import { Apartment } from "../components/flooor/FloorTest";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function FloorPlan({
  floorId,
  floorThumbnail,
  floorApartments,
}: {
  floorId: string;
  floorThumbnail: string;
  floorApartments: Apartment[];
}) {
  const { language } = useLanguage();
  return (
    <div className="p-4">
      <div className="flex md:flex-row flex-col gap-10 justify-between items-center">
        <div>
          <h1 className="text-[24px] regular font-semibold mb-4">
            {language === "ge"
              ? "აირჩიე შენი სასურველი ბინა - სართული"
              : "Choose your desired apartment - Floor"}{" "}
            {floorId}
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <p className="text-[14px]">
              {floorApartments.length}{" "}
              {language === "ge" ? "აპარტამენტი" : "Apartments"}
            </p>
            <Square />
          </div>
        </div>
      </div>
      <div className=" relative flex flex-wrap justify-center mt-12 bg-primary">
        <div
          className={`absolute hidden xl:block ${
            Number(floorId) > 12
              ? "bottom-2 left-[231px] top-[34px] w-full"
              : "bottom-2 left-[194px] top-[10px] w-full"
          }w-full`}
        >
          <ApartmentListingPage
            floorApartments={floorApartments}
            floorId={floorId}
          />
        </div>

        <Image
          src={floorThumbnail}
          alt="Floor Plan"
          width={1920}
          height={1080}
          priority
          className="w-[800px] h-full   object-cover py-8 "
        />
      </div>
      <div className="sm:hidden mt-8 flex flex-wrap w-full items-center justify-between gap-y-4">
        {floorApartments.map((apartment) => (
          <>
            <Link href={`/floor/${floorId}/apartment/${apartment.id}`}>
              <div
                key={apartment.id}
                className={`w-20 ${
                  apartment.forSale ? "bg-primary" : "bg-[#6A6A6A]"
                } px-4 py-2 text-center text-sm`}
              >
                {apartment.title}
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
