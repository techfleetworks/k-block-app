import { ChevronDownIcon } from "lucide-react";
import { ChevronUpIcon } from "lucide-react";
import React from "react";

// PLEASE NOTE: THE SHADOW NEEDS TO BE CORRECTED

export default function DashboardCard(props) {
  return (
    <div className="bg-neutral-n-0 rounded-xl p-5 drop-shadow-md xl:w-[262px] md:w-[40vw] w-[80.5vw] mr-7 mb-7">
      {props.title ? (
        <h1 className="text-sm text-neutral-n-500  font-medium mb-2">
          {props.title}
        </h1>
      ) : (
        <h1>Category unknown</h1>
      )}
      <div className="flex items-center justify-between">
        {props.numbers ? (
          <p className="text-xl text-neutral-n-700  font-bold">
            {props.numbers}
          </p>
        ) : (
          <p>info missing</p>
        )}
        <div>
          {props.percentage_positive ? (
            <div className="flex items-center bg-semantic-g-50 rounded-md px-1 py-2">
              {props.up ? props.up : null}
              {props.percentage_positive && (
                <p className="text-semantic-g-500 pl-4 text-xs">
                  {props.percentage_positive}
                </p>
              )}
            </div>
          ) : (
            <div className="flex items-center bg-semantic-r-50 rounded-md px-1 py-2">
              {props.down ? props.down : null}
              {props.percentage_negative && (
                <p className="text-semantic-r-500 pl-4 text-xs">
                  {props.percentage_negative}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
