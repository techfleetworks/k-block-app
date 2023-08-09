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


const LatestTransactions = () => {
  return (
    <div className="bg-neutral-n-0 overflow-auto   px-5 pb-[21px] rounded-xl	">
      <div className="flex justify-between">
        <h2 className="my-[18px]">Latest Transactions</h2>
        <Button className="mt-[15px] mb-[9px]"
          variant="secondary">View all blocks</Button>
      </div>
      <div className="rounded-xl border-neutral-n-200 border  overflow-hidden">
        <Table >
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
                  label="Request Key"
                  tooltipText="Some tooltip"
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Amount"
                  tooltipText="Some tooltip"
                />
              </TableHead>
              <TableHead>
                <Help
                  label="Chain "
                  tooltipText="Some tooltip"
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >

            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image src={TransactionPending} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell className=" inline-block w-[200px]"><span className='truncate block'>0xa83abrdgnnt1234wrggesfgtg1297709eq725</span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image src={TransactionPending} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell className=" inline-block w-[200px]"><span className='truncate block'>0xa83abrdgnnt1234wrggesfgtg1297709eq725</span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image src={TransactionError} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell className=" inline-block w-[200px]"><span className='truncate block'>0xa83abrdgnnt1234wrggesfgtg1297709eq725</span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image src={TransactionSuccess} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell className=" inline-block w-[200px]"><span className='truncate block'>0xa83abrdgnnt1234wrggesfgtg1297709eq725</span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image src={TransactionSuccess} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell className=" inline-block w-[200px]"><span className='truncate block'>0xa83abrdgnnt1234wrggesfgtg1297709eq725</span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image src={TransactionSuccess} width={32} height={32} alt="Transaction Type Pending" />
              </TableCell>
              <TableCell className=" inline-block w-[200px]"><span className='truncate block'>0xa83abrdgnnt1234wrggesfgtg1297709eq725</span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
           
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default LatestTransactions