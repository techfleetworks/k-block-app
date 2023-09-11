import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Help from "@/components/common/help";
import Link from "next/link";
import Pagination from "./token-transaction-pagination";

export default function TokenTransactions() {
  const data = [
    {
      key_name: "xPON...69Z7o",
      status: "Transfer",
      value1: "0.02 KDA",
      value2: "0.30 USD",
      address1: "k:0x18...bb13",
      address2: "k:565a...6101",
      time: "1 second ago",
      chain: "3",
    },
    {
      key_name: "kl90W...72kxw",
      status: "Transfer",
      value1: "0.02 KDA",
      value2: "0.30 USD",
      address1: "k:0x18...bb13",
      address2: "k:565a...6101",
      time: "2 minutes ago",
      chain: "1",
    },
    {
      key_name: "FTodZ...w9Glc",
      status: "Bulk Transfer",
      value1: "0.02 KDA",
      value2: "0.30 USD",
      address1: "k:0x18...bb13",
      address2: "k:565a...6101",
      time: "30 minutes ago",
      chain: "18",
    },
  ];
  return (
    <div>
      <p className="text-neutral-n-700 text-sm font-normal leading-5">
        Showing 10 out of 105 transactions
      </p>
      <div className="bg-natural-n-0 pt-5 rounded-xl">
        <div className="rounded-xl border overflow-hidden">
          <Table className="border-neutral-table-border">
            <TableHeader>
              <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100">
                <TableHead className="py-3.5">
                  <Help
                    label="Txn Hash"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <Link
                          className="underline text-primary-b-500"
                          href="http://example.com/"
                        >
                          Learn more.
                        </Link>
                      </>
                    }
                  />
                </TableHead>
                <TableHead>
                  <Help label="Status" tooltipText="Tooltip text here" />
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5 -ml-3">
                    Value
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5">
                    Address
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5 pl-2">
                    Time
                  </p>
                </TableHead>
                <TableHead>
                  <Help label="Chain" tooltipText="Tooltip text here" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => {
                return (
                  <TableRow
                    key={item.key_name}
                    className="items-center bg-natural-n-0"
                  >
                    <TableCell
                      label="Txn Hash"
                      className="table-text text-primary-b-500 xl:px-4"
                    >
                      {item.key_name !== undefined && (
                        <Link href="/transaction-details">{item.key_name}</Link>
                      )}
                    </TableCell>
                    <TableCell label="Status">
                      {item.status !== undefined && (
                        <button className="border border-solid border-neutral-n-200 bg-white px-4 py-3 rounded-full">
                          {item.status}
                        </button>
                      )}
                    </TableCell>
                    <TableCell label="Value">
                      <div className="text-semantic-g-500 text-sm font-medium leading-[18px]">
                        {item.value1 !== undefined && (
                          <Link href="#" className="table-text">
                            {item.value1}
                          </Link>
                        )}
                      </div>
                      <div>
                        {item.value2 !== undefined && (
                          <Link href="#" className="sm-muted-table-text">
                            {item.value2}
                          </Link>
                        )}
                      </div>
                    </TableCell>
                    <TableCell label="Addresses">
                      <div className="flex items-center">
                        <p className="sm-muted-table-text pl-2">From</p>
                        {item.address1 !== undefined && (
                          <Link
                            href="/wallet-overview"
                            className="text-primary-b-500"
                          >
                            {item.address1}
                          </Link>
                        )}
                      </div>
                      <div className="flex items-center">
                        <p className="sm-muted-table-text pl-2">To</p>
                        {item.address2 !== undefined && (
                          <Link
                            href="/wallet-overview"
                            className="text-primary-b-500 px-1"
                          >
                            {item.address2}
                          </Link>
                        )}
                      </div>
                    </TableCell>
                    <TableCell label="Time">
                      {item.time !== undefined && (
                        <p className=" px-5">{item.time}</p>
                      )}
                    </TableCell>
                    <TableCell label="Chain">
                      {item.chain !== undefined && (
                        <p className=" px-5">{item.chain}</p>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
      <Pagination
        pageSize={10}
        pageIndex={0}
        pageCount={1}
        onPageChange={1}
        onPageSizeChange={1}
      />
    </div>
  );
}
