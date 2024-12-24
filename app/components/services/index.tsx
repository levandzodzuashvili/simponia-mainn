"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { highlights } from "@/app/constants";
import { gsap } from "gsap";
import ServiceCarousel from "./ServicesCarousel";

const ServicesCarousel = () => {
  const { language } = useLanguage();
  const highlightsData = language === "ge" ? highlights.ge : highlights.en;
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".carousel-item");

      gsap.to(cards, {
        x: (i) => (i - activeIndex) * 60,
        scale: (i) => (i === activeIndex ? 1 : 0.85),
        opacity: (i) => (i === activeIndex ? 1 : 0.5),
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.1,
      });
    }
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className=" relative flex justify-center items-center py-8 container m-auto no_mobile">
        <div
          ref={containerRef}
          className="flex space-x-2"
          style={{
            touchAction: "pan-y",
            userSelect: "none",
          }}
        >
          {highlightsData.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item relative flex-shrink-0 cursor-pointer ${
                index === activeIndex ? "z-10" : "z-0"
              }`}
              style={{
                width: "350px",
                height: "450px",
              }}
              onClick={() => handleItemClick(index)}
            >
              <div
                className={`rounded-lg overflow-hidden transition-all duration-300 `}
              >
                <div
                  className={`${
                    index === activeIndex
                      ? "border-4 border-primary"
                      : "border border-gray-700"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-[350px] h-[450px] object-cover rounded-md"
                  />
                </div>
              </div>

              {index === activeIndex && (
                <div className="bg-opacity-60 text-white py-4 px-2 text-start">
                  <h3 className="text-[20px]  uppercase">{item.title}</h3>
                  <p className="text-[40px] text-primary mt-2">
                    {item?.prefix} {item.value} {item.unit}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ServiceCarousel />
    </>
  );
};

export default ServicesCarousel;
