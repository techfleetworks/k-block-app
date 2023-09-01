import Image from "next/image";
import FunkyApe from "@/assets/variation-apes9.png";
import Verified from "@/assets/verified.svg";
import copy from "@/assets/copy.svg";
import Arkade from "@/assets/arkade.svg";
import Hypercent from "@/assets/hypercent.svg";
import Share from "@/assets/share.svg";
import { Help } from "@/components/common";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import TrendingNFTAssets from "../components/common/nft-collection-tabs/nft-collection-trending/index";
// import NFTCollectionAnalytics from "../components/common/nft-collection-tabs/nft-collection-analytics/index";
// import NFTCollectionContract from "../components/common/nft-collection-tabs/nft-collection-contract/index";
import NFTCollectionTabs from "@/components/common/nft-collection-tabs";

export default function NftCollectionsPage() {
  return (
    <div className="container md:px-12 px-3 mt-8 mb-12">
      <div className="flex flex-wrap justify-between">
        <div className="flex gap-4">
          <Image
            className="drop-shadow-low p-0 rounded-xl h-[168px]"
            src={FunkyApe}
            width={144}
            height={168}
            alt="Add alt text dynamically from API"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-neutral-n-700 text-[2rem] font-bold">
                Variation Apes
              </h1>
              <Image
                src={Verified}
                width={20}
                height={20}
                alt="Verified Checkmark"
              />
            </div>
            <div className="flex gap-2">
              <p className="text-neutral-n-700 mt-2">
                Created by:{" "}
                <a href="#" className="table-link">
                  k:f35ff...792d3
                </a>
              </p>
              <Image width={16} height={16} src={copy} alt="copy icon" />
            </div>
            <p className="text-neutral-n-800 mt-2">
              The Variation Apes are a collection of 1,500 NFTs launched on
              Kadena!
              <br />
              Each one is a unique NFT you can trade...{" "}
              <a href="#" className="table-link">
                Read more
              </a>
            </p>
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-[0.5rem]">
                <p className="text-neutral-n-500 text-sm">Sold on</p>
                <Image
                  className="drop-shadow-low p-0"
                  src={Arkade}
                  width={27}
                  height={27}
                  alt="Add alt text dynamically from API"
                />
                <Image
                  className="drop-shadow-low p-0"
                  src={Hypercent}
                  width={27}
                  height={27}
                  alt="Add alt text dynamically from API"
                />
              </div>
              <div className="flex items-center gap-2.5">
                <p className="text-neutral-n-500 text-sm">Share</p>
                <Image src={Share} width={16} height={16} alt="Share icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Table */}
        <div className="sm: mt-3 md:mt-3 lg:mt-0 bg-neutral-n-0 p-6 border-solid drop-shadow-md rounded-md">
          <h2 className="text-neutral-n-800 text-base font-bold">Overview</h2>
          <table className="w-full text-left text-sm text-neutral-n-800 pt-2 border-separate rounded-b-xl drop-shadow-md ">
            <tbody className="space-y-2">
              <tr className="flex gap-14 justify-between">
                <th className="font-normal">
                  <Help
                    label="Floor Price"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="text-neutral-n-800">10 KDA</td>
              </tr>
              <tr className="flex justify-between">
                <th className="font-normal">
                  <Help
                    label="Volume 24h"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="text-neutral-n-800">111 KDA</td>
              </tr>
              <tr className="flex justify-between">
                <th className="font-normal">
                  <Help
                    label="Items"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="text-neutral-n-800 align-top">10K</td>
              </tr>
              <tr className="flex justify-between">
                <th className="font-normal">
                  <Help
                    label="Holders"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="text-neutral-n-800">144</td>
              </tr>
              <tr className="flex justify-between">
                <th className="font-normal">
                  <Help
                    label="Confidence"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td>
                  <span className="text-semantic-g-500">High</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-12">
        <NFTCollectionTabs />
      </div>
    </div>
  );
}
