import React from "react";
import TabsContents from "@/app/(pages)/(dashboard)/components/Tabs/TabsContents";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/pic/tickets/components/Columns";

export const metadata = {
  title: "Daftar Tiket | Helptix",
  description: "Daftar Tiket Pengguna",
};

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
    DataTable: <DataTable data={data} columns={columns} filteredBy="name" />,
  },
];

const TicketsPICPage = () => {
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
