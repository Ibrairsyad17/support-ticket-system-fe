import React from "react";
import DetailTicketSheet from "@/app/(pages)/(dashboard)/admin/tickets/components/DetailTicketSheet";
import RemoveTicketDialog from "@/app/(pages)/(dashboard)/admin/tickets/components/RemoveTicketDialog";

const TableActions = ({ data, role = "admin" }) => {
  return (
    <div className="flex space-x-2 items-center">
      <DetailTicketSheet data={data} />
      {role === "admin" ? <RemoveTicketDialog data={data} /> : <></>}
    </div>
  );
};

export default TableActions;
