import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Help from '@/components/common/help';
import Image from 'next/image';
import Link from 'next/link';

export default function BlocksTable() {
  const data = [
    {
      height: '394400',
      chain: '12',
      txns: '2',
      Bhash: 'kl90W...72kxb',
      Phash: 'kl90W...72kxw',
      time: '1 second ago',
    },
    {
      height: '394400',
      chain: '12',
      txns: '2',
      Bhash: 'kl90W...72kxb',
      Phash: 'kl90W...72kxw',
      time: '1 second ago',
    },
  ];
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
              <TableHead className="py-4 pl-14">
                <Help
                  label="Block Height"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Chain"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Txns"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Block Hash"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Parent Hash"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Time"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.name} className="items-center bg-white">
                  <TableCell className="pl-14 py-5">
                    {item.height !== undefined && (
                      <Link
                        href="/block-details"
                        className="text-primary-b-500"
                      >
                        {item.height}
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>
                    {item.chain !== undefined && (
                      <p className="px-4">{item.chain}</p>
                    )}
                  </TableCell>
                  <TableCell>
                    {item.txns !== undefined && (
                      <p className="px-4">{item.txns}</p>
                    )}
                  </TableCell>
                  <TableCell>
                    {item.Bhash !== undefined && (
                      <p className="text-primary-b-500 px-4">{item.Bhash}</p>
                    )}
                  </TableCell>
                  <TableCell>
                    {item.Phash !== undefined && (
                      <p className="text-primary-b-500 px-4">{item.Phash}</p>
                    )}
                  </TableCell>
                  <TableCell>
                    {item.time !== undefined && (
                      <p className="px-4">{item.time}</p>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
