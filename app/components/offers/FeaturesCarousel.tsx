"use client";
import React, { useState, useRef } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { features } from "@/app/constants";

const FeaturesCarousel = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuresData = language === "ge" ? features.ge : features.en;
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    // prevent default touch behavior
    e.preventDefault();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();

    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        setCurrentSlide((prev) => (prev + 1) % featuresData.length);
      } else {
        setCurrentSlide(
          (prev) => (prev - 1 + featuresData.length) % featuresData.length
        );
      }
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // prevent default touch behavior
    e.preventDefault();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative xl:hidden block"
      style={{
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <div
        ref={carouselRef}
        className="w-full overflow-hidden rounded"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          touchAction: "none",
          userSelect: "none",
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            touchAction: "none",
            userSelect: "none",
          }}
        >
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="min-w-full relative bg-white border dark:border-none border-black dark:bg-[#282828] rounded-[4px] overflow-hidden cursor-pointer h-[380px] w-full flex-shrink-0"
              aria-label={feature.title || "Feature card"}
              style={{
                touchAction: "none",
                userSelect: "none",
              }}
            >
              {/* Rest of the component remains the same */}
              {feature.imageUrl && (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-90"
                  style={{ backgroundImage: `url(${feature.imageUrl})` }}
                ></div>
              )}

              <div className="relative p-4 z-10 flex flex-col justify-end h-full">
                <div className="absolute top-4 right-4 bg-[#D7A569] font-bold rounded-full h-10 w-10 flex items-center justify-center">
                  {feature.id}
                </div>
                <div className="bg-[#282828]/30 rounded-lg py-4 px-4 backdrop-blur-[2px]">
                  <h3 className="text-white text-2xl font-normal">
                    {feature.title || "Untitled"}
                  </h3>
                  <p className="text-white mt-2 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* indicators */}
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuresData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesCarousel;
