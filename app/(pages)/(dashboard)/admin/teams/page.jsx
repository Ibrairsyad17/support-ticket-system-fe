"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FilePlusIcon } from "@radix-ui/react-icons";
import AddPICDialog from "@/app/(pages)/(dashboard)/admin/teams/components/AddPICDialog";
import { useSession } from "next-auth/react";
import { getUsersPIC } from "@/app/api/repository/usersAndCompanyRepository";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeams,
  getLoadingStatus,
  getStatus,
  searchPIC,
  selectAllTeams,
  selectFilteredTeams,
} from "@/app/redux/slices/teamsSlice";
import DataTableTeams from "@/app/(pages)/(dashboard)/components/DataTable/DataTableTeams";
import { Input } from "@/components/ui/input";

const TeamsPage = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const inputRef = React.useRef(null);

  // Selectors
  const filteredTeams = useSelector(selectFilteredTeams);
  const loadingStatus = useSelector(getLoadingStatus);
  const status = useSelector(getStatus);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (status === "idle") {
        dispatch(fetchTeams(session?.token.data.token));
      }
    }
  }, [session?.token.data.token, status, dispatch]);

  const handleSearch = () => {
    dispatch(searchPIC(inputRef.current.value));
  };

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
            <Input
              type="search"
              placeholder="Cari Data PIC..."
              className="w-250px md:w-[100px] lg:w-[300px]"
              ref={inputRef}
              onChange={handleSearch}
            />
          </div>
        </div>
        <DataTableTeams data={filteredTeams} />
      </div>
    </>
  );
};

export default TeamsPage;
