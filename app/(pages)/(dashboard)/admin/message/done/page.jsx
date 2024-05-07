import React from "react";
import TabsContents from "@/app/(pages)/(dashboard)/components/Tabs/TabsContents";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/admin/message/inbox/components/Columns";

const data = [
  {
    id: 1,
    name: "son.coyg00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    time: "22-03-2024",
    platform: "Instagram",
  },
  {
    id: 2,
    name: "mark.inv55",
    description:
      "onsectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    time: "21-03-2024",
    platform: "X",
  },
];

const items = [
  {
    value: "all",
    label: "Semua",
    DataTable: (
      <DataTable
        data={data}
        columns={columns}
        filteredBy="description"
        type="headerless"
      />
    ),
  },
];

const DoneMessagesPage = () => {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-5">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header>
            <div className="col-span-4 flex flex-col space-y-2">
              <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                Pesan Selesai
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

export default DoneMessagesPage;
