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
      pv: 50,
    },
    {
      name: "Jan 10",
      pv: 100,
    },
    {
      name: "Jan 20",
      pv: 200,
    },
    {
      name: "Jan 30",
      pv: 250,
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const bgColor = isActive
    ? "bg-primary-b-500 border border-neutral-n-250 text-xs text-neutral-n-0 px-2 rounded-sm"
    : "bg-neutral-n-50 border border-neutral-n-250 text-xs text-n-800 px-2";

  const [isNotActive, setIsNotActive] = useState(false);
  const dateColor = isNotActive
    ? "bg-neutral-n-50 border border-neutral-n-250 text-xs text-n-800 px-2"
    : "bg-primary-b-500 border border-neutral-n-250 text-xs text-neutral-n-0 px-2";

  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl grow drop-shadow-md overflow-x-auto md:overflow-auto">
      <header className="flex justify-between">
        <div>
          <h1 className="text-neutral-n-700 text-sm font-medium">
            Transaction History
          </h1>
          <span className="text-neutral-n-700 text-xs font-base">
            (measured in millions)
          </span>
        </div>
        <div className="flex -ml-48">
          <button
            onClick={() => setIsNotActive(true)}
            className={`${dateColor}`}
          >
            24H
          </button>
          <button onClick={() => setIsActive(true)} className={`${bgColor}`}>
            7D
          </button>
          <button onClick={() => setIsActive(true)} className={`${bgColor}`}>
            14D
          </button>
          <button onClick={() => setIsActive(true)} className={`${bgColor}`}>
            30D
          </button>
        </div>
      </header>
      <div className="w-36 -ml-6">
        <LineChart width={500} height={250} margin={{ top: 20 }} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain="0, 250" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default TransactionHistory;
