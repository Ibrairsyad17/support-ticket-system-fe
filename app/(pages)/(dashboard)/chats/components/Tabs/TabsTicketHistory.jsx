"use client";
import React from "react";
import TicketCard from "@/app/(pages)/(dashboard)/chats/components/Ticket/TicketCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchConversationTickets,
  getStatus,
  selectConversationTickets,
} from "@/app/redux/slices/ticketsSlice";
import { useSession } from "next-auth/react";

const TabsTicketHistory = ({ id }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const selectConversationsTicket = useSelector(selectConversationTickets);
  const getStatusInfo = useSelector(getStatus);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(
          fetchConversationTickets({ token: session?.token.data.token, id }),
        );
      }
    }
  }, [session?.token.data.token, getStatusInfo, dispatch]);

  const doneTickets = selectConversationsTicket.filter(
    (ticket) => ticket.status === "DONE",
  );

  const liveTickets = selectConversationsTicket.filter(
    (ticket) => ticket.status !== "DONE",
  );

  return (
    <>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Tiket Berlangsung
      </div>
      <div className="flex flex-col space-y-3">
        {liveTickets.length === 0 && (
          <div className="text-center text-gray-500">Tidak ada tiket</div>
        )}
        {liveTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Tiket Selesai
      </div>
      <div className="flex flex-col space-y-3">
        {doneTickets.length === 0 && (
          <div className="text-center text-gray-500">Tidak ada tiket</div>
        )}
        {doneTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </>
  );
};

export default TabsTicketHistory;
