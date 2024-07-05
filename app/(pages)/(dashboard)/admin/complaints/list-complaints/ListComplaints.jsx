"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import FilterData from "@/app/(pages)/(dashboard)/components/DataTable/FilterData";
import DataTableComplaints from "@/app/(pages)/(dashboard)/components/DataTable/DataTableComplaints";
import { Button } from "@/components/ui/button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import useComplaints from "@/hooks/useComplaints";

const ListComplaints = () => {
  const { filteredComplaints, handleSearch, handleRefresh } = useComplaints();

  return (
    <>
      <div className="w-full pt-5 lg:pt-8 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-5">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-6">
              <div className="col-span-3 flex flex-col space-y-2">
                <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                  Data Keluhan
                </h1>
                <div className="mt-2 text-sm text-gray-400 flex items-center space-x-3">
                  <span>Data terakhir diperbaharui pada </span>
                </div>
              </div>
              <div className="flex space-x-3 lg:col-span-3 lg:self-end lg:place-self-end">
                <div className="flex space-x-4 items-center">
                  <Input
                    type="search"
                    placeholder="Cari data keluhan..."
                    className="w-250px md:w-[100px] lg:w-[400px]"
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                  />
                  <FilterData />
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* Table Section */}
        <DataTableComplaints
          data={filteredComplaints}
          refresh={
            <Button
              onClick={handleRefresh}
              className="text-gray-400"
              variant="ghost"
              size="icon"
            >
              <ArrowPathIcon className="h-4 w-4" />
            </Button>
          }
        />
      </div>
    </>
  );
};

export default ListComplaints;
