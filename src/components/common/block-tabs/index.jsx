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

const BlockTabs = () => {
  return (
    // Tab Headings
    <div className="px-12 xl:px-0 lg:px-0 md:px-0 mb-7">
      <Tabs defaultValue="transactions" className="mt-12 px-3 md:px-12 ">
        <TabsList>
          <TabsTrigger value="block-details">Block Details</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent
          className="leading-normal rounded-tl-none"
          value="block-details"
        >
          <table className="text-left text-sm text-neutral-n-800 font-normal">
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] "> <Help
                      label="Block Height"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className="table-link">
                    <a href="#">394400</a></td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Chain"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td>12</td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Gas"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td>0.02 KDA</td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Transactions"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className="table-link">
                    <a href="#">105 Transactions</a></td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Creation Time"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td>2022-11-16 14:11:45.499116 UTC</td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Epoch Start"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td>2022-11-16 14:11:45.499116 UTC</td>
            </tr>
            <tr className="flex space-x-20 flex-row">
              <th className="font-normal w-[180px] "> <Help
                      label="PoW Hash"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className="flex">
                000000000000003a2be6....0399003c770f6e11342
                        <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />

              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Target"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className="flex">0878c357cc62ebce57d....a1223e00000000000000
              <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />

              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Nonce"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className="flex">2e89aac2002360c7
              <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />

              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Block Hash"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className="flex">9764d01eaa603a0f9935....137e7800744493f417a
              <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />

              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Weight"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className="flex">28564739c56418bfa129....0000000000000000000
              <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />

              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal w-[180px] "> <Help
                      label="Flags"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td>0x00000000</td>
            </tr>
            <tr className="flex space-x-20" >
              <th className="font-normal w-[180px] "> <Help
                      label="Chainweb Version"
                      tooltipText={
                        <>
                          Tooltip text here.{" "}
                          <a className="underline" href="http://example.com/">
                            Learn more.
                          </a>
                        </>
                      }
                    /></th>
              <td className=" ">Mainnet01</td>
            </tr>
          </table>
         
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default BlockTabs;
