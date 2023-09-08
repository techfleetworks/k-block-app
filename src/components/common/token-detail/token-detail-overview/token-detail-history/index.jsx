import DateButtons from "@/components/ui/date-buttons";
import SocialChannels from "../social-channels";
import React, { useEffect, useRef } from "react";

// import Chart from "chart.js/auto";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PriceHistory() {
  // const canvasEl = useRef(null);
  // const colors = {
  //   blue: {
  //     default: "rgba(0, 120, 204, 1)",
  //   },
  // };

  // useEffect(() => {
  //   const ctx = canvasEl.current.getContext("2d");

  //   const weight = [
  //     0.27, 0.24, 0.35, 0.28, 0.5, 0.6, 0.52, 0.6, 0.48, 0.75, 1.0,
  //   ];

  //   const labels = ["", "12pm", "", "6pm", "", "12am", "", "6am", "", ""];
  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "measured in $",
  //         data: weight,
  //         fill: false,
  //         borderColor: colors.blue.default,
  //         lineTension: 0.2,
  //       },
  //     ],
  //   };
  //   const config = {
  //     type: "line",
  //     data: data,
  //   };
  //   const myLineChart = new Chart(ctx, config);

  //   return function cleanup() {
  //     myLineChart.destroy();
  //   };
  // });

  const data = [
    {
      number: 0,
      Change: 0.27,
    },
    {
      name: "12pm",
      Change: 0.24,
      number: 0.25,
    },
    {
      Change: 0.35,
    },
    {
      name: "6pm",
      Change: 0.28,
    },
    {
      Change: 0.5,
    },
    {
      name: "12am",
      Change: 0.6,
    },
    {
      Change: 0.52,
    },
    {
      name: "6am",
      Change: 0.6,
    },
    {
      number: 1,
      Change: 0.48,
    },
  ];

  return (
    <div className="block xl:ml-5 xl:mt-0 mt-5 xl:w-[46vw] w-[95vw] -z-50">
      <div className="bg-neutral-n-0 mb-5 rounded-xl grow drop-shadow-md">
        <header className="flex justify-between items-center p-5 mb-5">
          <div>
            <h1 className="text-neutral-n-700 text-sm font-medium">
              Price History
            </h1>
            <span className="text-neutral-n-700 text-xs font-base">
              (measured in $)
            </span>
          </div>
          <DateButtons />
        </header>
        <div className="px-5 xl:mb-5 pb-5">
          <div className="xl:w-[43vw] overflow-x-auto md:overflow-auto">
            <LineChart
              width={620}
              height={250}
              margin={{ top: 20, left: -20 }}
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="number" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Change" stroke="#8884d8" />
            </LineChart>
          </div>
          {/* <div className="PriceHistory">
            <canvas
              ref={canvasEl}
              height={100}
              className="overflow-auto w-full"
            />
          </div> */}
        </div>
      </div>
      <SocialChannels />
    </div>
  );
}
