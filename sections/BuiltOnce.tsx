import React from "react";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";

interface UseCase {
  id: string;
  number: string;
  category: string;
  audience: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const USE_CASES: UseCase[] = [
  {
    id: "last-mile",
    number: "01",
    category: "Last mile",
    audience: "Farmers and extension agents",
    description:
      "Answers on the phone already in your pocket. Agents can see what farmers have been told, call them back, and flag anything that came out wrong in the local language.",
    ctaText: "Get started",
    ctaHref: "#get-started",
  },
  {
    id: "public-sector",
    number: "02",
    category: "Public sector",
    audience: "Government",
    description:
      "This is public plumbing, not somebody's app. Hosted in Nigeria, built on open standards, and every answer it has ever given can be traced back and checked.",
    ctaText: "Read the brief",
    ctaHref: "#read-brief",
  },
  {
    id: "private-sector",
    number: "03",
    category: "Private sector",
    audience: "Agribusiness",
    description:
      "Find out what farmers are actually asking for, where, and in which week — then reach exactly those farmers. What you learn stays yours. No other partner can see it.",
    ctaText: "See the partner portal",
    ctaHref: "#partner-portal",
  },
  {
    id: "knowledge",
    number: "04",
    category: "Knowledge",
    audience: "Research and training institutions",
    description:
      "Your guidance stops sitting in a PDF. Publish it once and it reaches farmers in every language, on every channel. Correct an answer here and it becomes the answer everyone gets.",
    ctaText: "Join the content working group",
    ctaHref: "#working-group",
  },
];

const METRICS = [
  { value: "05", label: "Languages" },
  { value: "06", label: "Crops covered" },
  { value: "04", label: "Ways to reach it" },
  { value: "00", label: "Apps to download" },
];

export default function BuiltOnce() {
  return (
    <section className="w-full bg-background section-padding border-t border-border">
      <div className="container-page">
        <span className="font-geist text-xs font-semibold uppercase tracking-widest text-muted block mb-3">
          Who it's for
        </span>
        <div className="flex flex-col md:flex-row md:items-start justify-between pb-12 border-b border-border gap-6">
          <div className="max-w-2xl">
            <TextReveal
              as="h2"
              text={"Built once. Used four ways."}
              className="heading-h1 text-heading tracking-tight"
            />
          </div>
          <p className="font-geist body-text text-body max-w-md">
            An open digital infrastructure powering agricultural intelligence,
            direct-to-farm communication, and localized advisory services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-border divide-y md:divide-y-0 md:divide-x divide-border">
          {USE_CASES.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between p-6 lg:p-8 hover:bg-white transition-colors duration-200">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-geist text-xs font-bold uppercase tracking-wider text-muted">
                    {item.category}
                  </span>
                  <span className="font-geist text-xs text-muted/60">
                    [{item.number}]
                  </span>
                </div>

                <h3 className="heading-h4 text-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                  {item.audience}
                </h3>

                <p className="font-geist text-sm leading-relaxed text-body mb-8">
                  {item.description}
                </p>
              </div>

              <Link
                href={item.ctaHref}
                className="inline-flex items-center gap-2 font-geist text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary-light transition-colors pt-4 border-t border-border/50">
                <span>{item.ctaText}</span>
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-xs p-8 md:p-12 text-white relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-dark/20 border border-accent-dark/40 rounded-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-dark animate-pulse" />
                <span className="font-geist text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
                  Emergency Alerts
                </span>
              </div>
              <h3 className="heading-h2 text-white font-semibold tracking-tight">
                If something is spreading, you hear about it in minutes.
              </h3>
            </div>

            <div className="max-w-xl lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-geist text-base md:text-lg leading-relaxed text-white/90 font-normal">
                A disease moving through the area, armyworm, or a storm coming
                in. The warning goes only to farmers in that area growing that
                crop — by call, text, and WhatsApp at the same time. No noise
                for everyone else.
              </p>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto max-w-5xl pt-12 border-t border-border">
          {METRICS.map((stat, idx) => (
            <div key={idx} className="flex flex-col mx-auto">
              <dt className="order-2 font-geist text-xs text-center font-semibold uppercase tracking-widest text-muted mt-2">
                {stat.label}
              </dt>
              <dd className="order-1 font-geist text-4xl text-center sm:text-5xl md:text-6xl font-bold tracking-tight text-heading">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
