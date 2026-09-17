"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Overlay from "@/components/icons/Overlay";
import MaskRevealUp from "@/components/ui/MaskRevealUp";
import TextReveal from "@/components/ui/TextReveal";

const SLIDES = [
  [
    "Delivering hyper-local agricultural",
    "intelligence to every farmer, on any phone,",
    "in their own language.",
  ],
  [
    "Connecting every field to expert agronomy",
    "through accessible, low-bandwidth",
    "communications.",
  ],
  [
    "Smart, accessible agricultural advice",
    "tailored to your soil, crop, and",
    "season.",
  ],
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-end overflow-hidden">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/fallback-hero.jpg"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ scale: videoScale }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}>
        <source src="/assets/extension_agent.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/20 to-black/40" />

      <div className="[@media(min-width:370px)]:container-page container-phone w-full justify-start items-start text-left flex relative z-10 pb-12 md:pb-16">
        <div className="flex flex-col items-start gap-6 text-left w-full max-w-2xl">
          <div className="flex items-start gap-3 lg:gap-5">
            <div className="min-h-30 sm:min-h-35 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}>
                  <MaskRevealUp
                    className="font-geist [@media(min-width:490px)]:heading-h3 body-text max-w-full lg:max-w-5xl text-left text-white/95"
                    delay={100}
                    lines={SLIDES[activeIndex]}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="relative h-1 w-12 sm:w-16 overflow-hidden rounded-full bg-white/20 transition-all duration-300 hover:bg-white/40 cursor-pointer"
                aria-label={`Go to slide ${idx + 1}`}>
                {idx === activeIndex && (
                  <motion.div
                    key={`progress-${activeIndex}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                    className="h-full w-full origin-left bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
