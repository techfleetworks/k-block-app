import { Navbar } from "@/components/common";
import TransactionsTable from "@/components/common/transaction-table";

export default function Transactions() {
  return (
    <>
      <Navbar />
      <div className="container md:px-12 px-3">
        <h1 className="my-8 text-[32px] font-bold">Transactions</h1>
        <TransactionsTable />
      </div>
    </>
  );
}
