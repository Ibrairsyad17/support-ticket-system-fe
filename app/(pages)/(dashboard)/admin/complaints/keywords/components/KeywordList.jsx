import React from "react";
import { Button } from "@/components/ui/button";

const KeywordList = () => {
  return (
    <div className="">
      <ul className="w-full flex flex-col divide-y divide-gray-100">
        <li className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full items-center">
            Profile
            <Button
              size="xs"
              className="items-center rounded-full px-2.5 py-1 hover:bg-red-600 text-xs font-medium bg-red-500 text-white"
            >
              Hapus
            </Button>
          </div>
        </li>
        <li className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full items-center">
            Settings
            <Button
              size="xs"
              className="items-center rounded-full px-2.5 py-1 hover:bg-red-600 text-xs font-medium bg-red-500 text-white"
            >
              Hapus
            </Button>
          </div>
        </li>
        <li className="inline-flex items-center gap-x-2 pt-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full items-center">
            Newsletter
            <Button
              size="xs"
              className="items-center rounded-full px-2.5 py-1 hover:bg-red-600 text-xs font-medium bg-red-500 text-white"
            >
              Hapus
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default KeywordList;