import { ListBulletIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import Grid from "@/assets/grid.svg";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import TrendingNFTTable from "./trending-nft-table";
import CardBoard from "./card-collection";

export default function TrendingNFTAssets(props) {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div>
      <h2 className="leading-normal text-neutral-n-700 text-xl font-semibold mb-9">
        {props.title}
      </h2>
      <div className="flex items-center justify-end px-11">
        <h4 className=" text-sm leading-[18px] font-semibold text-neutral-n-500">
          Sort By:
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex border border-neutral-n-250 px-4 py-1 ml-4 rounded-lg">
              Newest
              <ChevronDown className="text-neutral-n-700" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex rounded-lg border border-neutral-n-250 w-fit ml-5 items-center">
          <Image
            src={Grid}
            alt="Grid component"
            width={32}
            height={32}
            className="p-2 cursor-pointer"
            onClick={() => setIsGrid(true)}
          />
          <ListBulletIcon
            width={32}
            height={32}
            className="p-1 cursor-pointer text-primary-b-500"
            onClick={() => setIsGrid(false)}
          />
        </div>
      </div>
      {isGrid ? <CardBoard /> : <TrendingNFTTable />}
    </div>
  );
}
