"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem = ({ image, name, href }: ListItemProps) => {
  const router = useRouter();
  const onClick = () => {
    //TODO: Add Auth before push

    router.push(href);
  };

  return (
    <button
      className='relative flex items-center pr-4 overflow-hidden rounded-md group gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20'
      onClick={onClick}
    >
      <div className='relative min-h-[64px] min-w-[64px]'>
        <Image src={image} fill className='object-cover' alt='Image' />
      </div>
      <p className='py-5 font-medium truncate'>{name}</p>
      <div className='absolute flex items-center justify-center p-4 transition bg-green-500 rounded-full opacity-0 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
        <FaPlay className='text-black' />
      </div>
    </button>
  );
};

export default ListItem;
