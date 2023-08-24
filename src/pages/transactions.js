import { Navbar } from "@/components/common";
import TransactionsTable from "@/components/common/transaction-table";
import React from "react";

export default function Transactions() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <h1 className="mt-8 mb-7 px-12 text-xl leading-6 font-semibold">
        Transactions
      </h1>
      <TransactionsTable />
    </div>
  );
}
