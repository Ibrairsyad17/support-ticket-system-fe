"use client";
import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import { DatePickerWithRange } from "@/app/(pages)/(dashboard)/components/DatePicker";
import {
  fetchComplaints,
  getStatus,
  selectFilteredComplaintsByDate,
} from "@/app/redux/slices/complaintsSlice";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const complaints = useSelector(selectFilteredComplaintsByDate);
  const getStatusInfo = useSelector(getStatus);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchComplaints(session?.token.data.token));
      }
    }
  }, [session?.token.data.token, dispatch, getStatusInfo]);

  return (
    <div className="lg:ps-72 lg:pr-5 flex flex-col space-y-2">
      <h1 className="mt-8 text-2xl font-semibold">Halo</h1>
      <DatePickerWithRange />
      <div className="flex flex-col space-y-2">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="flex justify-between">
            <p>{complaint.assignment_name}</p>
            <p>{complaint.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
