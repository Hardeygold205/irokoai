import React from "react";
import Image from "next/image";

const PARTNERS = [
  { name: "VIAMO", logo: "/assets/partners/viamo.png" },
  { name: "iSDA", logo: "/assets/partners/isda.svg" },
  { name: "IITA", logo: "/assets/partners/iita.png" },
  { name: "PxD", logo: "/assets/partners/pxd.png" },
  { name: "AGRA", logo: "/assets/partners/agra.png" },
  { name: "NAERLS", logo: "/assets/partners/naerls2.png" },
  { name: "Digital Green", logo: "/assets/partners/digital-green.png" },
  { name: "NAPRI", logo: "/assets/partners/napri.webp" },
];

export default function BuiltWith() {
  return (
    <section className="w-full bg-white pt-10 md:pt-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="font-geist text-xs font-semibold uppercase tracking-widest text-muted block mb-3">
          Built With
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl items-center justify-items-center">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="relative w-full h-28 md:h-32 flex items-center justify-center p-4 transition-all">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                sizes=""
                className="object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Supported By Footer Banner */}
        <div className="mt-16 pt-10 border-t border-black/10 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="font-geist text-xs font-semibold uppercase tracking-wider text-black/60">
            Supported by
          </span>
          <div className="relative w-72 h-20">
            <Image
              src="/assets/partners/gates-foundation.webp"
              alt="Bill & Melinda Gates Foundation logo"
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
