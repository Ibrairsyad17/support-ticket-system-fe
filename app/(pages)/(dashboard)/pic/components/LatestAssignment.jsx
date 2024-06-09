import React from "react";
import Link from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import TimeAgo from "react-timeago";

const LatestAssignment = ({ data }) => {
  const assignedTickets = data.filter((ticket) => ticket.status === "ASSIGNED");
  const latestAssignment = assignedTickets.slice(0, 3);
  return (
    <div className="space-y-4.5 lg:h-[16rem] flex flex-col justify-between">
      <div className="flex space-y-7 w-full flex-col items-center">
        {latestAssignment.map((ticket) => {
          const time = new Date(ticket.assignment_date);
          const formattedTime = time
            .toISOString()
            .replace("T", " ")
            .substring(0, 19);
          return (
            <div key={ticket.id} className="flex w-full items-center">
              <div className="bg-emerald-500 p-2 rounded-full">
                <ArrowUpIcon className="text-white h-5 w-5" />
              </div>
              <div className="ml-4">
                <Link
                  href="/"
                  className="text-sm font-semibold leading-none hover:underline"
                >
                  {ticket.assignment_name}
                </Link>
                <p className="text-sm text-muted-foreground block overflow-hidden w-50 text-ellipsis truncate">
                  <span className="font-semibold">Nama Pelanggan:</span>{" "}
                  {
                    ticket.conversation_messages.conversations.customers
                      .nama_lengkap
                  }
                </p>
              </div>
              <div className="ml-auto font-medium text-sm text-green-500">
                <TimeAgo date={formattedTime} />
              </div>
            </div>
          );
        })}
      </div>
      <Link
        href="/pic/tickets"
        className="text-sm font-medium text-amber-400 block mt-2 hover:underline"
      >
        Lihat selengkapnya{" "}
        <span aria-hidden="true" className="ml-1">
          &rarr;
        </span>
      </Link>
    </div>
  );
};

export default LatestAssignment;
