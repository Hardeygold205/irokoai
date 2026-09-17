import React from "react";
import clsx from "clsx";

interface ShakeIconProps {
  className?: string;
}

export default function ShakeIcon({ className }: ShakeIconProps) {
  return (
    <svg
      className={clsx(className)}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_127_2422)">
        <path
          d="M39.0625 29.6875L31.25 37.5L18.75 34.375L7.8125 26.5625"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1963 13.7958L25.0005 10.9375L35.8067 13.7958"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.71299 11.7999L1.72757 21.7728C1.34216 22.5436 1.65466 23.4832 2.42549 23.8686L7.81299 26.5624L14.1942 13.7936L8.81091 11.104C8.44007 10.9165 8.0109 10.8874 7.61715 11.0165C7.22341 11.1478 6.8984 11.429 6.71299 11.7999Z"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42.187 26.5624L47.5725 23.8686C48.3433 23.4832 48.6558 22.5436 48.2704 21.7728L43.287 11.7999C43.0995 11.429 42.7745 11.1478 42.3808 11.0165C41.9891 10.8874 41.56 10.9165 41.1891 11.104L35.8037 13.7936L42.187 26.5624Z"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.9371 14.0625H28.1246L19.208 22.7125C18.8726 23.0479 18.7059 23.5187 18.7601 23.9896C18.8121 24.4625 19.0767 24.8854 19.4767 25.1396C22.8976 27.325 27.5392 27.1729 31.2496 23.4375L39.0621 29.6875L42.1871 26.5625"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.2312 42.1876L16.0813 40.1501L10.9375 36.4751"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_2422">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
