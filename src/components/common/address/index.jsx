import React from "react";
import copy from "@/assets/copy.svg";
import qrcode from "@/assets/QR.svg";
import Image from "next/image";

const Address = () => {
  return (
    <div className="bg-neutral-n-0 flex-1 p-5 rounded-xl drop-shadow-md">
      <h2 className="leading-normal text-neutral-n-700 text-sm font-medium">Address
      </h2>
      <p className="text-xl font-bold py-2">0x18612b...ebb13</p>
      <div className="flex">
        <Image width={24} height={24} src={copy} alt="copy icon" className=" mr-2" />
        <Image width={24} height={24} src={qrcode} alt="QR code icon" />
      </div>
      <div className="bg-neutral-n-100 mt-5 mb-2 py-2 px-4 rounded-md space-y-2">
        <div className="flex justify-between">
          <p className="text-neutral-n-500 text-xs font-normal py-[10px]">Total Assets</p>
          <div className="text-right self-center ">
            <p className="text-neutral-n-800 text-xs font-medium">12,000 KDA</p>
            <p className="text-neutral-n-500 text-xs font-normal">300.00 USD</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-n-500 text-xs font-normal py-[10px]">Token Assets (10)</p>
          <div className="text-right self-center">
            <p className="text-neutral-n-800 text-xs font-medium">8,000 KDA</p>
            <p className="text-neutral-n-500 text-xs font-normal">200.00 USD</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-n-500 text-xs font-normal py-[10px]">NFT Assets (12)</p>
          <div className="text-right self-center">
            <p className="text-neutral-n-800 text-xs font-medium">4,000 KDA</p>
            <p className="text-neutral-n-500 text-xs font-normal">100.00 USD</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-n-100 py-2 px-4 rounded-md space-y-2">
        <div className="flex justify-between">
          <p className="text-neutral-n-500 text-xs font-normal py-[10px]">Total Received</p>
          <div className="text-right self-center">
            <p className="text-neutral-n-800 text-xs font-medium">8,000 KDA</p>
            <p className="text-neutral-n-500 text-xs font-normal">200.00 USD</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-n-500 text-xs font-normal py-[10px]">Total Sent</p>
          <div className="text-right self-center">
            <p className="text-neutral-n-800 text-xs font-medium">4,000 KDA</p>
            <p className="text-neutral-n-500 text-xs font-normal">100.00 USD</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-n-500 text-xs font-normal py-[10px]">Volume Traded</p>
          <div className="text-right self-center">
            <p className="text-neutral-n-800 text-xs font-medium">4,000 KDA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
