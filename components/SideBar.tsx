"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SiderbarItem from "./SiderbarItem";
import Library from "./Library";

interface SideBarProps {
  children: ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className='flex h-full'>
      <div className='hidden sm:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
        <Box>
          <div className='flex flex-col px-5 py-4 gap-y-4'>
            {routes.map((item) => (
              <SiderbarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className='h-full overflow-y-auto'>
          <Library />
        </Box>
      </div>
      <main className='flex-1 h-full py-2 overflow-y-auto'>{children}</main>
    </div>
  );
};

export default SideBar;
