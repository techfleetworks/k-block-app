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
import QuestionMark from "@/assets/question-mark.svg";
import Nft from "@/assets/nft.svg";

const NftCollections = () => {
  return (
    // Table Heading and Button
    <div className="bg-neutral-n-0 mx-12 px-5 py-5 border-solid shadow-[4px_4px_10px_0px_var(--neutral-n-300)]rounded-xl">
      <div className="flex justify-between pb-5">
        <h2 className="text-xl font-semibold leading-normal">
          Top NFT Collections
        </h2>
        <a
          className="text-[color:var(--primary-b-500)] border border-[color:var(--primary-b-500)] text-sm font-medium leading-none px-4 py-2 rounded-md border-solid;"
          href="#"
        >
          View NFT dashboard
        </a>
      </div>

      {/* NFT Collections Table - Hardcoded each NFT to match design, but will dynamically fetch when connected with API */}
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-[color:var(--neutral-table-border)]">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-[color:var(--neutral-n-100)] py-3.5">
              <TableHead className="flex items-center gap-2">
                <Image
                  src={QuestionMark}
                  width="1.25rem"
                  height="1.25rem"
                  alt="question mark"
                  TooltipContent="Lorem Ipsum"
                />
                Collections
              </TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Holders</TableHead>
              <TableHead>Floor Price (KDA)</TableHead>
              <TableHead>Volume 24h</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Avg. Prices</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
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
              <TableCell className="flex items-center gap-3">
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
              <TableCell className="flex items-center gap-3">
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
              <TableCell className="flex items-center gap-3">
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
              <TableCell className="flex items-center gap-3">
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
              <TableCell className="flex items-center gap-3">
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
  );
};

export default NftCollections;
