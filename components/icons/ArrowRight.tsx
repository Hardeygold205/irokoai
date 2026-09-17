import React from "react";
import clsx from "clsx";

interface ArrowRightProps {
  className?: string;
}

export default function ArrowRight({ className }: ArrowRightProps) {
  return (
    <svg
      viewBox="0 0 146 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}>
      <g clipPath="url(#arrow-right-clip)">
        <path
          d="M85.1655 36.6729L123.188 73.2179L85.1655 109.762M118.625 73.2179H22.8115"
          stroke="currentColor"
          strokeWidth={11.125}
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
      </g>

      <defs>
        <clipPath id="arrow-right-clip">
          <rect width="146" height="147" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
