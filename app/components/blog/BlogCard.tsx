"use client";
import Image from "next/image";
import React from "react";
import clock from "@/public/clock.svg";
import { urlFor } from "@/sanity/lib/image";
import { useLanguage } from "@/app/context/LanguageContext";

interface BlogCardProps {
  _id: string;
  title?: string;
  mainImage: object;
  titleGeo?: string;
  publishedAt: string;
  slug: { current: string };
  description?: string;
  descriptionGeo?: string;
  body: [];
}

const BlogCard = ({
  title,
  mainImage,
  publishedAt,
  description,
  descriptionGeo,
  titleGeo,
  // slug,
}: BlogCardProps) => {
  const { language } = useLanguage();

  const maxTitleLength = 45;
  // const maxDescriptionLength = 110;s

  const shortenedTitle =
    language === "en"
      ? (title?.length ?? 0) > maxTitleLength
        ? `${title?.slice(0, maxTitleLength)}...`
        : (title ?? "")
      : (titleGeo?.length ?? 0) > maxTitleLength
        ? `${titleGeo?.slice(0, maxTitleLength)}...`
        : (titleGeo ?? "");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="flex items-center justify-center w-full xl:max-w-[380px] max-w-[360px] h-[522px] bg-transparent hover:bg-primary/10  dark:border-[#282828] border-black border rounded dark:bg-[#282828] px-4 md:px-8">
      <div className="flex flex-col items-start px-4">
        <span className="flex items-center gap-2 dark:text-white/80  text-black/80">
          <Image src={clock} alt="clock" className="w-5 h-5" priority />
          <span className="text-sm italic">{formatDate(publishedAt)}</span>
        </span>
        {mainImage && (
          <Image
            src={urlFor(mainImage).url()}
            alt="blog"
            priority
            className="w-full rounded mt-4 mb-2"
            width={380}
            height={400}
          />
        )}
        <h3 className="text-xl sm:text-xl regular mt-4">
          {/* {language === "en" ? title : titleGeo}
           */}
          {shortenedTitle}
        </h3>
        <p className="text-sm regular dark:text-white/80 text-black/80 mt-4 mb-4">
          {language === "en" ? description : descriptionGeo}
        </p>

        <a href="#" className=" duration-300 hover:text-[#D7A569] regular ">
          {language === "ge" ? "გაიგე მეტი" : "See More"}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
