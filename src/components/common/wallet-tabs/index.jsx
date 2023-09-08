import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Help from "@/components/common/help";
import TransactionPending from "@/assets/Pending-Outgoing.svg";
import TransactionPendingIncoming from "@/assets/transaction-type-pending-incoming.svg";
import Kadena from "@/assets/kadena.svg";
import Hypercent from "@/assets/hypercent.svg";
import HeartGlassesNft from "@/assets/heartglassesnft.svg";
import KittyWarriorNft from "@/assets/kittywarriornft.svg";
import Link from "next/link";

import { DataTable } from "@/components/ui/table-container";
import { columns } from "./columns";

const data = [
  {
    token_name: {
      name: "Kadena",
      nft: Kadena,
      alt: "Kadena Token Logo",
    },
    symbol: "KDA",
    contactAddress: "coin",
    quantity: 10492,
    price: 0.57,
    value: 5836.23,
  },
  {
    token_name: {
      name: "Hypercent",
      nft: Hypercent,
      alt: "Hypercent Token Logo",
    },
    symbol: "HYPE",
    contactAddress: "hypercent.prod-hype-coin",
    quantity: 10492,
    price: 0.04,
    value: 5836.23,
  },
  {
    token_name: {
      name: "Flux",
      nft: Kadena,
      alt: "Flux Token Logo",
    },
    symbol: "FLUX",
    contactAddress: "runonflux.flux",
    quantity: 10492,
    price: 0.39,
    value: 5836.23,
  },
  {
    token_name: {
      name: "Kaddex",
      nft: Hypercent,
      alt: "Kaddex Token Logo",
    },
    symbol: "KDX",
    contactAddress: "kaddex.kdx",
    quantity: 10492,
    price: 0.01,
    value: 5836.23,
  },
  {
    token_name: {
      name: "ArKade",
      nft: Kadena,
      alt: "ArKade Token Logo",
    },
    symbol: "ARKD",
    contactAddress: "arkade.token",
    quantity: 10492,
    price: 0.000138,
    value: 5836.23,
  },
  {
    token_name: {
      name: "Timpi",
      nft: Hypercent,
      alt: "Timpi Token Logo",
    },
    symbol: "TMP",
    contactAddress: "free.timpi",
    quantity: 10492,
    price: 0.57,
    value: 5836.23,
  },
  {
    token_name: {
      name: "KDLaunch",
      nft: Kadena,
      alt: "KDLaunch Token Logo",
    },
    symbol: "KDL",
    contactAddress: "kdlaunch.token",
    quantity: 10492,
    price: 0.57,
    value: 5836.23,
  },
  {
    token_name: {
      name: "KDSwap",
      nft: Hypercent,
      alt: "KDSwap Token Logo",
    },
    symbol: "KDS",
    contactAddress: "kdlaunch.kdswap-token",
    quantity: 10492,
    price: 0.005,
    value: 5836.23,
  },
  {
    token_name: {
      name: "Anedak",
      nft: Kadena,
      alt: "Anedak Token Logo",
    },
    symbol: "ADK",
    contactAddress: "free.anedak",
    quantity: 10492,
    price: 0.57,
    value: 5836.23,
  },
  {
    token_name: {
      name: "Babena",
      nft: Hypercent,
      alt: "Babena Token Logo",
    },
    symbol: "BABE",
    contactAddress: "free.babena",
    quantity: 10492,
    price: 0.57,
    value: 5836.23,
  },
];

