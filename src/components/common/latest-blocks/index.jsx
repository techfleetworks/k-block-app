import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Help from '@/components/common/help';

import TransactionError from '@/assets/transaction-type-error.svg';
import TransactionPending from '@/assets/transaction-type-pending-outgoing.svg';
import TransactionSuccess from '@/assets/transaction-type-success.svg';

const data = [
  {
    statusIcon: TransactionSuccess,
    height: 394402,
    chain: 12,
    transaction: 7,
    time: '12 sec ago',
  },
  {
    statusIcon: TransactionPending,
    height: 394402,
    chain: 12,
    transaction: 7,
    time: '124 sec ago',
  },
  {
    statusIcon: TransactionError,
    height: 394402,
    chain: 12,
    transaction: 7,
    time: '112 sec ago',
  },
  {
    statusIcon: TransactionSuccess,
    height: 394402,
    chain: 12,
    transaction: 7,
    time: '12 sec ago',
  },
  {
    statusIcon: TransactionPending,
    height: 394402,
    chain: 12,
    transaction: 7,
    time: '124 sec ago',
  },
  {
    statusIcon: TransactionError,
    height: 394402,
    chain: 12,
    transaction: 7,
    time: '112 sec ago',
  },
  // Add more data entries as needed
];

const LatestBlocks = () => {
  return (
    <div className="bg-neutral-n-0 overflow-auto p-5 rounded-xl">
      <div className="flex flex-wrap justify-between pb-5">
        <h2 className="text-xl font-semibold leading-normal">Latest Blocks</h2>
        <a
          className="text-primary-b-500 border border-primary-b-500 text-sm font-medium leading-none px-4 py-2 rounded-md border-solid"
          href="#"
        >
          View all blocks
        </a>
      </div>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100">
              <TableHead>
                <Help label="Status" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Height" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Chain" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Transaction" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Time" tooltipText="Some tooltip" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((block, index) => (
              <TableRow key={index}>
                <TableCell className="p-6">
                  <Image
                    src={block.statusIcon}
                    width={32}
                    height={32}
                    alt="Transaction Type"
                  />
                </TableCell>
                <TableCell className="p-6">
                  <a href="" className="text-primary-b-500 text-sm font-medium">
                    {block.height}
                  </a>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {block.chain}
                  </p>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {block.transaction}
                  </p>
                </TableCell>
                <TableCell className="p-6">
                  <p className="text-sm font-medium text-neutral-n-700">
                    {block.time}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestBlocks;
