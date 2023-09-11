import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

import Verified from "@/assets/verified.svg";
import AngelApe from "@/assets/angel-ape.svg";
import GodApe from "@/assets/ape3.svg";
import HipApe from "@/assets/ape4.svg";
import BlueHairApe from "@/assets/ape5.svg";

export default function TrendingNFTTable() {
  const data = [
    // Row 1
    {
      nft: AngelApe,
      name: "Variation Apes #1",
      logo: Verified,
    },
    {
      nft: AngelApe,
      name: "Variation Apes #2",
      logo: Verified,
    },
    {
      nft: GodApe,
      name: "Variation Apes #3",
      logo: Verified,
    },
    {
      nft: HipApe,
      name: "Variation Apes #4",
      logo: Verified,
    },
    {
      nft: BlueHairApe,
      name: "Variation Apes #5",
      logo: Verified,
    },
    // Row 2
    {
      nft: AngelApe,
      name: "Variation Apes #1",
      logo: Verified,
    },
    {
      nft: AngelApe,
      name: "Variation Apes #2",
      logo: Verified,
    },
    {
      nft: GodApe,
      name: "Variation Apes #3",
      logo: Verified,
    },
    {
      nft: HipApe,
      name: "Variation Apes #4",
      logo: Verified,
    },
    {
      nft: BlueHairApe,
      name: "Variation Apes #5",
      logo: Verified,
    },
    // Row 3
    {
      nft: AngelApe,
      name: "Variation Apes #1",
      logo: Verified,
    },
    {
      nft: AngelApe,
      name: "Variation Apes #2",
      logo: Verified,
    },
    {
      nft: GodApe,
      name: "Variation Apes #3",
      logo: Verified,
    },
    {
      nft: HipApe,
      name: "Variation Apes #4",
      logo: Verified,
    },
    {
      nft: BlueHairApe,
      name: "Variation Apes #5",
      logo: Verified,
    },
  ];
  return (
    <div>
      <div className="rounded-xl border overflow-hidden mt-6">
        <Table className="border-neutral-table-border">
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
                        alt="Angel Ape"
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
