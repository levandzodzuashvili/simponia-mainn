"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { features } from "@/app/constants";
import FeaturesCarousel from "./FeaturesCarousel";

export default function ImageCard() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 mt-28">
      <FeaturesCarousel />
      <div className="xl:grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-6 hidden">
        {(language === "ge" ? features.ge : features.en).map((feature) => (
          <div
            key={feature.id}
            className="relative bg-white border dark:border-none border-black dark:bg-[#282828] rounded-[4px] overflow-hidden cursor-pointer h-[380px] w-full"
            aria-label={feature.title || "Feature card"}
          >
            {feature.imageUrl && (
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-90"
                style={{ backgroundImage: `url(${feature.imageUrl})` }}
              ></div>
            )}

            <div className="relative p-4 z-10 flex flex-col justify-end h-full">
              <div className="absolute text-white top-4 right-4 bg-[#D7A569] font-bold rounded-full h-10 w-10 flex items-center justify-center">
                {feature.id}
              </div>
              <div className="bg-[#282828]/30 rounded-lg py-4 px-4 backdrop-blur-[2px]">
                <h3 className="text-white text-2xl font-normal">
                  {feature.title || "Untitled"}
                </h3>
                <p className="text-white mt-2 text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
