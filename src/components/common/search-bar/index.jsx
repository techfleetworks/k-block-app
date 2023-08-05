import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Search from '@/assets/search.svg';
import Boxes from '@/assets/boxes.svg';

const SearchBar = () => {
  return (
    <div className="px-3 md:px-12 flex justify-center py-16 bg-primary-b-500 relative">
      <Image
        src={Boxes}
        width={320}
        height={320}
        alt="boxes"
        className="hidden md:block absolute left-0 top-0"
      />
      <div className="flex flex-col w-full lg:w-2/4 justify-center items-center gap-4 z-10">
        <Label
          htmlFor="search"
          className="text-white text-2xl font-medium self-start"
        >
          The Kadena Blockchain Explorer
        </Label>
        <div className="relative w-full">
          <Input
            type="text"
            id="search"
            placeholder="Search by Address / Request Key / Account Name / Block / Token / Domain Name"
            className="pl-4 pr-10 py-2 text-neutral-n-400 rounded-[8px]"
          />
          <Image
            src={Search}
            width={28}
            height={28}
            alt="search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>
      <Image
        src={Boxes}
        width={320}
        height={320}
        alt="boxes"
        className="hidden sm:block absolute right-0 top-0 rotate-180"
      />
    </div>
  );
};

export default SearchBar;
