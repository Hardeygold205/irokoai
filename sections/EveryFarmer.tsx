"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface SessionStep {
  type: "ussd" | "input" | "context" | "response";
  title?: string;
  content: string;
  meta?: string;
}

const LIVE_SESSION: SessionStep[] = [
  {
    type: "ussd",
    title: "USSD Prompt (*347*282#)",
    content:
      "IROKO — barka da zuwa\n1 Masara / Maize\n2 Rogo / Cassava\n3 Yi magana da mutum",
  },
  {
    type: "input",
    content: "1",
    meta: "Selected: Maize / Masara",
  },
  {
    type: "input",
    title: "Menene matsalar?",
    content: "Ganyen masara ya juya rawaya",
    meta: "Language: Hausa",
  },
  {
    type: "context",
    title: "Soil & Location Telemetry",
    content: "Kaduna · pH 5.4 · low N",
  },
  {
    type: "response",
    title: "Agronomist Advisory",
    content:
      "Yellowing from the older leaves up is nitrogen deficiency. Top-dress 2 bottle caps of urea per stand, then ridge soil over it.",
  },
];

const CHANNELS = [
  {
    name: "USSD",
    detail: "*347*282#",
    note: "No data needed",
    highlight: true,
  },
  { name: "Call", detail: "7149", note: "Free to call", highlight: true },
  {
    name: "SMS",
    detail: "Text question",
    note: "Normal text rate",
    highlight: false,
  },
  {
    name: "WhatsApp",
    detail: "Field Agents",
    note: "Uses data",
    highlight: false,
  },
];

export default function EveryFarmer() {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % LIVE_SESSION.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white text-black pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-border/10">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6 leading-[1.15]">
              Every farmer gets an agronomist.
              <br className="hidden sm:inline" />
              <span className="text-light"> No smartphone required.</span>
            </h1>

            <p className="font-geist text-base sm:text-lg text-black/85 leading-relaxed font-normal mb-8 max-w-xl">
              Ask a farming question on any phone, in your own language. You get
              an answer built around your soil, your crop and this season — not
              a general leaflet. And if the system isn&apos;t sure, a real
              expert checks the answer before you ever see it.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                href="tel:*347*282#"
                text="Dial *347*282#"
                bg="bg-transparent border border-light/30"
                textColor="text-light"
                px="px-6"
                py="py-3"
              />
              <Button
                href="tel:+7149"
                text="Call 7149"
                bg="bg-light"
                px="px-6"
                py="py-3"
              />
            </div>

            <p className="font-geist text-xs text-black/60 leading-relaxed text-center lg:text-left mt-2 max-w-md">
              Calling is free. USSD and SMS cost normal network rates, with
              nothing added. Only WhatsApp uses data. The conversation follows
              the farmer, not the channel.
            </p>
          </div>

          <div className="lg:col-span-7 relative flex flex-col items-end justify-end">
            <div className="relative w-full h-125 sm:h-145 flex items-end justify-end">
              {/* Farmer Cutout Image - Aligned explicitly to bottom-right */}
              <div className="relative w-full h-full">
                <Image
                  src="/assets/smiling-farmer.jpg"
                  alt="Nigerian farmer giving thumbs up"
                  fill
                  priority
                  className="object-contain object-right-bottom scale-105 sm:scale-100"
                />
              </div>

              {/* Floating USSD Terminal - Anchored safely to the left edge of this right column */}
              <div className="absolute top-6 left-0 sm:left-2 lg:left-0 z-20 w-full max-w-77.5 sm:max-w-85 bg-soft-black/95 border border-white/20 rounded-xs p-4 sm:p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-geist text-xs text-white/80">
                      USSD *347*282#
                    </span>
                  </div>
                  <span className="font-geist text-[10px] text-white/40">
                    Step {activeStep + 1} of {LIVE_SESSION.length}
                  </span>
                </div>

                <div className="min-h-32 flex flex-col justify-between">
                  {LIVE_SESSION[activeStep].title && (
                    <span className="font-geist text-[11px] font-semibold uppercase tracking-wider text-light block mb-1">
                      {LIVE_SESSION[activeStep].title}
                    </span>
                  )}

                  <p className="font-mono text-sm sm:text-base text-emerald-400 whitespace-pre-line leading-snug">
                    {LIVE_SESSION[activeStep].content}
                  </p>

                  {LIVE_SESSION[activeStep].meta && (
                    <span className="font-geist text-[10px] text-white/50 block mt-2 border-t border-white/5 pt-1.5">
                      {LIVE_SESSION[activeStep].meta}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-white/10">
                  {LIVE_SESSION.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        idx === activeStep ? "bg-light" : "bg-white/20"
                      }`}
                      aria-label={`Jump to step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Access Channels Grid */}
        <div className="w-full mt-12 pt-8 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CHANNELS.map((ch) => (
            <div
              key={ch.name}
              className={`p-3.5 rounded-xs border ${
                ch.highlight
                  ? "bg-black/5 border-light/40"
                  : "bg-white border-black/10"
              }`}>
              <span className="font-geist text-[10px] font-bold uppercase tracking-widest text-light block mb-1">
                {ch.name}
              </span>
              <span className="font-geist text-sm font-bold text-black block">
                {ch.detail}
              </span>
              <span className="font-geist text-[11px] text-black/60 block mt-0.5">
                {ch.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
