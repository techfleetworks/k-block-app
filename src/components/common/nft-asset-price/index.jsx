import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

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
      date: "Feb 1",
      pv: 50,
    },
  ];

  return (
    <div className="bg-neutral-n-0 border-solid drop-shadow-md rounded-md p-7">
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6 pb-5">
        Price History
      </h2>
      <LineChart width={600} height={400} margin={{ top: 20 }} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" className="text-sm text-neutral-n-800" />
        <YAxis
          type="number"
          domain="0, 50"
          className="text-sm text-neutral-n-800"
        />
      </LineChart>
    </div>
  );
};

export default NftAssetPrice;
