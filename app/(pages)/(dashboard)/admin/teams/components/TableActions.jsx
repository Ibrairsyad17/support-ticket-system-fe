import React from "react";
import EditPICDialog from "@/app/(pages)/(dashboard)/admin/teams/components/EditPICDialog";
import RemovePICDialog from "@/app/(pages)/(dashboard)/admin/teams/components/RemovePICDialog";

const TableActions = ({ data }) => {
  return (
    <div className="text-xs flex space-x-2">
      <EditPICDialog data={data} />
      <RemovePICDialog data={data} />
    </div>
  );
};

export default TableActions;
