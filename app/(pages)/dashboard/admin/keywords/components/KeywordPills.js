import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const KeywordPills = () => {
  return (
    <>
      <span className="py-1 px-3 mr-2 inline-flex items-center gap-x-1 text-sm font-medium border text-gray-800 rounded-full">
        Error
        <button className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-gray-200">
          <XMarkIcon className="flex-shrink-0 size-3 w-4 h-4 inline-flex items-center justify-center rounded-full" />
        </button>
      </span>
      <span className="py-1 px-3 mr-2 inline-flex items-center gap-x-1 text-sm font-medium border text-gray-800 rounded-full">
        Lemot
        <button className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-gray-200">
          <XMarkIcon className="flex-shrink-0 size-3 w-4 h-4 inline-flex items-center justify-center rounded-full" />
        </button>
      </span>
    </>
  );
};

export default KeywordPills;
