"use client";
import React from "react";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/components/Columns";
import { useSession } from "next-auth/react";
import { getAllComplaints } from "@/app/api/repository/complaintsRepository";

const ListComplaints = () => {
  const { data: session } = useSession();
  const [complaints, setComplaints] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchAllComplaints = async () => {
    const response = await getAllComplaints(session?.token.data.token);
    if (response) {
      setComplaints(response.data.data.assignments);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchAllComplaints();
    }
  }, [session?.token.data.token]);

  const items = [
    {
      value: "all",
      label: "Semua",
      DataTable: (
        <DataTable
          data={complaints}
          columns={columns}
          filteredBy="assignment_name"
          loading={isLoading}
        />
      ),
    },
  ];

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
        {/*<TabsContents defaultValue="all" values={items} />*/}
        <div className="col-span-1">
          <DataTable
            data={complaints}
            columns={columns}
            filteredBy="assignment_name"
            loading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default ListComplaints;
