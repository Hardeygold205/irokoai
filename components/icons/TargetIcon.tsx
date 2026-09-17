import React from "react";
import clsx from "clsx";

interface TargetIconProps {
  className?: string;
}

export default function TargetIcon({ className }: TargetIconProps) {
  return (
    <svg
      className={clsx(className)}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_127_2321)">
        <path
          d="M25 25L43.75 6.25"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.2577 11.7416C31.3723 4.87284 20.3744 4.41868 12.9452 10.6958C5.51605 16.9708 4.12855 27.8916 9.75147 35.827C15.3744 43.7624 26.1348 46.0728 34.5202 41.1437C42.9056 36.2145 46.1202 25.6895 41.9223 16.9166"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.6269 18.3712C28.4269 15.1754 23.4019 14.7192 19.679 17.2879C15.9561 19.8567 14.5978 24.7171 16.4499 28.8421C18.3019 32.9692 22.8353 35.1858 27.229 34.1108C31.6228 33.0379 34.6228 28.9817 34.3624 24.465"
          stroke="#DA633B"
          strokeWidth="3.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_2321">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
