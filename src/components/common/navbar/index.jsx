import Logo from "@/assets/logo.svg";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import * as React from "react";

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
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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

const Navbar = () => {
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
    <header className="md:px-12 py-4 bg-neutral-n-0 px-3">
      <nav className="flex justify-between items-center gap-4">
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
          {/* <div className="bg-white p-2 shadow-sm rounded-md ml-2 cursor-pointer">
            <Image src={Sun} width={20} height={20} alt="sun" />
          </div> */}
        </div>

        {isTabletAndMobile ? (
          <div className="inline-block hamburger-icon">
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="text-neutral-n-700 text-4xl px-4 py-2 rounded-lg cursor-pointer">
                  <HamburgerMenuIcon />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md w-fit md:mr-12 mr-2">
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
                <Link
                  href="/tokens"
                  className="hover:bg-neutral-n-50 px-4 py-3 rounded-md"
                >
                  <p>Tokens</p>
                </Link>
                <Link
                  href="/nfts"
                  className="hover:bg-neutral-n-50 px-4 py-3 rounded-md"
                >
                  <p>NFTs</p>
                </Link>
                <Link
                  href="/"
                  className="hover:bg-neutral-n-50 px-4 py-3 rounded-md"
                >
                  <p>Resources</p>
                </Link>
                <Link
                  href="/"
                  className="hover:bg-neutral-n-50 px-4 py-3 rounded-md"
                >
                  <p>Testnet</p>
                </Link>
              </HoverCardContent>
            </HoverCard>
          </div>
        ) : (
          <div className="md:flex md:px-4 hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Blockchain</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md">
                    <div className="hover:bg-neutral-n-50 px-4 py-3 rounded-md">
                      <Link href="/txs">Transaction</Link>
                    </div>
                    <div className="hover:bg-neutral-n-50 px-4 py-3 rounded-md">
                      <Link href="/blocks">Blocks</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavbarLink href="/tokens" text="Tokens" />
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
        )}
      </nav>
    </header>
  );
};

export default Navbar;
