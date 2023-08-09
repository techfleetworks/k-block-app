import Logo from '@/assets/logo.svg';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import Sun from '@/assets/sun.svg';

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
    <header className="px-3 md:px-12 py-4">
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
            className="pl-4 pr-10 py-2 text-neutral-n-400 text-xs bg-primary-b-50 rounded-l-lg rounded-r-none border-none h-8"
          />
          <Search className="cursor-pointer bg-primary-b-500 text-white py-2 w-[45px] h-8 rounded-r-lg" />
          <div className="bg-white p-2 shadow-sm rounded-md ml-2 cursor-pointer">
            <Image src={Sun} width={20} height={20} alt="sun" />
          </div>
        </div>
      </div>
      <nav className="flex justify-between items-center">
        <div className="flex gap-4 items-center ">
          <Image src={Logo} width={140} height={140} alt="logo" />
        </div>
        <div className="md:flex md:gap-11 hidden">
          <NavbarLink href="/" text="Blockchain" />
          <NavbarLink href="/" text="Tokens" />
          <NavbarLink href="/" text="NFTs" />
          <NavbarLink href="/" text="Resources" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
