"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const colors = ["#a855f7", "#c084fc", "#d8b4fe", "#9333ea"];

export default class TeamDataCharts extends PureComponent {
  render() {
    const title = this.props.title;
    const teamPICData = this.props.data;

    const filteredData = teamPICData.filter(
      (item) => item.accounts.pic_roles.role === title,
    );

    const sum = filteredData.reduce((acc, ticket) => {
      const status = ticket.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    });

    const dataCharts = Object.values(
      filteredData.reduce((acc, { status }) => {
        acc[status] = acc[status]
          ? { ...acc[status], value: acc[status].value + 1 }
          : { name: status, value: 1 };
        return acc;
      }, {}),
    );

    const changeStatusNameArray = dataCharts.map((item) => {
      if (item.name === "ASSIGNED") {
        item.name = "Tiket ditugaskan";
      } else if (item.name === "IN_PROGRESS") {
        item.name = "Tiket dikerjakan";
      } else if (item.name === "CHECKED") {
        item.name = "Tiket direview";
      } else if (item.name === "DONE") {
        item.name = "Tiket selesai";
      }
      return item;
    });

    const filteredDataStatus = changeStatusNameArray.filter(
      (arr) => arr.name !== "Tiket selesai",
    );

    const totalRole = teamPICData.filter(
      (team) => team.accounts.pic_roles.role === title,
    ).length;

    const reduceByAccountID = teamPICData.reduce((acc, ticket) => {
      const accountID = ticket.account_id;
      acc[accountID] = (acc[accountID] || 0) + 1;
      return acc;
    });

    console.log(reduceByAccountID);

    return (
      <div className="flex flex-col space-y-2.5 border py-2 px-1 rounded-lg text-center">
        <h3 className="font-semibold leading-none mt-4 tracking-tight text-xl">
          Tim PIC {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">{totalRole}</span> jumlah tiket.
        </p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Tooltip />
            <Pie
              data={filteredDataStatus}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {filteredDataStatus.map((entry, index) => {
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
                  case "Tiket selesai":
                    color = colors[3];
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
