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

const ComplaintsChartsAdmin = ({ data }) => {
  const getTotalDataByDate = Object.values(
    data.reduce((acc, { assignment_date }) => {
      const dateOnly = assignment_date.split("T")[0];
      acc[dateOnly] = acc[dateOnly]
        ? { ...acc[dateOnly], total: acc[dateOnly].total + 1 }
        : { date: dateOnly, total: 1 };
      return acc;
    }, {}),
  );

  const complaintsData = getTotalDataByDate.map((item) => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });
    return {
      ...item,
      date: formattedDate,
    };
  });

  console.log(complaintsData);

  return (
    <ResponsiveContainer
      width="100%"
      height="80%"
      className="pl-2 pr-10 pb-3.5"
    >
      <AreaChart width={500} height={400} data={complaintsData}>
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
        <XAxis dataKey="date" className="text-xs" />
        <Tooltip />
        <CartesianGrid stroke="#f0f0f0" vertical={false} />
        <Area
          dataKey="total"
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
