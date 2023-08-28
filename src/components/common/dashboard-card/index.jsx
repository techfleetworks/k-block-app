import React from 'react';

// PLEASE NOTE: THE SHADOW NEEDS TO BE CORRECTED

export default function DashboardCard(props) {
  return (
    <div className="bg-neutral-n-0 rounded-xl p-5 drop-shadow-md xl:w-[262px] md:w-[40vw] w-[80.5vw]">
      {props.title ? (
        <h1 className="text-sm text-neutral-n-500  font-medium mb-2">
          {props.title}
        </h1>
      ) : (
        <h1>Category unknown</h1>
      )}
      <div className="flex items-center">
        {props.numbers ? (
          <p className="text-xl text-neutral-n-700  font-bold">
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
