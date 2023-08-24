import React from "react";
import { Navbar } from "@/components/common";
import { NftAssetGrid } from "@/components/common";
import Tabs from "@/components/common/nft-asset-tabs/nft-asset-tabs";

export default function NftAsset() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="bg-inherit md:px-12">
        <section>
          <NftAssetGrid />
        </section>
        <section>
          <Tabs category1="Transactions" category2="Metadata" />
        </section>
        <section>{/* Cards */}</section>
      </div>
    </div>
  );
}
