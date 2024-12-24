"use client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { useLanguage } from "@/app/context/LanguageContext";

interface ReviewPageProps {
  review: {
    title: string;
    titleGeo?: string;
    description?: string;
    descriptionGeo?: string;
    mainImage: object;
    body: [];
    bodyGeo: [];
  };
}

const ReviewPage = ({ review }: ReviewPageProps) => {
  const { language } = useLanguage();

  return (
    <div className="m-auto pt-32 px-8 md:px-48 py-12 container mt-6">
      <h1 className="text-2xl mb-5 text-center">
        {language === "en" ? review.title : review.titleGeo}
      </h1>

      <div className="text-center text-gray-600 mb-8">
        <p className="mt-2">
          {language === "en" ? review.description : review.descriptionGeo}
        </p>
      </div>

      <div className="flex items-center flex-col gap-8 sm:px-24 px:0 mt-12">
        <Image
          src={urlFor(review.mainImage).url()}
          alt="Simponia Green Cape"
          priority
          width={720}
          height={400}
        />

        {language === "ge" ? (
          <div className={`space-y-6 mt-12  ${reviewTextStyleGeo}`}>
            <hr className="my-8" />
            <PortableText
              value={review.bodyGeo}
              components={myPortableTextComponents}
            />
          </div>
        ) : (
          <div className={`space-y-6 mt-12 ${reviewTextStyle}`}>
            <hr className="my-8" />
            <PortableText
              value={review.body}
              components={myPortableTextComponents}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;

type ImageComponentProps = {
  value: {
    asset: {
      alt: string;
    };
  };
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: ImageComponentProps) => (
      <div className="flex justify-center">
        <Image
          src={urlFor(value).url()}
          alt={value.asset.alt}
          width={400}
          height={400}
          quality={100}
          unoptimized={true}
          className="w-full text-2xl"
        />
      </div>
    ),
  },
};

const reviewTextStyle = `
m-auto
px-6
prose-headlings:my-5
prose-h1:text-4xl
prose-h2:text-3xl
prose-h3:text-xl
prose-h3:lg:text-2xl
prose-p:leading-7
prose-p:text-base
prose-p:lg:text-lg
prose-p:leading-relaxed
prose-img:mb-4
prose-li:list-disc
prose-li:text-base
prose-li:lg:text-lg
prose-li:leading-7
`;
const reviewTextStyleGeo = `
m-auto
px-6
prose-headlings:my-5
prose-h1:text-4xl
prose-h2:text-3xl
prose-h3:text-xl
prose-h3:lg:text-2xl
prose-p:leading-7
prose-p:font-normal
prose-p:text-base
prose-p:lg:text-base
prose-p:leading-relaxed
prose-img:mb-4
prose-li:list-disc
prose-li:text-base
prose-li:lg:text-lg
prose-li:leading-7
`;
