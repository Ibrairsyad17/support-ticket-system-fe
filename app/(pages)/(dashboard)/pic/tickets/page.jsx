"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { getUserInfo } from "@/app/api/repository/usersAndCompanyRepository";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTicketsPic,
  getStatus,
  Loading,
  searchItemsPic,
  selectFilteredTicketsPic,
  selectSelectedItems,
} from "@/app/redux/slices/ticketsSlice";
import DataTablePIC from "@/app/(pages)/(dashboard)/components/DataTable/DataTablePIC";
import { Input } from "@/components/ui/input";
import FilterDataTickets from "@/app/(pages)/(dashboard)/components/DataTable/FilterDataTickets";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const TicketsPICPage = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = React.useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone_number: "",
    photo_profile: "",
    role: "",
    otp_enabled: "",
    company_id: "",
    pic_role_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const [lastRefreshDate, setLastRefreshDate] = React.useState(
    localStorage.getItem("lastRefreshDate")
      ? new Date(localStorage.getItem("lastRefreshDate"))
      : null,
  );

  const selectTickets = useSelector(selectFilteredTicketsPic);
  const getStatusInfo = useSelector(getStatus);

  const fetchUserInfo = async () => {
    const res = await getUserInfo(session?.token.data.token);
    if (res) {
      setUserInfo(res.data.data);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchUserInfo();
    }
  }, [session?.token.data.token]);

  React.useEffect(() => {
    if (session?.token.data.token && userInfo.id) {
      if (getStatusInfo === "idle") {
        dispatch(
          fetchTicketsPic({
            token: session?.token.data.token,
            id: userInfo.id,
          }),
        );
      }
    }
  }, [session?.token.data.token, userInfo.id, dispatch]);

  const inputRef = React.useRef(null);

  const handleSearch = () => {
    dispatch(searchItemsPic(inputRef.current.value));
  };

  const handleRefresh = () => {
    dispatch(
      fetchTicketsPic({ token: session?.token.data.token, id: userInfo.id }),
    );
    const currentDate = new Date();
    setLastRefreshDate(currentDate);

    localStorage.setItem("lastRefreshDate", currentDate.toString());
  };

  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
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
                    {lastRefreshDate?.toLocaleString()}{" "}
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
        <DataTablePIC
          data={selectTickets}
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

export default TicketsPICPage;
