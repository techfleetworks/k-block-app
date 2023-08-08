import React from "react";
import KDA from "@/assets/kda.svg";
import Image from "next/image";

const CurrentPrice = () => {
  return (
    <div className="bg-neutral-n-0 w-fit p-5 rounded-[8px]">
      <div className="flex">
        {/* The download for KDA logo seems like it was successful, but I do not understand why I am facing technical fallacy. */}
        {/* "alt" = KDA Logo v */}
        <Image width={44} height={44} src={KDA} alt="KDA Logo" />
        <div>
          <div className="flex justify-between w-[19.5vw] items-center">
            <h4 className="text-[14px] leading-5">KDA</h4>
            <p className=" text-[12px] text-neutral-n-500">Past 24 hr</p>
          </div>
          {/* I have chosen to use "B3 Primary" for the font size for the following div box, but I need a confirmation from the design team. */}
          <div className="flex justify-between text-xs leading-[18px] items-center">
            {/* I would like to get a confirmation from the design team if the following price tag is meant to be "B3 Secondary" from Body - style from [Design System for Dev] */}
            <p className="text-[22px]">$1.054</p>
            <div className="flex justify-between rounded-[8px] p-1.5 bg-semantic-g-300 w-[80px] items-center">
              <p className="text-semantic-g-500 text-sm font-semibold">&and;</p>
              <p className="text-semantic-g-500 text-sm">4.29%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-n-100 mt-11 p-5 rounded-[8px]">
        <div>
          <h4 className="text-sm text-neutral-n-500 leading-5">
            Circulating Supply
          </h4>
          <div className="flex text-xl">
            <p className="text-neutral-n-700">230,000,400</p>
            <p className="text-neutral-n-400">(22.3%)</p>
          </div>
        </div>
        <div className="mt-[32px]">
          <h4 className="text-sm text-neutral-n-500 leading-5">Total Supply</h4>
          <p className="text-neutral-n-700 text-xl">1,030,000,500</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPrice;
