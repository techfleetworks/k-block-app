import React from "react";

const TotalTransactions = () => {
  return (
    <div className="bg-neutral-n-0 p-5 rounded-[8px] w-[375px]">
      <h1 className="text-[14px]">Total Transactions</h1>
      <p className="text-[22px]">32647070</p>
      <div className="bg-neutral-n-100 mt-11 p-5 rounded-[8px]">
        <div className="">
          <h4 className="text-sm text-neutral-n-500 leading-5">Total Assets</h4>
          <p className="text-neutral-n-700 text-xl">230,000,400</p>
        </div>
        <div className="mt-[32px]">
          <h4 className="text-sm text-neutral-n-500 leading-5">Market Cap</h4>
          <p className="text-neutral-n-700 text-xl">134,490,464</p>
        </div>
      </div>
    </div>
  );
};

export default TotalTransactions;
