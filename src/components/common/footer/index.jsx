import Discord from '@/assets/discord.svg';
import Instagram from '@/assets/instagram.svg';
import Logo from '@/assets/logo.svg';
import Medium from '@/assets/medium.svg';
import Twitter from '@/assets/twitter.svg';
import Youtube from '@/assets/youtube.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-between items-center px-3 md:px-12">
      <div>
        <Image src={Logo} width={140} height={140} alt="logo" />
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <p className="text-neutral-n-500 text-sm font-semibold">
          &copy; 2023 K-Block Explorer{' '}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="">
            <Image src={Discord} width={32} height={32} alt="discord" />
          </a>
          <a href="">
            <Image src={Youtube} width={32} height={32} alt="youtube" />
          </a>
          <a href="">
            <Image src={Twitter} width={32} height={32} alt="twitter" />
          </a>
          <a href="">
            <Image src={Instagram} width={32} height={32} alt="instagram" />
          </a>
          <a href="">
            <Image src={Medium} width={32} height={32} alt="medium" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
