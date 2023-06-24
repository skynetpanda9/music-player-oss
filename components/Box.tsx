import React from "react";
import { twMerge } from "tailwind-merge";

interface props {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: props) => {
  return (
    <div
      className={twMerge("bg-neutral-900 rounded-lg h-fit w-full", className)}
    >
      {children}
    </div>
  );
};

export default Box;
