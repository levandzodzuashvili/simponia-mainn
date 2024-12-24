"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  initial?: gsap.TweenVars;
  animate?: gsap.TweenVars;
  scrollTrigger?: ScrollTrigger.Vars;
}

export const useScrollReveal = (config: AnimationConfig = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const defaultConfig: AnimationConfig = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        animate: {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      };

      // merge default config
      const mergedInitial = { ...defaultConfig.initial, ...config.initial };
      const mergedAnimate = { ...defaultConfig.animate, ...config.animate };
      const mergedScrollTrigger = {
        ...defaultConfig.scrollTrigger,
        ...config.scrollTrigger,
      };

      const animation = gsap.fromTo(element, mergedInitial, {
        ...mergedAnimate,
        scrollTrigger: mergedScrollTrigger,
      });

      return () => {
        animation.kill();
      };
    }
  }, [config]);

  return elementRef;
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  config?: AnimationConfig;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  config,
}) => {
  const ref = useScrollReveal(config);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
};
