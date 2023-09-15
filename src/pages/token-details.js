import { Navbar } from "@/components/common";
import DetailOverview from "@/components/common/token-detail/token-detail-overview";
import TokenTable from "@/components/common/token-detail/token-table";
import React from "react";

export default function TokenDetails() {
  return (
    <>
      <Navbar />
      <div className="container md:px-12 px-3">
        <h1 className="text-3xl font-bold my-7">Token Details</h1>
        <DetailOverview />
        <TokenTable category1="Transaction" category2="Token Holders" />
      </div>
    </>
  );
}
