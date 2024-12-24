// "use client";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedImg = () => {
//   useGSAP(() => {
//     const clipAnimation = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#clip",
//         start: "center center",
//         end: "+=800 center",
//         scrub: 0.5,
//         pin: true,
//         pinSpacing: true,
//       },
//     });
//     clipAnimation.to(".mask-clip-path", {
//       width: "100vw",
//       height: "100vh",
//       borderRadius: 0,
//     });
//   });

//   return (
//     <div id="animated-img" className="min-h-screen w-screen">
//       <div className="h-dvh w-screen" id="clip">
//         <div className="mask-clip-path animated-image">
//           <Image
//             src="/animatedImg.png"
//             alt="Background"
//             fill
//             className="absolute left-0 top-0 size-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedImg;

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedImg = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current || !imageContainerRef.current) return;

    const ctx = gsap.context(() => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(imageContainerRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "power2.inOut",
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="animated-img" className="min-h-screen w-screen">
      <div className="h-dvh w-screen" id="clip" ref={triggerRef}>
        <div
          className="mask-clip-path animated-image relative overflow-hidden"
          ref={imageContainerRef}
        >
          <Image
            src="/animated-img.png"
            alt="Background"
            fill
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedImg;
