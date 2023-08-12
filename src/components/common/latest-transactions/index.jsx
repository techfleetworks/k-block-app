import QuestionMark from '@/assets/question-mark.svg';
import TransactionError from '@/assets/transaction-type-error.svg';
import TransactionPending from '@/assets/transaction-type-pending-outgoing.svg';
import TransactionSuccess from '@/assets/transaction-type-success.svg';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import Help from "@/components/common/help";


const LatestTransactions = () => {
  return (
    <div className="bg-neutral-n-0 overflow-auto p-5 rounded-xl">
      <div className="flex flex-wrap justify-between pb-5">
        <h2 className="text-xl font-semibold leading-normal">
          Latest Transactions
        </h2>
        <a
          className="text-primary-b-500 border border-primary-b-500 text-sm font-medium leading-none px-4 py-2 rounded-md border-solid"
          href="#"
        >
          View all transactions
        </a>
      </div>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100">
              <TableHead>
                <Help label="Status" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead className="w-[200px]">
                <Help label="Request Key" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Amount" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Chain" tooltipText="Some tooltip" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="">
              <TableCell>
                <Image
                  src={TransactionPending}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className="w-[200px] inline-block space-y-2">
                <p className="text-primary-b-500 truncate">
                  <a a href="" >
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </a>
                </p>
                <p className="text-neutral-n-500 text-xs ">21 secs ago</p>
              </TableCell>
              <TableCell className="space-y-2"><p>0.07 KDA</p><p className="text-neutral-n-500 text-xs">0.30 USD</p></TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell>
                <Image
                  src={TransactionPending}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className="w-[200px] inline-block space-y-2 ">
              <p className="text-primary-b-500 truncate">
                  <a a href="" >
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </a>
                </p>
                <p className="text-neutral-n-500 text-xs">21 secs ago</p>
              </TableCell>
              <TableCell className="space-y-2"><p>0.07 KDA</p><p className="text-neutral-n-500 text-xs">0.30 USD</p></TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell>
                <Image
                  src={TransactionError}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className="w-[200px] inline-block space-y-2">
              <p className="text-primary-b-500 truncate">
                  <a a href="" >
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </a>
                </p>
                <p className="text-neutral-n-500 text-xs">21 secs ago</p>
              </TableCell>
              <TableCell className="space-y-2"><p>0.07 KDA</p><p className="text-neutral-n-500 text-xs">0.30 USD</p></TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className="w-[200px] inline-block space-y-2">
              <p className="text-primary-b-500 truncate">
                  <a a href="" >
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </a>
                </p>
                <p className="text-neutral-n-500 text-xs">21 secs ago</p>
              </TableCell>
              <TableCell className="space-y-2"><p>0.07 KDA</p><p className="text-neutral-n-500 text-xs">0.30 USD</p></TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className="w-[200px] inline-block space-y-2">
              <p className="text-primary-b-500 truncate">
                  <a a href="" >
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </a>
                </p>
                <p className="text-neutral-n-500 text-xs">21 secs ago</p>
              </TableCell>
              <TableCell className="space-y-2"><p>0.07 KDA</p><p className="text-neutral-n-500 text-xs">0.30 USD</p></TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className="w-[200px] inline-block space-y-2">
              <p className="text-primary-b-500 truncate">
                  <a a href="" >
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </a>
                </p>
                <p className="text-neutral-n-500 text-xs">21 secs ago</p>
              </TableCell>
              <TableCell className="">
                <p>0.07 KDA</p>
              <p className="text-neutral-n-500 text-xs">0.30 USD</p></TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestTransactions;
