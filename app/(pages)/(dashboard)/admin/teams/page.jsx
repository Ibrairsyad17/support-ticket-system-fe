"use client";
import React from "react";
import TabsContents from "@/app/(pages)/(dashboard)/components/Tabs/TabsContents";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/admin/teams/components/Columns";
import { Button } from "@/components/ui/button";
import { FilePlusIcon } from "@radix-ui/react-icons";
import AddPICDialog from "@/app/(pages)/(dashboard)/admin/teams/components/AddPICDialog";
import { useSession } from "next-auth/react";
import { getUsersPIC } from "@/app/api/repository/usersRepository";

const TeamsPage = () => {
  const { data: session } = useSession();
  const [pics, setPics] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPics = async () => {
    const res = await getUsersPIC(session?.token.data.token, "PIC");
    if (res) {
      setPics(res.data.data.accounts);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchPics();
    }
  }, [session?.token.data.token]);

  const items = [
    {
      value: "all",
      label: "Semua",
      DataTable: (
        <DataTable
          data={pics}
          columns={columns}
          filteredBy="name"
          loading={isLoading}
        />
      ),
    },
  ];
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-3">
        {/* Header Section */}
        <div className="col-span-1 flex flex-col lg:flex-row justify-between space-y-3.5 lg:items-end h-auto">
          <header>
            <div className="lg:col-span-4 flex flex-col space-y-2">
              <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                Kelola Tim
              </h1>
              <p className="mt-2 text-md text-gray-400">
                Kelola tim karyawan anda untuk pengguna.
              </p>
            </div>
          </header>
          <div className="flex space-x-2 items-center">
            <AddPICDialog />
            <Button variant="outline">
              <FilePlusIcon className="mr-2 h-4 w-4" /> Import PIC
            </Button>
          </div>
        </div>
        <TabsContents defaultValue="all" values={items} />
      </div>
    </>
  );
};

export default TeamsPage;
