import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LatestComplaintsSkeleton = () => {
  return (
    <div className="flex flex-col w-full space-y-8 items-center">
      <div className="flex items-center space-x-4 w-full">
        <Skeleton className="h-10 w-12 bg-gray-100 rounded-full" />
        <div class="flex justify-between w-full">
          <div className="space-y-2">
            <Skeleton className="h-3.5 bg-gray-100 w-[200px]" />
            <Skeleton className="h-3.5 bg-gray-100 w-[250px]" />
          </div>
          <Skeleton className="h-3.5 bg-gray-100 w-[50px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <Skeleton className="h-10 w-12 bg-gray-100 rounded-full" />
        <div className="flex justify-between w-full">
          <div className="space-y-2">
            <Skeleton className="h-3.5 bg-gray-100 w-[200px]" />
            <Skeleton className="h-3.5 bg-gray-100 w-[250px]" />
          </div>
          <Skeleton className="h-3.5 bg-gray-100 w-[50px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <Skeleton className="h-10 w-12 bg-gray-100 rounded-full" />
        <div class="flex justify-between w-full">
          <div className="space-y-2">
            <Skeleton className="h-3.5 bg-gray-100 w-[200px]" />
            <Skeleton className="h-3.5 bg-gray-100 w-[250px]" />
          </div>
          <Skeleton className="h-3.5 bg-gray-100 w-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default LatestComplaintsSkeleton;
