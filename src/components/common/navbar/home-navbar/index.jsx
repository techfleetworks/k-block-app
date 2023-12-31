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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function HomeNavbar() {
  const [isTabletAndMobile, setIsTabletAndMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setIsTabletAndMobile(true);
      } else {
        setIsTabletAndMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="md:px-12 py-4 px-3">
        <nav className="flex justify-between items-center gap-4">
          <div className="flex justify-between items-center gap-5">
            <Link href="/">
              <div className="flex gap-4 items-center">
                <Image src={Logo} width={140} height={140} alt="logo" />
              </div>
            </Link>
            <Badge
              variant="outline"
              className="rounded-md px-3 py-2 flex w-fit gap-1 bg-[#E9F0F2]"
            >
              <span className="text-neutral-n-500"> KDA: </span>
              <span className="text-primary-b-500"> $0.563824 </span>
              <span className="text-semantic-r-500">(-0.12%)</span>
            </Badge>
          </div>
          {isTabletAndMobile ? (
            <div className="inline-block hamburger-icon">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-neutral-n-700 text-4xl px-4 py-2 rounded-lg cursor-pointer">
                    <HamburgerMenuIcon />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white py-2 flex flex-col gap-4 rounded-md md:mr-12 mr-2">
                  <DropdownMenuItem>
                    <Link
                      href="/txs"
                      className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
                    >
                      Transaction
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/blocks"
                      className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
                    >
                      Blocks
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/tokens"
                      className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
                    >
                      <p>Tokens</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/nfts"
                      className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
                    >
                      <p>NFTs</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/"
                      className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
                    >
                      <p>Resources</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/"
                      className="text-sm hover:bg-neutral-n-50 px-4 py-3 rounded-md w-full"
                    >
                      <p>Testnet</p>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center cursor-pointer px-4">
                    <p className="text-neutral-n-700 font-medium text-sm">
                      Blockchain
                    </p>
                    <Image
                      src={Arrow}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                    />
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
                    <Image
                      src={Arrow}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                    />
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
          )}
        </nav>
      </header>
    </>
  );
}
