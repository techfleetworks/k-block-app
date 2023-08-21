import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Help from "@/components/common/help";
import copy from "@/assets/copy.svg";

const BlockTabs = () => {
  return (
    // Tab Headings
    <div className="px-12 xl:px-0 lg:px-0 md:px-0 mb-7 drop-shadow-none border-none ">
      <Tabs defaultValue="transactions" className="mt-12 px-3 md:px-12 ">
        <TabsList>
          <TabsTrigger value="block-details">Block Details</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent
          className=" leading-normal rounded-tl-none p-0 bg-neutral-n-50 overflow-hidden drop-shadow-none border-none "
          value="block-details"
        >
          <table className="w-full text-left text-sm text-neutral-n-800 font-normal space-y-6 bg-neutral-n-0 p-5 border-separate   rounded-b-xl  drop-shadow-md ">
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
              <td >Mainnet01</td>
            </tr>
          </table>
          <div className="flex mt-6 w-full gap-7 justify-start">
            <div className=" bg-neutral-n-0 p-5  rounded-xl  drop-shadow-md ">
              <h2 className="text-xl font-bold">Block Payload</h2>
              <table className=" mt-5 text-left text-sm text-neutral-n-800 font-normal space-y-6   ">
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Miner"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    <table>
                      <tr><th className="font-normal">Account:</th>
                        <td className="flex"> c50b9acb49ca25f5930....8e6436f39a40ac2dc4f3
                          <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />
                        </td></tr>
                      <tr><th className="font-normal">Public Key:</th>
                        <td className="flex">  [“c50b9acb49ca25f5930....8e6436f39a40ac2dc4f3”]

                          <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />
                        </td></tr>
                    </table>
                  </td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Request Key"
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
                    IllHNjJyc0lPX3FMdn....4UEJPZWxVQVlBVUVxV1Ei
                    <Image width={16} height={16} src={copy} alt="copy icon" className="ml-2" />
                  </td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Reward"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    50 KDA | $100</td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Transactions ID"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    3505831</td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Transactions Hash"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    g5dDASOa4cK0nAVmwkvXg-neTRAKG1hwfwRfbQyqpxU</td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Output Hash"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    DbINEOp-8wY0354u100u3j6s5qswouxBd9H8-T7Bo_4</td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Payload Hash"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    mhy2eQd4U47zI_54bQVydaHnZUAM0CeOFY_kKsxitoY</td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Result"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    Successful</td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Logs"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    SrOBMA0NQJrlQUAyni9rnkUW83-xORzxAbf9nLiQaUQ</td>
                </tr>
                <tr className="flex space-x-20">
                  <th className="font-normal  w-[180px] "> <Help
                    label="Metadata"
                    tooltipText={
                      <>
                        Tooltip text here.{" "}
                        <a className="underline" href="http://example.com/">
                          Learn more.
                        </a>
                      </>
                    }
                  /></th>
                  <td>
                    None</td>
                </tr>

              </table>
            </div>
            <div className=" bg-neutral-n-0 p-5  rounded-xl  drop-shadow-md grow">
              <h2 className="text-xl font-bold">Neighboring chains</h2>
              <p className="md-muted-table-text">Hover to see full hash.</p>
            </div>
          </div>
        </TabsContent>


        <TabsContent
          className=" leading-normal rounded-tl-none p-0 bg-neutral-n-50 overflow-hidden drop-shadow-none border-none "
          value="transactions"
        >
</TabsContent>
      </Tabs>
    </div>
  );
};

export default BlockTabs;
