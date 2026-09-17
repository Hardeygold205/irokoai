import React from "react";
import clsx from "clsx";

interface OverlayProps {
  className?: string;
}

export default function Overlay({ className }: OverlayProps) {
  return (
    <svg
      className={clsx(className)}
      width="101"
      height="101"
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="101" height="101" fill="#b3c03e" fillOpacity="0.5" />
    </svg>
  );
}
