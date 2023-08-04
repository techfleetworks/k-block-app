import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  return (
    <div className="flex justify-center pt-12">
      <div className="flex flex-col w-2/4 justify-center items-center gap-2">
        <Label
          htmlFor="search"
          className="text-white text-xl font-semibold self-start"
        >
          The Kadena Blockchain Explorer
        </Label>
        <Input
          type="text"
          id="text"
          placeholder="Search by Address / Request Key / Account Name / Block / Token / Domain Name"
          className="rounded-xl text-neutral-n-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
