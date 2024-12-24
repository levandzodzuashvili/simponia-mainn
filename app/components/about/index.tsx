"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/constants";
import { ScrollReveal } from "../gsap/ScrollReveal";

const ProjectDetails = () => {
  const { language, isLoading } = useLanguage();

  if (isLoading) {
    return <div className="animate-pulse p-8">Loading...</div>;
  }

  const content = translations[language];

  return (
    <div className="m-auto pt-32 px-8  md:px-40 py-12 container">
      <div className="mx-auto flex flex-col gap-10">
        <div className="lg:w-1/3 w-full">
          <ScrollReveal>
            <p className="text-base regular pb-2 mb-2 border-b border-[#D7A569]">
              <span className="mr-2 text-[#D7A569]">•</span>
              {content[0].title}
            </p>
          </ScrollReveal>
        </div>
        <div className="flex lg:flex-row flex-col w-full mb-8 text-left gap-12 md:gap-20">
          <div className="md:w-1/2 w-full">
            <Image
              src="https://res.cloudinary.com/dsrw9a3z8/image/upload/v1733600041/about-img.png"
              width={620}
              height={620}
              quality={100}
              layout="responsive"
              priority
              alt=""
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <h2 className="text-3xl mb-5 regular">{content[0].subtitle}</h2>
            <div className="space-y-4">
              {content[0].features.map((feature, index) => (
                <p
                  key={index}
                  className="text-base flex items-start regular text-black dark:text-white/80 "
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
