import React from "react";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";

const LatestComplaints = () => {
  return (
    <div className="py-5 px-0 lg:px-3 mx-1.5 h-96 rounded-lg bg-white col-span-1 overflow-y-scroll no-scrollbar">
      <h1 className="text-xl font-semibold mb-2.5 text-gray-900">
        Keluhan terbaru
      </h1>
      <ul className="flex flex-col divide-y divide-gray-200">
        <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium bg-white border-b border-gray-200 text-gray-800 -mt-px first:mt-0 ">
          <div className="flex text-md justify-between items-center w-full">
            <div className="flex">
              <div className="bg-fuchsia-600 p-2 mr-3 rounded-full">
                <Instagram sx={{ color: "white", fontSize: 24 }} />
              </div>
              <Link className="flex flex-col" href="/">
                <h5 className="text-md font-semibold hover:underline">
                  Profile
                </h5>
                <p className="text-xs text-gray-500 mt-1 block overflow-hidden w-52 text-ellipsis truncate">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  enim.
                </p>
              </Link>
            </div>

            <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium text-green-500">
              1m
            </span>
          </div>
        </li>
      </ul>
      <Link
        href="/"
        className="text-sm font-medium text-amber-400 leading-loose block mt-2 hover:underline"
      >
        Lihat selengkapnya{" "}
        <span aria-hidden="true" className="ml-1">
          &rarr;
        </span>
      </Link>
    </div>
  );
};

export default LatestComplaints;
