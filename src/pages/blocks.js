import { Navbar } from '@/components/common';
import BlocksTable from '@/components/common/blocks-table';
import React from 'react';

export default function Blocks() {
  return (
    <div>
      <h1 className="mt-8 mb-7 px-12 text-xl leading-6 font-semibold">
        Blocks
      </h1>
      <BlocksTable />
    </div>
  );
}
