"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/constants";
// import { accordionItemsLocation } from "@/app/constants";
// import Accordion from "@/app/components/offers/Accordion";
import { ScrollReveal } from "@/app/components/gsap/ScrollReveal";

const Location = () => {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language, isLoading } = useLanguage();

  if (isLoading) {
    return <div className="animate-pulse p-8">Loading...</div>;
  }

  const content = translations[language];

  return (
    <div className="m-auto px-8 md:px-40  container pt-32">
      <div className="mx-auto flex flex-col gap-10">
        <div className="md:w-1/3">
          <ScrollReveal>
            <p className="text-base pb-2 mb-2 border-b border-[#D7A569]">
              <span className="mr-2 text-[#D7A569]">•</span>
              {content[2].title}
            </p>
          </ScrollReveal>
        </div>
        {/* <div className="md:w-2/3 mb-0 md:mb-8">
          <div className="space-y-4">

            {(language === "ge"
              ? accordionItemsLocation.ge
              : accordionItemsLocation.en
            ).map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div> */}
        <div className="flex lg:flex-row flex-col w-full mb-8 text-left gap-12 md:gap-20">
          <div className="md:w-1/2 w-full">
            <Image
              src="/banner/location.jpg"
              width={620}
              height={620}
              quality={100}
              layout="responsive"
              alt=""
              priority
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <h2 className="text-3xl mb-5 fira-bold">{content[2].subtitle}</h2>

            <div className="space-y-4">
              {content[2].features.map((feature, index) => (
                <p
                  key={index}
                  className="text-base flex items-start firago-italic text-black dark:text-white/80 "
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
      </div>
      <div className=" w-full mt-[60px]">
        <div className="flex items-center gap-5 flex-col md:flex-row">
          {/* <div className="flex flex-col gap-5">
            <Image
              src="/banner/location2.png"
              width={680}
              height={240}
              alt=""
            />
            <Image
              src="/banner/location3.png"
              width={680}
              height={240}
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Location;
