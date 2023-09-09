import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import Logo from "@/assets/logo.svg";

export default function Mobile() {
  /** I tried to add "active state" on individual menu once clicked, but I wasn't sure why it was not working.
   * Basically the menu needs to be turned as blue colour if the user is browsing on the particular menu page */
  //   const [active, setIsActive] = React.useState("Home");
  //   const activated = "text-primary-b-500 font-medium text-sm";
  //   const deactivated = "text-neutral-n-700 font-medium text-sm";

  //   function toggleActive(id) {
  //     setIsActive(id);
  //   }
  return (
    <div className="flex justify-between">
      <div className="flex justify-between items-center gap-5">
        <Link href="/">
          <div className="flex gap-4 items-center ">
            <Image src={Logo} width={140} height={140} alt="logo" />
          </div>
        </Link>
        <Badge
          variant="outline"
          className="rounded-md px-3 py-2 flex w-fit gap-1 bg-neutral-n-50"
        >
          <span className="text-neutral-n-500"> KDA: </span>
          <span className="text-primary-b-500"> $0.563824 </span>
          <span className="text-semantic-r-500">(-0.12%)</span>
          {/* <span className="text-neutral-n-500"> | MC: $135.15 M</span> */}
        </Badge>
      </div>
      <div className="inline-block hamburger-icon">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-neutral-n-700 text-4xl px-4 py-3 rounded-lg cursor-pointer">
              <HamburgerMenuIcon />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white py-2 flex flex-col gap-4 rounded-md md:mr-12 mr-2">
            <DropdownMenuItem>
              <Link
                href="/txs"
                className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
              >
                <span>Transaction</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/blocks"
                className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
              >
                <span>Blocks</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/tokens"
                className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
              >
                <span>Tokens</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/nfts"
                className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
              >
                <span>NFTs</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/"
                className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
              >
                <span>Resources</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/"
                className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
              >
                <span>Testnet</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
