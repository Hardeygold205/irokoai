import React from "react";
import clsx from "clsx";

interface GlobeIconProps {
  className?: string;
}

export default function GlobeIcon({ className }: GlobeIconProps) {
  return (
    <svg
      className={clsx(className)}
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5 42C10.5 42 24.5 21 42 21C59.5 21 73.5 42 73.5 42C73.5 42 59.5 63 42 63C24.5 63 10.5 42 10.5 42Z"
        stroke="#DA633B"
        strokeWidth="5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 52.5C47.5228 52.5 52 48.0228 52 42.5C52 36.9772 47.5228 32.5 42 32.5C36.4772 32.5 32 36.9772 32 42.5C32 48.0228 36.4772 52.5 42 52.5Z"
        stroke="#DA633B"
        strokeWidth="5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
