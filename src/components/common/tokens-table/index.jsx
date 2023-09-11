import React from "react";
import Kadena from "@/assets/kadena.svg";
import Hypercent from "@/assets/hypercent.svg";
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
import Link from "next/link";
import {
  CaretDownIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@radix-ui/react-icons";
import TokensPagination from "../tokens-pagination";

export default function TokensTable() {
  const data = [
    {
      img: Kadena,
      name: "Kadena",
      symbol: "KDA",
      price: "$0.57",
      change24: "-1.88%",
      change7: "-0.88%",
      quantity: "10,492",
      market: "$349,900.96",
      value: "$5,836.23",
    },
    {
      img: Hypercent,
      name: "Hypercent",
      symbol: "HYPE",
      price: "$0.04",
      change24: "-1.88%",
      change7: "-4.22%",
      quantity: "10,492",
      market: "$349,900.96",
      value: "$5,836.23",
    },
  ];
  return (
    <div className="bg-white p-5 rounded-xl">
      <p className="text-neutral-n-700 text-sm font-400 leading-5">
        Total 22,207 recognized tokens
      </p>
      <div className="pt-5">
        <div className="rounded-xl border overflow-hidden">
          <Table className="border-neutral-table-border">
            <TableHeader>
              <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
                <TableHead className="py-4 h-[44px]">
                  <p className="text-neutral-n-800 px-2">Token Name</p>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800">Symbol</p>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    <p className="text-neutral-n-800">Price</p>
                    <TriangleUpIcon width={24} height={24} />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    <p className="text-neutral-n-800">Change(%) 24H</p>
                    <TriangleUpIcon width={24} height={24} />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    <p className="text-neutral-n-800">Change(%) 7D</p>
                    <TriangleDownIcon width={24} height={24} />
                  </div>
                </TableHead>
                <TableHead>
                  <p className="text-neutral-n-800">Quantity</p>
                </TableHead>
                <TableHead>
                  <Help
                    label="Market Cap"
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
                  <div className="flex items-center">
                    <p className="text-neutral-n-800">Value 24H</p>
                    <TriangleDownIcon width={24} height={24} />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => {
                return (
                  <TableRow key={item.name} className="items-center bg-white">
                    <TableCell className="flex items-center gap-3 px-6">
                      <div className="flex items-center">
                        {item.img !== undefined && (
                          <Image
                            src={item.img}
                            alt="Check"
                            width={32}
                            height={32}
                            className="py-4"
                          />
                        )}
                        {item.name !== undefined && (
                          <Link
                            href="/token-details"
                            className="table-text text-primary-b-500 pl-3"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {item.symbol !== undefined && (
                        <button className="table-text px-4">
                          {item.symbol}
                        </button>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.price !== undefined && (
                        <p className="table-text px-4">{item.price}</p>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.change24 !== undefined && (
                        <div className="flex items-center text-red-500 px-4">
                          <CaretDownIcon width={24} height={24} />
                          <p>{item.change24}</p>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.change7 !== undefined && (
                        <div className="flex items-center text-red-500 px-4">
                          <CaretDownIcon width={24} height={24} />
                          <p>{item.change7}</p>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.quantity !== undefined && (
                        <p className="table-text px-4">{item.quantity}</p>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.market !== undefined && (
                        <p className="table-text px-4">{item.market}</p>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.value !== undefined && (
                        <p className="table-text px-4">{item.value}</p>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
      <TokensPagination
        pageSize={10}
        pageIndex={0}
        pageCount={1}
        onPageChange={1}
        onPageSizeChange={1}
      />
    </div>
  );
}
