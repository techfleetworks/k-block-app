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
import TransactionPending from "@/assets/transaction-type-pending-outgoing.svg";
import TransactionPendingIncoming from "@/assets/transaction-type-pending-incoming.svg";
import Kadena from "@/assets/kadena.svg";
import Hypercent from "@/assets/hypercent.svg";
import HeartGlassesNft from "@/assets/heartglassesnft.svg";
import KittyWarriorNft from "@/assets/kittywarriornft.svg";

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
        <TabsContent
          className="leading-normal text-neutral-n-700 text-xl font-semibold rounded-tl-none"
          value="transactions"
        >
          Transactions
          <div className="rounded-xl border overflow-hidden mt-5">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 text-neutral-n-800 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">Status</TableHead>
                  <TableHead>
                    <Help
                      label="Txn Hash"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
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
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
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
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                            </Link>                        </>
                      }
                    />
                  </TableHead>
                  <TableHead>
                    <Help
                      label="Addresses"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
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
        <TabsContent
          className="leading-normal text-neutral-n-700 text-xl font-semibold"
          value="tokens"
        >
          Tokens Holdings
          <div className="rounded-xl border overflow-hidden mt-5">
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
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
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
                  <TableCell className="flex items-center gap-3 pl-5 pr-0 py-5 table-link">
                    <Image
                      src={Kadena}
                      width={32}
                      height={32}
                      alt="Kadena Token Logo"
                    />
                    <Link href="#">Kadena</Link>
                  </TableCell>
                  <TableCell className="table-text" s>
                    KDA
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="#">coin</Link>
                  </TableCell>
                  <TableCell className="table-text">10,492</TableCell>
                  <TableCell className="table-text">$0.57</TableCell>
                  <TableCell className="table-text">$5,836.23</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-3 pl-5 pr-0 py-5 table-link">
                    <Image
                      src={Hypercent}
                      width={32}
                      height={32}
                      alt="Hypercent Token Logo"
                    />
                    <Link href="#">Hypercent</Link>
                  </TableCell>
                  <TableCell className="table-text">HYPE</TableCell>
                  <TableCell className="table-link">
                    <Link href="#">hypercent.prod-hype-coin</Link>
                  </TableCell>
                  <TableCell className="table-text">10,492</TableCell>
                  <TableCell className="table-text">$0.04</TableCell>
                  <TableCell className="table-text">$5,836.23</TableCell>
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
                <TableRow className="bg-neutral-n-100 text-neutral-n-800 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">
                    <Help
                      label="Asset ID"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
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
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
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
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
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
                          <Link className="underline" href="http://example.com/">
                            Learn more.
                          </Link>
                        </>
                      }
                    />
                  </TableHead>
                  <TableHead>Acquired Since</TableHead>
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
