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

const data = [
  {
    height: 394402,
    chain: 12,
    transaction: 7,
    time: "12 sec ago",
  },
  {
    height: 394402,
    chain: 12,
    transaction: 7,
    time: "124 sec ago",
  },
  {
    height: 394402,
    chain: 12,
    transaction: 7,
    time: "112 sec ago",
  },
  {
    height: 394402,
    chain: 12,
    transaction: 7,
    time: "12 sec ago",
  },
  {
    height: 394402,
    chain: 12,
    transaction: 7,
    time: "124 sec ago",
  },
  {
    height: 394402,
    chain: 12,
    transaction: 7,
    time: "112 sec ago",
  },
  // Add more data entries as needed
];

const LatestBlocks = () => {
  return (
    <div className="bg-neutral-n-0 overflow-auto p-5 rounded-xl">
      <div className="flex flex-wrap justify-between pb-5">
        <h2 className="text-xl font-semibold leading-normal">Latest Blocks</h2>
        <Link
          className="text-primary-b-500 border border-primary-b-500 text-sm font-medium leading-none px-4 py-2 rounded-md border-solid"
          href="/blocks"
        >
          View all blocks
        </Link>
      </div>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100">
              <TableHead>
                <Help
                  label="Height"
                  tooltipText="The identifying number of a block or set of blocks"
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Chain"
                  tooltipText={
                    <>
                      This number specifies which chain in the Chainweb a block
                      or transaction is on. {""}
                      <a
                        className="text-[#30B9F4] "
                        href="https://youtu.be/hYvXxFbsN6I"
                      >
                        Learn more
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Txns"
                  tooltipText="The total transactions of a specific block"
                />
              </TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((block, index) => (
              <TableRow key={index}>
                <TableCell className="p-6">
                  <Link
                    href="/block-details"
                    className="text-primary-b-500 text-sm font-medium"
                  >
                    {block.height}
                  </Link>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {block.chain}
                  </p>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {block.transaction}
                  </p>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {block.time}
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

export default LatestBlocks;
