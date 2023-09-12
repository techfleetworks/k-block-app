import * as React from "react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import QuestionMark from "@/assets/question-mark.svg";
import Link from "next/link";

const InfoItem = ({ label, value, tooltipText }) => (
  <div className="flex flex-wrap justify-between gap-1 px-5 py-3">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-1">
          <Image
            src={QuestionMark}
            width={13}
            height={13}
            alt="question mark"
          />
          <p>{label}:</p>
        </TooltipTrigger>
        <TooltipContent className="rounded border-primary-b-900 shadow-sm">
          <TooltipArrow />
          <p className="text-neutral-n-0">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <span className="font-semibold ml-2">{value}</span>
  </div>
);

export default function InfoDesktop() {
  return (
    <div className="px-3 md:px-12 my-7">
      <div className="flex flex-wrap justify-between bg-neutral-n-0 drop-shadow-[4px_4px_10px_rgba(195, 204, 212, 0.25)] rounded-lg">
        <InfoItem
          label="Average Gas Fee"
          value="$0.0005"
          tooltipText="The cost of making a transaction"
        />
        <InfoItem
          label="Active Miners"
          value="50"
          tooltipText={
            <>
              The total users currently processing and validating transactions
              <Link className="underline pl-1" href="http://example.com/">
                Learn more.
              </Link>
            </>
          }
        />
        <InfoItem
          label="Total Difficulty"
          value="5.6 Eh"
          tooltipText="How hard it is for miners to add new blocks to the chain. Varies based on how many people are mining."
        />
        <InfoItem
          label="Est. Network Hash Rate"
          value="181.2 PH/S"
          tooltipText="The computing power used while mining for this blockchain"
        />
      </div>
    </div>
  );
}
