import React from "react";

// PLEASE NOTE: THE SHADOW NEEDS TO BE CORRECTED

export default function DashboardCard(props) {
  return (
    <div className="bg-neutral-n-0 rounded-[12px] p-5 drop-shadow-md xl:w-[262px] md:w-[40vw] w-[80.5vw] mr-7 mb-7">
      {props.title ? (
        <h1 className="text-[14px] text-neutral-n-500 leading-[18px] font-500 mb-2">
          {props.title}
        </h1>
      ) : (
        <h1>Category unknown</h1>
      )}
      <div className="flex items-center">
        {props.numbers ? (
          <p className="text-[20px] text-neutral-n-700 leading-[24px] font-bold">
            {props.numbers}
          </p>
        ) : (
          <p>info missing</p>
        )}
        {props.percentage_positive && (
          <p className="text-semantic-g-500 pl-4 text-xl">
            {props.percentage_positive}
          </p>
        )}
        {props.percentage_negative && (
          <p className="text-semantic-r-500 pl-4 text-xl">
            {props.percentage_negative}
          </p>
        )}
      </div>
    </div>
  );
}
