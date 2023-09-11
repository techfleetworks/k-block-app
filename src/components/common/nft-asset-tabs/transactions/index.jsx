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
import SurprisedApe from "@/assets/surprised-ape.svg";
import Arkade from "@/assets/arkade.svg";
import Link from "next/link";

export default function Transactions(props) {
  const data = [
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Sale",
      priceTradedOn: "7.2 KDA",
      priceTradedOnUSD: "4.10 USD",
      from: "k:a44d...5afc",
      to: "k:6d87fd...bb89",
      txnHash: "k:0x186...dbb13",
      time: "2 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Transfer",
      assetIDNr: "6",
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: "k:0x186...ebb13",
      to: "k:a44d...5afc",
      txnHash: "k:0x186...ebb13",
      time: "6 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Sale",
      priceTradedOn: "7.2 KDA",
      priceTradedOnUSD: "4.10 USD",
      from: "k:7858...57a0",
      to: "k:0x186...ebb13",
      txnHash: "k:0x186...bbb13",
      time: "6 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Transfer",
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: "radio0...bank",
      to: "k:7858...57a0",
      txnHash: "k:0x186...l2b13",
      time: "8 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Transfer",
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: "k:0x186...ebb13",
      to: "radio0...bank",
      txnHash: "k:0x186...obb13",
      time: "8 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Transfer",
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: "k:6d87f...vbb89",
      to: "k:0x186...ebb13",
      txnHash: "O-qwN_...vW7E",
      time: "12 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Sale",
      priceTradedOn: "7.2 KDA",
      priceTradedOnUSD: "4.10 USD",
      from: "k:97b8e...2db09",
      to: "k:6d87f...vbb89",
      txnHash: "O-qwN_...eqW7E",
      time: "1 day ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Sale",
      priceTradedOn: "7.2 KDA",
      priceTradedOnUSD: "4.10 USD",
      from: "k:71b1g...7b78a",
      to: "k:97b8e...2db09",
      txnHash: "q2L0-B...sMMo",
      time: "2 days ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Transfer",
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: "k:e7f7c...4e9f3",
      to: "k:71b1g...7b78a",
      txnHash: "Sssgx...TtCrk",
      time: "2 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Transfer",
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: "k:09sdx...2e231",
      to: "k:e7f7c...4e9f3",
      txnHash: "R7O3W...h3yhE",
      time: "2 hours ago",
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
            {data.map((item, index) => {
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
        </Table>
      </div>
    </div>
  );
}
