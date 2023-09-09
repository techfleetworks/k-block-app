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

import React from "react";
import KDA from "@/assets/kda.svg";
import Image from "next/image";
import { ChevronUpIcon } from "lucide-react";
import QuestionMark from "@/assets/question-mark.svg";
import Link from "next/link";

const CurrentPrice = () => {
  return (
    <div className="bg-neutral-n-0 flex-1 p-5 rounded-xl drop-shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Link href="/token-details">
            <Image width={44} height={44} src={KDA} alt="KDA Logo" />
          </Link>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-sm text-neutral-n-700 font-medium">KDA</h4>
            <p className="text-xl text-primary-b-500 font-bold">
              <Link href="/token-details">$1.054</Link>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-start text-xs items-start">
            <p className=" text-xs font-medium text-neutral-n-500 self-end mb-2">
              Past 24 hr
            </p>
            <div className="flex gap-2 justify-between rounded-lg bg-gradient-to-r from-[#E5FCE8] to-[#E4FAF6] items-center p-1">
              <p className="text-semantic-g-500 text-sm font-semibold">
                <ChevronUpIcon width={24} height={24} />
              </p>
              <p className="text-semantic-g-500 text-sm font-semibold">4.29%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-n-100 mt-11 p-5 rounded-xl">
        <div>
          {/* The below question mark probably needs to be a tooltip text, but I am not sure how to implement className property if tooltip text is applied properly */}
          <div className="flex items-center">
            <InfoItem
              label="Circulating Supply"
              tooltipText="is there any information for this?"
            />
          </div>
          <div className="flex text-xl font-semibold gap-1">
            <p className="text-neutral-n-700 font-semibold">230,000,400</p>
            <p className="text-neutral-n-400 font-[635]">(22.3%)</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <InfoItem
              label="Market Cap"
              tooltipText="is there any information for this?"
            />
          </div>
          <p className="text-neutral-n-700 text-xl font-semibold">
            1,030,000,500
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPrice;
