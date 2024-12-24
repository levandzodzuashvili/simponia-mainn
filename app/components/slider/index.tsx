"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface PicSliderProps {
  images: Image[];
  className?: string;
}

const PicSlider = ({ images, className = "" }: PicSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const getPreviousIndex = () => {
    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  };

  const toPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(getPreviousIndex());
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const toNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(getNextIndex());
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // touch swipe on the mobile

  const touchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const touchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const touchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const touchDelta = touchStartRef.current - touchEndRef.current;

    if (touchDelta > 50) {
      toNext();
    } else if (touchDelta < -50) {
      toPrev();
    }
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") toPrev();
      if (e.key === "ArrowRight") toNext();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toNext, toPrev]);

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto ${className}`}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      <div className="relative flex items-center justify-center gap-4">
        {/* Prev Image */}
        <div className="relative w-1/3 h-[400px] md:block hidden">
          <Image
            src={images[getPreviousIndex()].src}
            alt={images[getPreviousIndex()].alt}
            fill
            quality={100}
            priority
            className="object-cover "
            sizes="(max-width: 550px)"
          />
        </div>

        {/* Main Image Container */}
        <div className="relative w-full md:w-2/3 h-[400px]">
          {/* Main Image */}
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            quality={100}
            priority
            // priority={currentIndex === 0}
            className={`object-cover transition-opacity duration-500 ${
              isTransitioning ? "opacity-80" : "opacity-100"
            }`}
            sizes="(max-width: 780px)"
          />

          {/* btns */}
          <button
            onClick={toPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#181818]/90 hover:bg-black/60 text-white p-2 rounded-md transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={toNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#181818]/90 hover:bg-black/60 text-white p-2 rounded-md transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Next Image */}
        <div className="relative w-1/3 h-[400px] md:block hidden">
          <Image
            src={images[getNextIndex()].src}
            alt={images[getNextIndex()].alt}
            fill
            quality={100}
            priority
            className="object-cover"
            sizes="(max-width: 550px)"
          />
        </div>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-[#D7A569] w-3 h-3"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PicSlider;
