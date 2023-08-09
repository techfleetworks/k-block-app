import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import QuestionMark from '@/assets/question-mark.svg';
import Nft from '@/assets/nft.svg';

const Help = ({ label, tooltipText }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="flex items-center gap-2">
        <Image src={QuestionMark} width={13} height={13} alt="question mark" />
        <p>{label}</p>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const NftCollections = () => {
  return (
    // Table Heading and Button
    <div className="px-3 md:px-12">
      <div className="bg-neutral-n-0 px-5 py-5 border-solid drop-shadow-md rounded-xl">
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

        {/* NFT Collections Table - Statically coded each NFT to match design, but will dynamically fetch when connected with API */}
        <div className="rounded-xl border overflow-hidden">
          <Table className="border-[color:var(--neutral-table-border)]">
            <TableHeader>
              <TableRow className="bg-neutral-n-100 hover:bg-[color:var(--neutral-n-100)] py-3.5">
                <TableHead className="pl-5">
                  <Help label="Collections" tooltipText="Tooltip text here" />
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
