import Medium from "@/assets/medium.svg";
import Twitter from "@/assets/twitter.svg";
import Youtube from "@/assets/youtube.svg";
import Image from "next/image";
import DinoHeart from "@/assets/dino-heart.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container flex gap-4 flex-wrap justify-between items-center mt-20 mb-[2.25rem] py-7 px-3 md:px-12 max-[865px]:flex-col">
      <div className="flex flex-wrap items-center gap-8">
        <p className="text-neutral-n-500 text-xs font-medium">
          &copy; {currentYear} K-Block Explorer
        </p>
      </div>
      <div>
        <p className="flex text-neutral-n-700 text-sm font-medium">
          Made with
          <Image
            className="pl-[5px] pr-1.5"
            src={DinoHeart}
            width={35}
            height={35}
            alt="8-Bit Dinosaur and Red Heart"
          />{" "}
          by Tech Fleet community contributors
        </p>
      </div>
      <div className="flex flex-wrap items-center">
        <a
          className="text-neutral-n-500 text-xs font-medium"
          href="https://techfleet.org/"
        >
          techfleet.org <span className="text-neutral-n-300 px-3">|</span>
        </a>
        <div className="flex flex-wrap gap-3">
          <a href="https://twitter.com/TechFleetWorks">
            <Image src={Twitter} width={20} height={20} alt="Twitter Logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCDT5kUEuYDp4ThLcyIjS1Iw">
            <Image src={Youtube} width={20} height={20} alt="YouTube Logo" />
          </a>
          <a href="https://techfleet.medium.com/">
            <Image src={Medium} width={20} height={20} alt="Medium logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
