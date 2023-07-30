import { Button } from '@/components/ui';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between py-8 bg-white">
      <div className="flex gap-4 items-center ">
        <Image src={Logo} width={38} height={42} alt="logo" />{' '}
        <span className="text-3xl font-bold bg-gradient-to-r from-[#87EAD8] to-[#187DA8] bg-clip-text text-transparent">
          K-Block
        </span>
      </div>
      <div className="flex gap-8 items-center">
        <p>Blockchain</p>
        <p>Tokens</p>
        <p>NFTs</p>
        <p>Resources</p>
        <Button variant="primary">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
