import React from "react";
import EditPICDialog from "@/app/(pages)/(dashboard)/admin/teams/components/EditPICDialog";
import RemovePICDialog from "@/app/(pages)/(dashboard)/admin/teams/components/RemovePICDialog";

const TableActions = () => {
  return (
    <div className="px-4 text-xs flex space-x-2">
      <EditPICDialog />
      <RemovePICDialog />
    </div>
  );
};

export default TableActions;
