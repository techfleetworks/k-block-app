import SocialChannels from "../social-channels";
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

export default function PriceHistory() {
  const data = [
    {
      pv: 0.27,
    },
    {
      date: "12pm",
      pv: 0.24,
    },
    {
      pv: 0.27,
    },
    {
      date: "6pm",
      pv: 0.26,
    },
    {
      pv: 0.5,
    },
    {
      pv: 0.55,
    },
    {
      date: "12am",
      pv: 0.62,
    },
    {
      pv: 0.53,
    },
    {
      pv: 0.51,
    },
    {
      date: "6am",
      pv: 0.6,
    },
  ];

  const formatter = (value) => `$${value.toFixed(2)}`;

  return (
    <div className="-z-50 flex-1 rounded-xl drop-shadow-md xl:w-[50vw]">
      <div className="bg-neutral-n-0 mb-5 rounded-xl grow drop-shadow-md">
        <header className="flex justify-between items-center p-5 mb-5">
          <div>
            <h1 className="text-neutral-n-700 text-sm font-medium">
              Price History
            </h1>
          </div>
          <DateButtons />
        </header>
        <div className="px-5 xl:mb-5 pb-5">
          <div className="overflow-x-auto md:overflow-auto">
            <ResponsiveContainer width="100%" height={155}>
              <LineChart
                width={500}
                height={155}
                margin={{ top: 5, left: 15 }}
                data={data}
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
                  className="text-xs text-neutral-n-800"
                />
                <YAxis
                  type="number"
                  tickFormatter={formatter}
                  ticks={[0, 0.25, 0.5, 0.75, 1.0]}
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
      </div>
      <SocialChannels />
    </div>
  );
}
