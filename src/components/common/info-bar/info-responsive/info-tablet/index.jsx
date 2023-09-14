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
  <div className="flex flex-wrap justify-between gap-1 px-5 py-3 w-full">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-1">
          <Image
            src={QuestionMark}
            width={11}
            height={11}
            alt="question mark"
          />
          <p>{label}:</p>
        </TooltipTrigger>
        <TooltipContent className="rounded border-primary-b-900 shadow-sm">
          <TooltipArrow />
          <p className="text-neutral-n-0 text-xs">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <span className="font-semibold ml-2">{value}</span>
  </div>
);

export default function InfoTablet() {
  return (
    <div className="lg:hidden flex flex-wrap px-3 md:px-12 my-7">
      <div className="flex justify-start gap-8 flex-grow flex-wrap">
        <div className="bg-neutral-n-0 drop-shadow-[4px_4px_10px_rgba(195, 204, 212, 0.25)] rounded-lg mr-3 p-5 flex-grow">
          <InfoItem
            label="Average Gas Fee"
            value="$0.0005"
            tooltipText="The cost of making a transaction"
          />
        </div>
        <div className=" flex-grow bg-neutral-n-0 drop-shadow-[4px_4px_10px_rgba(195, 204, 212, 0.25)] rounded-lg p-5 ">
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
        </div>
        <div className=" flex-grow bg-neutral-n-0 drop-shadow-[4px_4px_10px_rgba(195, 204, 212, 0.25)] rounded-lg mr-3 p-5 ">
          <InfoItem
            label="Total Difficulty"
            value="5.6 Eh"
            tooltipText="How hard it is for miners to add new blocks to the chain. Varies based on how many people are mining."
          />
        </div>
        <div className=" flex-grow bg-neutral-n-0 drop-shadow-[4px_4px_10px_rgba(195, 204, 212, 0.25)] rounded-lg p-5 ">
          <InfoItem
            label="Est. Network Hash Rate"
            value="181.2 PH/S"
            tooltipText="The computing power used while mining for this blockchain"
          />
        </div>
      </div>
    </div>
  );
}
