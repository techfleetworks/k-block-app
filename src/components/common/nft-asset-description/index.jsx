import Link from "next/link";
import Image from "next/image";
import Twitter from "@/assets/twitter.svg";
import Discord from "@/assets/discord.svg";
import Vector from "@/assets/vector.svg";

const NftAssetDescription = ({ className }) => {
  return (
    <div
      className={`bg-neutral-n-0 border-solid drop-shadow-md rounded-md p-7 mt-2.5 ${className}`}
    >
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6 pb-5">
        Description
      </h2>
      <p className="text-neutral-n-800 text-sm font-normal leading-[1.125rem] pb-5">
        Created by:{" "}
        <Link className="table-link" href="#">
          f35ff...792d3
        </Link>
      </p>
      <p className="text-neutral-n-800 text-sm font-normal leading-[1.125rem] pb-5">
        Variation Apes is a community-driven collectibles NFT project. Get paid
        for your contributions to the DAO. Contributing members will be
        receiving a monthly salary, there will also be opportunities for
        bounties on vetted tasks, and tips for select spontaneous contributions.
      </p>
      <p className="text-neutral-n-800 text-sm font-semibold leading-[1.125rem] pb-4">
        Variation Apes Socials
      </p>
      <div className="flex gap-8">
        <a href="discord.com">
          <Image src={Discord} width={32} height={32} alt="Discord Logo" />
        </a>
        <a href="twitter.com">
          <Image src={Twitter} width={32} height={32} alt="Twitter Logo" />
        </a>

        {/* Find out what social media logo this is */}
        <a href="#">
          <Image src={Vector} width={32} height={32} alt="Logo" />
        </a>
      </div>
    </div>
  );
};

export default NftAssetDescription;
