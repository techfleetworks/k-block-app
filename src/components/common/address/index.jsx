import React from "react";
import copy from "@/assets/copy.svg";
import Image from "next/image";

const Address = () => {
  return (
    <div className="bg-neutral-n-0 flex-1 p-5 rounded-xl drop-shadow-md">
      <h4>Address      
      </h4>
      <p className="text-xl font-bold ">0x18612b...ebb13</p>
      <Image width={16} height={16} src={copy} alt="copy icon" />
      
    </div>
  );
};

export default Address;
