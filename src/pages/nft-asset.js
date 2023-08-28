<<<<<<< Updated upstream
import React from 'react';
import { Navbar } from '@/components/common';
import { NftAssetGrid } from '@/components/common';
import Tabs from '@/components/common/nft-asset-tabs/nft-asset-tabs';
import Cards from '@/components/common/nft-asset-cards';
import AngelApe from '@/assets/variation-apes2.png';
import DeathApe from '@/assets/variation-apes100.png';
import SpaceApe from '@/assets/variation-apes128.png';
import FunkyApe from '@/assets/variation-apes9.png';
import Verified from '@/assets/verified.svg';
=======
import React from "react";
import { Navbar } from "@/components/common";
import { NftAssetGrid } from "@/components/common";
import Tabs from "@/components/common/nft-asset-tabs/nft-asset-tabs";
import Cards from "@/components/common/nft-asset-cards";
import AngelApe from "@/assets/variation-apes2.png";
import DeathApe from "@/assets/variation-apes100.png";
import SpaceApe from "@/assets/variation-apes128.png";
import FunkyApe from "@/assets/variation-apes9.png";
import Verified from "@/assets/verified.svg";
>>>>>>> Stashed changes

export default function NftAsset() {
  const data = [
    {
      img: AngelApe,
<<<<<<< Updated upstream
      assetID: 'Variation Apes #2',
=======
      assetID: "Variation Apes #2",
>>>>>>> Stashed changes
      img2: Verified,
    },
    {
      img: DeathApe,
<<<<<<< Updated upstream
      assetID: 'Variation Apes #100',
=======
      assetID: "Variation Apes #100",
>>>>>>> Stashed changes
      img2: Verified,
    },
    {
      img: SpaceApe,
<<<<<<< Updated upstream
      assetID: 'Variation Apes #128',
=======
      assetID: "Variation Apes #128",
>>>>>>> Stashed changes
      img2: Verified,
    },
    {
      img: FunkyApe,
<<<<<<< Updated upstream
      assetID: 'Variation Apes #9',
=======
      assetID: "Variation Apes #9",
>>>>>>> Stashed changes
      img2: Verified,
    },
  ];
  return (
    <>
      <div>
<<<<<<< Updated upstream
        <div className="bg-inherit md:px-12">
=======
        <header>
          <Navbar />
        </header>
        <div className="bg-inherit md:px-12 container">
>>>>>>> Stashed changes
          <section>
            <NftAssetGrid />
          </section>
          <section>
            <div>
              <Tabs category1="Transactions" category2="Metadata" />
            </div>
          </section>
          <section className="mt-48">
            <div className="flex flex-col items-center gap-8 mx-auto w-4/5">
              <Cards title="More from Variation Apes" data={data} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
