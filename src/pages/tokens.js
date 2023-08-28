import { Navbar } from '@/components/common';
import TokensTable from '@/components/common/tokens-table';
import React from 'react';

export default function tokens() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <h1 className="mt-8 mb-7 px-12 text-xl leading-6 font-semibold">
          Tokens
        </h1>
        <TokensTable />
      </div>
    </div>
  );
}
