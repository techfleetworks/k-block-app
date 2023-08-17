import React from "react";

import PictureCard from "./picture-cards";
import LargeApe from "@/assets/large-apes-123.svg";
import LargeApe2 from "@/assets/large-apes-180.svg";
import LargeKadena from "@/assets/large-kadena-wolfies.svg";
import LargeTokenize from "@/assets/large-tokenize-it.svg";
import LegendKadena from "@/assets/legends-of-kadena.svg";
import Kawaii from "@/assets/kawaii-9803.svg";
import Boxing from "@/assets/boxing.svg";
import OwlGIF from "@/assets/high-owls.gif";
import Verified from "@/assets/verified.svg";

import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons";

export default function Upcoming(props) {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-5 text-xl leading-6 font-semibold">{props.title}</h2>
        <div className="flex">
          <GridIcon width={32} height={32} className="p-1" />
          <ListBulletIcon width={32} height={32} className="p-1" />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap xl:flex-nowrap lg:flex-nowrap">
          <PictureCard
            image={LargeApe}
            alt="Large Apes 123"
            id="Apes #980345678"
            image2={Verified}
          />
          <PictureCard
            image={LargeApe2}
            alt="Large Apes 180"
            id="Apes #180345679"
            image2={Verified}
          />
          <PictureCard
            image={LargeKadena}
            alt="Large Kadena Wolfies"
            id="Kadena Wolfies #9803"
            image2={Verified}
          />
          <PictureCard
            image={LargeTokenize}
            alt="Large Tokenize"
            id="Tokenize IT"
          />
        </div>
        <div className="flex flex-wrap xl:flex-nowrap lg:flex-nowrap">
          <PictureCard
            image={LegendKadena}
            alt="Legend Kadena"
            id="Legends of Kadena #3458"
          />
          <PictureCard
            image={Kawaii}
            alt="Large Kawaii 9803"
            id="Kawaii #9803"
            image2={Verified}
          />
          <PictureCard image={Boxing} alt="Boxing" id="Boxing Badger #98034" />
          <PictureCard
            image={OwlGIF}
            alt="High Owl"
            id="High Owl #123"
            image2={Verified}
          />
        </div>
      </div>
    </>
  );
}
