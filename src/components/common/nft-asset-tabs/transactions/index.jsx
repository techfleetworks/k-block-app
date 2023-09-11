import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "@/components/ui/table-custompagination";
import Help from "@/components/common/help";
import Image from "next/image";
import SurprisedApe from "@/assets/surprised-ape.svg";
import Arkade from "@/assets/arkade.svg";
import Link from "next/link";

export default function Transactions({
  title,
  pageSize,
  pageIndex,
  onPageChange,
  onPageSizeChange,
  data,
}) {
  const pageCount = Math.ceil(data.length / pageSize);
  //Function to handle pagination
  const handlePageChange = (event) => {
    console.log("Current Page Index:", pageIndex);
    console.log("Page Count:", pageCount);

    if (event === "prev" && pageIndex > 0) {
      onPageChange(pageIndex - 1);
    } else if (event === "next" && pageIndex < pageCount - 1) {
      onPageChange(pageIndex + 1);
    }
  };

  // Slice data based on pageSize and pageIndex
  const startIndex = pageIndex * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <h2 className="leading-normal text-neutral-n-700 text-xl font-semibold rounded-tl-none mb-5">
        {title}
      </h2>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
              <TableHead className="pl-5">
                <Help
                  label="Asset ID"
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
              <TableHead className="pl-0">
                <Help
                  label="Action"
                  tooltipText="The status of recently-traded NFTs from this collection"
                />
              </TableHead>
              <TableHead className="pl-0">
                <Help
                  label="Price + Traded On"
                  tooltipText="Cost, in KDA and USD, and the platform used to acquire this asset"
                />
              </TableHead>
              <TableHead className="pl-0">
                <Help
                  label="From"
                  tooltipText="The address of the wallet that traded this asset"
                />
              </TableHead>
              <TableHead className="pl-0">
                <Help
                  label="To"
                  tooltipText="The address of the wallet that received this asset"
                />
              </TableHead>
              <TableHead className="pl-0">
                <Help
                  label="Txn Hash"
                  tooltipText="The unique identifier which validates a particular transaction on the blockchain"
                />
              </TableHead>
              <TableHead className="pl-0">
                <Help label="Time" tooltipText="Tooltip text here" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {slicedData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="flex items-center gap-3 p-4">
                    <Image
                      src={item.assetID}
                      width={44}
                      height={44}
                      alt="Large Apes"
                      className="rounded-lg"
                    />

                    <p className="table-link">{item.assetIDNr}</p>
                  </TableCell>
                  <TableCell label="Action" className="table-text">
                    <span
                      className={`${
                        item.action === "Sale"
                          ? "text-green-500 shadcn-green"
                          : "table-text"
                      }`}
                    >
                      {item.action}
                    </span>
                  </TableCell>

                  <TableCell label="Place + Traded On">
                    {item.priceTradedOn && (
                      <div className="flex items-center">
                        <div className="w-[84px] h-[36px]">
                          <p className="table-text mb-1">
                            {item.priceTradedOn}
                          </p>
                          <p className="sm-muted-table-text">
                            {item.priceTradedOnUSD}
                          </p>
                        </div>
                        <div className="block">
                          <Image
                            src={Arkade}
                            alt="Arkade Token"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    )}
                  </TableCell>

                  <TableCell label="From">
                    <Link href="#" className="table-link">
                      {item.from}
                    </Link>
                  </TableCell>
                  <TableCell label="To">
                    <Link href="#" className="table-link">
                      {item.to}
                    </Link>
                  </TableCell>
                  <TableCell
                    label="Txn Hash"
                    className="text-semantic-g-500 text-sm font-medium leading-[18px]"
                  >
                    <Link href="#" className="table-link">
                      {item.txnHash}
                    </Link>
                  </TableCell>
                  <TableCell label="Time" className="table-text">
                    {item.time}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </div>
    </div>
  );
}
