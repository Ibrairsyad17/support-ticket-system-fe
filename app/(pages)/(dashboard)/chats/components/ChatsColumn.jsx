"use client";
import React from "react";
import { useSession } from "next-auth/react";

const ChatsColumn = () => {
  return (
    <ul className="space-y-5 w-full px-5 py-4 h-[35rem] overflow-y-scroll">
      <li className="flex gap-x-2 sm:gap-x-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
          <div className="space-y-1.5">
            <p className="mb-1.5 text-sm text-gray-800">
              You can ask questions like:
            </p>
          </div>
        </div>
      </li>

      <li className=" ms-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div className="grow text-end space-y-3">
          <div className="inline-block bg-gray-900 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-white">whats preline ui?</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ChatsColumn;
