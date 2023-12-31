import {
  Address,
  Navbar,
  PortfolioBreakdown,
  WalletTabs,
  WalletValue,
} from "@/components/common";

export default function WalletOverview() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="mt-12 mb-7 px-3 md:px-12 text-[32px] font-semibold">
          Wallet Overview
        </h2>
        <div className="flex flex-wrap gap-7 justify-start sm:justify-between  px-3 md:px-12">
          <Address />
          <div className="flex flex-wrap gap-6 bg-neutral-n-0 p-5 rounded-xl   drop-shadow-md">
            <PortfolioBreakdown />
            <WalletValue />
          </div>
        </div>
        <section>
          <WalletTabs />
        </section>
      </div>
    </>
  );
}
