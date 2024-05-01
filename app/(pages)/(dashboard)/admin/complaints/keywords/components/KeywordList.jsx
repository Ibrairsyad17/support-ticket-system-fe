import React from "react";

const KeywordList = () => {
  return (
    <div className="">
      <ul className="w-full flex flex-col divide-y divide-gray-100">
        <li className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full">
            Profile
            <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-red-500 text-white">
              Hapus
            </span>
          </div>
        </li>
        <li className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full">
            Settings
            <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-red-500 text-white">
              Hapus
            </span>
          </div>
        </li>
        <li className="inline-flex items-center gap-x-2 pt-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full">
            Newsletter
            <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-red-500 text-white">
              Hapus
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default KeywordList;
