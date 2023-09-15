import React from "react";
import KDABlock from "./kda";
import PriceHistory from "./token-detail-history";

export default function DetailOverview() {
  return (
    <div className="xl:flex flex-wrap xl:flex-nowrap">
      <KDABlock />
      <PriceHistory />
    </div>
  );
}
