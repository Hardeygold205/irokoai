import React from "react";
import clsx from "clsx";

interface BagIconProps {
  className?: string;
}

export default function BagIcon({ className }: BagIconProps) {
  return (
    <svg
      className={clsx(className)}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.875 21.875H28.125"
        stroke="#DA633B"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.8125 40.625C6.95 40.625 6.25 39.925 6.25 39.0625V14.0625C6.25 13.2 6.95 12.5 7.8125 12.5H42.1875C43.05 12.5 43.75 13.2 43.75 14.0625V39.0625C43.75 39.925 43.05 40.625 42.1875 40.625H7.8125Z"
        stroke="#DA633B"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.8125 12.5V9.375C32.8125 7.65 31.4125 6.25 29.6875 6.25H20.3125C18.5875 6.25 17.1875 7.65 17.1875 9.375V12.5"
        stroke="#DA633B"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.75 23.1084C38.0521 26.4063 31.5833 28.1355 25 28.1251C18.4167 28.1355 11.9479 26.4063 6.25 23.1105"
        stroke="#DA633B"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
