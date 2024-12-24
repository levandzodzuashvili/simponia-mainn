"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/constants";
import React from "react";
import BlogCard from "./BlogCard";
// import { blogData } from "@/app/constants";
import { ScrollReveal } from "../gsap/ScrollReveal";
import BlogCarousel from "./BlogCarousel";
import Link from "next/link";

interface BlogProps {
  reviews: {
    _id: string;
    title: string | undefined;
    titleGeo?: string | undefined;
    description?: string | undefined;
    descriptionGeo?: string | undefined;
    mainImage: object;
    publishedAt: string;
    slug: { current: string };
    body: [];
  }[];
}

const Blog = ({ reviews }: BlogProps) => {
  const { language, isLoading } = useLanguage();

  if (isLoading) {
    return <div className="animate-pulse p-8">Loading...</div>;
  }

  const content = translations[language];

  return (
    <div className="container mx-auto pt-32 px-8 md:px-40 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <ScrollReveal>
            <p className="text-base regular pb-2 mb-2 border-b border-[#D7A569]">
              <span className="mr-2 text-[#D7A569]">•</span>
              {content[4].title}
            </p>
          </ScrollReveal>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl mb-5 regular">{content[4].subtitle}</h2>

          <div className="space-y-4">
            {content[4].features.map((feature, index) => (
              <p
                key={index}
                className="text-base flex items-start regulars text-black dark:text-white/80 "
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>

      <BlogCarousel reviews={reviews} />
      <div className="mt-16 hidden xl:flex lg:flex-row flex-col justify-center gap-5">
        {/* {(language === "ge" ? blogData.ge : blogData.en).map((blog) => (
          <>
            <Link href={`/review/${blog.id}`}>
              <BlogCard key={blog.id} {...blog} />
            </Link>
          </>
        ))} */}

        {reviews.map((review) => (
          <>
            <Link href={`/${review?.slug?.current}`}>
              <BlogCard key={review._id} {...review} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Blog;
