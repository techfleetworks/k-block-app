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

export default function TokenHolders() {
  const data = [
    {
      rank: "1",
      key_name: "xPON...69Z7o",
      quantity: "0.02 KDA",
      value: "0.30 USD",
      percentage: "25.10%",
      chain: "3",
    },
    {
      rank: "2",
      key_name: "kl90W...72kxw",
      quantity: "0.02 KDA",
      value: "0.30 USD",
      percentage: "25.10%",
      chain: "3",
    },
    {
      rank: "3",
      key_name: "FTodZ...w9Glc",
      quantity: "0.02 KDA",
      value: "0.30 USD",
      percentage: "25.10%",
      chain: "3",
    },
  ];
  return (
    <div>
      <p className="text-neutral-n-900 text-sm font-normal leading-5">
        Token Holder Overview
      </p>
      <div className="bg-natural-n-0 pt-5 rounded-xl">
        <div className="rounded-xl border overflow-hidden">
          <Table className="border-neutral-table-border">
            <TableHeader>
              <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100">
                <TableHead className=" py-3 px-6">
                  <p className="text-neutral-n-800 text-sm font-medium leading-5">
                    Rank
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5">
                    Address
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5 -ml-4">
                    Quantity
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5 -ml-4">
                    Value
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5 -ml-4">
                    Percentage
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800 text-sm font-medium leading-5 -ml-4">
                    Chain
                  </p>
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
                    <TableCell label="Rank" className="py-4 px-6">
                      {item.rank !== undefined && item.rank}
                    </TableCell>
                    <TableCell
                      label="Address"
                      className="table-text text-primary-b-500 xl:px-4"
                    >
                      {item.key_name !== undefined && item.key_name}
                    </TableCell>
                    <TableCell
                      label="Quantity"
                      className="text-neutral-n-800 text-sm font-medium leading-[18px]"
                    >
                      {item.quantity !== undefined && item.quantity}
                    </TableCell>
                    <TableCell
                      label="Value"
                      className="text-neutral-n-800 text-sm font-medium leading-[18px]"
                    >
                      {item.value !== undefined && item.value}
                    </TableCell>
                    <TableCell
                      label="Percentage"
                      className="text-neutral-n-800 text-sm font-medium leading-[18px]"
                    >
                      {item.value !== undefined && item.value}
                    </TableCell>
                    <TableCell
                      label="Chain"
                      className="text-neutral-n-800 text-sm font-medium leading-[18px]"
                    >
                      {item.chain !== undefined && item.chain}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
