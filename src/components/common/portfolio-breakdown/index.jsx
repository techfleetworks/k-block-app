// "use client";

import React, { useState, useCallback } from 'react'
import { Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts';
import dynamic from 'next/dynamic'

const PieChart = dynamic(() => (
  import("recharts").then(recharts => recharts.PieChart)
), { ssr: false });



const data = [
  { name: 'KDA', quantity: 28, price: 100000 },
  { name: 'HYPE', quantity: 24, price: 60102 },
  { name: 'HYPE', quantity: 18, price: 40000.89 },
  { name: 'FLUX', quantity: 12, price: 1234.23 },
  { name: 'HYPE', quantity: 11, price: 3219.33 },
  { name: 'Others', quantity: 7, price: 173 }
];


  const allprice = data.reduce((acc, val) => acc + val.price, 0)
  const data1 = data.map((item) => ({ ...item, percent: 100 * item.price / allprice }))

const COLORS = ['#007DB2', '#0078CC', '#9AECA4', '#C5E7F6', '#0E4C66', '#616E73'];



export default function PortfolioBreakdown() {
  const [activeIndex, setActiveIndex] = useState(null);
  const onMouseOver = useCallback((data, index) => {
    console.log(index)
    setActiveIndex(index);
  }, []);
  const onMouseLeave = useCallback((data, index) => {
    setActiveIndex(null);
  }, []);

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul>
        {
          payload.map((entry, index) =>
          console.log(entry)
          (
            <li key={`item-${index}`}>{entry.value} {entry.percent}</li>
          ))
        }
      </ul>
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
      midAngle,
      payload,
      fill,
      percent
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
          // dy={8}
          textAnchor="middle" >
          {payload.name}
        </text>

      </>
    )
  };


  return (
    <div className="bg-neutral-n-100  p-5 rounded-md w-800">
      <h1>Portfolio Breakdown</h1>
      <PieChart width={300} height={350}>
        {/* <Legend
          verticalAlign="bottom"
         height={36}
        /> */}
        {/* iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}  */}
        <Legend content={renderLegend} />

        <Pie
          activeIndex={activeIndex}
          data={data1}
          dataKey="quantity"
          nameKey="name"
          // cx="50%"
          cy="40%"
          innerRadius={55}
          outerRadius={90}
          legendType="circle"
          paddingAngle={1.5}
          stroke="none"
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          activeShape={renderActiveShape}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}
