import {
    Address,
    Footer,
    Navbar,
  } from '@/components/common';

export default function WalletOverview() {
   return (
    <main className="">
      <Navbar />
      <h2 className="mt-8 mb-7 px-3 md:px-12 my-7">Wallet Overview</h2>
      <div className="flex flex-wrap gap-7 justify-start sm:justify-between px-3 md:px-12 my-7">
        <Address/>
      </div>
      
      <Footer />
    </main>
  );
}
