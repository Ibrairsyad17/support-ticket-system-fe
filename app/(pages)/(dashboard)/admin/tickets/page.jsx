"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTickets,
  getStatus,
  selectFilteredTickets,
  searchItems,
} from "@/app/redux/slices/ticketsSlice";
import DataTableTickets from "@/app/(pages)/(dashboard)/components/DataTable/DataTableTickets";
import { Input } from "@/components/ui/input";
import FilterDataTickets from "@/app/(pages)/(dashboard)/components/DataTable/FilterDataTickets";
import { Button } from "@/components/ui/button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const TicketsAdminPage = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [lastRefreshDate, setLastRefreshDate] = React.useState(
    localStorage.getItem("lastRefreshDate")
      ? new Date(localStorage.getItem("lastRefreshDate"))
      : null,
  );

  // Selectors
  const filteredTickets = useSelector(selectFilteredTickets);
  const getStatusInfo = useSelector(getStatus);

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchTickets(session?.token.data.token));
      }
    }
  }, [session?.token.data.token, getStatusInfo, dispatch]);

  const handleSearch = () => {
    dispatch(searchItems(inputRef.current.value));
  };

  const handleRefresh = () => {
    dispatch(fetchTickets(session?.token.data.token));
    const currentDate = new Date();
    setLastRefreshDate(currentDate);

    // Save the last refresh date to local storage whenever it changes
    localStorage.setItem("lastRefreshDate", currentDate.toString());
  };
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
                  <span>
                    Data terakhir diperbaharui pada{" "}
                    {lastRefreshDate?.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex space-x-3 lg:col-span-3 lg:self-end lg:place-self-end">
                <div className="flex space-x-4 items-center">
                  <Input
                    type="search"
                    placeholder="Cari data keluhan..."
                    className="w-250px md:w-[100px] lg:w-[400px]"
                    ref={inputRef}
                    onChange={handleSearch}
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
