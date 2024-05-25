"use client";
import React from "react";
import { DataTable } from "@/app/(pages)/(dashboard)/components/DataTable/DataTable";
import { columns } from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/components/Columns";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComplaints,
  getStatus,
  Loading,
  selectComplaints,
  selectFilteredComplaintsByDate,
  selectFilteredComplaintsByPlatform,
} from "@/app/redux/slices/complaintsSlice";

const ListComplaints = () => {
  const { data: session } = useSession();
  const [complaints, setComplaints] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const complaintsData = useSelector(selectComplaints);
  const complaintsByPlatform = useSelector(selectFilteredComplaintsByPlatform);
  const complaintsByDate = useSelector(selectFilteredComplaintsByDate);
  const getStatusInfo = useSelector(getStatus);
  const getLoading = useSelector(Loading);

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
            data={filteredComplaints}
            columns={columns}
            filteredBy="assignment_name"
            loading={getLoading}
          />
        </div>
      </div>
    </>
  );
};

export default ListComplaints;
