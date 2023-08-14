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
import Nft from "@/assets/nft.svg";
import Help from "@/components/common/help";

const WalletTabs = () => {
  return (
    // Tab Headings
    <div className="px-12 xl:px-0 lg:px-0 md:px-0 mb-7">
      <Tabs defaultValue="transactions" className="mt-12 px-3 md:px-12 ">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
          <TabsTrigger value="nfts">NFTs</TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          Transactions
          <div className="rounded-xl border overflow-hidden">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">Status</TableHead>
                  <TableHead>
                    <Help
                      label="Txn Hash"
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
                    <Help
                      label="Method"
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
                    <Help
                      label="Block Height"
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
                    <Help
                      label="Addresses"
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
                  <TableHead>Value</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="p-0">
                    <Help label="Txn Fee" tooltipText="Tooltip text here" />
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

        {/* Tokens Tab */}
        <TabsContent value="tokens">
          Tokens Holdings
          <div className="rounded-xl border overflow-hidden">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
                  <TableHead>Token Name</TableHead>
                  <TableHead>Symbols</TableHead>
                  <TableHead className="pl-5">
                    <Help
                      label="Contract Address"
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
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Value</TableHead>
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
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* NFTs Tab*/}
        <TabsContent value="nfts">
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
                  <TableHead>
                    <Help
                      label="Collection"
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
                    <Help
                      label="Collection Floor Price"
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
                  <TableHead>Acquired Since</TableHead>
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
