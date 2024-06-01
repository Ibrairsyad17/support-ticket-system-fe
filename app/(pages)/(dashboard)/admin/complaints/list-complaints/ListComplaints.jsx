"use client";
import React, { useRef } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComplaints,
  getStatus,
  searchItems,
  selectFilteredComplaintsByDate,
  selectFilteredComplaintsByPlatform,
} from "@/app/redux/slices/complaintsSlice";
import { Input } from "@/components/ui/input";
import FilterData from "@/app/(pages)/(dashboard)/components/DataTable/FilterData";
import DataTableComplaints from "@/app/(pages)/(dashboard)/components/DataTable/DataTableComplaints";
import { Button } from "@/components/ui/button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const ListComplaints = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [lastRefreshDate, setLastRefreshDate] = React.useState(
    localStorage.getItem("lastRefreshDate")
      ? new Date(localStorage.getItem("lastRefreshDate"))
      : null,
  );

  // Selectors
  const complaintsByPlatform = useSelector(selectFilteredComplaintsByPlatform);
  const complaintsByDate = useSelector(selectFilteredComplaintsByDate);
  const getStatusInfo = useSelector(getStatus);

  const inputRef = useRef(null);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchComplaints(session?.token.data.token));
      }
    }
  }, [session?.token.data.token, getStatusInfo, dispatch]);

  const filteredComplaints = complaintsByPlatform.filter((complaint) =>
    complaintsByDate.includes(complaint),
  );

  // Handlers
  const handleSearch = () => {
    dispatch(searchItems(inputRef.current.value));
  };

  const handleRefresh = () => {
    dispatch(fetchComplaints(session?.token.data.token));
    const currentDate = new Date();
    setLastRefreshDate(currentDate);

    // Save the last refresh date to local storage whenever it changes
    localStorage.setItem("lastRefreshDate", currentDate.toString());
  };

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
