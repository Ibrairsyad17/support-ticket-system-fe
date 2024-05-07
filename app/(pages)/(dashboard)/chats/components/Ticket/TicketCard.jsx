import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TicketDetails from "@/app/(pages)/(dashboard)/chats/components/Ticket/TicketDetails";

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col space-y-5 mx-4 py-2 px-4 border rounded-lg">
      <div className="flex item-center justify-between border-b py-2">
        <div className="flex space-x-3 items-center">
          <span className="font-semibold text-gray-9">{ticket.id}</span>
          <span className="text-gray-900 text-sm">{ticket.title}</span>
        </div>
        {ticket.status === "Ditugaskan" && (
          <span className="px-3 py-1 bg-orange-100 text-xs text-orange-500 rounded-full">
            Ditugaskan
          </span>
        )}
        {ticket.status === "Selesai" && (
          <span className="px-3 py-1 bg-green-100 text-xs text-green-500 rounded-full">
            Selesai
          </span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex-col flex space-y-2">
          <span className="text-gray-500">Dibuat Tanggal</span>
          <span className="text-gray-900 text-sm">{ticket.createdAt}</span>
        </div>
        <div className="flex-col flex space-y-2">
          <span className="text-gray-500">Prioritas</span>
          {ticket.priority === "urgent" && (
            <div className="inline-flex items-center bg-red-100 w-min px-3 py-1 rounded-full">
              <span className="size-2 inline-block bg-red-500 rounded-full me-2"></span>
              <span className="text-red-600 text-xs">Urgent</span>
            </div>
          )}
          {ticket.priority === "normal" && (
            <div className="inline-flex items-center bg-amber-100 w-min px-3 py-1 rounded-full">
              <span className="size-2 inline-block bg-amber-500 rounded-full me-2"></span>
              <span className="text-red-600 text-xs">Normal</span>
            </div>
          )}
          {ticket.priority === "low" && (
            <div className="inline-flex items-center bg-green-100 w-min px-3 py-1 rounded-full">
              <span className="size-2 inline-block bg-green-500 rounded-full me-2"></span>
              <span className="text-red-600 text-xs">Rendah</span>
            </div>
          )}
        </div>
        <div className="flex-col flex space-y-2">
          <span className="text-gray-500">Ditugaskan ke</span>
          <div className="flex space-x-2 items-center">
            <Avatar className="w-5 h-5">
              <AvatarImage src={ticket.assigned.avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-gray-900 text-sm">
              {ticket.assigned.name}
            </span>
          </div>
        </div>
      </div>
      <TicketDetails id={ticket.id} />
    </div>
  );
};

export default TicketCard;
