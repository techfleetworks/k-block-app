import React from 'react';

const TotalTransactions = () => {
  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl flex-1">
      <h1 className="text-sm font-medium">Total Transactions</h1>
      <p className="text-xl font-bold">32647070</p>
      <div className="bg-neutral-n-100 mt-11 p-5 rounded-lg">
        <div className="">
          <h4 className="text-sm font-medium text-neutral-n-500">
            Total Assets
          </h4>
          <p className="text-neutral-n-700 text-xl font-semibold">
            230,000,400
          </p>
        </div>
        <div className="mt-8">
          <h4 className="text-sm font-medium text-neutral-n-500">Market Cap</h4>
          <p className="text-neutral-n-700 text-xl font-semibold">
            134,490,464
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalTransactions;
