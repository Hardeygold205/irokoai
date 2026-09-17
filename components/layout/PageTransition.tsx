"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useLenis } from "lenis/react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenis = useLenis();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={pathname}
          initial={hasMounted ? { y: "100%", opacity: 0 } : false}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-12%", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-screen w-full flex-col">
          <NavBar />
          <main id="main-content" className="flex-1 z-40">
            {children}
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
