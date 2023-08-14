import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import Nft from "@/assets/nft.svg";

export default function DashboardTabs() {
  return (
    <div className="px-12 xl:px-0 lg:px-0 md:px-0 mb-7">
      <Tabs defaultValue="transactions" className="mt-12 px-3 md:px-12 ">
        <TabsList>
          <TabsTrigger value="transactions">Trending</TabsTrigger>
          <TabsTrigger value="tokens">Upcoming</TabsTrigger>
          <TabsTrigger value="nfts">Top</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          Trending NFT Collections
          <div className="rounded-xl border overflow-hidden">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">
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
                    <Help label="Volume 24h" tooltipText="Tooltip text here" />
                  </TableHead>
                  <TableHead>
                    <Help label="Sales" tooltipText="Tooltip text here" />
                  </TableHead>
                  <TableHead className="p-0">
                    <Help label="Avg. Prices" tooltipText="Tooltip text here" />
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
        </TabsContent>
        <TabsContent value="tokens">
          Upcoming NFTs
          <div className="rounded-xl border overflow-hidden">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">
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
                    <Help label="Volume 24h" tooltipText="Tooltip text here" />
                  </TableHead>
                  <TableHead>
                    <Help label="Sales" tooltipText="Tooltip text here" />
                  </TableHead>
                  <TableHead className="p-0">
                    <Help label="Avg. Prices" tooltipText="Tooltip text here" />
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
        </TabsContent>
        <TabsContent value="nfts">
          Top NFT Collections
          <div className="rounded-xl border overflow-hidden">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">
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
                    <Help label="Volume 24h" tooltipText="Tooltip text here" />
                  </TableHead>
                  <TableHead>
                    <Help label="Sales" tooltipText="Tooltip text here" />
                  </TableHead>
                  <TableHead className="p-0">
                    <Help label="Avg. Prices" tooltipText="Tooltip text here" />
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
