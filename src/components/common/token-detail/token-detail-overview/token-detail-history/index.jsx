import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import SocialChannels from "../social-channels";

export default function PriceHistory() {
  const canvasEl = useRef(null);

  const colors = {
    blue: {
      default: "rgba(0, 120, 204, 1)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const weight = [
      0.27, 0.24, 0.35, 0.28, 0.5, 0.6, 0.52, 0.6, 0.48, 0.75, 1.0,
    ];

    const labels = ["", "12pm", "", "6pm", "", "12am", "", "6am", "", ""];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "measured in $",
          data: weight,
          fill: false,
          borderColor: colors.blue.default,
          lineTension: 0.2,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  const [activeButton, setActiveButton] = React.useState("24H");
  const activeColor =
    "bg-primary-b-500 border border-neutral-n-250 text-xs text-neutral-n-0 px-2 py-2 rounded-sm";
  const inActiveColor =
    "bg-neutral-n-50 border border-neutral-n-250 text-xs text-n-800 px-2 py-2";

  function toggleActive(id) {
    setActiveButton(id);
  }

  return (
    <div className="block xl:ml-5 xl:mt-0 mt-5 xl:w-[46vw] w-[95vw] -z-50">
      <div className="bg-neutral-n-0 mb-5 rounded-xl grow drop-shadow-md">
        <header className="flex justify-between items-center p-5 mb-5">
          <div>
            <h1 className="text-neutral-n-700 text-sm font-medium">
              Price History
            </h1>
          </div>
          <div>
            <button
              onClick={() => toggleActive("24H")}
              className={activeButton === "24H" ? activeColor : inActiveColor}
            >
              24H
            </button>
            <button
              onClick={() => toggleActive("7D")}
              className={activeButton === "7D" ? activeColor : inActiveColor}
            >
              7D
            </button>
            <button
              onClick={() => toggleActive("14D")}
              className={activeButton === "14D" ? activeColor : inActiveColor}
            >
              14D
            </button>
            <button
              onClick={() => toggleActive("30D")}
              className={activeButton === "30D" ? activeColor : inActiveColor}
            >
              30D
            </button>
          </div>
        </header>
        <div className="px-5 xl:mb-5 pb-5">
          <div className="PriceHistory">
            <canvas ref={canvasEl} height={100} className="overflow-auto" />
          </div>
        </div>
      </div>
      <SocialChannels />
    </div>
  );
}
