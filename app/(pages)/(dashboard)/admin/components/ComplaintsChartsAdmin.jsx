"use client";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
const productSalesData = [
  {
    name: "Jan",
    product1: 3700,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3500,
    product2: 1398,
  },
  {
    name: "Mar",
    product1: 3000,
    product2: 9800,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 3908,
  },
  {
    name: "May",
    product1: 3890,
    product2: 4800,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 3800,
  },
  {
    name: "Jul",
    product1: 3490,
    product2: 4300,
  },
  {
    name: "Aug",
    product1: 1490,
    product2: 4300,
  },
  {
    name: "Sep",
    product1: 2400,
    product2: 4300,
  },
  {
    name: "Oct",
    product1: 3490,
    product2: 4300,
  },
  {
    name: "Nov",
    product1: 1490,
    product2: 4300,
  },
  {
    name: "Dec",
    product1: 3090,
    product2: 4300,
  },
];

const ComplaintsChartsAdmin = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height="80%"
      className="pl-2 pr-10 pb-3.5"
    >
      <AreaChart width={500} height={400} data={productSalesData}>
        <defs>
          <linearGradient id="colorProduct1" x1="0" y1="0" x2="0" y2="1">
            <stop
              id="colorProduct1"
              offset="0%"
              stopColor="#39404F"
              stopOpacity={0.7}
            />
            <stop
              id="colorProduct1"
              offset="75%"
              stopColor="#39404F"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <YAxis className="text-xs" />
        <XAxis dataKey="name" className="text-xs" />
        <Tooltip />
        <CartesianGrid stroke="#f0f0f0" vertical={false} />
        <Area
          dataKey="product1"
          type="monotone"
          stackId="1"
          stroke="#39404F"
          fill="url(#colorProduct1)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ComplaintsChartsAdmin;
