import * as React from "react";
import Link from "next/link";
import Arrow from "@/assets/arrow.svg";
import Logo from "@/assets/logo.svg";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function HomeNavbar() {
  return (
    <>
      <header className="md:px-12 py-4 px-3">
        <nav className="flex justify-between items-center gap-4">
          <div className="flex justify-between items-center gap-5">
            <Link href="/">
              <div className="flex gap-4 items-center ">
                <Image src={Logo} width={140} height={140} alt="logo" />
              </div>
            </Link>
            <Badge
              variant="outline"
              className="rounded-md px-3 py-2 flex w-fit gap-1 bg-[#EEF5F7]"
            >
              <span className="text-neutral-n-500"> KDA: </span>
              <span className="text-primary-b-500"> $0.563824 </span>
              <span className="text-semantic-r-500">(-0.12%)</span>
            </Badge>
          </div>
          <div className="flex">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center cursor-pointer px-4">
                  <p className="text-neutral-n-700 font-medium text-sm">
                    Blockchain
                  </p>
                  <Image src={Arrow} alt="Arrow Down" width={20} height={20} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md w-fit">
                <Link
                  href="/txs"
                  className="hover:bg-neutral-n-50 px-4 py-3 rounded-md"
                >
                  <p>Transactions</p>
                </Link>
                <Link
                  href="/blocks"
                  className="hover:bg-neutral-n-50 px-4 py-3 rounded-md"
                >
                  <p>Blocks</p>
                </Link>
              </HoverCardContent>
            </HoverCard>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/tokens" legacyBehavior passHref>
                    <NavigationMenuLink className="text-neutral-n-700 font-medium text-sm px-4">
                      Tokens
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/nfts" legacyBehavior passHref>
                    <NavigationMenuLink className="text-neutral-n-700 font-medium text-sm px-4">
                      NFTs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-neutral-n-700 font-medium text-sm px-4">
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center cursor-pointer px-4">
                  <p className="text-neutral-n-700 font-medium text-sm">
                    Mainnet
                  </p>
                  <Image src={Arrow} alt="Arrow Down" width={20} height={20} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md w-fit">
                <Link
                  href="/"
                  className="hover:bg-neutral-n-50 px-4 py-3 rounded-md"
                >
                  <p>Testnet</p>
                </Link>
              </HoverCardContent>
            </HoverCard>
          </div>
        </nav>
      </header>
    </>
  );
}
