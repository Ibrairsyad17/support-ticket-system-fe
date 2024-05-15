"use client";
import React from "react";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/admin/tickets/components/Columns";
import TabsContents from "@/app/(pages)/(dashboard)/components/Tabs/TabsContents";

const data = [
  {
    id: "TK-4556",
    name: "Heung Min Son",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    assigned: { name: "Bagas Kuncoro", image: "https://github.com/shadcn.png" },
    status: "Ditugaskan",
    priority: "Normal",
  },
  {
    id: "TK-4557",
    name: "Park Ji Sung",
    description:
      "Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    assigned: { name: "Bagas Kuncoro", image: "https://github.com/shadcn.png" },
    status: "Ditugaskan",
    priority: "Tinggi",
  },
];

const items = [
  {
    value: "all",
    label: "Semua",
    DataTable: (
      <DataTable data={data} columns={columns} filteredBy="description" />
    ),
  },
];

const TicketsAdminPage = async () => {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-5">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header>
            <div className="col-span-4 flex flex-col space-y-2">
              <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                Tiket
              </h1>
              <p className="mt-2 text-md text-gray-400">
                Kelola ticket dari keluhan pengguna.
              </p>
            </div>
          </header>
        </div>
        <TabsContents defaultValue="all" values={items} />
      </div>
    </>
  );
};

export default TicketsAdminPage;
