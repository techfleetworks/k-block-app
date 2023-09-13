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



export default function WalletValue() {
 
 
  const volumeData = [
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
      pv: 90000,
    },
  ];

 
  return (
 
 <div className="bg-neutral-n-100  p-5 rounded-md w-fit">
    <h1>Wallet Value</h1>
    <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={600}
              height={300}
              margin={{ top: 20 }}
              data={volumeData}
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
                ticks={[0, 1000, 2000, 3000, 4000, 5000]}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                domain={[0, "dataMax"]}
                className="text-xs text-neutral-n-500"
              />
            </LineChart>
          </ResponsiveContainer>
      </div>
  )
}
