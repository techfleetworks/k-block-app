import DeathApe from "@/assets/variation-apes100.png";
import SpaceApe from "@/assets/variation-apes128.png";
import AngelApe from "@/assets/variation-apes2.png";
import FunkyApe from "@/assets/variation-apes9.png";
import Verified from "@/assets/verified.svg";
import { Navbar, NftAssetGrid } from "@/components/common";
import Cards from "@/components/common/nft-asset-cards";
import Tabs from "@/components/common/nft-asset-tabs/nft-asset-tabs";
import Link from "next/link";

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

  const title = "More from Variation Apes"; // Title for the cards component
  return (
    <>
      <Navbar />
      <div className="container md:px-12 px-3">
        <section>
          <NftAssetGrid />
        </section>
        <section>
          <div>
            <Tabs category1="Transactions" category2="Metadata" />
          </div>
        </section>
        <section className="my-12">
          <div className="flex flex-col items-center mx-auto">
            <h2 className="text-neutral-n-700 text-[1.25rem] font-bold mb-6">
              {title}
            </h2>
            <Cards data={data} />
            <div className="mt-8">
              <Link
                className="text-primary-b-500 border border-primary-b-500 text-sm font-medium px-4 py-2 rounded-md"
                href="/nft-collections"
              >
                View Collection
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
