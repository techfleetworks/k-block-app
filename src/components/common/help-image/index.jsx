import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import Image from "next/image";

const HelpImage = ({  tooltipText, src, alt, width, height }) => (

                           

  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="flex items-center gap-2">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      </TooltipTrigger>
      <TooltipContent className="text-neutral-n-0 px-3 py-2 rounded-md border-primary-b-900 bg-primary-b-900">
        <TooltipArrow />
        <p className="text-neutral-n-0">{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default HelpImage;
