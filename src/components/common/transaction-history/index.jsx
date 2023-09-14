import DateButtons from "@/components/ui/date-buttons";
import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const TransactionHistory = () => {
  const data = [
    {
      date: "Jan 1",
      pv: 80,
    },
    {
      pv: 80,
    },
    {
      pv: 90,
    },
    {
      date: "Jan 10",
      pv: 100,
    },
    {
      pv: 95,
    },
    {
      pv: 190,
    },
    {
      pv: 180,
    },
    {
      date: "Jan 20",
      pv: 200,
    },
    {
      pv: 210,
    },
    {
      pv: 240,
    },
    {
      pv: 230,
    },
    {
      date: "Jan 30",
      pv: 250,
    },
  ];

  const formatter = (value) => `$${value.toFixed(2)}M`;

  return (
    <div className="bg-neutral-n-0 p-5 rounded-xl grow drop-shadow-md xl:w-40 overflow-x-auto md:overflow-auto">
      <header className="flex justify-between">
        <div>
          <h1 className="text-neutral-n-700 text-sm font-medium">
            Transaction History
          </h1>
        </div>
        <DateButtons />
      </header>
      <div className="xl:w-[32vw]">
        <ResponsiveContainer width="100%" height={230}>
          <LineChart
            width={500}
            height={230}
            margin={{ top: 10, left: 15 }}
            data={data}
          >
            <CartesianGrid vertical={false} stroke="#EEF4F7" className="z-10" />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#0078CC"
              strokeWidth={3}
              dot={false}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              padding={{ left: 20, right: 20 }}
              className="text-xs text-neutral-n-800"
            />
            <YAxis
              type="number"
              tickFormatter={formatter}
              ticks={[0, 100, 150, 200, 250]}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              domain={[0, "dataMax"]}
              className="text-xs text-neutral-n-800"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionHistory;
