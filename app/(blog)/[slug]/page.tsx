/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import ReviewPage from "@/app/components/blog/ReviewPage";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Page = async ({ params }: { params: any }) => {
  const review = await client.fetch(
    groq`*[_type == "post" && slug.current == "${params.slug}"][0]{
    _id,
    title,
    mainImage,
    publishedAt,
    slug,
    titleGeo,
    description,
    descriptionGeo,
    body,
    bodyGeo,
    }
  `
  );
  return (
    <div>
      <ReviewPage review={review} />
    </div>
  );
};

export default Page;
