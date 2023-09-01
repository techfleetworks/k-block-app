import { Navbar } from "@/components/common";
import BlockTabs from "@/components/common/block-tabs";
import React from "react";

export default function BlockDetails() {
  return (
    <main>
      <div className="container md:px-12 px-3">
        <h2 className="my-8 text-[32px] font-bold">Block Details</h2>
        <BlockTabs />
      </div>
    </main>
  );
}
