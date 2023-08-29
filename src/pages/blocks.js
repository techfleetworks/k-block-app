import { Navbar } from '@/components/common';
import BlocksTable from '@/components/common/blocks-table';
import React from 'react';

export default function Blocks() {
  return (
    <div>
      <div className="container">
        <h1 className="my-8 text-[32px] font-bold">Blocks</h1>
        <BlocksTable />
      </div>
    </div>
  );
}
