"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";

const BedroomSection = () => {
  const { language } = useLanguage();
  return (
    <div className="relative bg-black text-white mt-32">
      {/* Background Image */}
      <div className="relative h-[600px]">
        <Image
          src="/banner/video.png"
          alt="Bedroom"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          {/* Play Button */}
          <div className=" rounded-full w-[116px] h-[116px] flex items-center justify-center mb-4">
            <svg
              width="116"
              height="116"
              viewBox="0 0 116 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_46_2)">
                <rect
                  x="5"
                  y="5"
                  width="106"
                  height="106"
                  rx="53"
                  fill="white"
                  fill-opacity="0.1"
                />
              </g>
              <g filter="url(#filter1_b_46_2)">
                <rect
                  x="0.5"
                  y="0.5"
                  width="115"
                  height="115"
                  rx="57.5"
                  stroke="white"
                  strokeOpacity="0.2"
                />
              </g>
              <path
                opacity="0.4"
                d="M72.5 57.134C73.1667 57.5189 73.1667 58.4811 72.5 58.866L51.5 70.9904C50.8333 71.3753 50 70.8942 50 70.1244L50 45.8756C50 45.1058 50.8333 44.6247 51.5 45.0096L72.5 57.134Z"
                stroke="white"
                strokeWidth="2"
              />
              <defs>
                <filter
                  id="filter0_b_46_2"
                  x="-15"
                  y="-15"
                  width="146"
                  height="146"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_46_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_46_2"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_46_2"
                  x="-20"
                  y="-20"
                  width="156"
                  height="156"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_46_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_46_2"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          {/* Text */}
          <p className="text-[14px] italic font-light">
            {language === "ge" ? (
              <>
                შეიგრძენი ბუნებისა და ქალაქის <br /> კომფორტის სიმფონიური
                ერთიანობა
              </>
            ) : (
              <>
                Simponia: The Gemstone of <br /> Batumi Botanical Garden
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BedroomSection;
