"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface props {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: props) => {
  const router = useRouter();
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className='flex items-center justify-between w-full mb-4'>
        <div className='items-center hidden sm:flex gap-x-2'>
          <button
            onClick={() => router.back()}
            className='flex items-center justify-center transition bg-black rounded-full hover:opacity-75'
          >
            <RxCaretLeft size={35} className='text-white' />
          </button>
          <button
            onClick={() => router.forward()}
            className='flex items-center justify-center transition bg-black rounded-full hover:opacity-75'
          >
            <RxCaretRight size={35} className='text-white' />
          </button>
        </div>
        <div className='flex items-center sm:hidden gap-x-2'>
          <button className='flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75'>
            <HiHome size={20} className='text-black' />
          </button>
          <button className='flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75'>
            <BiSearch size={20} className='text-black' />
          </button>
        </div>
        <div className='flex items-center justify-between gap-x-4'>
          <>
            <div>
              <Button
                onClick={() => {}}
                className='font-medium bg-transparent text-neutral-300'
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {}}
                className='px-6 py-2 font-medium bg-white'
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
