import DeathApe from "@/assets/variation-apes100.png";
import SpaceApe from "@/assets/variation-apes128.png";
import AngelApe from "@/assets/variation-apes2.png";
import FunkyApe from "@/assets/variation-apes9.png";
import Verified from "@/assets/verified.svg";
import { NftAssetGrid } from "@/components/common";
import Cards from "@/components/common/nft-asset-cards";
import Tabs from "@/components/common/nft-asset-tabs/nft-asset-tabs";

export default function NftAsset() {
  const data = [
    {
      img: AngelApe,
      assetID: "Variation Apes #2",
      img2: Verified,
    },
    {
      img: DeathApe,
      assetID: "Variation Apes #100",
      img2: Verified,
    },
    {
      img: SpaceApe,
      assetID: "Variation Apes #128",
      img2: Verified,
    },
    {
      img: FunkyApe,
      assetID: "Variation Apes #9",
      img2: Verified,
    },
  ];
  return (
    <>
      <div className="container">
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
    </>
  );
}
