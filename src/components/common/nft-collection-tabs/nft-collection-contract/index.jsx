import React from "react";
import Metadata from "./metadata";

export default function NFTCollectionContract(props) {
  return (
    <div>
      <h2 className="leading-normal text-neutral-n-700 text-xl font-semibold mb-5">
        {props.title}
      </h2>
      <div>
        <Metadata
          subtitle="Retrieved from token’s URI:"
          subtitleLink="https://variationapes.com/collection/6.json"
        />
      </div>
    </div>
  );
}
