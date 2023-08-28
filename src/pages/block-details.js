<<<<<<< Updated upstream
import { Footer, Navbar } from '@/components/common';
import BlockTabs from '@/components/common/block-tabs';
import React from 'react';

export default function BlockDetails() {
  return (
    <main>
      <h2 className="mt-8 mb-7 px-3 md:px-12 text-[32px] font-semibold">
        Block Details
      </h2>
      <BlockTabs />
      <Footer />
=======
import { Footer, Navbar } from "@/components/common";
import BlockTabs from "@/components/common/block-tabs";
import React from "react";

export default function BlockDetails() {
  return (
    <main className="">
      <Navbar />
      <div className="container">
        <h2 className="mt-8 mb-7 px-3 md:px-12 text-[32px] font-semibold">
          Block Details
        </h2>
        <BlockTabs />
        <Footer />
      </div>
>>>>>>> Stashed changes
    </main>
  );
}
