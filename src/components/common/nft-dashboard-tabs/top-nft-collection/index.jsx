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

import Kawaii from "@/assets/kawaii.svg";
import Boxing from "@/assets/boxing.svg";
import Verified from "@/assets/verified.svg";
import UToken from "@/assets/orange-m-token.svg";
import BlackUToken from "@/assets/black-u-token.svg";
import BlackMEToken from "@/assets/black-me-token.svg";
import Blue from "@/assets/round-blue.svg";
import Link from "next/link";

export default function TopNFTCollections(props) {
  return (
    <>
      <h2 className="mb-5 text-xl leading-6 font-semibold">{props.title}</h2>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
              <TableHead className="py-4 h-[44px]">
                <Help
                  label="Collections"
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
                <Help label="Items" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Holders" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help
                  label="Floor Price (KDA)"
                  tooltipText="Tooltip text here"
                />
              </TableHead>
              <TableHead>
                <Help label="Volume 24H" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Traded On" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead className="p-0">
                <Help label="Confidence" tooltipText="Tooltip text here" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center gap-3 p-4">
                <Image
                  src={Kawaii}
                  width={44}
                  height={44}
                  alt="Large Kawaii"
                  className="rounded-lg"
                />
                <div className="flex items-center">
                  <Link href="/nft-asset">
                    <p className="table-link">Kawaii</p>
                  </Link>
                  <Image
                    src={Verified}
                    alt="Verified"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                  {/* I eventually need to change the above image tag as {____ ? ___ : ___ } */}
                </div>
              </TableCell>
              <TableCell label="Items" className="table-text">
                9780
              </TableCell>
              <TableCell label="Holders" className="table-text">
                978
              </TableCell>
              <TableCell label="Floor Price">
                <div className="block">
                  <p className="table-text mb-1">0.07 KDA</p>
                  <p className="sm-muted-table-text">0.30 USD</p>
                </div>
              </TableCell>
              <TableCell label="Volume 24H">
                <div>
                  <p className="table-text mb-1">10,000 KDA</p>
                  <p className="text-semantic-g-500 text-xs font-normal leading-3">
                    + 0.48%
                  </p>
                </div>
              </TableCell>
              <TableCell label="Traded On">
                <div className="flex flex-wrap xl:flex:no-wrap lg:flex-nowrap items-center justify-center xl:justify-start">
                  <Image
                    src={UToken}
                    alt="Orange Token"
                    width={32}
                    height={32}
                  />
                  <Image
                    src={BlackUToken}
                    alt="Black Token"
                    width={32}
                    height={32}
                  />
                  <Image
                    src={BlackMEToken}
                    alt="Me Token"
                    width={32}
                    height={32}
                  />
                  <p className="sm-muted-table-text ml-1 mt-1">+ 2 more</p>
                </div>
              </TableCell>
              <TableCell
                label="Confidence"
                className="text-semantic-g-500 text-sm font-medium leading-[18px]"
              >
                High
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="flex items-center gap-3 p-4">
                <Image
                  src={Boxing}
                  width={44}
                  height={44}
                  alt="Boxing Badger"
                  className="rounded-lg"
                />
                <p className="table-link">Boxing Badger</p>
              </TableCell>
              <TableCell label="Items" className="table-text">
                8,109,780
              </TableCell>
              <TableCell label="Holders" className="table-text">
                10,978
              </TableCell>
              <TableCell label="Floor Price">
                <div>
                  <p className="table-text mb-1">0.07 KDA</p>
                  <p className="sm-muted-table-text">0.30 USD</p>
                </div>
              </TableCell>
              <TableCell label="Volume 24H">
                <div>
                  <p className="table-text mb-1">10,000 KDA</p>
                  <p className="text-semantic-r-500 text-sm font-normal leading-3">
                    - 0.56%
                  </p>
                </div>
              </TableCell>
              <TableCell label="Traded On">
                <div className="flex">
                  <Image
                    src={UToken}
                    alt="Orange Token"
                    width={32}
                    height={32}
                    className="mr-1"
                  />
                  <Image
                    src={Blue}
                    alt="Blue Circle Token"
                    width={32}
                    height={32}
                  />
                </div>
              </TableCell>
              <TableCell
                label="Confidence"
                className="text-semantic-r-500 text-sm font-medium leading-[18px]"
              >
                Low
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
