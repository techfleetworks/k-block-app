import React from "react";
import Help from "@/components/common/help";
import DateButtons from "@/components/ui/date-buttons";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


function formatUSD(val) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  }).format(val);
}

export default function WalletValue() {


  const valueData = [
    {
      date: "Dec 20",
      pv: 200,
    },
    {
      date: "Jan 1",
      pv: 10000,
    },
    {
      date: "Jan 10",
      pv: 70000,
    },
    {
      date: "Jan 20",
      pv: 80000,
    },
    {
      date: "Jan 30",
      pv: 100000,
    },
  ];

  const formatter = (value) => formatUSD(value);

  return (

    <div className="bg-neutral-n-100  p-5 rounded-md">
      <div className="flex flex-wrap justify-between">
        <h2 className="leading-normal text-neutral-n-700 text-sm font-medium mb-2">
          Wallet Value
        </h2>
        <DateButtons />
      </div>
      {/* <ResponsiveContainer > */}
      <LineChart
        width={600}
        height={300}
        // margin={{ top: 20 }}
        data={valueData}
      >
        <CartesianGrid
          vertical={false}
          stroke="#EEF4F7"
          className="z-10"
        />
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
          padding={{ left: 50, right: 30 }}
          className="text-xs text-neutral-n-500"
        />
        <YAxis
          type="number"
          // ticks={[0, 20000, 40000, 60000, 80000, 100000]}
          tick={{ fontSize: '12px' }}
          tickCount={6}
          tickFormatter={formatter}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          domain={[0, dataMax => Math.ceil(Number(dataMax) / 10000) * 10000]}
          // unit='  MW'
          className="text-xs text-neutral-n-500"
          width={65}
        />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  )
}
