import React from "react";
import copy from "@/assets/copy.svg";
import qrcode from "@/assets/qrcode.svg";
import Image from "next/image";

const Address = () => {
  return (
    <div className="bg-neutral-n-0 flex-1 p-5 rounded-xl drop-shadow-md">
      <h4>Address      
      </h4>
      <p className="text-xl font-bold py-2 ">0x18612b...ebb13</p>
      <div className="flex">
      <Image width={24} height={24} src={copy} alt="copy icon" className="border neutral-n-300 rounded-md p-1 mr-2"/>
      <Image width={24} height={24} src={qrcode} alt="copy icon" />
      </div>
      <div className="bg-neutral-n-100 mt-5 mb-2 p-2 rounded-md">jkhk
      </div>
      <div className="bg-neutral-n-100 p-2 rounded-md">jkhk
      </div>
    </div>
  );
};

export default Address;
