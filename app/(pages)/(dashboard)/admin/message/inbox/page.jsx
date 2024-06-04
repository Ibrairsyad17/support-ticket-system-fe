"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  filterByTime,
  getStatus,
  searchItems,
  selectFilteredMessages,
  stateLoading,
} from "@/app/redux/slices/messagesSlice";
import DataTableMessages from "@/app/(pages)/(dashboard)/components/DataTable/DataTableMessages";
import { Input } from "@/components/ui/input";
import FilterByTime from "@/app/(pages)/(dashboard)/admin/message/inbox/components/FilterByTime";
import FilterByPlatform from "@/app/(pages)/(dashboard)/admin/message/inbox/components/FilterByPlatform";
import DataTableSkeleton from "@/app/(pages)/(dashboard)/components/DataTable/DataTableSkeleton";
import FilterByStatus from "@/app/(pages)/(dashboard)/admin/message/inbox/components/FilterByStatus";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const InboxPage = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [lastRefreshDate, setLastRefreshDate] = React.useState(
    localStorage.getItem("lastRefreshDate")
      ? new Date(localStorage.getItem("lastRefreshDate"))
      : null,
  );

  // Selectors
  const messagesInbox = useSelector(selectFilteredMessages);
  const getStatusInfo = useSelector(getStatus);
  const getLoading = useSelector(stateLoading);

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchMessages(session?.token.data.token));
      }
    }
  }, [session?.token.data.token, getStatusInfo, dispatch]);

  const handleSearch = () => {
    dispatch(searchItems(inputRef.current.value));
  };

  const handleRefresh = () => {
    dispatch(fetchMessages(session?.token.data.token));
    const currentDate = new Date();
    setLastRefreshDate(currentDate);

    // Save the last refresh date to local storage whenever it changes
    localStorage.setItem("lastRefreshDate", currentDate.toString());
  };

  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-3">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header className="flex flex-col space-y-4">
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-6">
              <div className="col-span-4 flex flex-col space-y-2">
                <h1 className="block text-2xl col-span-4 font-bold text-gray-800 sm:text-3xl">
                  Pesan Masuk
                </h1>
                <div className="mt-2 text-sm text-gray-400 flex items-center space-x-3">
                  <span>
                    Data terakhir diperbaharui pada{" "}
                    {lastRefreshDate.toLocaleString()}{" "}
                  </span>
                </div>
              </div>
              <div className="flex space-x-3 w-full lg:col-span-2 lg:self-end lg:place-self-end">
                <div className="flex space-x-4 items-center w-full">
                  <Input
                    type="search"
                    placeholder="Cari pesan..."
                    className="w-full"
                    ref={inputRef}
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:flex lg:space-x-4">
              <span
                className="font-medium flex cursor-pointer border-b-2 border-gray-900 space-x-3 items-center py-1.5"
                onClick={() => {
                  dispatch(fetchMessages(session?.token.data.token));
                  dispatch(filterByTime("latest"));
                }}
              >
                Semua
              </span>
              <FilterByTime />
              <FilterByPlatform />
              <FilterByStatus />
            </div>
          </header>
        </div>
        {getLoading && <DataTableSkeleton />}
        {messagesInbox.length === 0 && !getLoading && (
          <div className="col-span-1 flex items-center justify-center h-[300px]">
            <p className="text-gray-400 text-lg">Tidak ada pesan</p>
          </div>
        )}
        {messagesInbox.length > 0 && !getLoading && (
          <DataTableMessages
            data={messagesInbox}
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
        )}
      </div>
    </>
  );
};

export default InboxPage;
