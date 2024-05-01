import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Link1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const SyncAccountCard = ({ listPlatform, className }) => {
  return (
    <div className={cn(`grid grid-cols-1 lg:grid-cols-3 gap-5`, className)}>
      {listPlatform.map((stat) => {
        const lowerTitle = stat.title.toLowerCase();
        return (
          <>
            <div
              key={stat.id}
              className="grid grid-cols-1 gap-3 shadow-md shadow-gray-100 rounded-lg py-5 px-4"
            >
              <div className="flex w-full justify-between items-center">
                <div
                  className={`flex-shrink-0 flex justify-center mr-1.5 items-center size-[30px] bg-white shadow-sm ${stat.shadowColor} rounded-lg`}
                >
                  <stat.icon
                    className={`w-1 h-1 flex-shrink-0 size-1 ${stat.textColor}`}
                    style={{ width: 18, height: 18 }}
                  />
                </div>
                <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                  <CheckCircleIcon className="flex-shrink-0 size-3 w-4 h-4" />
                  Terhubung
                </span>
              </div>
              <h3 className="font-semibold leading-none tracking-tight text-md mt-2.5">
                {stat.title}
              </h3>
              <p className=" leading-none tracking-tight font-medium text-gray-400 text-sm">
                Hubungkan dengan akun {stat.title}
              </p>
              <Button
                asChild
                className={`${stat.backgroundColor} hover:bg-amber-600 mt-2 text-gray-900 hover:scale-105 transition duration-300`}
              >
                <Link href={`/sync-account/${lowerTitle}`}>
                  <Link1Icon className="mr-2 h-4 w-4" /> Hubungkan {stat.title}
                </Link>
              </Button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SyncAccountCard;
