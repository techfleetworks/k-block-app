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

export default function NFTCollectionAnalytics(props) {

  // Add dynamic data for each chart in the analytics tab (Volume, Floor Price, and Active Addresses)
  const volumeData = [
    {
      date: "Mar 10",
      pv: 200,
    },
    {
      date: "Apr 10",
      pv: 500,
    },
    {
      date: "May 10",
      pv: 3000,
    },
    {
      date: "Jun 10",
      pv: 600,
    },
    {
      date: "Jul 10",
      pv: 4000,
    },
  ];

  const priceData = [
    {
      date: "Mar 10",
      pv: 30,
    },
    {
      date: "Apr 10",
      pv: 35,
    },
    {
      date: "May 10",
      pv: 37,
    },
    {
      date: "Jun 10",
      pv: 40,
    },
    {
      date: "Jul 10",
      pv: 31,
    },
  ];

  const addressData = [
    {
      date: "Mar 10",
      pv: 40,
    },
    {
      date: "Apr 10",
      pv: 45,
    },
    {
      date: "May 10",
      pv: 52,
    },
    {
      date: "Jun 10",
      pv: 57,
    },
    {
      date: "Jul 10",
      pv: 60,
    },
  ];

  return (
    
    // Double check with UXW about tooltip copy for these charts
    <div>
      <div className="flex flex-wrap justify-between">
        <h2 className="leading-normal text-neutral-n-700 text-xl font-semibold mb-5">
          {props.title}
        </h2>
        <DateButtons />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-neutral-n-100 p-5 border-solid rounded-md">
          <div className="text-sm text-neutral-n-700 mb-1.5 pl-3">
            <Help label="Volume" tooltipText="Tool tip text here" />
          </div>
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
        <div className="bg-neutral-n-100 p-5 border-solid rounded-md">
          <div className="text-sm text-neutral-n-700 mb-1.5 pl-3">
            <Help label="Floor Price" tooltipText="Tool tip text here" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={600}
              height={300}
              margin={{ top: 20 }}
              data={priceData}
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
                ticks={[0, 10, 20, 30, 40]}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                domain={[0, "dataMax"]}
                className="text-xs text-neutral-n-500"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-neutral-n-100 p-5 border-solid rounded-md">
          <div className="text-sm text-neutral-n-700 mb-1.5 pl-3">
            <Help label="Active Addresses" tooltipText="Tool tip text here" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={600}
              height={300}
              margin={{ top: 20 }}
              data={addressData}
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
                ticks={[0, 20, 40, 60, 80]}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                domain={[0, "dataMax"]}
                className="text-xs text-neutral-n-500"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
