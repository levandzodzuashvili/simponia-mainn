"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const OverflowingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -100,
        ease: "linear",
        duration: 90,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mobile_showing__overflowing_text"
    >
      <div ref={textRef} className="scrolling-text">
        WE BUILD YOUR HARMONY&nbsp;&nbsp;&nbsp;&nbsp;WE BUILD YOUR
        HARMONY&nbsp;&nbsp;&nbsp;&nbsp;WE BUILD YOUR
        HARMONY&nbsp;&nbsp;&nbsp;&nbsp;WE BUILD YOUR HARMONY
      </div>

      <style jsx>{`
        .container {
          position: relative;
          height: 500px;
          margin: 50px 0;
        }

        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          font-size: 24rem;
          font-weight: bold;
          color: transparent;
          -webkit-text-stroke: 2px #d7a569;
        }

        @media (max-width: 768px) {
          .scrolling-text {
            font-size: 6rem; /* Adjust font size for smaller screens */
          }
          .container {
            height: 120px; /* Adjust height for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default OverflowingText;
