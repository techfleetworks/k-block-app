import {
  Address,
  Footer,
  Navbar,
  PortfolioBreakdown,
  WalletValue,
  WalletTabs,
} from '@/components/common';

export default function WalletOverview() {
  return (
    <main>
      <h2 className="mt-12 mb-7 px-3 md:px-12 text-[32px] font-semibold">
        Wallet Overview
      </h2>
      <div className="flex flex-wrap gap-7 justify-start sm:justify-between  px-3 md:px-12">
        <Address />
        <div className="flex flex-wrap gap-6 bg-neutral-n-0 p-5 rounded-xl grow drop-shadow-md">
          <PortfolioBreakdown />
          <WalletValue />
        </div>
      </div>
      <section>
        <WalletTabs />
      </section>
      <Footer />
    </main>
  );
}
