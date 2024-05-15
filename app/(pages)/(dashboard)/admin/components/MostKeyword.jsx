"use client";
import React from "react";
import Link from "next/link";

const MostKeyword = ({ data }) => {
  return (
    <div className="">
      <ul className="w-full flex flex-col">
        {data.map((keyword) => (
          <li
            key={keyword.id}
            className="inline-flex items-center gap-x-2 py-3 pl-4 text-sm font-medium bg-white text-gray-800 -mt-px"
          >
            <div className="flex justify-between w-full">
              <span>{keyword.name}</span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">
                {keyword.count}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href="/public"
        className="text-sm font-medium text-amber-400 block mt-2 pl-4 hover:underline"
      >
        Lihat selengkapnya{" "}
        <span aria-hidden="true" className="ml-1">
          &rarr;
        </span>
      </Link>
    </div>
  );
};

export default MostKeyword;
