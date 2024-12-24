import React from "react";

const Square = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_54_1081)">
        <rect width="40" height="40" rx="4" fill="black" fillOpacity="0.3" />
      </g>
      <path
        opacity="0.8"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.5217 11.4737H13.4783C12.2296 11.4737 11.2174 12.699 11.2174 14.2105V25.7895C11.2174 27.301 12.2296 28.5263 13.4783 28.5263H26.5217C27.7704 28.5263 28.7826 27.301 28.7826 25.7895V14.2105C28.7826 12.699 27.7704 11.4737 26.5217 11.4737ZM13.4783 10C11.5573 10 10 11.8851 10 14.2105V25.7895C10 28.1149 11.5573 30 13.4783 30H26.5217C28.4427 30 30 28.1149 30 25.7895V14.2105C30 11.8851 28.4427 10 26.5217 10H13.4783Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_54_1081"
          x="-30"
          y="-30"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_54_1081"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_54_1081"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Square;
