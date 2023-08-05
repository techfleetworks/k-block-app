import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import QuestionMark from '@/assets/question-mark.svg';

const InfoItem = ({ label, value, tooltipText }) => (
  <div className="flex justify-between gap-1 px-5 py-3">
    <TooltipProvider>
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
        <TooltipContent className="rounded-[4px] shadow-sm">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <span className="font-semibold ml-2">{value}</span>
  </div>
);

const InfoBar = () => {
  return (
    <div className="px-12 my-7">
      <div className="flex justify-between bg-neutral-n-0 drop-shadow-[4px_4px_10px_rgba(195, 204, 212, 0.25)] rounded-[8px]">
        <InfoItem
          label="Total Difficulty"
          value="5.6 Eh"
          tooltipText="Sunny Days Cold Breeze"
        />
        <InfoItem
          label="Est. Network Hash Rate"
          value="181.2 PH/S"
          tooltipText="Another Tooltip Text"
        />
        <InfoItem
          label="Average Gas Fee"
          value="$0.0005"
          tooltipText="Yet Another Tooltip Text"
        />
        <InfoItem
          label="Active Miners"
          value="50"
          tooltipText="One More Tooltip Text"
        />
      </div>
    </div>
  );
};

export default InfoBar;
