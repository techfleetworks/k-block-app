import React from "react";
import Image from "next/image";

import Lines from "@/assets/lines.svg";
import Chain from "@/assets/chain.svg";
import { Help } from "../..";

export default function NeighboringChains() {
  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl drop-shadow-md grow">
      <h2 className="text-xl font-bold">Neighboring chains</h2>
      <p className="md-muted-table-text">Hover to see full hash.</p>
      <div className="p-3 mt-2 text-center">
        <p className="text-xs text-neutral-n-500 font-medium leading-5 mb-2">
          Chain 12
        </p>
        <p className="mx-auto px-3 py-2 text-xs font-normal leading-5 text-semantic-b-300 bg-semantic-g-300 w-24 rounded-lg">
          h8t3...0w2g
        </p>
      </div>
      <Image
        src={Lines}
        alt="Line Diagram"
        width={240}
        height={209}
        className="text-neutral-n-400 mx-auto -my-3"
      />
      <Image
        src={Chain}
        alt="Chain"
        width={7.85}
        className="text-neutral-n-400 mx-auto -my-28"
      />
      <div className="flex w-fit mt-52 mx-auto">
        <p className="text-semantic-b-300 text-xs font-normal leading-5 bg-semantic-b-100 px-4 py-1 rounded-lg ml-2 mr-8">
          6mn...4Gx
        </p>
        <p className="text-semantic-b-300 text-xs font-normal leading-5 bg-semantic-b-100 px-4 py-1 rounded-lg mr-8">
          t1ty...8t1t
        </p>
        <p className="text-semantic-b-300 text-xs font-normal leading-5 bg-semantic-b-100 px-4 py-1 rounded-lg">
          d3b3...sm01
        </p>
      </div>
      <div className="flex w-fit mx-auto mt-1">
        <p className="text-neutral-n-500 px-8 py-1">Chain 1</p>
        <p className="text-neutral-n-500 px-8 py-1">Chain 4</p>
        <p className="text-neutral-n-500 px-8 py-1">Chain 11</p>
      </div>
      <div className="mt-9 bg-neutral-n-100 rounded-lg">
        <div className="flex">
          <div className="flex mr-6">
            <p className="bg-semantic-g-300 w-6 h-6 rounded-lg mr-2"></p>
            <div>
              <div className="flex items-center">
                <p className="text-neutral-n-500 text-xs leading-3 font-normal mr-1">
                  Parent Block
                </p>
                <Help width={20} height={20} />
              </div>
              <p className="text-neutral-n-900 text-xs font-medium leading-4">
                320069
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="bg-primary-b-200 w-6 h-6 rounded-lg mr-2"></p>
            <div>
              <div className="flex items-center">
                <p className="text-neutral-n-500 text-xs leading-3 font-normal mr-1">
                  Neighbor Block
                </p>
                <Help width={20} height={20} />
              </div>
              <p className="text-neutral-n-900 text-xs font-medium leading-4">
                320069
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
