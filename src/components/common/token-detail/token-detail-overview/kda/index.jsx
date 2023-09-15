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

import KDA from "@/assets/kda.svg";
import Image from "next/image";
import { ChevronUpIcon } from "lucide-react";
import QuestionMark from "@/assets/question-mark.svg";
import Verified from "@/assets/verified.svg";
import Link from "next/link";

import React from "react";

export default function KDABlock() {
  return (
    <div className="bg-neutral-n-0 flex-1 p-5 rounded-xl drop-shadow-md xl:mr-5 mb-5 sm:justify-between">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href="/token-details">
            <Image width={32} height={32} src={KDA} alt="KDA Logo" />
          </Link>
          <h1 className="flex pl-2 text-xl text-neutral-n-700 leading-6 font-bold items-center">
            <Link href="/token-details">Kadena (KDA)</Link>
          </h1>
          <Image src={Verified} alt="Verified logo" width={20} height={20} />
        </div>
        <div>
          <InfoItem
            label="Contract:"
            tooltipText="The entity which sets the terms of the crypto trade"
            className="text-neutral-n-700 text-sm font-normal leading-5 mb-2"
          />
          <a
            href="#"
            className="text-primary-b-500 text-sm font-medium leading-5"
          >
            kaddex.kdx
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-start">
          <p className="text-neutral-n-700 text-sm leading-5 font-normal pt-5 pb-3">
            Price
          </p>
          <div className="flex items-center">
            <p className="text-neutral-n-700 text-xl leading-5 font-bold pr-2">
              $0,57.89
            </p>
            <div className="flex gap-2 justify-between rounded-lg bg-gradient-to-r from-[#E5FCE8] to-[#E4FAF6] items-center p-1">
              <p className="text-semantic-g-500 text-sm font-semibold">
                <ChevronUpIcon width={24} height={24} />
              </p>
              <p className="text-semantic-g-500 text-sm font-semibold">8.65%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:justify-between">
        <div className="bg-neutral-n-100 mt-7 p-5 rounded-xl mx-auto">
          <div className="flex items-center justify-between">
            <InfoItem
              label="Trading Volume (24H):"
              tooltipText="The value of all crypto trades in the last 24 hours"
              className="text-neutral-n-700 text-xs font-normal leading-5"
            />
            <p className="text-neutral-n-800 text-xs font-medium leading-5">
              $216,029,292
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <InfoItem
                label="Transfer Value (24H):"
                tooltipText="is there any information for this?"
                className="text-neutral-n-700 text-xs font-normal leading-5"
              />
              <p className="text-neutral-n-800 text-xs font-medium leading-5">
                $150,554,123
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <InfoItem
                label="Circulating Supply:"
                tooltipText="This is how much Kadena is available for trading"
                className="text-neutral-n-700 text-xs font-normal leading-5"
              />
              <p className="text-neutral-n-800 text-xs font-medium leading-5">
                $150,554,123
              </p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-n-100 mt-7 md:ml-5 p-5 rounded-xl mx-auto">
          <div>
            <div className="flex items-center justify-between">
              <InfoItem
                label="Trading Volume (24H):"
                tooltipText="The value of all crypto trades in the last 24 hours"
                className="text-neutral-n-700 text-xs font-normal leading-5"
              />
              <p className="text-neutral-n-800 text-xs font-medium leading-5">
                $216,029,292
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <InfoItem
                label="Transfer Value (24H):"
                tooltipText="is there any information for this?"
                className="text-neutral-n-700 text-xs font-normal leading-5"
              />
              <p className="text-neutral-n-800 text-xs font-medium leading-5">
                $150,554,123
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <InfoItem
                label="Circulating Supply:"
                tooltipText="This is how much Kadena is available for trading"
                className="text-neutral-n-700 text-xs font-normal leading-5"
              />
              <p className="text-neutral-n-800 text-xs font-medium leading-5">
                $150,554,123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
