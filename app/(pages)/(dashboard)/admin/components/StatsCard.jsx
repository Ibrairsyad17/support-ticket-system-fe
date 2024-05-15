import React from "react";

const StatsCard = ({
  title,
  iconColor,
  icon,
  backgroundColor,
  shadowColor = "shadow-gray-100",
  value,
}) => {
  return (
    <div
      className={`flex flex-col bg-white shadow-md ${backgroundColor} shadow-gray-100 rounded-xl`}
    >
      <div className="p-4 md:p-5 flex gap-x-4">
        <div
          className={`flex-shrink-0 flex justify-center mr-1.5  items-center size-[42px] bg-white shadow-md ${shadowColor} rounded-lg`}
        >
          <icon.icon className={`w-6 h-6 flex-shrink-0 size-5 ${iconColor}`} />
        </div>

        <div className="grow">
          <div className="flex items-center gap-x-2">
            <p className="text-xs tracking-wide text-gray-500">{title}</p>
          </div>
          <div className="mt-1 flex items-center gap-x-2">
            <h3 className="text-xl font-bold sm:text-2xl text-gray-800">
              {value}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
