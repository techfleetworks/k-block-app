import Logo from "@/assets/logo.svg";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import Sun from "@/assets/sun.svg";
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
  return (
    <header className="md:px-12 py-4 bg-neutral-n-0 px-12">
      <div className="flex justify-between">
        <Badge
          variant="outline"
          className="mb-4 rounded-[6px] px-3 py-2 flex w-fit gap-1 bg-primary-b-50"
        >
          <span className="text-neutral-n-500"> KDA: </span>
          <span className="text-primary-b-500"> $0.563824 </span>
          <span className="text-semantic-r-500">(-0.12%)</span>
          <span className="text-neutral-n-500"> | MC: $135.15 M</span>
        </Badge>
        <div className="relative md:flex items-center w-[40%] hidden">
          <Input
            type="text"
            id="search"
            placeholder="Search by Address / Request Key / Account / Block / Token"
            className="text-neutral-n-400 text-xs bg-primary-b-50 rounded-lg border-none h-8"
          />
          <Search className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer bg-primary-b-500 text-white py-2 w-[45px] h-8 rounded-r-lg" />
          <div className="bg-white p-2 shadow-sm rounded-md ml-2 cursor-pointer">
            <Image src={Sun} width={20} height={20} alt="sun" />
          </div>
        </div>
      </div>
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="flex gap-4 items-center ">
            <Image src={Logo} width={140} height={140} alt="logo" />
          </div>
        </Link>
        <div className="md:flex md:gap-9 hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blockchain</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md">
                  <div className="hover:bg-neutral-n-200 p-2 rounded-md">
                    <Link href="/transactions">Transaction</Link>
                  </div>
                  <div className="hover:bg-neutral-n-200 p-2 rounded-md">
                    <Link href="/">Blocks</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavbarLink href="/" text="Tokens" />
          <NavbarLink href="/nfts" text="NFTs" />
          <NavbarLink href="/" text="Resources" />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Mainnet</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white py-2 px-4 flex flex-col gap-4 rounded-md">
                  <div className="hover:bg-neutral-n-200 p-2 rounded-md">
                    <Link href="/">Testnet</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
