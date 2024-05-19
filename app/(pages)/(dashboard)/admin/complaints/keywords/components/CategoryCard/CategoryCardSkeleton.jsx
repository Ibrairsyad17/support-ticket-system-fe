import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryCardSkeleton = () => {
  return (
    <Card className="shadow-md shadow-gray-100 border-gray-100">
      <CardHeader>
        <Skeleton className="w-24 mb-2 h-4 bg-gray-100 rounded-full" />
        <Skeleton className="w-32 mb-2 h-4 bg-gray-100 rounded-full" />
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Skeleton className="w-28 h-7 bg-gray-100 rounded-full" />
          <Skeleton className="w-28 h-7 bg-gray-100 rounded-full" />
          <Skeleton className="w-28 h-7 bg-gray-100 rounded-full" />
        </div>
      </CardContent>
      <CardFooter className="grid sm:grid-cols-2 gap-3">
        <Skeleton className="h-8 bg-gray-100 rounded-lg" />
        <Skeleton className="h-8 bg-gray-100 rounded-lg" />
      </CardFooter>
    </Card>
  );
};

export default CategoryCardSkeleton;
