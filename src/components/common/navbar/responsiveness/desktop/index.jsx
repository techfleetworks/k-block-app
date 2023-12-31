import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";

const NavbarLink = ({ href, text }) => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} text-sm font-medium`}
          >
            {text}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export default function Desktop() {
  const [active, setIsActive] = React.useState("Home");
  const activated = "text-primary-b-500 font-medium text-sm";
  const deactivated = "text-neutral-n-700 font-medium text-sm";

  function toggleActive(id) {
    setIsActive(id);
  }
  return (
    <>
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
      <div className="relative lg:flex items-center hidden border border-neutral-n-250 rounded-lg flex-grow flex-shrink">
        <Input
          type="text"
          id="search"
          placeholder="Search by Address / Request Key / Block / Token"
          className="text-neutral-n-400 text-xs rounded-lg border-none h-8"
        />
        <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-n-450 py-2 w-[45px] h-8" />
      </div>
      <div className="md:flex md:px-4 hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blockchain</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md">
                <div className="hover:bg-neutral-n-50 px-4 py-3 rounded-md">
                  <Link
                    href="/txs"
                    onClick={() => toggleActive("txs")}
                    className={
                      active === "Transaction" ? activated : deactivated
                    }
                  >
                    Transaction
                  </Link>
                </div>
                <div className="hover:bg-neutral-n-50 px-4 py-3 rounded-md">
                  <Link href="/blocks">Blocks</Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavbarLink
          href="/tokens"
          text="Tokens"
          onClick={() => toggleActive("Tokens")}
          className={active === "Tokens" ? activated : deactivated}
        />
        <NavbarLink href="/nfts" text="NFTs" />
        <NavbarLink href="/" text="Resources" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mainnet</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md">
                <div className="hover:bg-neutral-n-50 px-4 py-3 rounded-md">
                  <Link href="/">Testnet</Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
