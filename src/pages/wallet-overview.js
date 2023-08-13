import {
    Address,
    Footer,
    Navbar,
    PortfolioBreakdown,
  } from '@/components/common';

export default function WalletOverview() {
   return (
    <main className="">
      <Navbar />
      <h2 className="mt-12 mb-7  px-3 md:px-12 text-[32px] font-semibold">Wallet Overview</h2>
      <div className="flex flex-wrap gap-7 justify-start sm:justify-between  px-3 md:px-12">
        <Address/>
        <PortfolioBreakdown />
      </div>
      
      <Footer />
    </main>
  );
}