const WalletTabs = () => {
  return (
    // Tab Headings
    <div className="xl:px-0 lg:px-0 md:px-0 mb-7">
      <Tabs defaultValue="transactions" className="mt-12 px-3 md:px-12 ">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
          <TabsTrigger value="nfts">NFTs</TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent
          className="leading-normal rounded-tl-none"
          value="transactions"
        >
          <h2 className="font-semibold text-xl text-neutral-n-700  ">
            Transactions
          </h2>
          <div className="rounded-xl border overflow-hidden mt-5">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 text-neutral-n-800 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="text-neutral-n-800 pl-5">
                    Status
                  </TableHead>
                  <TableHead className="pl-0">
                    <Help
                      label="Txn Hash"
                      tooltipText="The unique identifier which validates a particular transaction on the blockchain"
                    />
                  </TableHead>
                  <TableHead className="pl-0">
                    <Help
                      label="Method"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <Link
                            className="underline"
                            href="http://example.com/"
                          >
                            Learn more.
                          </Link>
                        </>
                      }
                    />
                  </TableHead>
                  <TableHead className="pl-0">
                    <Help
                      label="Block Height"
                      tooltipText="A specific location in the blockchain, measured by the number of blocks preceding it"
                    />
                  </TableHead>
                  <TableHead className="pl-0">
                    <Help
                      label="Addresses"
                      tooltipText="The users involved in a trade"
                    />
                  </TableHead>
                  <TableHead className="pl-0 text-neutral-n-800">
                    <Help
                      label="Value"
                      tooltipText="The amount of the trade in terms of token and USD"
                    />
                  </TableHead>
                  <TableHead className="pl-0 text-neutral-n-800">
                    Time
                  </TableHead>
                  <TableHead className="p-0">
                    <Help
                      label="Txn Fee"
                      tooltipText="A fee paid to miners for processing a transaction"
                    />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="pl-5 py-4">
                    <Image
                      src={TransactionPending}
                      width={32}
                      height={32}
                      alt="Transaction type: pending outgoing"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="#">kl9OW...72kxw</Link>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Approve
                    </span>
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="#">3206130</Link>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <span className="table-text">k:0x18...bb13</span>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <Link href="#" className="table-link">
                        k:565a...6101
                      </Link>
                    </p>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">0.02 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">0.30 USD</span>
                    </p>
                  </TableCell>
                  <TableCell className="table-text">1 second ago</TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">0.02 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">0.30 USD</span>
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-5 py-4">
                    <Image
                      src={TransactionPendingIncoming}
                      width={32}
                      height={32}
                      alt="Transaction type: pending incoming"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="#">FTodZ...w9Glc</Link>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Transfer
                    </span>
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="#">3206102</Link>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <span className="table-text">k:0x18...bb13</span>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <Link href="#" className="table-link">
                        k:565a...6101
                      </Link>
                    </p>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">200.23 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">0.30 USD</span>
                    </p>
                  </TableCell>
                  <TableCell className="table-text">2 minutes ago</TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">200.23 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">0.30 USD</span>
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Tokens Tab */}
        <TabsContent className="leading-normal " value="tokens">
          <h2 className="font-semibold text-xl text-neutral-n-700  ">
            Tokens Holdings
          </h2>

          <DataTable columns={columns} data={data} />
        </TabsContent>

        {/* NFTs Tab*/}
        <TabsContent value="nfts">
          <h2 className="font-semibold text-xl text-neutral-n-700  ">Assets</h2>
          <div className="rounded-xl border overflow-hidden mt-5">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 text-neutral-n-800 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">
                    <Help
                      label="Asset ID"
                      tooltipText="The unique identifying number for a particular NFT in a user's wallet"
                    />
                  </TableHead>
                  <TableHead className="pl-0">
                    <Help
                      label="Collection"
                      tooltipText="A group of NFTs under the same smart contract"
                    />
                  </TableHead>
                  <TableHead className="pl-0">
                    <Help
                      label="Status"
                      tooltipText="How a particular NFT is being utilized"
                    />
                  </TableHead>
                  <TableHead className="pl-0">
                    <Help
                      label="Collection Floor Price"
                      tooltipText="The listed value of the lowest-cost NFT in a collection"
                    />
                  </TableHead>
                  <TableHead className="pl-0 text-neutral-n-800">
                    Acquired Since
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="flex items-center gap-3 pl-5 pr-0 py-2.5 table-link">
                    <Image
                      src={HeartGlassesNft}
                      width={48}
                      height={48}
                      alt="NFT of a person wearing heart-shaped glasses"
                    />
                    <Link href="#">467</Link>
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="#">Kadena Skellies</Link>
                  </TableCell>
                  <TableCell className="table-text">Holding</TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">7.2 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">4.10 USD</span>
                    </p>
                  </TableCell>
                  <TableCell className="table-text">3 days ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-3 pl-5 pr-0 py-2.5 table-link">
                    <Image
                      src={KittyWarriorNft}
                      width={48}
                      height={48}
                      alt="NFT of a cat dressed up as a warrior"
                    />
                    <Link href="#">51</Link>
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="#">SphynXXX Cats</Link>
                  </TableCell>
                  <TableCell className="table-text">Holding</TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">4 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">2.28 USD</span>
                    </p>
                  </TableCell>
                  <TableCell className="table-text">5 days ago</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WalletTabs;
