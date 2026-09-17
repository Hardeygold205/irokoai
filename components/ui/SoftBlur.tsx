"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import React, { useRef } from "react";

export interface SoftBlurInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  triggerOnView?: boolean;
}

const DURATION_S = 0.9;
const MS = 1000;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function SoftBlurIn({
  children,
  className = "",
  delay = 0,
  stagger = 25,
  triggerOnView = false,
}: SoftBlurInProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  const play = (!triggerOnView || inView) && !shouldReduceMotion;

  let index = 0;

  function renderNode(node: React.ReactNode): React.ReactNode {
    if (typeof node === "string") {
      return Array.from(node).map((char) => {
        const charIndex = index++;

        return (
          <motion.span
            key={charIndex}
            aria-hidden="true"
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 16,
                    filter: "blur(12px)",
                  }
            }
            animate={
              play
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : undefined
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: DURATION_S,
                    delay: delay / MS + (charIndex * stagger) / MS,
                    ease: EASE,
                  }
            }
            style={{
              display: "inline-block",
              whiteSpace: "pre",
            }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => (
        <React.Fragment key={i}>{renderNode(child)}</React.Fragment>
      ));
    }

    if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
      return React.cloneElement(
        node,
        undefined,
        renderNode(node.props.children),
      );
    }

    return node;
  }

  return (
    <span ref={ref} className={className}>
      {renderNode(children)}
    </span>
  );
}
