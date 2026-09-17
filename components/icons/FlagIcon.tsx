import React from "react";
import clsx from "clsx";

interface FlagIconProps {
  className?: string;
}

export default function FlagIcon({ className }: FlagIconProps) {
  return (
    <svg
      className={clsx(className)}
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_127_2271)">
        <path
          d="M49.875 73.5L76.125 15.75H49.875L36.75 44.625H63"
          stroke="#DA633B"
          strokeWidth="5.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36.75 44.625L33.1695 52.5H9.1875L22.3125 38.0625L9.1875 23.625H46.2945"
          stroke="#DA633B"
          strokeWidth="5.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_2271">
          <rect width="84" height="84" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
