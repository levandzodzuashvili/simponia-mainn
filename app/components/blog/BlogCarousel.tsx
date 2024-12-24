"use client";
import React, { useState, useRef } from "react";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";

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

export default function BlogCarousel({
  reviews,
}: {
  reviews: BlogCardProps[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const router = useRouter();
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      setIsSwiping(true);
      if (diffX > 0) {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
      }
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent, slug: string) => {
    if (!isSwiping) {
      router.push(`/${slug}`);
    }
    touchStartX.current = null;
    setIsSwiping(false);
  };

  return (
    <div className="relative mt-16 xl:hidden block">
      <div
        ref={carouselRef}
        className="w-full overflow-hidden rounded-md"
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${reviews.length * 100}%`,
          }}
        >
          {reviews.map((review) => (
            <div
              className="w-full flex-shrink-0"
              key={review._id}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={(e) => handleTouchEnd(e, review.slug.current)}
              style={{ width: "100%" }}
            >
              <div className="cursor-pointer">
                <BlogCard {...review} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
