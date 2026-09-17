import React from "react";
import clsx from "clsx";

interface ChevronRightProps {
  className?: string;
}

export default function ChevronRight({ className }: ChevronRightProps) {
  return (
    <svg
      className={clsx(className)}
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_127_1344)">
        <g clipPath="url(#clip1_127_1344)">
          <path
            d="M0.800323 14.6559V1.34586C0.800323 0.149077 2.35073 -0.449315 3.25465 0.395144L10.3783 7.05015C10.941 7.57584 10.941 8.42589 10.3783 8.94599L3.25465 15.601C2.35073 16.451 0.800323 15.8527 0.800323 14.6559Z"
            fill="#FF4400"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_127_1344">
          <rect
            width="16"
            height="11"
            fill="white"
            transform="matrix(0 1 -1 0 11 0)"
          />
        </clipPath>
        <clipPath id="clip1_127_1344">
          <rect
            width="16"
            height="11"
            fill="white"
            transform="matrix(0 1 -1 0 11 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
