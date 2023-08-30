import React, { useState } from "react";

import PictureCard from "./picture-cards";
import LargeApe from "@/assets/large-apes-123.svg";
import LargeKadena from "@/assets/large-kadena-wolfies.svg";
import LegendKadena from "@/assets/legends-of-kadena.svg";
import Kawaii from "@/assets/kawaii-9803.svg";
import Boxing from "@/assets/boxing.svg";
import OwlGIF from "@/assets/high-owls.gif";
import Verified from "@/assets/verified.svg";
import BrawlerGIF from "@/assets/brawler.gif";
import Fox from "@/assets/sphyn.svg";

import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons";
// import { DataTablePagination } from "@/components/ui/table-pagination";

export default function Upcoming(props) {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-5 text-xl leading-6 font-semibold">{props.title}</h2>
        <div className="flex">
          <GridIcon
            width={32}
            height={32}
            className="p-1 cursor-pointer"
            onClick={() => setIsGrid(true)}
          />
          <ListBulletIcon
            width={32}
            height={32}
            className="p-1 cursor-pointer"
            onClick={() => setIsGrid(false)}
          />
        </div>
      </div>
      {isGrid ? (
        <div>
          <div className="flex flex-wrap xl:flex-nowrap lg:flex-nowrap px-9 md:px-0">
            <PictureCard
              image={LargeApe}
              alt="Variation Apes"
              image2={Verified}
              id="Variation Apes"
              supply_number="19"
            />
            <PictureCard
              image={BrawlerGIF}
              alt="Brawler Bear Weapons - currently DNE"
              image2={Verified}
              id="Brawler Bear Weapons"
              supply_number="10"
            />
            <PictureCard
              image={LargeKadena}
              alt="Large Kadena Wolfies"
              image2={Verified}
              id="Kadena Wolfies"
              supply_number="1002"
            />
            <PictureCard
              image={Fox}
              alt="SphynXXX Cats"
              id="SphynXXX Cats"
              supply_number="1670"
            />
          </div>
          <div className="flex flex-wrap xl:flex-nowrap lg:flex-nowrap px-9 md:px-0">
            <PictureCard
              image={LegendKadena}
              alt="Legend Kadena"
              id="Legends of Kadena"
              supply_number="105"
            />
            <PictureCard
              image={Kawaii}
              alt="Large Kawaii 9803"
              image2={Verified}
              id="Kawaii K-9s"
              supply_number="69"
            />
            <PictureCard
              image={Boxing}
              alt="Boxing"
              id="Boxing Badger"
              supply_number="10,890"
            />
            <PictureCard
              image={OwlGIF}
              alt="High Owl"
              image2={Verified}
              id="High Owl"
              supply_number="510"
            />
          </div>
        </div>
      ) : (
        <UpcomingTable />
      )}
      {/* <DataTablePagination /> */}
    </>
  );
}

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
import Link from "next/link";

import Duck from "@/assets/dazed-duck.svg";

import Globe from "@/assets/globe.svg";
import Discord from "@/assets/discord-logo.svg";
import Twitter from "@/assets/twitter-logo.svg";
import Instagram from "@/assets/instagram-logo.svg";

const UpcomingTable = (props) => {
  const data = [
    {
      nft: LargeApe,
      name: "Variation Apes",
      logo: Verified,
      supply: "1200",
      created_by: "Djikstra",
      socials_icon1: Globe,
      socials_icon2: Discord,
      socials_icon3: Twitter,
      socials_icon4: Instagram,
      starts_on: "21/10/2023",
      confidence: "High",
    },
    {
      nft: Duck,
      name: "Dazed Ducks",
      logo: undefined,
      supply: "250",
      created_by: "Ari Gato",
      socials_icon1: undefined,
      socials_icon2: Discord,
      socials_icon3: Twitter,
      socials_icon4: undefined,
      starts_on: "12/10/2023",
      confidence: "Low",
    },
    {
      nft: LargeKadena,
      name: "Kadena Wolfies",
      logo: Verified,
      supply: "320",
      created_by: "KD GHA",
      socials_icon1: Globe,
      socials_icon2: undefined,
      socials_icon3: Twitter,
      socials_icon4: undefined,
      starts_on: "21/10/2023",
      confidence: "Medium",
    },
  ];
  return (
    <div>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
              <TableHead className="py-4 h-[44px]">
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
                <Help label="Supply" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Created By" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <p>Socials</p>
              </TableHead>
              <TableHead>
                <Help label="Starts On" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Confidence" tooltipText="Tooltip text here" />
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
                  <TableCell className="table-text px-4">
                    {item.supply}
                  </TableCell>
                  <TableCell>
                    <Link href="/">
                      <p className="table-text px-4 table-link">
                        {item.created_by}
                      </p>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap xl:flex-nowrap ml-2 justify-center xl:justify-normal lg:justify-normal items-center">
                      {item.socials_icon1 !== undefined && (
                        <Image
                          src={item.socials_icon1}
                          alt="Verified"
                          width={32}
                          height={32}
                        />
                      )}
                      {item.socials_icon2 !== undefined && (
                        <Image
                          src={item.socials_icon2}
                          alt="Verified"
                          width={32}
                          height={32}
                          className="ml-2"
                        />
                      )}
                      {item.socials_icon3 !== undefined && (
                        <Image
                          src={item.socials_icon3}
                          alt="Verified"
                          width={32}
                          height={32}
                          className="ml-2"
                        />
                      )}
                      {item.socials_icon4 !== undefined && (
                        <Image
                          src={item.socials_icon4}
                          alt="Verified"
                          width={32}
                          height={32}
                          className="ml-2"
                        />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="ml-3">
                      {item.starts_on ? item.starts_on : null}
                    </p>
                  </TableCell>
                  <TableCell
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
                    <p className="ml-3">
                      {item.confidence ? item.confidence : null}
                    </p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
