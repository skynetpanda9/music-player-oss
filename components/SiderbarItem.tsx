import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface props {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SiderbarItem = ({ icon: Icon, label, active, href }: props) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-yellow-500 transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className='w-full truncate'>{label}</p>
    </Link>
  );
};

export default SiderbarItem;
