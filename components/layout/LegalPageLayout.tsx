"use client";

import { usePathname } from "next/navigation";
import TextReveal from "../ui/TextReveal";
interface LegalSection {
  number: number;
  heading: string;
  body: string;
  list?: string[];
}

interface LegalPageLayoutProps {
  accentWord?: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({ sections }: LegalPageLayoutProps) {
  const pathname = usePathname();
  const isPrivacy = pathname === "/privacy-policy";

  return (
    <section className="w-full bg-background pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-12">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h1 className="text-black heading-h">
            <TextReveal
              text={
                isPrivacy ? "Privacy Policy{{.}}" : "Terms & Conditions{{.}}"
              }
              className="max-w-4xl"
              accentClassName="text-light"
            />
          </h1>
        </div>

        <div className="flex flex-col gap-12 font-geist">
          {sections.map((section) => (
            <div key={section.number}>
              <h2 className="heading-h3 flex items-baseline gap-3 text-heading">
                <span>{section.number}.</span>
                <span>{section.heading}</span>
              </h2>

              <p className="body-text mt-3 text-body">{section.body}</p>

              {section.list && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {section.list.map((item, i) => (
                    <li key={i} className="body-text flex gap-2 text-body">
                      <span className="text-muted">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
