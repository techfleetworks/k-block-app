import {
  Navbar,
  Searchbar,
  InfoBar,
  Footer,
  CurrentPrice,
  TotalTransactions,
  TransactionHistory,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  NftCollections,
  LatestBlocks,
  LatestTransactions,
} from '@/components/common';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Searchbar />
      <InfoBar />
      <div className="flex flex-wrap gap-4 justify-start sm:justify-between px-3 md:px-12 my-7">
        <CurrentPrice />
        <TotalTransactions />
        <TransactionHistory />
      </div>
      <div className="flex flex-wrap gap-4 justify-start sm:justify-between px-3 md:px-12 my-7">
        <LatestBlocks />
        <LatestTransactions />
      </div>
      <NftCollections />
      <Footer />
    </main>
  );
}
