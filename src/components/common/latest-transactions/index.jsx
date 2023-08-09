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
      <div className="rounded-xl border-neutral-n-200 border  overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 border-neutral-n-200 border-b">
              <TableHead>
                <Help label="Status" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Request Key" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Amount" tooltipText="Some tooltip" />
              </TableHead>
              <TableHead>
                <Help label="Chain " tooltipText="Some tooltip" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image
                  src={TransactionPending}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className=" inline-block w-[200px]">
                <span className="truncate block">
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image
                  src={TransactionPending}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className=" inline-block w-[200px]">
                <span className="truncate block">
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image
                  src={TransactionError}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className=" inline-block w-[200px]">
                <span className="truncate block">
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className=" inline-block w-[200px]">
                <span className="truncate block">
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className=" inline-block w-[200px]">
                <span className="truncate block">
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y ">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell className=" inline-block w-[200px]">
                <span className="truncate block">
                  0xa83abrdgnnt1234wrggesfgtg1297709eq725
                </span>
                <span>21 secs ago</span>
              </TableCell>
              <TableCell>0.07 KDA</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestTransactions;
