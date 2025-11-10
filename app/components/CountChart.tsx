"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, Legend } from "recharts";

// #region Sample data
const data = [
  {
    name: "Total",
    count: 105,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 52,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div>
        <h1 className="text-lg font-semibold">Students</h1>
      </div>
      <div className="relative w-full h-[75%]">
        <RadialBarChart
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "700px",
            maxHeight: "700px",
            aspectRatio: 1.618,
          }}
          responsive
          cx="50%"
          cy="50%"
          barSize={32}
          data={data}
          innerRadius="40%"
          outerRadius="100%"
        >
          <RadialBar
            // label={{  fill: "#fff" }}
            background
            dataKey="count"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
        </RadialBarChart>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lama-sky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys(55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lama-yellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls(45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
