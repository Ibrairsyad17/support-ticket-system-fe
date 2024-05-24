"use client";
import React from "react";
import TabsContents from "@/app/(pages)/(dashboard)/components/Tabs/TabsContents";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/pic/tickets/components/Columns";
import { useSession } from "next-auth/react";
import { getTicketsByPIC } from "@/app/api/repository/ticketRepository";
import { getUserInfo } from "@/app/api/repository/usersAndCompanyRepository";

const TicketsPICPage = () => {
  const { data: session } = useSession();
  const [tickets, setTickets] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userInfo, setUserInfo] = React.useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone_number: "",
    photo_profile: "",
    role: "",
    otp_enabled: "",
    company_id: "",
    pic_role_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const fetchUserInfo = async () => {
    const res = await getUserInfo(session?.token.data.token);
    if (res) {
      setUserInfo(res.data.data);
      setIsLoading(false);
    }
  };

  const fetchTicketsByPIC = async (id) => {
    const res = await getTicketsByPIC(session?.token.data.token, id);
    if (res) {
      setTickets(res.data.data.assignments);
      console.log(res.data.data.assignments);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchUserInfo();
    }
  }, [session?.token.data.token]);

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchTicketsByPIC(userInfo.id);
    }
  }, [userInfo.id]);

  const items = [
    {
      value: "all",
      label: "Semua",
      DataTable: (
        <DataTable data={tickets} columns={columns} filteredBy="name" />
      ),
    },
  ];
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {/* Header Section */}
        <div className="grid-cols-1 h-auto">
          <header className={`mb-3`}>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                Tiket
              </h1>
            </div>
            <p className="mt-2 text-base text-gray-400">
              Kelola seluruh tiket keluhan pelanggan.
            </p>
          </header>
        </div>
        <TabsContents defaultValue="all" values={items} />
      </div>
    </>
  );
};

export default TicketsPICPage;
