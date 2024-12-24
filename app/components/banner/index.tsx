"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vid = vidRef.current;
    const container = containerRef.current;

    if (vid && container) {
      const onLoadedMetadata = () => {
        const duration = vid.duration;

        vid.preload = "auto";

        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: `+=${duration * 500}px`,
          onUpdate: (self) => {
            const progress = self.progress * duration;

            if (vid.readyState >= 2) {
              vid.currentTime = progress;
            }
          },
          onLeave: () => {
            gsap.to(container, {
              scrollTo: { y: 0 },
              duration: 1,
            });
          },
          scrub: true,
          pin: true,
        });
      };

      if (vid.readyState >= 1) {
        onLoadedMetadata();
      } else {
        vid.addEventListener("loadedmetadata", onLoadedMetadata);
      }
    }

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="scrollable-container no-scrollbar relative w-full h-screen overflow-y-scroll"
      >
        <video
          ref={vidRef}
          preload="auto"
          className="w-full h-screen object-cover z-50"
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dsrw9a3z8/video/upload/v1732267181/zrl7b0abf5l2a1e1tfld.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </div>
      {/* <div className="h-screen z-[-1]">
        <Image
          src="/banner/banner-dark.png"
          layout="fill"
          objectFit="cover"
          alt="Banner Image"
          className="hidden dark:flex"
        />
        <Image
          src="/banner/banner.png"
          layout="fill"
          objectFit="cover"
          alt="Banner Image"
          className="flex dark:hidden"
        />
      </div> */}
    </>
  );
};

export default Banner;
