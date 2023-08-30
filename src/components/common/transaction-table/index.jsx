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
import Image from "next/image";

import TransactionSuccess from "@/assets/transaction-type-success.svg";
import TransactionError from "@/assets/transaction-type-error.svg";
import Link from "next/link";

export default function TransactionsTable() {
  const data = [
    {
      img: TransactionSuccess,
      key_name: "xPON...69Z7o",
      button_name: "Approve",
      block: "394400",
      chain: "12",
      address1: "k:0x18...bb13",
      address2: "k:565a...6101",
      value1: "0.02 KDA",
      value2: "0.30 USD",
      time: "1 second ago",
      txn1: "0.02 KDA",
      txn2: "0.30 USD",
    },
    {
      img: TransactionError,
      key_name: "xPON...69Z7o",
      button_name: "Approve",
      block: "394400",
      chain: "12",
      address1: "k:0x18...bb13",
      address2: "k:565a...6101",
      value1: "0.02 KDA",
      value2: "0.30 USD",
      time: "1 second ago",
      txn1: "0.02 KDA",
      txn2: "0.30 USD",
    },
    {
      img: TransactionError,
      key_name: "xPON...69Z7o",
      button_name: "Approve",
      block: "394400",
      chain: "12",
      address1: "k:0x18...bb13",
      address2: "k:565a...6101",
      value1: "0.02 KDA",
      value2: "0.30 USD",
      time: "1 second ago",
      txn1: "0.02 KDA",
      txn2: "0.30 USD",
    },
  ];
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100">
              <TableHead className="py-3.5 pl-6">
                <Help
                  label="Status"
                  tooltipText={
                    <>
                      Tooltip text here.{" "}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help label="Request Key" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Method" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Block" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Chain" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Addresses" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead className="p-0">
                <p>Value</p>
              </TableHead>
              <TableHead>
                <Help label="Time" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Txn fee" tooltipText="Tooltip text here" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.name} className="items-center bg-white">
                  <TableCell className="flex items-center xl:px-9 px-6 py-4">
                    {item.img !== undefined && (
                      <Image
                        src={item.img}
                        alt="Check"
                        width={32}
                        height={32}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    label="Items"
                    className="table-text text-primary-b-500 xl:px-4"
                  >
                    {item.key_name !== undefined && (
                      <Link href="/transaction-details">{item.key_name}</Link>
                    )}
                  </TableCell>
                  <TableCell label="Holders">
                    {item.button_name !== undefined && (
                      <button className="border border-solid border-neutral-n-200 bg-white px-4 py-3 rounded-full">
                        {item.button_name}
                      </button>
                    )}
                  </TableCell>
                  <TableCell label="Floor Price">
                    {item.block !== undefined && (
                      <p className="text-primary-b-500 px-4">{item.block}</p>
                    )}
                  </TableCell>
                  <TableCell label="Volume 24H">
                    {item.chain !== undefined && (
                      <p className=" px-5">{item.chain}</p>
                    )}
                  </TableCell>
                  <TableCell label="Traded On">
                    <div className="flex items-center">
                      <p className="sm-muted-table-text pl-2">From</p>
                      {item.address1 !== undefined && (
                        <Link href="#" className="text-primary-b-500">
                          {item.address1}
                        </Link>
                      )}
                    </div>
                    <div className="flex items-center">
                      <p className="sm-muted-table-text pl-2">To</p>
                      {item.address2 !== undefined && (
                        <Link href="#" className="text-primary-b-500 px-1">
                          {item.address2}
                        </Link>
                      )}
                    </div>
                  </TableCell>
                  <TableCell label="Confidence">
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
                  <TableCell>
                    {item.time !== undefined && (
                      <p className=" px-4">{item.time}</p>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="text-semantic-g-500 text-sm font-medium leading-[18px] px-4">
                      {item.txn1 !== undefined && (
                        <Link href="#" className="table-text">
                          {item.txn1}
                        </Link>
                      )}
                    </div>
                    <div className="sm-muted-table-text px-4">
                      {item.txn2 !== undefined && (
                        <Link href="#">{item.txn2}</Link>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
