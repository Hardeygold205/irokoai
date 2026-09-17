import TextReveal from "@/components/ui/TextReveal";
import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  isFrontFacing?: boolean;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "You ask",
    description:
      "In Hausa, Yoruba, Igbo, Pidgin or English. If the question isn't clear, it asks you what you meant.",
    isFrontFacing: true,
  },
  {
    number: "02",
    title: "It looks up your land",
    description:
      "What your soil is like where you are, and what works for the crop you're growing.",
    isFrontFacing: false,
  },
  {
    number: "03",
    title: "You get an answer",
    description:
      "Short, in your language, and specific enough to do something with today.",
    isFrontFacing: false,
  },
  {
    number: "04",
    title: "A person checks",
    description:
      "If the system isn't confident, the answer stops and an expert looks at it first.",
    isFrontFacing: false,
  },
];

const GUARANTEES = [
  {
    condition: "If it isn't sure",
    action: "It doesn't guess",
  },
  {
    condition: "Every question",
    action: "Reaches the right expert",
  },
  {
    condition: "Every correction",
    action: "Signed and kept on record",
  },
];

export default function HowItWork() {
  return (
    <section className="w-full bg-background section-padding border-t border-border">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-border gap-6">
          <div className="max-w-5xl">
            <span className="font-geist text-xs font-semibold uppercase tracking-widest text-muted block mb-3">
              How it works
            </span>
            <TextReveal
              as="h2"
              text={"Four steps, and you never see three of them."}
              className="heading-h1 text-heading tracking-tight"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-border divide-y md:divide-y-0 md:divide-x divide-border">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col justify-between p-6 lg:p-8 hover:bg-white transition-colors duration-200">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-geist text-xs text-muted">
                    [{step.number}]
                  </span>
                  {step.isFrontFacing ? (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary font-geist text-[10px] font-bold uppercase tracking-wider rounded-xs">
                      Visible to user
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-border/60 text-muted font-geist text-[10px] font-semibold uppercase tracking-wider rounded-xs">
                      Automated pipeline
                    </span>
                  )}
                </div>

                <h3 className="heading-h4 text-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="font-geist text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-xs p-8 md:p-14 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <span className="font-geist text-xs font-semibold uppercase tracking-widest text-secondary block mb-4">
                How we keep it honest
              </span>
              <h3 className="heading-h2 text-white font-bold tracking-tight mb-6">
                When it doesn&apos;t know, it says so — and asks someone who
                does.
              </h3>
              <p className="font-geist text-base md:text-lg leading-relaxed text-white/80 font-normal">
                A question about goats goes to the people who spend their lives
                on livestock. A question about cassava goes to the people who
                spend theirs on cassava. And when one of them fixes an answer,
                the fix stays fixed — so the next farmer who asks the same thing
                gets the better answer straight away.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:pl-8 lg:border-l lg:border-white/10">
              {GUARANTEES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-primary-light/40 border border-white/10 rounded-xs flex flex-col justify-between">
                  <span className="font-geist text-xs font-semibold uppercase tracking-wider text-secondary mb-6 block">
                    {item.condition}
                  </span>
                  <p className="font-geist text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                    {item.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
