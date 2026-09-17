import React from "react";
import clsx from "clsx";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <svg
      className={clsx(className)}
      width="1"
      height="100"
      viewBox="0 0 1 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="100" fill="#484848" />
    </svg>
  );
}
