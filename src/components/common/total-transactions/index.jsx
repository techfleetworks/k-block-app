import Image from "next/image";
import React from "react";
import QuestionMark from "@/assets/question-mark.svg";

const TotalTransactions = () => {
  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl flex-1 drop-shadow-md">
      <h1 className="text-sm text-neutral-n-700 font-medium">
        Total Transactions
      </h1>
      <p className="text-xl font-bold text-neutral-n-700">32647070</p>
      <div className="bg-neutral-n-100 mt-12 p-5 rounded-lg">
        <div>
          <div className="flex items-center">
            <Image
              src={QuestionMark}
              width={13}
              height={13}
              alt="question mark"
              className="text-neutral-n-500 mr-1"
            />
            <p className="text-sm font-medium text-neutral-n-500">
              Total Tokens
            </p>
          </div>
          <p className="text-neutral-n-700 text-xl font-semibold">564</p>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <Image
              src={QuestionMark}
              width={13}
              height={13}
              alt="question mark"
              className="text-neutral-n-500 mr-1"
            />
            <p className="text-sm font-medium text-neutral-n-500">Total NFTs</p>
          </div>
          <p className="text-neutral-n-700 text-xl font-semibold">
            134,490,464
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalTransactions;
