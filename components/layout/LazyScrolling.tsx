"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function LazyScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        wheelMultiplier: 0.5,
        duration: 1.2,
      }}>
      {children}
    </ReactLenis>
  );
}
