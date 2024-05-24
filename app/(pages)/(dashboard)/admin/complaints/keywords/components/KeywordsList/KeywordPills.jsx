import React from "react";
import RemoveKeywordDialog from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/RemoveDialog/RemoveKeywordDialog";

const KeywordPills = ({ data }) => {
  return (
    <>
      <span className="py-1 px-3 mr-2 inline-flex items-center gap-x-1 text-sm font-medium border text-gray-800 rounded-full">
        {data.name}
        <RemoveKeywordDialog id={data.id} />
      </span>
    </>
  );
};

export default KeywordPills;
