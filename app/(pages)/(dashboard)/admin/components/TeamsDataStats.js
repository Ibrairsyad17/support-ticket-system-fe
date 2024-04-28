import React from "react";
import TeamDataCharts from "@/app/(pages)/(dashboard)/admin/components/TeamDataCharts";
const teamPIC1Data = [
  { name: "Tiket ditugaskan", value: 10 },
  { name: "Tiket dikerjakan", value: 5 },
  { name: "Tiket direview", value: 1 },
];

const TeamsDataStats = () => {
  return (
    <div className="grid grid-cols-1 gap-y-5">
      <div className="grid lg:grid-cols-4 gap-x-5">
        <TeamDataCharts data={teamPIC1Data} />
      </div>
      <div className="flex">
        <div className="inline-flex items-center ml-4">
          <span className="size-2 inline-block bg-purple-500 rounded-full me-2"></span>
          <span className="text-gray-600 text-sm">Tiket ditugaskan</span>
        </div>
        <div className="inline-flex items-center mx-4">
          <span className="size-2 inline-block bg-purple-400 rounded-full me-2"></span>
          <span className="text-gray-600 text-sm">Tiket dikerjakan</span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2 inline-block bg-purple-300 rounded-full me-2"></span>
          <span className="text-gray-600 text-sm">Tiket direview</span>
        </div>
      </div>
    </div>
  );
};

export default TeamsDataStats;
