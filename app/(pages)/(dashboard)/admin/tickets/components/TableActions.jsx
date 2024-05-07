import React from "react";
import DetailTicketSheet from "@/app/(pages)/(dashboard)/admin/tickets/components/DetailTicketSheet";
import RemoveTicketDialog from "@/app/(pages)/(dashboard)/admin/tickets/components/RemoveTicketDialog";

const TableActions = ({ id }) => {
  return (
    <div className="flex space-x-2 items-center">
      <DetailTicketSheet id={id} />
      <RemoveTicketDialog />
    </div>
  );
};

export default TableActions;
