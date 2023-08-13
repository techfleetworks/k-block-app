import {
  Address,
  Footer,
  Navbar,
  PortfolioBreakdown,
  WalletValue,
} from '@/components/common';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function WalletOverview() {
  return (
    <main className="">
      <Navbar />
      <h2 className="mt-12 mb-7 px-3 md:px-12 text-[32px] font-semibold">Wallet Overview</h2>
      <div className="flex flex-wrap gap-7 justify-start sm:justify-between  px-3 md:px-12">
        <Address />
        <div className="flex flex-wrap gap-6 bg-neutral-n-0 p-5 rounded-xl grow drop-shadow-md">
          <PortfolioBreakdown />
          <WalletValue />
        </div>
      </div>
      <Tabs defaultValue="account" className="mt-12 px-3 md:px-12 ">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
          <TabsTrigger value="nfts">NFTs</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">placeholder1</TabsContent>
        <TabsContent value="tokens">placeholder2</TabsContent>
        <TabsContent value="nfts">placeholder3</TabsContent>
      </Tabs>

      <Footer />
    </main>
  );
}
