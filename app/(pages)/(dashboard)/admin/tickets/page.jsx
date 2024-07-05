"use client";
import React from "react";
import DataTableTickets from "@/app/(pages)/(dashboard)/components/DataTable/DataTableTickets";
import { Input } from "@/components/ui/input";
import FilterDataTickets from "@/app/(pages)/(dashboard)/components/DataTable/FilterDataTickets";
import { Button } from "@/components/ui/button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import useTickets from "@/hooks/useTickets";

const TicketsAdminPage = () => {
  const { filteredTickets, handleSearch, handleRefresh } = useTickets();

  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-5">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-6">
              <div className="col-span-3 flex flex-col space-y-2">
                <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                  Tiket
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
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
                <FilterDataTickets />
              </div>
            </div>
          </header>
        </div>
        <DataTableTickets
          data={filteredTickets}
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

export default TicketsAdminPage;
