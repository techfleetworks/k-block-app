import Image from "next/image";
import SurprisedApePng from "@/assets/surprised-ape.png";
import RainbowApe from "@/assets/rainbow-ape.svg";
import Verified from "@/assets/verified.svg";
import Share from "@/assets/share.svg";
import MagnifyingGlassPlus from "@/assets/magnifying-glass-plus.svg";
import { NftAssetOverview } from "@/components/common";
import { NftAssetDescription } from "@/components/common";
import { NftAssetAttributes } from "@/components/common";
import NftAssetSales from "../nft-asset-sales";
import NftAssetPrice from "../nft-asset-price";

const NftAssetGrid = () => {
  return (
    // Grid Layout
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-8">
      <div className="relative">
        <Image
          className="w-full drop-shadow-low p-0"
          src={SurprisedApePng}
          width={564}
          height={564}
          alt="Add alt text dynamically from API"
        />
        <Image
          className="absolute right-0 top-0"
          src={MagnifyingGlassPlus}
          width={38}
          height={38}
          alt="Zoom In"
        />
      </div>
      <div>
        <h1 className="text-neutral-n-700 text-[2rem] font-bold leading-[2.75rem] pb-[0.44rem]">
          Variation Apes #6
        </h1>
        <div className="flex justify-between pb-4 border-b border-neutral-n-300">
          <div className="flex items-center gap-3 py-[0.62rem]">
            <Image
              src={RainbowApe}
              width={32}
              height={32}
              alt="Add alt text dynamically from API"
            />
            <p className="text-neutral-n-500 text-xl font-bold">
              Variation Apes
            </p>
            <Image
              src={Verified}
              width={20}
              height={20}
              alt="Verified Checkmark"
            />
          </div>
          <div className="flex items-center gap-2.5">
            <p className="text-neutral-n-500 text-sm">Share</p>
            <Image src={Share} width={16} height={16} alt="Share icon" />
          </div>
        </div>
        <NftAssetOverview />
        <NftAssetAttributes />
      </div>
      <div className="flex flex-wrap">
        <NftAssetDescription />
        <NftAssetSales />
      </div>
      <NftAssetPrice />
    </div>
  );
};

export default NftAssetGrid;
