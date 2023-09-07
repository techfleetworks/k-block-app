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
import Nft from "@/assets/nft.svg";
import Help from "@/components/common/help";
import Link from "next/link";

const NftCollections = () => {
  return (
    // Table Heading and Button
    <div className="px-3 md:px-12">
      <div className="bg-neutral-n-0 text-neutral-n-700 p-5 border-solid drop-shadow-md rounded-xl">
        <div className="flex flex-wrap justify-between pb-5">
          <h2 className="text-xl font-semibold">Top NFT Collections</h2>
          <Link
            className="text-primary-b-500 border border-primary-b-500 text-sm font-medium px-4 py-1 rounded-md border-solid"
            href="/nfts"
          >
            View NFT dashboard
          </Link>
        </div>

        {/* NFT Collections Table - Statically coded each NFT to match design, but will dynamically fetch when connected with API */}
        <div className="rounded-xl border overflow-hidden">
          <Table className="border-neutral-table-border">
            <TableHeader>
              <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
                <TableHead className="pl-5">
                  <Help
                    label="Collections"
                    tooltipText={
                      <>
                        A group of NFTs created under the same smart contract{" "}
                        <a className="underline" href="http://example.com/">
                          (Learn more)
                        </a>
                      </>
                    }
                  />
                </TableHead>
                <TableHead className="pl-0">
                  <Help
                    label="Items"
                    tooltipText="The total number of NFTs in this collection"
                  />
                </TableHead>
                <TableHead className="pl-0">
                  <Help
                    label="Holders"
                    tooltipText="The number of unique NFT owners in this collection"
                  />
                </TableHead>
                <TableHead className="pl-0">
                  <Help
                    label="Floor Price (KDA)"
                    tooltipText="The lowest-listed price for an NFT in this collection"
                  />
                </TableHead>
                <TableHead className="pl-0">
                  <Help
                    label="Volume 24h"
                    tooltipText="The total trades for this NFT collection in the last 24 hours"
                  />
                </TableHead>
                <TableHead className="pl-0">
                  <Help label="Sales" tooltipText="The number of transactions in a collection's history" />
                </TableHead>
                <TableHead className="p-0">
                  <Help label="Avg. Prices" tooltipText="Mean price, in KDA, of an NFT in a collection" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex items-center gap-3 pl-5 pr-0 py-2.5">
                  <Image
                    src={Nft}
                    width={44}
                    height={44}
                    alt="NFT placeholder image"
                  />
                  <Link href="/nft-collections">Kawaii K9</Link>
                </TableCell>
                <TableCell>12000</TableCell>
                <TableCell>129</TableCell>
                <TableCell>12</TableCell>
                <TableCell>12</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3 pl-5 pr-0 py-2.5">
                  <Image
                    src={Nft}
                    width="2.75rem"
                    height="2.75rem"
                    alt="NFT placeholder image"
                  />
                  Kawaii K9
                </TableCell>
                <TableCell>12000</TableCell>
                <TableCell>129</TableCell>
                <TableCell>12</TableCell>
                <TableCell>12</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3  pl-5 pr-0 py-2.5">
                  <Image
                    src={Nft}
                    width="2.75rem"
                    height="2.75rem"
                    alt="NFT placeholder image"
                  />
                  Kawaii K9
                </TableCell>
                <TableCell>12000</TableCell>
                <TableCell>129</TableCell>
                <TableCell>12</TableCell>
                <TableCell>12</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3  pl-5 pr-0 py-2.5">
                  <Image
                    src={Nft}
                    width="2.75rem"
                    height="2.75rem"
                    alt="NFT placeholder image"
                  />
                  Kawaii K9
                </TableCell>
                <TableCell>12000</TableCell>
                <TableCell>129</TableCell>
                <TableCell>12</TableCell>
                <TableCell>12</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3  pl-5 pr-0 py-2.5">
                  <Image
                    src={Nft}
                    width="2.75rem"
                    height="2.75rem"
                    alt="NFT placeholder image"
                  />
                  Kawaii K9
                </TableCell>
                <TableCell>12000</TableCell>
                <TableCell>129</TableCell>
                <TableCell>12</TableCell>
                <TableCell>12</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3  pl-5 pr-0 py-2.5">
                  <Image
                    src={Nft}
                    width="2.75rem"
                    height="2.75rem"
                    alt="NFT placeholder image"
                  />
                  Kawaii K9
                </TableCell>
                <TableCell>12000</TableCell>
                <TableCell>129</TableCell>
                <TableCell>12</TableCell>
                <TableCell>12</TableCell>
                <TableCell>00</TableCell>
                <TableCell>00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default NftCollections;
