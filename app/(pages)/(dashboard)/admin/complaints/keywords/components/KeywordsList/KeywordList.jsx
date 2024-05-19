import React from "react";
import { Button } from "@/components/ui/button";
import RemoveKeywordDialog from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/RemoveDialog/RemoveKeywordDialog";

const KeywordList = ({ type = "icon", data }) => {
  return (
    <div className="">
      <ul className="w-full flex flex-col divide-y divide-gray-100 h-72 overflow-y-scroll divide-gray-200">
        {data.map((keyword) => (
          <li
            key={keyword.id}
            className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600"
          >
            <div className="flex justify-between w-full items-center">
              {keyword.name}
              <RemoveKeywordDialog type={type} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordList;
