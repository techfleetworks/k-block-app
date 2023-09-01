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

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { ChevronDown } from "lucide-react";

import Verified from "@/assets/verified.svg";
import AngelApe from "@/assets/angel-ape.svg";
import Link from "next/link";

export default function TrendingNFTAssets(props) {
  const [isGrid, setIsGrid] = useState(true);
  const data = [
    {
      nft: AngelApe,
      alt: "Angel Ape",
      name: "Variation Apes #1",
      logo: Verified,
    },
  ];
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
      {isGrid ? (
        <div>
          <div className="flex py-6">
            {data.map((item, index) => (
              <div key={index} className="rounded-xl p-5 border bg-white">
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt="Variation Apes"
                  className="rounded-md mb-2"
                />

                <div className="flex items-center">
                  <p className="text-base text-primary-b-500 font-medium">
                    {item.assetID}
                  </p>
                  <Image
                    src={item.img2}
                    alt="Verified"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <TrendingNFTTable />
      )}
    </div>
  );
}

const TrendingNFTTable = () => {
  const data = [
    {
      nft: AngelApe,
      name: "Variation Apes #1",
      logo: Verified,
    },
  ];
  return (
    <div>
      <div className="rounded-xl border overflow-hidden mt-6">
        <Table className="border-neutral-table-border">
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.name}>
                  <TableCell className="flex flex-wrap xl:flex-nowrap items-center gap-3 p-4">
                    {item.nft !== undefined && (
                      <Image
                        src={item.nft}
                        width={44}
                        height={44}
                        alt="Angel Ape"
                        className="rounded-lg"
                      />
                    )}
                    <div className="flex items-center">
                      <Link href="/nft-asset">
                        <p className="table-link">{item.name}</p>
                      </Link>
                      {item.logo !== undefined && (
                        <Image
                          src={item.logo}
                          alt="Verified"
                          width={20}
                          height={20}
                          className="ml-1"
                        />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
