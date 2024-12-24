"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { highlights } from "@/app/constants";

const ServicesCarousel = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const highlightsData = language === "ge" ? highlights.ge : highlights.en;
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    // prevent default touch behavior
    e.preventDefault();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // prevent default touch behavior
    e.preventDefault();

    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        setCurrentSlide((prev) => (prev + 1) % highlightsData.length);
      } else {
        setCurrentSlide(
          (prev) => (prev - 1 + highlightsData.length) % highlightsData.length
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
      className="relative xl:hidden block container margin-auto py-8 px-8 "
      style={{
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto rounded-md overflow-hidden"
        style={{
          touchAction: "none",
          userSelect: "none",
        }}
      >
        <div
          className="w-full overflow-hidden"
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
            {highlightsData.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0"
                style={{
                  width: "100%",
                  touchAction: "none",
                  userSelect: "none",
                }}
              >
                <div className="rounded-lg overflow-hidden text-start">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full h-[300px] object-cover rounded-md"
                  />
                  <div className="mt-5">
                    <h3 className="text-[14px] regular uppercase">
                      {item.title}
                    </h3>
                    <p className="flex items-center justify-start gap-1 text-[32px] firago-lightitalic">
                      <span className="text-sm text-center whitespace-nowrap uppercase">
                        {item?.prefix}
                      </span>
                      {item.value}
                      <span className="text-sm text-center whitespace-nowrap uppercase">
                        {item.unit}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* indicators */}
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {highlightsData.map((_, index) => (
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

export default ServicesCarousel;
