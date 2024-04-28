import { Instagram } from "@mui/icons-material";
import React from "react";
import Link from "next/link";

const RecentComplaints = () => {
  return (
    <div className="space-y-6 lg:h-[16rem] flex flex-col justify-between">
      <div className="flex items-center">
        <div className="bg-rose-500 p-2 rounded-full">
          <Instagram sx={{ color: "white", fontSize: 24 }} />
        </div>
        <div className="ml-4">
          <Link
            href="/public"
            className="text-sm font-medium leading-none hover:underline"
          >
            Kayla
          </Link>
          <p className="text-sm text-muted-foreground block overflow-hidden w-48 text-ellipsis truncate">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            atque expedita molestiae molestias necessitatibus nostrum nulla
            porro qui recusandae repudiandae.
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

export default RecentComplaints;
