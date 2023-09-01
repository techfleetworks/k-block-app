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
import Card from "./card-collection";

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
          {/* I am not sure how to implement data.map in this case */}
          {/* What I want to do:
              - I want to let the engine to map over all the items 
              - I want 5 cards per row
              - I want 3 columns per page
              
              - I thought that making one <Card> component will do the job
              - as long as I just make more objects in the array 
              - ...but it is not doing the job 
              
              - ... so for now, I rather copied and pasted the <Card> component like 5 times.
              - but this needs to be changed. 
              
              - For the list view, no design came in, so I just pretended that there is one.
              - this view will be changed later. */}
          {data.map((item, index) => {
            if (index % 15 === 0) {
              return (
                //   <TableRow key={item.id}>
                //     <TableCell className="flex flex-wrap xl:flex-nowrap">
                //       <Card
                //         nft={item.nft ? item.nft : undefined}
                //         alt={item.alt ? item.alt : null}
                //         id={item.name ? item.name : null}
                //         logo={item.logo ? item.logo : null}
                //       />
                //     </TableCell>
                //   </TableRow>
                <div className="flex py-6" key={item.id}>
                  <Card
                    nft={item.nft ? item.nft : undefined}
                    alt={item.alt ? item.alt : null}
                    id={item.name ? item.name : null}
                    logo={item.logo ? item.logo : null}
                  />
                  <Card
                    nft={item.nft ? item.nft : undefined}
                    alt={item.alt ? item.alt : null}
                    id={item.name ? item.name : null}
                    logo={item.logo ? item.logo : null}
                  />
                  <Card
                    nft={item.nft ? item.nft : undefined}
                    alt={item.alt ? item.alt : null}
                    id={item.name ? item.name : null}
                    logo={item.logo ? item.logo : null}
                  />
                  <Card
                    nft={item.nft ? item.nft : undefined}
                    alt={item.alt ? item.alt : null}
                    id={item.name ? item.name : null}
                    logo={item.logo ? item.logo : null}
                  />
                  <Card
                    nft={item.nft ? item.nft : undefined}
                    alt={item.alt ? item.alt : null}
                    id={item.name ? item.name : null}
                    logo={item.logo ? item.logo : null}
                  />
                </div>
              );
            }
          })}
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
