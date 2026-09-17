import React from "react";
import clsx from "clsx";

interface FlashIconProps {
  className?: string;
}

export default function FlashIcon({ className }: FlashIconProps) {
  return (
    <svg
      className={clsx(className)}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.8437 4.6875L21.875 17.1875L32.8125 22.0979L14.2187 42.1875L17.1875 29.6875L6.25 24.7771L24.8437 4.6875Z"
        stroke="#DA633B"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.3125 42.1875L38.2812 28.125L31.25 42.1875"
        stroke="#DA633B"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.9687 37.5H33.5938"
        stroke="#DA633B"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
