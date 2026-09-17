"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Overlay from "@/components/icons/Overlay";
import MaskRevealUp from "@/components/ui/MaskRevealUp";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-end overflow-hidden">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero/noreta-hero-poster.webp"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ scale: videoScale }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}>
        <source src="/assets/hero/noreta-hero.webm" type="video/webm" />
        <source src="/assets/hero/noreta-hero.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/20 to-black/40" />

      <div className="[@media(min-width:370px)]:container-page container-phone w-full justify-start items-start text-left flex relative z-10 pb-12 md:pb-16">
        <div className="flex flex-col items-start gap-2 text-left">
          {/* <TextReveal
            as="h1"
            text={"Building Africa's \nFood Production Infrastructure"}
            className="[@media(min-width:370px)]:heading-display heading-h1 max-w-5xl text-left text-white"
          /> */}
          <div className="mt-8 flex items-center gap-3 lg:gap-5 md:mt-10">
            <Overlay className="h-auto w-16 shrink-0 md:h-auto md:w-auto hidden [@media(min-width:370px)]:flex " />

            <MaskRevealUp
              className="font-geist [@media(min-width:490px)]:heading-h3 body-text max-w-full lg:max-w-2xl text-left text-white/95"
              delay={600}
              lines={[
                "Redefining food security through",
                "precision, data-driven biospheres,",
                "and high-stakes agricultural infrastructure.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
