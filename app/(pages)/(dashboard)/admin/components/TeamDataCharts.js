"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const colors = ["#a855f7", "#c084fc", "#d8b4fe"];
export default class TeamDataCharts extends PureComponent {
  constructor(data) {
    super(data);
    this.dataCharts = data;
  }
  render() {
    const { data } = this.dataCharts;
    return (
      <div className="flex flex-col space-y-2.5 border py-2 px-1 rounded-lg text-center">
        <h3 className="font-semibold leading-none mt-4 tracking-tight text-xl">
          Tim PIC 1
        </h3>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">16 </span> anggota tim.
        </p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => {
                let color = "";
                switch (entry.name) {
                  case "Tiket ditugaskan":
                    color = colors[0];
                    break;
                  case "Tiket dikerjakan":
                    color = colors[1];
                    break;
                  case "Tiket direview":
                    color = colors[2];
                    break;
                  default:
                    color = "purple";
                    break;
                }

                return <Cell key={`cell-${index}`} fill={color} />;
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
