import React from "react";
import clsx from "clsx";

interface BoxArrowProps {
  className?: string;
}

export default function BoxArrow({ className }: BoxArrowProps) {
  return (
    <svg
      className={clsx(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_127_6565)">
        <rect width="24" height="24" rx="2" fill="black" />
        <g clipPath="url(#clip1_127_6565)">
          <g clipPath="url(#clip2_127_6565)">
            <path
              d="M14.086 12.514H8V11.486H14.086L11.404 8.727L12.111 8L16 12L12.111 16L11.404 15.273L14.086 12.514Z"
              fill="white"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_127_6565">
          <rect width="24" height="24" rx="2" fill="white" />
        </clipPath>
        <clipPath id="clip1_127_6565">
          <rect width="8" height="8" fill="white" transform="translate(8 8)" />
        </clipPath>
        <clipPath id="clip2_127_6565">
          <rect width="8" height="8" fill="white" transform="translate(8 8)" />
        </clipPath>
      </defs>
    </svg>
  );
}
