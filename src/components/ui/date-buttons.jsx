import React, { useState } from "react";

export default function DateButtons() {
  const [activeButton, setActiveButton] = useState("24H");
  const activeColor =
    "bg-primary-b-500 border border-neutral-n-250 text-xs text-neutral-n-0 px-2 py-1";
  const inActiveColor =
    "bg-neutral-n-50 border border-neutral-n-250 text-xs text-n-800 px-2 py-1 cursor-pointer";

  function toggleActive(id) {
    setActiveButton(id);
  }

  return (
    <div className="flex mb-3">
      <button
        onClick={() => toggleActive("24H")}
        className={`${
          activeButton === "24H" ? activeColor : inActiveColor
        } rounded-l-md`}
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
        className={`${
          activeButton === "30D" ? activeColor : inActiveColor
        } rounded-r-md`}
      >
        30D
      </button>
    </div>
  );
}
