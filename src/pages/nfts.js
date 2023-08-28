import Banner from '@/assets/banner.png';
import { Footer } from '@/components/common';
import DashboardCard from '@/components/common/dashboard-card';
import Tabs from '@/components/common/nft-dashboard-tabs/board-tabs';
import Image from 'next/image';

export default function NFTDashboard() {
  return (
    <div className="container">
      <h1 className="text-[32px] font-bold my-12">NFT Dashboard</h1>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap gap-7 mb-7">
          <DashboardCard title="Collections" numbers="230,347" />
          <DashboardCard title="Total NFTs" numbers="31,230,347" />
          <DashboardCard title="Holders" numbers="1,730,562" />
          <DashboardCard title="Total Sales" numbers="230,347" />
          <DashboardCard title="Volume 24H" numbers="31,230,347" />
          <DashboardCard title="Active Addresses" numbers="1,730,562" />
        </div>
        <div className="xl:mt-0 md:mt-[280px] sm:mt-[508px] mt-[508px]">
          <div className="absolute flex">
            <div className="bg-[#E9F0F2] opacity-80 mt-5 ml-5 py-2 px-4 rounded-xl">
              <h2 className="text-sm font-600 text-neutral-n-700">
                Space Walking
              </h2>
              <p className="text-xs font-400 text-neutral-n-700">
                2,500 items | 0.045 KDA
              </p>
            </div>
            <div className="flex items-center ml-24 md:ml-44">
              <div className="bg-semantic-g-500 rounded-full w-[12px] h-[12px]"></div>
              <p className="text-xs text-neutral-n-0 font-400 ml-1">
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
      <Footer />
    </div>
  );
}
