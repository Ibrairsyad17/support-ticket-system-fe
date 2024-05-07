import React from "react";
import TabsContents from "@/app/(pages)/(dashboard)/components/Tabs/TabsContents";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/components/Columns";
import data from "@/MOCK_DATA.json";
export const metadata = {
  title: "Daftar Keluhan | Helptix",
  description: "Daftar Keluhan Pengguna",
};

const items = [
  {
    value: "all",
    label: "Semua",
    DataTable: (
      <DataTable data={data} columns={columns} filteredBy="description" />
    ),
  },
];

const ListComplaintsPage = async () => {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-5">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-6">
              <div className="col-span-4 flex flex-col space-y-2">
                <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                  Data Keluhan
                </h1>
                <p className="mt-2 text-sm text-gray-400">
                  Kelola data keluhan dari pengguna layanan anda.
                </p>
              </div>
            </div>
          </header>
        </div>
        <TabsContents defaultValue="all" values={items} />
      </div>
    </>
  );
};

export default ListComplaintsPage;