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
        <Table className="border-neutral-table-border ">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 border-neutral-n-200 border-b">
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
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Success"
                />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image
                  src={TransactionPending}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image
                  src={TransactionError}
                  width={32}
                  height={32}
                  alt="Transaction Type Error"
                />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>

            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image
                  src={TransactionPending}
                  width={32}
                  height={32}
                  alt="Transaction Type Pending"
                />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Success"
                />
              </TableCell>
              <TableCell>394402</TableCell>
              <TableCell>12</TableCell>
              <TableCell>7</TableCell>
              <TableCell>12 sec ago</TableCell>
            </TableRow>
            <TableRow className="border-neutral-n-200 border-y">
              <TableCell>
                <Image
                  src={TransactionSuccess}
                  width={32}
                  height={32}
                  alt="Transaction Type Success"
                />
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
  );
};

export default LatestBlocks;
