import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const NftAssetPrice = () => {
  const data = [
    {
      date: "Dec 20",
      pv: 0,
    },
    {
      date: "Jan 1",
      pv: 10,
    },
    {
      date: "Jan 10",
      pv: 20,
    },
    {
      date: "Jan 20",
      pv: 30,
    },
    {
      date: "Jan 30",
      pv: 50,
    },
  ];

  const formatter = (value) => `$${value.toFixed(2)}`;

  return (
    <div className="bg-neutral-n-0 border-solid drop-shadow-md rounded-md p-7">
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6 pb-5">
        Price History
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={600} height={300} margin={{ top: 20 }} data={data}>
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
            padding={{ left: 50, right: 30 }}
            className="text-xs text-neutral-n-800"
          />
          <YAxis
            type="number"
            tickFormatter={formatter}
            ticks={[0, 10.0, 20.0, 30.0, 40.0, 50.0]}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            domain={[0, "dataMax"]}
            className="text-xs text-neutral-n-800"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NftAssetPrice;
