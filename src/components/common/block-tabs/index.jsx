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
import copy from "@/assets/copy.svg";
import TransactionError from "@/assets/Error.svg";
import TransactionPending from "@/assets/Pending-Outgoing.svg";
import TransactionSuccess from "@/assets/Success.svg";
import CircleBigCheck from "@/assets/circle-big-check.svg";
import Link from "next/link";
import NeighboringChains from "./neighbouring-chains";

const BlockTabs = () => {
  return (
    // Tab Headings
    <div className="mb-7 drop-shadow-none border-none">
      <Tabs defaultValue="block-details">
        <TabsList>
          <TabsTrigger value="block-details">Block Details</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" leading-normal rounded-tl-none p-0 bg-neutral-n-50 overflow-hidden drop-shadow-none border-none"
          value="block-details"
        >
          <table className="w-full text-left text-sm text-neutral-n-800 font-normal  bg-neutral-n-0 p-5 border-separate  rounded-b-xl  drop-shadow-md">
            <tbody className="space-y-6">
              <tr className="flex space-x-20">
                <th className="font-normal  w-[180px] ">
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
                </th>
                <td className="table-link">
                  <a href="#">394400</a>
                </td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Chain"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td>12</td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Gas"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td>0.02 KDA</td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Transactions"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="table-link">
                  <a href="#">105 Transactions</a>
                </td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Creation Time"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td>2022-11-16 14:11:45.499116 UTC</td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Epoch Start"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td>2022-11-16 14:11:45.499116 UTC</td>
              </tr>
              <tr className="flex space-x-20 flex-row">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="PoW Hash"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="flex">
                  000000000000003a2be6....0399003c770f6e11342
                  <Image
                    width={16}
                    height={16}
                    src={copy}
                    alt="copy icon"
                    className="ml-2"
                  />
                </td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Target"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="flex">
                  0878c357cc62ebce57d....a1223e00000000000000
                  <Image
                    width={16}
                    height={16}
                    src={copy}
                    alt="copy icon"
                    className="ml-2"
                  />
                </td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Nonce"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="flex">
                  2e89aac2002360c7
                  <Image
                    width={16}
                    height={16}
                    src={copy}
                    alt="copy icon"
                    className="ml-2"
                  />
                </td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Block Hash"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="flex">
                  9764d01eaa603a0f9935....137e7800744493f417a
                  <Image
                    width={16}
                    height={16}
                    src={copy}
                    alt="copy icon"
                    className="ml-2"
                  />
                </td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Weight"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td className="flex">
                  28564739c56418bfa129....0000000000000000000
                  <Image
                    width={16}
                    height={16}
                    src={copy}
                    alt="copy icon"
                    className="ml-2"
                  />
                </td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Flags"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td>0x00000000</td>
              </tr>
              <tr className="flex space-x-20">
                <th className="font-normal w-[180px] ">
                  <Help
                    label="Chainweb Version"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  />
                </th>
                <td>Mainnet01</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-wrap xl:flex-nowrap mt-6 w-full gap-7 justify-start">
            <div className=" bg-neutral-n-0 p-5  rounded-xl  drop-shadow-md ">
              <h2 className="text-xl font-bold">Block Payload</h2>
              <table className=" mt-5 text-left text-sm text-neutral-n-800 font-normal">
                <tbody className="space-y-6">
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Miner"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th className="md-muted-table-text">Account:</th>
                            <td className="flex">
                              {" "}
                              c50b9acb49ca25f5930....8e6436f39a40ac2dc4f3
                              <Image
                                width={16}
                                height={16}
                                src={copy}
                                alt="copy icon"
                                className="ml-2"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th className="md-muted-table-text">Public Key:</th>
                            <td className="flex">
                              [“c50b9acb49ca25f5930....8e6436f39a40ac2dc4f3”]
                              <Image
                                width={16}
                                height={16}
                                src={copy}
                                alt="copy icon"
                                className="ml-2"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Request Key"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td className="flex">
                      IllHNjJyc0lPX3FMdn....4UEJPZWxVQVlBVUVxV1Ei
                      <Image
                        width={16}
                        height={16}
                        src={copy}
                        alt="copy icon"
                        className="ml-2"
                      />
                    </td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Reward"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>50 KDA | $100</td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Transactions ID"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>3505831</td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Transactions Hash"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>g5dDASOa4cK0nAVmwkvXg-neTRAKG1hwfwRfbQyqpxU</td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Output Hash"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>DbINEOp-8wY0354u100u3j6s5qswouxBd9H8-T7Bo_4</td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Payload Hash"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>mhy2eQd4U47zI_54bQVydaHnZUAM0CeOFY_kKsxitoY</td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Result"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>
                      <span className="text-xs bg-semantic-g-50 font-normal text-semantic-g-500  px-3 py-2 rounded-full flex space-x-1 ">
                        <span>Successful</span>
                        <Image
                          src={CircleBigCheck}
                          width={16}
                          height={16}
                          alt="Green check"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Logs"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>SrOBMA0NQJrlQUAyni9rnkUW83-xORzxAbf9nLiQaUQ</td>
                  </tr>
                  <tr className="flex space-x-20">
                    <th className="font-normal  w-[180px] ">
                      <Help
                        label="Metadata"
                        tooltipText={
                          <>
                            Tooltip text here.{" "}
                            <a className="underline" href="http://example.com/">
                              Learn more.
                            </a>
                          </>
                        }
                      />
                    </th>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <NeighboringChains />
          </div>
        </TabsContent>

        <TabsContent
          className="leading-normal text-neutral-n-700 text-xl font-semibold "
          value="transactions"
        >
          <div className="rounded-xl border overflow-hidden mt-5">
            <Table className="border-neutral-table-border">
              <TableHeader>
                <TableRow className="bg-neutral-n-100 text-neutral-n-800 hover:bg-neutral-n-100 py-3.5">
                  <TableHead className="pl-5">Status</TableHead>
                  <TableHead>
                    <Help
                      label="Request Key"
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
                  <TableHead>
                    <Help
                      label="Time"
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
                  <TableHead className="p-0">
                    <Help label="Txn Fee" tooltipText="Tooltip text here" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="pl-5 py-4">
                    <Image
                      src={TransactionSuccess}
                      width={32}
                      height={32}
                      alt="Transaction type: Success"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <Link href="/transaction-details">kl9OW...72kxw</Link>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Approve
                    </span>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <span className="table-text">
                        <Link href="/wallet-overview">k:0x18...bb13</Link>
                      </span>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <Link href="/wallet-overview" className="table-link">
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
                      src={TransactionError}
                      width={32}
                      height={32}
                      alt="Transaction type: Error"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <a href="#">kl9OW...72kxw</a>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Approve
                    </span>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <span className="table-text">k:0x18...bb13</span>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <a href="#" className="table-link">
                        k:565a...6101
                      </a>
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
                      src={TransactionPending}
                      width={32}
                      height={32}
                      alt="Transaction type: Pending"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <a href="#">FTodZ...w9Glc</a>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Transfer
                    </span>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <a href="#" className="table-link">
                        k:3bb7...6290
                      </a>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <span className="table-text">k:0x18...bb13</span>
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
                      src={TransactionSuccess}
                      width={32}
                      height={32}
                      alt="Transaction type: Success"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <a href="#">FTodZ...w9Glc</a>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Transfer
                    </span>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <a href="#" className="table-link">
                        k:3bb7...6290
                      </a>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <span className="table-text">k:0x18...bb13</span>
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
                      src={TransactionPending}
                      width={32}
                      height={32}
                      alt="Transaction type: Pending"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <a href="#">0xa83...eq725</a>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Bulk Transfer
                    </span>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <span className="table-text">k:0x18...bb13</span>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <a href="#" className="table-link">
                        k:565a...6101
                      </a>
                    </p>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">32.34 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">0.30 USD</span>
                    </p>
                  </TableCell>
                  <TableCell className="table-text">30 minutes ago</TableCell>
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
                      src={TransactionError}
                      width={32}
                      height={32}
                      alt="Transaction type: Error"
                    />
                  </TableCell>
                  <TableCell className="table-link">
                    <a href="#">0xa83...eq725</a>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-normal text-neutral-n-800 border border-solid border-neutral-table-border px-4 py-[0.63rem] rounded-[6.25rem]">
                      Bulk Transfer
                    </span>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="md-muted-table-text">From </span>
                      <span className="table-text">k:0x18...bb13</span>
                    </p>
                    <p>
                      <span className="md-muted-table-text">To </span>
                      <a href="#" className="table-link">
                        k:565a...6101
                      </a>
                    </p>
                  </TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">32.34 KDA</span>
                    </p>
                    <p>
                      <span className="sm-muted-table-text">0.30 USD</span>
                    </p>
                  </TableCell>
                  <TableCell className="table-text">30 minutes ago</TableCell>
                  <TableCell>
                    <p>
                      <span className="table-text">0.02 KDA</span>
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
      </Tabs>
    </div>
  );
};

export default BlockTabs;
