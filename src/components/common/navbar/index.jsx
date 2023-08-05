import Logo from '@/assets/logo.svg';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

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
    <header className="px-12 py-4">
      <Badge
        variant="outline"
        className="mb-4 rounded-[6px] px-3 py-2 flex w-fit gap-1 bg-primary-b-100"
      >
        <span className="text-neutral-n-500"> KDA: </span>
        <span className="text-primary-b-500"> $0.563824 </span>
        <span className="text-semantic-r-500">(-0.12%)</span>
        <span className="text-neutral-n-500"> | MC: $135.15 M</span>
      </Badge>
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
