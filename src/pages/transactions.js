import TransactionsTable from '@/components/common/transaction-table';

export default function Transactions() {
  return (
    <div className="container">
      <h1 className="my-8 text-[32px] font-bold">Transactions</h1>
      <TransactionsTable />
    </div>
  );
}
