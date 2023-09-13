// "use client";

import React, { useState, useCallback } from 'react'
import { Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts';
import dynamic from 'next/dynamic'

const PieChart = dynamic(() => (
  import("recharts").then(recharts => recharts.PieChart)
), { ssr: false });



const data = [
  { name: 'KDA', quantity: 28, price: 100000, kda: 10000 },
  { name: 'HYPE', quantity: 24, price: 60102, kda: 2000 },
  { name: 'HYPE', quantity: 18, price: 40000.89, kda: 100500 },
  { name: 'FLUX', quantity: 12, price: 1234.23, kda: 10000 },
  { name: 'HYPE', quantity: 11, price: 3219.33, kda: 10000 },
  { name: 'Others', quantity: 7, price: 173, kda: 10000 }
];


function formatNum(val) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(val);
}


function formatUSD(val) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(val);
}


const allprice = data.reduce((acc, val) => acc + val.quantity, 0)
const data1 = data.map((item) => ({ ...item, percent: formatNum(100 * item.quantity / allprice) }))

const COLORS = ['#007DB2', '#0078CC', '#9AECA4', '#C5E7F6', '#0E4C66', '#616E73'];



export default function PortfolioBreakdown() {
  const [activeIndex, setActiveIndex] = useState(null);
  const onMouseOver = useCallback((data, index) => {
    setActiveIndex(index);
  }, []);
  const onMouseLeave = useCallback((data, index) => {
    setActiveIndex(null);
  }, []);

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <div className="justify-center">
        <div className="my-4 px-2">
          <div className='grid  grid-cols-2	gap-x-10	text-xs'>
            {data1.map((legend, index) => {
              return (index <= data1.length &&
                <div className="" key={`item-${index}`}>
                  <div className="inline-block rounded-full h-3 w-3 items-center justify-center mr-2"
                    style={{ backgroundColor: COLORS[index] }} />
                  <div className="inline-block">{legend.percent}% {legend.name}</div>
                </div>)
            })}
          </div>
        </div>
      </div>
    );
  }


  const renderActiveShape = props => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      payload,
      fill,
    } = props;
    return (
      <>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        {/* <Sector
    cx={cx}
    cy={cy}
    startAngle={startAngle}
    endAngle={endAngle}
    innerRadius={outerRadius + 6}
    outerRadius={outerRadius + 10}
    fill={fill}
  /> */}
        <text
          x="50%"
          y="35%"
          dy={16}
           >
          <tspan  textAnchor="middle" x="50%" dy="-10"  fontSize="14" fill="##15151D"
> {formatUSD(payload.price)}</tspan>
          <tspan textAnchor="middle" x="50%" dy="20" fontSize="12" fill="#616E73"> {formatNum(payload.kda)} KDA</tspan>
        </text>
      </>
    )
  };


  return (
    <div className="bg-neutral-n-100  p-5 rounded-md ">
      <h1 className='leading-normal text-neutral-n-700 text-sm font-medium'>Portfolio Breakdown</h1>
      {/* <div className='mt-4'> */}
      <PieChart width={250} height={310} className='mt-7'>
        <Legend content={renderLegend} />
        <Pie
          activeIndex={activeIndex}
          data={data1}
          dataKey="quantity"
          nameKey="name"
          // cx="50%"
          cy="45%"
          innerRadius={55}
          outerRadius={90}
          legendType="circle"
          paddingAngle={1.5}
          stroke="none"
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          activeShape={renderActiveShape}
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      {/* </div> */}
    </div>
  )
}
