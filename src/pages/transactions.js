import TransactionsTable from '@/components/common/transaction-table';

export default function Transactions() {
  return (
      <div className="container">
        <h1 className="mt-8 mb-7 px-12 text-xl leading-6 font-semibold">
          Transactions
        </h1>
        <TransactionsTable />
      </div>
  );
}
