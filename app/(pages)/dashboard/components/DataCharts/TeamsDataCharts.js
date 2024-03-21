import React from "react";

const TeamsDataCharts = () => {
  return (
    <div>
      <div className="flex">
        <div className="inline-flex items-center ml-4">
          <span className="size-2 inline-block bg-purple-800 rounded-full me-2"></span>
          <span className="text-gray-600 text-sm">Tiket ditugaskan</span>
        </div>
        <div className="inline-flex items-center mx-4">
          <span className="size-2 inline-block bg-purple-600 rounded-full me-2"></span>
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

export default TeamsDataCharts;
