import {
  CurrentPrice,
  InfoBar,
  LatestBlocks,
  LatestTransactions,
  NftCollections,
  Searchbar,
  TotalTransactions,
  TransactionHistory,
} from "@/components/common";
import HomeNavbar from "@/components/common/navbar/home-navbar";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <Searchbar />
      <div className="container">
        <InfoBar />
        <div className="flex flex-wrap gap-7 justify-start sm:justify-between px-3 md:px-12 my-7">
          <CurrentPrice />
          <TotalTransactions />
          <TransactionHistory />
        </div>
        <div className="grid md:grid-cols-2 gap-7  px-3 md:px-12 my-7">
          <LatestBlocks />
          <LatestTransactions />
        </div>
        <NftCollections />
      </div>
    </div>
  );
}
