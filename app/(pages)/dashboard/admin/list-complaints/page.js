import React from "react";
import { Button } from "@/components/ui/button";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import TabsContent from "@/app/(pages)/dashboard/admin/list-complaints/TabsContent";
export const metadata = {
  title: "Daftar Keluhan | Helptix",
  description: "Daftar Keluhan Pengguna",
};
const ListComplaintsPage = () => {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-5">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-6">
              <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                Data Keluhan
              </h1>
              <div className="col-span-2 flex space-x-2 sm:w-full lg:w-auto place-self-end">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="md:w-[100px] lg:w-[300px]"
                />
                <Button variant="outline" size="icon">
                  <MixerHorizontalIcon className="h-4 w-4 text-amber-500" />
                </Button>
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
