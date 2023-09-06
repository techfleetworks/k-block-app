import { Navbar } from "@/components/common";
import DetailOverview from "@/components/common/token-detail/token-detail-overview";
import TokenTable from "@/components/common/token-detail/token-table";
import React from "react";

export default function TokenDetails() {
  return (
    <>
      <Navbar />
      <div className="container md:px-12 px-3">
        <h1 className="my-8 text-[32px] font-bold">Token Details</h1>
        <DetailOverview />
        <TokenTable />
      </div>
    </>
  );
}
