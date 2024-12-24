"use client";
import M2 from "@/public/m2";
import Square from "@/public/Square";
import React from "react";
import { simponia } from "@/app/data/Floor";
import { useLanguage } from "@/app/context/LanguageContext";

interface MousePosition {
  x: number;
  y: number;
}

interface FloorHoverCardProps {
  hoveredFloor: number | null;
  mousePosition: MousePosition;
}

const BannerCard: React.FC<FloorHoverCardProps> = ({ hoveredFloor }) => {
  const { language } = useLanguage();

  if (!hoveredFloor) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        left: "18%",
        top: "40%",
        transform: "translateY(-50%)",
      }}
    >
      <div className="absolute box_container text-white bg-black/30 z-50  backdrop-blur-md rounded-lg w-[340px] h-[240px] p-8 shadow-md">
        <h1 className="text-[16px] font-semibold">
          {language === "ge" ? "სართული" : "Floor"} {hoveredFloor}
        </h1>
        <p className="text-[14px] font-light mt-1">
          {language === "ge"
            ? "დააწექი სართულის გეგმის სანახავად"
            : "View the Floor Plan"}
        </p>
        {(language === "ge" ? simponia.ge : simponia.en)?.map((floor) => {
          if (Number(floor.id) === hoveredFloor) {
            return (
              <div key={floor.id} className="mt-5">
                <ul>
                  <li className="flex items-center gap-2 mt-4">
                    <Square />{" "}
                    {language === "ge" ? "აპარტამენტი" : "Apartments"}{" "}
                    {floor.apartments.length}
                  </li>
                  <li className="flex items-center gap-2 mt-4">
                    {" "}
                    <M2 /> {language === "ge"
                      ? "ხელმისაწვდომია"
                      : "Available"}{" "}
                    {
                      floor.apartments.filter((apartment) => apartment.forSale)
                        .length
                    }
                  </li>
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BannerCard;
