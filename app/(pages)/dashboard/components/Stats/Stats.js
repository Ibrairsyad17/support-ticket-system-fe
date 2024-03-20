import React from "react";
import { cn } from "@/lib/utils";
import { socialMediaStats } from "@/app/(pages)/dashboard/components/Stats/SocialMediaStats";

const Stats = ({ listStats, className }) => {
  const lengthStats = listStats.length;
  return (
    <div
      className={cn(
        `grid sm:grid-cols-1 md:grid-cols-2 ${lengthStats > 3 ? `lg:grid-cols-4` : `lg:grid-cols-${lengthStats.toString()}`}  gap-2 sm:gap-2`,
        className,
      )}
    >
      {listStats.map((stat) => {
        return (
          <div
            key={stat.id}
            className={`flex flex-col bg-white ${listStats === socialMediaStats ? `` : `shadow-md shadow-gray-100`} ${stat.backgroundColor} rounded-xl`}
          >
            <div className="p-4 md:p-5 flex gap-x-4">
              <div
                className={`flex-shrink-0 flex justify-center mr-1.5 items-center size-[42px] bg-white shadow-md ${stat.shadowColor} rounded-lg`}
              >
                <stat.icon
                  className={`w-6 h-6 flex-shrink-0 size-5 ${stat.textColor}`}
                />
              </div>

              <div className="grow">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs tracking-wide text-gray-500">
                    {stat.title}
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl font-bold sm:text-2xl text-gray-800">
                    {stat.value}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
