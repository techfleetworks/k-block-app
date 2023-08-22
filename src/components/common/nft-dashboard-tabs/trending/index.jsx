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
import Blue from "@/assets/blue-circle.svg";
import Link from "next/link";

export default function Trending(props) {
  const data = [
    {
      name: "Kawai",
      img: Kawaii,
      img2: Verified,
      img3: UToken,
      img4: BlackUToken,
      img5: BlackMEToken,
      items: "9780",
      holders: "978",
      floorPrice: "0.07 KDA",
      volume: "10,000 KDA",
      tradedOn: "3",
      confidence: "High",
    },
    {
      name: "Boxing Badger",
      img: Boxing,
      img2: undefined,
      img3: UToken,
      img4: BlackUToken,
      img5: BlackMEToken,
      items: "8,109,780",
      holders: "10,978",
      floorPrice: "0.07 KDA",
      volume: "10,000 KDA",
      tradedOn: "2",
      confidence: "Low",
    },
    {
      name: "John The Great",
      img: Boxing,
      img2: Verified,
      img3: UToken,
      img4: BlackUToken,
      img5: BlackMEToken,
      items: "8,109,780",
      holders: "10,978",
      floorPrice: "0.07 KDA",
      volume: "10,000 KDA",
      tradedOn: "2",
      confidence: "Low",
    },
  ];
  return (
    <div>
      <h2 className="leading-normal text-neutral-n-700 text-xl font-semibold rounded-tl-none mb-5">
        {props.title}
      </h2>
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
            {data.map((item) => {
              return (
                <TableRow key={item.name}>
                  <TableCell className="flex items-center gap-3 p-4">
                    {item.img !== undefined && (
                      <Image
                        src={item.img}
                        width={44}
                        height={44}
                        alt="Large Kawaii"
                        className="rounded-lg"
                      />
                    )}
                    <div className="flex items-center">
                      <Link href="/nft-asset">
                        <p className="table-link">{item.name}</p>
                      </Link>
                      {item.img2 !== undefined && (
                        <Image
                          src={item.img2}
                          alt="Verified"
                          width={20}
                          height={20}
                          className="ml-1"
                        />
                      )}
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
                        src={item.img3}
                        alt="Orange Token"
                        width={32}
                        height={32}
                      />
                      <Image
                        src={item.img4}
                        alt="Black Token"
                        width={32}
                        height={32}
                      />
                      <Image
                        src={item.img5}
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
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
