import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const InfoItem = ({ label, value, tooltipText }) => (
  <div className="flex flex-wrap justify-between gap-1">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-1">
          <Image
            src={QuestionMark}
            width={13}
            height={13}
            alt="question mark"
            className="text-neutral-n-500"
          />
          <p className="text-sm font-medium text-neutral-n-500">{label}</p>
        </TooltipTrigger>
        <TooltipContent className="rounded border-primary-b-900 shadow-sm">
          <TooltipArrow />
          <p className="text-neutral-n-0">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

import Image from "next/image";
import React from "react";
import QuestionMark from "@/assets/question-mark.svg";
import Link from "next/link";

const TotalTransactions = () => {
  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl flex-1 drop-shadow-md">
      <h1 className="text-sm text-neutral-n-700 font-medium">
        <Link href="/txs">Total Transactions</Link>
      </h1>
      <p className="text-xl font-bold text-neutral-n-700">32647070</p>
      <div className="bg-neutral-n-100 mt-12 p-5 rounded-lg">
        <div>
          <div className="flex items-center">
            <InfoItem
              label="Total Tokens"
              tooltipText="is there any information for this?"
            />
          </div>
          <p className="text-neutral-n-700 text-xl font-semibold">564</p>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <InfoItem
              label="Total NFTs"
              tooltipText="is there any information for this?"
            />
          </div>
          <p className="text-neutral-n-700 text-xl font-semibold">
            134,490,464
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalTransactions;
