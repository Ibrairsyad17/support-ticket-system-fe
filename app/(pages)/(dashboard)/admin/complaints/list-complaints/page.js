import React from "react";
import TabsContent from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/components/TabsContent";
export const metadata = {
  title: "Daftar Keluhan | Helptix",
  description: "Daftar Keluhan Pengguna",
};

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
        <TabsContent></TabsContent>
      </div>
    </>
  );
};

export default ListComplaintsPage;
