import Banner from "@/assets/banner.png";
import { Navbar } from "@/components/common";
import DashboardCard from "@/components/common/dashboard-card";
import Tabs from "@/components/common/nft-dashboard-tabs/board-tabs";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import UpArrow from "@/assets/chevron-up.svg";
import DownArrow from "@/assets/chevron-down.svg";

export default function NFTDashboard() {
  return (
    <>
      <Navbar />
      <div className="container md:px-12 px-3">
        <h1 className="text-3xl font-bold my-12">NFT Dashboard</h1>
        <div className="flex flex-wrap">
          <div>
            <div className="flex flex-wrap">
              <DashboardCard title="Collections" numbers="230,347" />
              <DashboardCard title="Total NFTs" numbers="31,230,347" />
              <DashboardCard title="Holders" numbers="1,730,562" />
            </div>
            <div className="flex flex-wrap">
              <DashboardCard title="Total Sales" numbers="230,347" />
              <DashboardCard
                title="Volume 24H"
                numbers="31,230,347"
                down={
                  <Image
                    src={DownArrow}
                    width={24}
                    height={24}
                    alt="UpArrow"
                    className="text-semantic-r-500"
                  />
                }
                percentage_negative="4.29%"
              />
              <DashboardCard
                title="Active Addresses"
                numbers="1,730,562"
                up={
                  <Image
                    src={UpArrow}
                    width={24}
                    height={24}
                    alt="UpArrow"
                    className="text-semantic-g-500"
                  />
                }
                percentage_positive="4.29%"
              />
            </div>
          </div>
          <div>
            <div className="absolute flex p-5">
              <div className="bg-[#E9F0F2] opacity-80 py-2 px-4 rounded-xl">
                <h2 className="text-sm font-semibold text-neutral-n-700">
                  Space Walking
                </h2>
                <p className="text-xs font-normal text-neutral-n-700">
                  2,500 items | 0.045 KDA
                </p>
              </div>
              <div className="rounded-md p-2 bg-semantic-b-50 flex items-center ml-24 md:ml-40 h-7">
                <div className="bg-semantic-g-500 rounded-full w-[12px] h-[12px]"></div>
                <p className="text-xs text-neutral-n-700 font-normal ml-1">
                  Minting Now
                </p>
              </div>
            </div>
            <Image
              src={Banner}
              width={474}
              height={208}
              alt="Banner"
              className="rounded-xl shadow-md"
              //   the shadow needs to be corrected
            />
          </div>
        </div>
        <section>
          <Tabs category1="Trending" category2="Upcoming" category3="Top" />
        </section>
      </div>
    </>
  );
}
