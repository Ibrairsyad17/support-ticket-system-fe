"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComplaints,
  getStatus,
  Loading,
  selectComplaints,
  selectFilteredComplaintsByPlatform,
  selectFilteredComplaintsByDate,
} from "@/app/redux/slices/complaintsSlice";
import SelectPlatform from "@/app/(pages)/(dashboard)/admin/experiment/SelectPlatform";

const Page = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
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
    <div className="lg:ps-72 pt-7 pr-5">
      <h1 className="text-2xl font-semibold">Complaint Data</h1>
      <SelectPlatform />
      <ul className="mt-5 space-y-2">
        {filteredComplaints.map((complaint) => (
          <li
            key={complaint.id}
            className="px-5 py-3 rounded-lg border flex justify-between"
          >
            <div className="flex space-x-5">
              <p>{complaint.assignment_name}</p>
              <p className="capitalize text-xs text-amber-600 bg-amber-100 px-2 rounded py-1">
                {
                  complaint.conversation_messages.conversations.social_media
                    .platform
                }
              </p>
              <p className="text-xs text-green-600 bg-green-100 px-2 rounded py-1">
                {complaint.assignment_date}
              </p>
            </div>

            <Button variant="destructive" size="xs" className="text-xs px-2">
              Hapus
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
