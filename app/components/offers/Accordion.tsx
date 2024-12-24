"use client";
import React from "react";
import Image from "next/image";
import ChevronDown from "@/public/ChevronDown.svg";

interface AccordionProps {
  index: number;
  title: string;
  content: string;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Accordion = ({
  index,
  title,
  content,
  activeIndex,
  setActiveIndex,
}: AccordionProps) => {
  const handleInteraction = () => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div onClick={handleInteraction} className="text-black dark:text-white/80">
      <div
        className="w-full flex items-center gap-4 p-3 text-left border-b border-transparent
              duration-300 hover:drop-shadow-md hover:border-[#D7A569]
              transition-colors cursor-pointer rounded-lg backdrop-blur-[15px]"
      >
        <span className="bg-[#D7A569] w-10 h-10 flex items-center justify-center rounded">
          <Image
            src={ChevronDown}
            alt="ChevronDown"
            className={`transition-transform duration-300 ${
              activeIndex === index ? "rotate-90" : ""
            }`}
          />
        </span>
        <span className="text-lg regular font-medium">{title}</span>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-200 ease-in-out`}
        style={{
          maxHeight: activeIndex === index ? "500px" : "0px",
        }}
      >
        <div className="py-4 pl-[72px] bg-transparent text-base regular">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
