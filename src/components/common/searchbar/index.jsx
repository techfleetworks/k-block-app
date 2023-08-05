import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Search from '@/assets/search.svg';

const SearchBar = () => {
  return (
    <div className="flex justify-center py-16 bg-primary-b-500">
      <div className="flex flex-col w-full md:w-2/4 justify-center items-center gap-4">
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
            className="pl-4 pr-10 py-2 text-neutral-n-400 rounded-xl"
          />
          <Image
            src={Search}
            width={25}
            height={25}
            alt="search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
