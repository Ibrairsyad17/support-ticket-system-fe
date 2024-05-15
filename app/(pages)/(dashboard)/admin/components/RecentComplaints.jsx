import React from "react";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const RecentComplaints = ({ data }) => {
  return (
    <div className="space-y-6 lg:h-[16rem] flex flex-col justify-between">
      {data?.map((item) => (
        <div key={item.id} className="flex items-center">
          <div className="shadow p-2 rounded-full">
            <ArrowUpCircleIcon className="w-6 h-6" />
          </div>
          <div className="ml-4">
            <Link
              href={`/chats/${item.id}`}
              className="text-sm font-medium leading-none hover:underline"
            >
              {item.assignment_name}
            </Link>
            <p className="text-sm text-muted-foreground block overflow-hidden w-48 text-ellipsis truncate">
              {item.assignment_detail}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-green-500">{item.ass}</div>
        </div>
      ))}

      <Link
        href="/admin/complaints/list-complaints"
        className="text-sm font-medium text-amber-400 block mt-2 hover:underline"
      >
        Lihat selengkapnya{" "}
        <span aria-hidden="true" className="ml-1">
          &rarr;
        </span>
      </Link>
    </div>
  );
};

export default RecentComplaints;
