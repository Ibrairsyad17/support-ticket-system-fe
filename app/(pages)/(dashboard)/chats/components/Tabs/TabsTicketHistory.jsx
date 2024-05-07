import React from "react";
import TicketCard from "@/app/(pages)/(dashboard)/chats/components/Ticket/TicketCard";

const tickets = [
  {
    id: "TK-4556",
    status: "Ditugaskan",
    createdAt: "12/04/2024",
    priority: "urgent",
    assigned: {
      name: "Tono Kurniawan",
      avatar: "https://github.com/shadcn.png",
    },
    title: "Transfer Bank Lemot",
  },
  {
    id: "TK-4557",
    status: "Ditugaskan",
    createdAt: "14/04/2024",
    priority: "urgent",
    assigned: { name: "Agung Budi", avatar: "https://github.com/shadcn.png" },
    title: "Aplikasi Ngebug",
  },
  {
    id: "TK-4558",
    status: "Selesai",
    createdAt: "17/04/2024",
    priority: "urgent",
    assigned: { name: "Agung Budi", avatar: "https://github.com/shadcn.png" },
    title: "Kendala Pembayaran",
  },
  {
    id: "TK-4559",
    status: "Selesai",
    createdAt: "16/04/2024",
    priority: "urgent",
    assigned: { name: "Agung Budi", avatar: "https://github.com/shadcn.png" },
    title: "Aplikasi mengalami kendala",
  },
  {
    id: "TK-4560",
    status: "Selesai",
    createdAt: "14/04/2024",
    priority: "urgent",
    assigned: { name: "Agung Budi", avatar: "https://github.com/shadcn.png" },
    title: "Error saat login",
  },
];

const TabsTicketHistory = () => {
  const assignedTickets = tickets.filter(
    (ticket) => ticket.status === "Ditugaskan",
  );
  const doneTickets = tickets.filter((ticket) => ticket.status === "Selesai");
  return (
    <>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Tiket Berlangsung
      </div>
      <div className="flex flex-col space-y-3">
        {assignedTickets.length === 0 && (
          <div className="text-center text-gray-500">Tidak ada tiket</div>
        )}
        {assignedTickets.map((ticket) => (
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
