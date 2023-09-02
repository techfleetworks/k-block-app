import React from "react";
import Image from "next/image";

import Verified from "@/assets/verified.svg";
import AngelApe from "@/assets/angel-ape.svg";
import GodApe from "@/assets/ape3.svg";
import HipApe from "@/assets/ape4.svg";
import BlueHairApe from "@/assets/ape5.svg";

export default function CardBoard() {
  const data = [
    // Row 1
    {
      nft: AngelApe,
      assetID: "Variation Apes #1",
      logo: Verified,
    },
    {
      nft: AngelApe,
      assetID: "Variation Apes #2",
      logo: Verified,
    },
    {
      nft: GodApe,
      assetID: "Variation Apes #3",
      logo: Verified,
    },
    {
      nft: HipApe,
      assetID: "Variation Apes #4",
      logo: Verified,
    },
    {
      nft: BlueHairApe,
      assetID: "Variation Apes #5",
      logo: Verified,
    },
  ];
  return (
    <div>
      {/* Card component has been plugged in 3 times because the rows will not divide if I list down 15 cards */}
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
    </div>
  );
}

const Card = ({ data }) => {
  return (
    // ...so I thought of using grid, but I am not sure why this is not dividing the card display.
    // <ul className="grid grid-col-1 sm:grid-col-2 lg:grid-col-4 xl:grid-col-5">
    <div className="flex">
      {data.map((item, index) => (
        <div key={index} className=" rounded-xl p-5 border bg-white mr-6 mt-6">
          <Image
            src={item.nft}
            width={200}
            height={200}
            alt="Variation Apes"
            className="rounded-md mb-2"
          />

          <div className="flex items-center">
            <p className="text-base text-primary-b-500 font-medium">
              {item.assetID}
            </p>
            <Image
              src={item.logo}
              alt="Verified"
              width={20}
              height={20}
              className="ml-1"
            />
          </div>
        </div>
      ))}
    </div>
    // </ul>
  );
};
