import Banner from "@/assets/banner.png";
import { Footer } from "@/components/common";
import DashboardCard from "@/components/common/dashboard-card";
import Tabs from "@/components/common/nft-dashboard-tabs/board-tabs";
import Image from "next/image";

export default function NFTDashboard() {
  return (
    <div className="container">
      <section className="px-12">
        <h1 className="text-[32px] leading-[44px] font-bold mt-12 mb-12">
          NFT Dashboard
        </h1>
      </section>
      <section className="px-12">
        <div className="flex flex-wrap">
          <div className="h-[208px]">
            <div className="flex flex-wrap">
              <DashboardCard title="Collections" numbers="230,347" />
              <DashboardCard title="Total NFTs" numbers="31,230,347" />
              <DashboardCard title="Holders" numbers="1,730,562" />
            </div>
            <div className="xl:mt-0 md:mt-[280px] sm:mt-[508px] mt-[508px]">
              <div className="absolute flex">
                <div className="w-[173.71px] h-[46px] bg-[#E9F0F2CC] opacity-80 mt-5 ml-5 pt-2 pl-4 pr-4 pb-2 rounded-xl">
                  <h1 className="text-sm font-600 text-neutral-n-700 leading-[18px]">
                    Space Walking
                  </h1>
                  <p className="text-xs font-400 text-neutral-n-500 leading-3">
                    2,500 items | 0.045 KDA
                  </p>
                </div>
                <div className="flex items-center ml-24 md:ml-44">
                  <div className="bg-semantic-g-300 rounded-full w-[12px] h-[12px]"></div>
                  <p className="text-xs text-neutral-n-0 font-400 leading-3 ml-1">
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
        </div>
      </section>
      <section>
        <Tabs category1="Trending" category2="Upcoming" category3="Top" />
      </section>
      <Footer />
    </div>
  );
}
