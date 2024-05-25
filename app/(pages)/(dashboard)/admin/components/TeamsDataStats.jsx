"use client";
import React from "react";
import TeamDataCharts from "@/app/(pages)/(dashboard)/admin/components/TeamDataCharts";
import { useSession } from "next-auth/react";
import { getTicketsAllPicRole } from "@/app/api/repository/ticketRepository";

const TeamsDataStats = () => {
  const { data: session } = useSession();
  const [tickets, setTickets] = React.useState([]);
  const [category, setCategory] = React.useState([]);

  const fetchTicketsCategory = async () => {
    const response = await getTicketsAllPicRole(session?.token.data.token);
    const getTickets = response.data.data.assignments;
    if (getTickets.length !== 0) {
      const getCategory = getTickets
        .map((ticket) => {
          if (ticket.accounts?.pic_roles === null) {
            ticket.accounts.pic_roles = { role: "Belum Ditentukan" };
          }
          return ticket.accounts?.pic_roles?.role;
        })
        .filter((value, index, self) => self.indexOf(value) === index);
      console.log(getCategory);
      console.log(getTickets);
      setTickets(getTickets);
      setCategory(getCategory);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) fetchTicketsCategory();
  }, [session?.token.data.token]);

  return (
    <div className="grid grid-cols-1 gap-y-5">
      <div className="grid lg:grid-cols-4 gap-x-5">
        {category.map((category, index) => (
          <TeamDataCharts data={tickets} title={category} key={index} />
        ))}
      </div>
      <div className="flex">
        <div className="inline-flex items-center ml-4">
          <span className="size-2 inline-block bg-purple-500 rounded-full me-2"></span>
          <span className="text-gray-600 text-sm">Tiket ditugaskan</span>
        </div>
        <div className="inline-flex items-center mx-4">
          <span className="size-2 inline-block bg-purple-400 rounded-full me-2"></span>
          <span className="text-gray-600 text-sm">Tiket dikerjakan</span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2 inline-block bg-purple-300 rounded-full me-2"></span>
          <span className="text-gray-600 text-sm">Tiket direview</span>
        </div>
      </div>
    </div>
  );
};

export default TeamsDataStats;
