import { Navbar } from "@/components/common";
import BlocksTable from "@/components/common/blocks-table";
import React from "react";

export default function Blocks() {
  return (
    <div className="container md:px-12 px-3">
      <h1 className="my-8 text-[32px] font-bold">Blocks</h1>
      <BlocksTable />
    </div>
  );
}
