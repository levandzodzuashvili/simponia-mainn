"use server";
import About from "./components/about";
import Services from "./components/services";
// import Video from "./components/video";
import Location from "./components/lcoation";
import Offers from "./components/offers";
import Blog from "./components/blog";
import Map from "./components/map";
// import Image from "next/image";
import ScrollText from "./components/scrollText";
// import Banner from "./components/banner";
import Contact from "./components/contact";
import TestImage from "@/app/components/banner/test";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
// import AnimatedImg from "./components/AnimatedImg/AnimatedImg";

export default async function Home() {
  let reviews = [];
  try {
    reviews = await client.fetch(
      groq`*[_type == "post"]{
        _id,
        title,
        titleGeo,
        mainImage,
        publishedAt,
        slug,
        description,
        descriptionGeo,
        body,
        bodyGeo,
      }`
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  return (
    <div>
      {/* <section id="banner">
        <Banner />
      </section> */}
      <section id="banner">
        <TestImage />
      </section>
      <section id="about">
        <About />
      </section>
      <section>
        <ScrollText />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="video" className="sm:block hidden">
        {/* <Video /> */}
        {/* <AnimatedImg /> */}
      </section>
      {/* <Image
        src="/animated-img.png"
        width={1920}
        height={1080}
        alt="animated-img"
        className="w-full block sm:hidden"
      /> */}
      <section id="location" className="mt-[80px]">
        <Location />
      </section>
      <section id="offers">
        <Offers />
      </section>
      <section id="blog">
        {/* <BlogCard reviews={reviews} /> */}
        <Blog reviews={reviews} />
      </section>
      <section>
        <Contact />
      </section>
      <section id="map" className="px-8 xl:mx-36 mt-32">
        <Map />
      </section>
    </div>
  );
}
