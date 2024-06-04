import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TicketDetails from "@/app/(pages)/(dashboard)/chats/components/Ticket/TicketDetails";

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col space-y-5 mx-4 py-2 px-4 border rounded-lg">
      <div className="flex item-center justify-between border-b py-2">
        <div className="flex space-x-3 items-center">
          <span className="font-semibold text-gray-9">{ticket.ticket_id}</span>
          <span className="text-gray-900 text-sm">
            {ticket.assignment_name}
          </span>
        </div>
        {ticket.status !== "DONE" && (
          <span className="px-3 py-1 bg-orange-100 text-xs text-orange-500 rounded-full">
            {ticket.status === "IN_PROGRESS" && "Dikerjakan"}
            {ticket.status === "CHECKED" && "Diperiksa"}
            {ticket.status === "ASSIGNED" && "Ditugaskan"}
          </span>
        )}
        {ticket.status === "DONE" && (
          <span className="px-3 py-1 bg-green-100 text-xs text-green-500 rounded-full">
            Selesai
          </span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex-col flex space-y-2">
          <span className="text-gray-500">Dibuat Tanggal</span>
          <span className="text-gray-900 text-sm">
            {new Date(ticket.created_at).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex-col flex space-y-2">
          <span className="text-gray-500">Prioritas</span>
          {ticket.priority === "HIGH" && (
            <div className="inline-flex items-center bg-red-100 w-min px-3 py-1 rounded-full">
              <span className="size-2 inline-block bg-red-500 rounded-full me-2"></span>
              <span className="text-red-600 text-xs">Urgent</span>
            </div>
          )}
          {ticket.priority === "MEDIUM" && (
            <div className="inline-flex items-center bg-amber-100 w-min px-3 py-1 rounded-full">
              <span className="size-2 inline-block bg-amber-500 rounded-full me-2"></span>
              <span className="text-amber-700 text-xs">Normal</span>
            </div>
          )}
          {ticket.priority === "LOW" && (
            <div className="inline-flex items-center bg-green-100 w-min px-3 py-1 rounded-full">
              <span className="size-2 inline-block bg-green-500 rounded-full me-2"></span>
              <span className="text-green-700 text-xs">Rendah</span>
            </div>
          )}
        </div>
        <div className="flex-col flex space-y-2">
          <span className="text-gray-500">Ditugaskan ke</span>
          <div className="flex space-x-2 items-center">
            <Avatar className="w-5 h-5">
              <AvatarImage src={ticket.accounts.photo_profile} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-gray-900 text-sm">
              {ticket.accounts.name}
            </span>
          </div>
        </div>
      </div>
      <TicketDetails ticket={ticket} />
    </div>
  );
};

export default TicketCard;
