import { Button } from '@/components/common';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center mt-[20px]">
        <div className="flex gap-4 items-center ">
          <Image src={Logo} width={38} height={42} alt="logo" />{' '}
          <span className="text-3xl font-bold bg-gradient-to-r from-[#87EAD8] to-[#187DA8] bg-clip-text text-transparent">
            K-Block
          </span>
        </div>
        <div className="flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <p className="font-semibold">Blockchain</p>{' '}
              <CaretDownIcon className="CaretDown" aria-hidden />
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <p className="font-semibold">Tokens</p>{' '}
              <CaretDownIcon className="CaretDown" aria-hidden />
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <p className="font-semibold">NFTs</p>{' '}
              <CaretDownIcon className="CaretDown" aria-hidden />
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <p className="font-semibold">Resources</p>{' '}
              <CaretDownIcon className="CaretDown" aria-hidden />
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

          <Button>Sign in</Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 border border-black py-1 px-2 rounded-md">
              <p className="font-semibold">Mainnet</p>{' '}
              <CaretDownIcon className="CaretDown" aria-hidden />
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
        </div>
      </nav>
    </>
    //
  );
};

export default Navbar;
