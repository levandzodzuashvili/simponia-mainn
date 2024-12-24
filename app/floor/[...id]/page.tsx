/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FloorPlan from "../FloorPlan";
import PropertyCard from "../PropertyCard2";
import PicSlider from "@/app/components/slider";
import { simponia } from "@/app/data/Floor";
import PriceConverter from "../PriceConverter";
import { useLanguage } from "@/app/context/LanguageContext";

const pics = [
  {
    id: 1,
    src: "/slider/5.png",
    alt: "Description 1",
  },
  {
    id: 2,
    src: "/slider/6.png",
    alt: "Description 2",
  },
  {
    id: 3,
    src: "/slider/7.png",
    alt: "Description 2",
  },
];

export default function Page({ params }: any) {
  const router = useRouter();
  const { id } = params;
  const [floorId, apartmentSegment, apartmentId] = id;

  const { language } = useLanguage();

  // const [selectedFloor, setSelectedFloor] = useState(floorId);
  // const [selectedRoom, setSelectedRoom] = useState(apartmentId);

  // const handleChangeFloor = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedFloor(event.target.value);
  //   // router.push(`/floor/${event.target.value}`);
  // };
  // const handleChangeRoom = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedRoom(event.target.value);
  //   router.push(`/floor/${selectedFloor}/apartment/${event.target.value}`);
  // };

  const renderFloorListView = () => (
    <div>
      {(language === "ge" ? simponia.ge : simponia.en)?.map(
        (floor) =>
          floor.id === floorId && (
            <div key={floor.id}>
              <FloorPlan
                floorId={floorId}
                floorThumbnail={floor.thumbnail}
                floorApartments={floor.apartments}
              />
            </div>
          )
      )}

      <div className="mb-16 mt-10 lg:mt-16 bg-[#D7A569] border-0 h-[1px]" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {(language === "ge" ? simponia.ge : simponia.en)?.map((floor) => {
          if (floor.id === floorId) {
            return floor.apartments.length > 0 ? (
              floor.apartments.map((apartment) => (
                <Link
                  key={apartment.id}
                  href={`/floor/${floorId}/apartment/${apartment.id}`}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <PropertyCard
                    key={apartment.id}
                    title={apartment.title}
                    price={apartment.price}
                    size={apartment.size}
                    rooms={apartment.rooms}
                    thumbnail={apartment.thumbnail}
                    forSale={apartment.forSale}
                    address=""
                    balconies=""
                  />
                </Link>
              ))
            ) : (
              <div key={floor.id} className="text-center text-red-500">
                {language === "ge"
                  ? "ამ სართულზე არ არის ხელმისაწვდომი ბინები"
                  : "There are no apartments available on this floor"}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
  const renderApartmentDetailView = () => {
    const apartment = (language === "ge" ? simponia.ge : simponia.en)
      ?.find((floor) => floor.id === floorId)
      ?.apartments.find((apartment) => apartment.id === apartmentId);

    if (!apartment) {
      return (
        <div className="text-center text-red-500">
          {language === "ge" ? "ბინა ვერ მოიძებნა!" : "Apartment not found!"}
        </div>
      );
    }

    return (
      <>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Room Visualization */}
          <div
            className={`${
              apartment.forSale ? "bg-primary" : "bg-[#6A6A6A]"
            } flex items-center justify-center  border max-w-full md:w-[780px] h-[676px] border-black/10 dark:border-white/10 p-4`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={apartment.thumbnail}
                alt={`Apartment ${apartmentId} Visualization`}
                fill
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
          {/* room details */}
          <div className="flex-1">
            {/* <div className="flex justify-between">
              <select
                value={selectedFloor}
                onChange={handleChangeFloor}
                className="bg-transparent border border-white/10 p-4 w-[180px]"
              >
                <option value="1" className="bg-background">
                  სართული 1
                </option>
                <option value="2" className="bg-background ">
                  სართული 2
                </option>
                <option value="3" className="bg-background ">
                  სართული 3
                </option>
                <option value="4" className="bg-background ">
                  სართული 4
                </option>
                <option value="5" className="bg-background ">
                  სართული 5
                </option>
                <option value="6" className="bg-background ">
                  სართული 6
                </option>
              </select>
              <select
                value={selectedRoom}
                onChange={handleChangeRoom}
                className="bg-transparent border border-white/10 p-4 w-[180px]"
              >
                <option value="1" className="bg-background ">
                  ბინა 1
                </option>
                <option value="2" className="bg-background ">
                  ბინა 2
                </option>
                <option value="3" className="bg-background ">
                  ბინა 3
                </option>
                <option value="4" className="bg-background ">
                  ბინა 4
                </option>
                <option value="5" className="bg-background ">
                  ბინა 5
                </option>
                <option value="6" className="bg-background ">
                  ბინა 6
                </option>
                <option value="7" className="bg-background ">
                  ბინა 7
                </option>
                <option value="8" className="bg-background ">
                  ბინა 8
                </option>
              </select>
            </div> */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold">
                {language === "ge" ? "ბინა" : "Apartment"} {apartmentId} -{" "}
                {language === "ge" ? "სართული" : "Floor"} {floorId}
              </h1>
            </div>
            <p className="text-sm italic text-gray-800 dark:text-white/80 my-8 px-2">
              {language === "ge"
                ? "გახდი ექსკლუზიური საინვესტიციო უძრავი ქონების მფლობელი ბათუმის ბოტანიკურ ბაღში"
                : "Become an owner of an exclusive investment property in Batumi's Botanic Garden"}
            </p>
            <div className="w-full border dark:border-white/10 border-primary/60 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-left">
                  {apartment.forSale ? (
                    <>
                      <PriceConverter initialPrice={apartment.price} />
                      <p className="text-gray-600">
                        {(
                          Number(apartment.price) / Number(apartment.size)
                        ).toFixed(0)}{" "}
                        {language === "ge" ? "მ² ფასი" : "Price per m²"}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="bg-[#6A6A6A] p-4">
                        {language === "ge" ? "გაყიდულია" : "Sold"}
                      </div>
                    </>
                  )}
                </div>
                <div className="text-right">
                  {apartment.forSale && (
                    <>
                      <p className="text-primary text-xl">
                        {language === "ge" ? "იყიდება" : "For Sale"}
                      </p>
                    </>
                  )}
                </div>
              </div>

              <hr className="my-5 dark:border-white/10 border-primary" />

              <div className="flex justify-between">
                <div className="text-left">
                  <p className="font-light">
                    {language === "ge" ? "მხარე" : "View"}
                  </p>
                  <p className="text-primary">{apartment.view}</p>
                </div>
                <div className="text-right">
                  <p className="font-light">
                    {language === "ge" ? "საერთო ფართი" : "Total Area"}
                  </p>
                  <p className="text-primary">
                    {apartment.size} {language === "ge" ? "მ²" : "m²"}
                  </p>
                </div>
              </div>

              <hr className="my-5 dark:border-white/10 border-primary" />

              {/* room details 2 */}
              {apartment.roomDetails?.map((detail, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <p>{detail.title}</p>
                    <p>{detail.size}</p>
                  </div>
                  <hr className="my-2 dark:border-white/10 border-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* information */}
        <div className="mt-24 flex items-center justify-center flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <p className="text-sm pb-2 mb-2 border-b border-[#D7A569]">
                <span className="mr-2 text-[#D7A569] text-lg">•</span>
                {language === "ge" ? "ოთახის შესახებ" : "About the Apartment"}
              </p>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-normal italic mb-6">
                {language === "ge" ? "ბინა" : "Apartment"} {apartmentId} -{" "}
                {language === "ge" ? "სართული" : "Floor"} {floorId}
              </h2>

              <div className="space-y-4">
                <p className="text-sm firago-italic text-black dark:text-white/80">
                  {language === "ge"
                    ? "ოთახი აღჭურვილია უმაღლესი ხარისხის ავეჯითა და ტექნიკით. სრული კომფორტი და თანამედროვე დიზაინი გარანტირებულია. იდეალური გარემო როგორც საცხოვრებლად, ასევე საინვესტიციოდ."
                    : "The apartment is equipped with the highest quality fixtures and fittings. Full-fledged design and modern design are guaranteed. Ideal for both living and investment."}
                </p>
              </div>
            </div>
          </div>

          {/* slider */}
          <PicSlider images={pics} />
        </div>
      </>
    );
  };

  return (
    <div className="pb-8 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center text-gray-600 hover:text-primary transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {language === "ge" ? "უკან დაბრუნება" : "Back to Previous Page"}
      </button>

      {!apartmentSegment ? renderFloorListView() : renderApartmentDetailView()}
    </div>
  );
}
