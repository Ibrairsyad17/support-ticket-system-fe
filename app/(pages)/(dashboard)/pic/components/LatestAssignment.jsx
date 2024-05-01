import React from "react";
import Link from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const LatestAssignment = () => {
  return (
    <div className="space-y-6 lg:h-[16rem] flex flex-col justify-between">
      <div className="flex items-center">
        <div className="bg-emerald-500 p-2 rounded-full">
          <ArrowUpIcon className="text-white h-5 w-5" />
        </div>
        <div className="ml-4">
          <Link
            href="/"
            className="text-sm font-semibold leading-none hover:underline"
          >
            Website Lemot
          </Link>
          <p className="text-sm text-muted-foreground block overflow-hidden w-50 text-ellipsis truncate">
            <span className="font-semibold">Nama Pelanggan:</span> Budi Setiawan
          </p>
        </div>
        <div className="ml-auto font-medium text-sm text-green-500">1m</div>
      </div>
      <Link
        href="/public"
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

export default LatestAssignment;
