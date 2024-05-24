"use client";
import React from "react";
import TabsContents from "@/app/(pages)/(dashboard)/components/Tabs/TabsContents";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/admin/message/inbox/components/Columns";
import { useSession } from "next-auth/react";
import { getMessages } from "@/app/api/repository/messagesRepository";

const InboxPage = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchMessages = async () => {
    const res = await getMessages(session?.token.data.token);
    if (res) {
      setMessages(res.data.data.conversations);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchMessages();
    }
  }, [session?.token.data.token]);

  const items = [
    {
      value: "all",
      label: "Semua",
      DataTable: (
        <DataTable
          data={messages}
          columns={columns}
          filteredBy="description"
          type="headerless"
          loading={isLoading}
        />
      ),
    },
  ];
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-3">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header>
            <div className="col-span-4 flex flex-col space-y-2">
              <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                Pesan Masuk
              </h1>
              <p className="mt-2 text-md text-gray-400">
                Kelola pesan yang masuk dari keluhan pengguna.
              </p>
            </div>
          </header>
        </div>
        <TabsContents defaultValue="all" values={items} />
      </div>
    </>
  );
};

export default InboxPage;
