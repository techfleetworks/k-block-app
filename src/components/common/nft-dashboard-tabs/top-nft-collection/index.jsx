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

import Bulls from "@/assets/bulls.svg";
import Verified from "@/assets/verified.svg";
import Komono from "@/assets/komono.svg";
import Brawler_Bears from "@/assets/brawler-bears.svg";
import Binance from "@/assets/binance.png";

import UToken from "@/assets/orange-m-token.svg";
import BlackUToken from "@/assets/black-u-token.svg";
import BlackMEToken from "@/assets/black-me-token.svg";
import Blue from "@/assets/blue-circle.svg";

import Link from "next/link";

export default function TopNFTCollections(props) {
  const data = [
    {
      nft: Bulls,
      name: "Looney Bulls",
      logo: Verified,
      supply: "9780",
      holders: "978",
      floorPrice: "0.07 KDA",
      floorPriceChange: "0.30 USD",
      volume: "10,000 KDA",
      volumePositive: "+0.48%",
      volumeNegative: undefined,
      token1: UToken,
      token2: BlackUToken,
      token3: BlackMEToken,
      tradedOn: "+ 2 more",
      confidence: "High",
    },
    {
      nft: Komono,
      name: "Kadena Komonos",
      logo: undefined,
      supply: "8,109,780",
      holders: "10,978",
      floorPrice: "0.07 KDA",
      floorPriceChange: "0.30 USD",
      volume: "10,000 KDA",
      volumePositive: undefined,
      volumeNegative: "-0.56%",
      token1: BlackMEToken,
      token2: Blue,
      token3: undefined,
      tradedOn: undefined,
      confidence: "Low",
    },
    {
      nft: Brawler_Bears,
      name: "Brawler Bears",
      logo: Verified,
      supply: "9780",
      holders: "23,978",
      floorPrice: "0.07 KDA",
      floorPriceChange: "0.30 USD",
      volume: "10,000 KDA",
      volumePositive: "+0.48%",
      volumeNegative: undefined,
      token1: BlackUToken,
      token2: Binance,
      token3: undefined,
      tradedOn: undefined,
      confidence: "Medium",
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
                  tooltipText="Rare digital assets designed by artist(s)."
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Supply"
                  tooltipText="The total number of NFTs in this collection."
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Holders"
                  tooltipText="The number of unique NFT owners in this collection."
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Floor Price (KDA)"
                  tooltipText="The lowest listed price for an NFT in this collection."
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Volume 24H"
                  tooltipText="The total trades for this NFT collection in the given period of time."
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Traded On"
                  tooltipText="The platform where the NFTs are being traded on."
                />
              </TableHead>
              <TableHead className="p-0">
                <Help
                  label="Confidence"
                  tooltipText={
                    <>
                      A NFTs trustworthiness score.
                      <a className="underline pl-1" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.name}>
                  <TableCell className="flex flex-wrap xl:flex-nowrap items-center gap-3 p-4">
                    {item.nft !== undefined && (
                      <Image
                        src={item.nft}
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
                      {item.logo !== undefined && (
                        <Image
                          src={item.logo}
                          alt="Verified"
                          width={20}
                          height={20}
                          className="ml-1"
                        />
                      )}
                    </div>
                  </TableCell>
                  <TableCell label="Supply" className="table-text px-4">
                    {item.supply}
                  </TableCell>
                  <TableCell label="Holders" className="table-text px-4">
                    {item.holders}
                  </TableCell>
                  <TableCell label="Floor Price">
                    <div className="block px-4">
                      <p className="table-text mb-1">
                        {item.floorPrice ? item.floorPrice : null}
                      </p>
                      <p className="sm-muted-table-text">
                        {item.floorPriceChange ? item.floorPriceChange : null}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell label="Volume 24H">
                    <div>
                      <p className="table-text mb-1 px-4">
                        {item.volume ? item.volume : null}
                      </p>
                      <p>
                        {item.volumePositive ? (
                          <p className="text-semantic-g-500 text-xs font-normal leading-3 px-4">
                            {item.volumePositive}
                          </p>
                        ) : (
                          <p className="text-semantic-r-500 text-xs font-normal leading-3 px-4">
                            {item.volumeNegative}
                          </p>
                        )}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell label="Traded On" className="px-4">
                    <div className="flex flex-wrap xl:flex:no-wrap lg:flex-nowrap items-center justify-center xl:justify-start">
                      <div className="xl:flex lg:flex flex-wrap xl:flex-nowrap lg:flex-nowrap">
                        <div className="xl:flex lg:flex flex-wrap xl:flex-nowrap lg:flex-nowrap">
                          {item.token1 !== undefined && (
                            <Image
                              src={item.token1}
                              alt="Orange Token"
                              width={32}
                              height={32}
                            />
                          )}
                          {item.token2 !== undefined && (
                            <Image
                              src={item.token2}
                              alt="Black Token"
                              width={32}
                              height={32}
                            />
                          )}
                        </div>
                        {item.token3 !== undefined && (
                          <Image
                            src={item.token3}
                            alt="Me Token"
                            width={32}
                            height={32}
                          />
                        )}
                      </div>
                      <p className="sm-muted-table-text ml-1 mt-1">
                        {item.tradedOn ? item.tradedOn : null}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell
                    label="Confidence"
                    className={
                      item.confidence === "High"
                        ? "text-semantic-g-500 text-sm font-medium leading-[18px]"
                        : item.confidence === "Low"
                        ? "text-semantic-r-500 text-sm font-medium leading-[18px]"
                        : item.confidence === "Medium"
                        ? "text-semantic-y-700 text-sm font-medium leading-[18px]"
                        : null
                    }
                  >
                    {item.confidence ? item.confidence : null}
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
