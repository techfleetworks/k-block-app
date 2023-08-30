import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import GreyQuestionMark from '@/assets/grey-question-mark.svg';

const Help = ({ label, tooltipText }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="flex items-center gap-2">
        <Image
          src={GreyQuestionMark}
          width={13}
          height={13}
          alt="question mark"
        />
        <p className="text-neutral-n-800">{label}</p>
      </TooltipTrigger>
      <TooltipContent className="text-neutral-n-0 border-0 px-3 py-2 rounded-md">
        <TooltipArrow className="" />
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default Help;
