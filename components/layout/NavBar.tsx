"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import Button from "@/components/ui/Button";
// import HoverLink from "@/components/ui/HoverLink";
import { useBreakPoint } from "@/hooks/useBreakPoint";
// import Mail from "../icons/Mail";
// import Phone from "../icons/Phone";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about-us", label: "About Us" },
//   { href: "/our-team", label: "Our Team" },
//   { href: "/operations", label: "Operations" },
//   { href: "/careers", label: "Careers" },
//   { href: "/investor-relations", label: "Investor Relations" },
//   { href: "/publications", label: "Publications" },
//   { href: "/medias", label: "Media" },
// ];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const width = useBreakPoint();

  function getClosedHeight(width: number | null) {
    if (width === null) return 90;
    if (width < 640) return 70;
    if (width < 768) return 80;
    return 90;
  }

  const closedHeight = getClosedHeight(width);
  const padding = 8;

  const outerHeight = isOpen ? "100vh" : closedHeight + padding * 2;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.div
      animate={{
        height: outerHeight,
        padding: isOpen ? 0 : padding,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 box-border transition-colors duration-300",
        scrolled && !isOpen ? "backdrop-blur-sm" : "bg-transparent",
      )}>
      <motion.header
        animate={{
          borderRadius: isOpen ? 0 : 2,
          backgroundColor: isOpen
            ? "var(--color-light)"
            : "var(--color-primary)",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full w-full flex-col overflow-hidden justify-center">
        <div className="flex shrink-0 items-center container-page justify-between px-4 w-full">
          <Link href="/" className="relative z-10">
            <h1 className="md:heading-h3 heading-h4 text-white">
              <span className="text-light">.</span>
              IROKO AI
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <div
              className={clsx(
                "hidden items-center gap-4 md:flex",
                isOpen && "lg:invisible lg:opacity-0",
              )}>
              <Button
                href="tel:*347*282#"
                text="Dial *347*282#"
                bg="bg-transparent border border-white/30"
                px="px-6"
                py="py-3"
              />
            </div>
            <div>
              <Button
                href="tel:+7149"
                text="Call 7149"
                bg="bg-light"
                px="px-6"
                py="py-3"
              />
            </div>
          </div>
        </div>

        {/* <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: isOpen ? 0.25 : 0, duration: 0.4 }}
              className="flex flex-1 flex-col items-center justify-center gap-2 [@media(min-width:390px)]:gap-4 overflow-y-auto px-6 md:gap-5">
              {navLinks.map((link) => (
                <HoverLink
                  hoverColor="text-black"
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold uppercase tracking-tight text-[clamp(1.4rem,min(7vw,5vh),2.5rem)] [@media(max-height:690px)]:text-[1.2rem] leading-tight">
                  {link.label}
                </HoverLink>
              ))}

              <Button
                href="/login"
                text="Login"
                bg="bg-light w-full"
                px="px-6"
                py="py-3"
              />

              <div className="my-5 flex flex-col items-center gap-3 border-t border-white/30 pt-8 text-white/90 sm:mt-14">
                <div className="flex flex-row gap-2 items-center">
                  <Mail
                    colorClass="text-white"
                    className="md:w-10 md:h-10 w-6 h-6"
                  />
                  <HoverLink
                    onClick={() => setIsOpen(false)}
                    href="mailto:info@extensionafrica.com"
                    hoverColor="text-black"
                    className="md:heading-h3 heading-h4">
                    info@extensionafrica.com
                  </HoverLink>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <Phone
                    colorClass="text-white"
                    className="md:w-10 md:h-10 w-6 h-6"
                  />
                  <HoverLink
                    onClick={() => setIsOpen(false)}
                    href="tel:+2349035655539"
                    hoverColor="text-black"
                    className="md:heading-h3 heading-h4">
                    (+234) 9035655539
                  </HoverLink>
                </div>
                <Link
                  href="#"
                  target="_blank"
                  className="md:heading-h3 heading-h5 text-center">
                  No 3A, Ishaya Shekari Crescent, Gwarinpa, Abuja, Nigeria.
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </motion.header>
    </motion.div>
  );
}
