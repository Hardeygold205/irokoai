import React from "react";
import clsx from "clsx";

interface MailProps {
  className?: string;
  colorClass?: string;
}

export default function Mail({
  className,
  colorClass = "text-light",
}: MailProps) {
  return (
    <svg
      className={clsx(className, colorClass)}
      width="54"
      height="57"
      viewBox="0 0 54 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_127_5084)">
        <path
          d="M10.02 40C9.037 40 8.204 39.662 7.522 38.985C6.841 38.308 6.5 37.482 6.5 36.505V14.495C6.5 13.518 6.841 12.692 7.522 12.015C8.204 11.338 9.037 11 10.02 11H39.98C40.964 11 41.796 11.338 42.478 12.015C43.159 12.692 43.5 13.518 43.5 14.495V36.505C43.5 37.482 43.159 38.308 42.478 38.985C41.796 39.662 40.964 40 39.98 40H10.02ZM25 26.578L9.421 16.688V36.505C9.421 36.679 9.477 36.821 9.59 36.933C9.702 37.044 9.845 37.1 10.02 37.1H39.98C40.155 37.1 40.298 37.044 40.41 36.933C40.523 36.821 40.579 36.679 40.579 36.505V16.688L25 26.578ZM25 23.567L40.279 13.9H9.721L25 23.567ZM9.421 36.505C9.421 36.679 9.477 36.821 9.59 36.933C9.702 37.044 9.845 37.1 10.02 37.1H9.421C9.421 37.1 9.421 37.044 9.421 36.933C9.421 36.821 9.421 36.679 9.421 36.505Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_5084">
          <rect
            width="57"
            height="60"
            fill="white"
            transform="translate(-3.5 -2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
