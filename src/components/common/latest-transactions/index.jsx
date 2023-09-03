import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Help from "@/components/common/help";
import Link from "next/link";

import QuestionMark from "@/assets/question-mark.svg";
import TransactionError from "@/assets/Error.svg";
import TransactionPending from "@/assets/Pending-Outgoing.svg";
import TransactionSuccess from "@/assets/Success.svg";

const data = [
  {
    statusIcon: TransactionPending,
    requestKey: "0xa83abrdgnnt1234wrggesfgtg1297709eq725",
    time: "21 secs ago",
    amountKDA: "0.07 KDA",
    amountUSD: "0.30 USD",
    chain: 0,
  },
  {
    statusIcon: TransactionPending,
    requestKey: "0xa83abrdgnnt1234wrggesfgtg1297709eq725",
    time: "21 secs ago",
    amountKDA: "0.07 KDA",
    amountUSD: "0.30 USD",
    chain: 0,
  },
  {
    statusIcon: TransactionError,
    requestKey: "0xa83abrdgnnt1234wrggesfgtg1297709eq725",
    time: "21 secs ago",
    amountKDA: "0.07 KDA",
    amountUSD: "0.30 USD",
    chain: 0,
  },
  {
    statusIcon: TransactionSuccess,
    requestKey: "0xa83abrdgnnt1234wrggesfgtg1297709eq725",
    time: "21 secs ago",
    amountKDA: "0.07 KDA",
    amountUSD: "0.30 USD",
    chain: 0,
  },
  {
    statusIcon: TransactionSuccess,
    requestKey: "0xa83abrdgnnt1234wrggesfgtg1297709eq725",
    time: "21 secs ago",
    amountKDA: "0.07 KDA",
    amountUSD: "0.30 USD",
    chain: 0,
  },
  {
    statusIcon: TransactionSuccess,
    requestKey: "0xa83abrdgnnt1234wrggesfgtg1297709eq725",
    time: "21 secs ago",
    amountKDA: "0.07 KDA",
    amountUSD: "0.30 USD",
    chain: 0,
  },
  // Add more data entries as needed
];

const LatestTransactions = () => {
  return (
    <div className="bg-neutral-n-0 overflow-auto p-5 rounded-xl">
      <div className="flex flex-wrap justify-between pb-5">
        <h2 className="text-xl font-semibold leading-normal">
          Latest Transactions
        </h2>
        <Link
          className="text-primary-b-500 border border-primary-b-500 text-sm font-medium leading-none px-4 py-2 rounded-md border-solid"
          href="/txs"
        >
          View all transactions
        </Link>
      </div>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100">
              <TableHead>
                <Help label="Status" tooltipText="The state of a transaction: failing, pending, or succeeding" />
              </TableHead>
              <TableHead className="w-[200px]">
                <Help label="Request Key" tooltipText="The code needed to complete a cross-chain transfer" />
              </TableHead>
              <TableHead>
                <Help label="Amount" tooltipText="The value of a specific transaction" />
              </TableHead>
              <TableHead>
              <Help label="Chain" tooltipText=
                {
                  <>
                    This number specifies which chain in the Chainweb a block or transaction is on. {""}
                    <a className="text-[#30B9F4]" href="https://youtu.be/hYvXxFbsN6I">Learn more
                    </a>
                  </>
                }
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((transaction, index) => (
              <TableRow key={index} className="">
                <TableCell className="p-6">
                  <Image
                    src={transaction.statusIcon}
                    width={32}
                    height={32}
                    alt="Transaction Type"
                  />
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-primary-b-500 truncate font-medium text-sm max-w-[15ch]">
                    <a href="">{transaction.requestKey}</a>
                  </p>
                  <p className="text-neutral-n-500 text-xs ">
                    {transaction.time}
                  </p>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {transaction.amountKDA}
                  </p>
                  <p className="text-neutral-n-500 text-xs">
                    {transaction.amountUSD}
                  </p>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {transaction.chain}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestTransactions;
