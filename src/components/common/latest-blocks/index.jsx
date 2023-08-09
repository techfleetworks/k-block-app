import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import QuestionMark from '@/assets/question-mark.svg';
import TransactionSuccess from '@/assets/transaction-type-success.svg';
import TransactionPending from '@/assets/transaction-type-pending-outgoing.svg';
import TransactionError from '@/assets/transaction-type-error.svg';
import Image from 'next/image';
import Button from '@/components/common/button'

const Help = ({ label, tooltipText }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="flex items-center gap-2">
        <Image src={QuestionMark} width={13} height={13} alt="question mark" />
        <p>{label}</p>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);


const LatestBlocks = () => {
  return (
    <div className="bg-neutral-n-0 overflow-auto px-5 pb-[21px] rounded-xl	">
      <div className="flex justify-between">
        <h2 className="my-[18px]">Latest Blocks</h2>
        <Button className="mt-[15px] mb-[9px]"
          variant="secondary">View all blocks</Button>
      </div>
      <div className="rounded-xl border-neutral-n-200 border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 border-neutral-n-200 border-b">
              <TableHead>
                <Help
                  label="Status"
                  tooltipText="Some tooltip"
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Height"
                  tooltipText="Some tooltip"
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Chain"
                  tooltipText="Some tooltip"
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Transaction"
                  tooltipText="Some tooltip"
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Time"
                  tooltipText="Some tooltip"
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image src={TransactionSuccess} width={32} height={32} alt="Transaction Type Success" />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image src={TransactionPending} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image src={TransactionError} width={32} height={32} alt="Transaction Type Error" />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
           
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image src={TransactionPending} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image src={TransactionSuccess} width={32} height={32} alt="Transaction Type Success" />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image src={TransactionSuccess} width={32} height={32} alt="Transaction Type Success" />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default LatestBlocks