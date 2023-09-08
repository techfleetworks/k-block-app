import DateButtons from "@/components/ui/date-buttons";
import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TransactionHistory = () => {
  const data = [
    {
      name: "Jan 1",
      Change: 80,
      number: 0,
    },
    {
      Change: 80,
    },
    {
      Change: 90,
    },
    {
      name: "Jan 10",
      Change: 98,
      number: 150,
    },
    {
      Change: 150,
    },
    {
      Change: 190,
    },
    {
      name: "Jan 20",
      Change: 200,
      number: 200,
    },
    {
      Change: 230,
    },
    {
      Change: 180,
    },
    {
      name: "Jan 30",
      Change: 250,
      number: 240,
    },
  ];

  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl grow drop-shadow-md xl:w-40 overflow-x-auto md:overflow-auto">
      <header className="flex justify-between">
        <div>
          <h1 className="text-neutral-n-700 text-sm font-medium">
            Transaction History
          </h1>
          <span className="text-neutral-n-700 text-xs font-base">
            (measured in millions)
          </span>
        </div>
        <DateButtons />
      </header>
      <div className="xl:w-[33vw] overflow-x-auto md:overflow-auto">
        <LineChart
          width={460}
          height={250}
          margin={{ top: 20, left: -20, right: 25 }}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis axisType="string" dataKey="number" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Change" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default TransactionHistory;
