"use client";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMultipleTickets,
  fetchTickets,
  filteredTicketsByPriorityAndStatus,
  getStatus,
  resetSelectedItems,
  selectFilteredTickets,
  selectItem,
  selectSelectedItems,
  selectAllItems,
} from "@/app/redux/slices/ticketsSlice";
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  priorities,
  statuses,
} from "@/app/(pages)/(dashboard)/components/data/data";
import { Label } from "@/components/ui/label";

const Page = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  // Selectors
  const filteredTickets = useSelector(selectFilteredTickets);
  const selectedItems = useSelector(selectSelectedItems);
  const [selectedPriorities, setSelectedPriorities] = React.useState([]);
  const [selectedStatuses, setSelectedStatuses] = React.useState([]);
  const [selectedTime, setSelectedTime] = React.useState([]);
  const getStatusInfo = useSelector(getStatus);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchTickets(session?.token.data.token));
        console.log("fetchTickets dispatched");
      }
    }
  }, [session?.token.data.token, getStatusInfo, dispatch]);

  // Handlers
  const handleDelete = (id) => {
    dispatch(
      deleteMultipleTickets({
        ids: [Number(id)],
        token: session?.token.data.token,
      }),
    );
  };

  const handlePriorityChange = (e) => {
    if (e.target.checked) {
      setSelectedPriorities([...selectedPriorities, e.target.value]);
    } else {
      setSelectedPriorities(
        selectedPriorities.filter((priority) => priority !== e.target.value),
      );
    }
  };

  const handleStatusChange = (e) => {
    if (e.target.checked) {
      setSelectedStatuses([...selectedStatuses, e.target.value]);
    } else {
      setSelectedStatuses(
        selectedStatuses.filter((status) => status !== e.target.value),
      );
    }
  };

  const handleTimeChange = (e) => {
    if (e.target.checked) {
      setSelectedTime([...selectedTime, e.target.value]);
    } else {
      setSelectedTime(selectedTime.filter((time) => time !== e.target.value));
    }
  };

  const handleDeleteMultiple = () => {
    dispatch(
      deleteMultipleTickets({
        ids: selectedItems,
        token: session?.token.data.token,
      }),
    );
    dispatch(resetSelectedItems());
  };

  const handleSelectAll = (checked) => {
    dispatch(selectAllItems(checked));
  };

  React.useEffect(() => {
    dispatch(
      filteredTicketsByPriorityAndStatus({
        priorities: selectedPriorities,
        statuses: selectedStatuses,
        time: selectedTime,
      }),
    );
  }, [selectedPriorities, selectedStatuses, selectedTime, dispatch]);

  return (
    <div className="lg:ps-72 flex flex-col space-y-6">
      <h1 className="mt-8 text-2xl font-semibold">Experiment Page</h1>
      <div className="flex space-x-3">
        {priorities.map((priority) => (
          <div key={priority.value}>
            <input
              id={priority.label}
              type="checkbox"
              value={priority.value}
              onChange={handlePriorityChange}
              className="sr-only checkbox"
            />{" "}
            <label
              htmlFor={priority.label}
              className="checkbox-label px-4 py-1 text-sm border rounded-full"
            >
              {priority.label}
            </label>
          </div>
        ))}
        {statuses.map((status) => (
          <div key={status.value}>
            <input
              id={status.label}
              type="checkbox"
              value={status.value}
              onChange={handleStatusChange}
              className="sr-only checkbox"
            />{" "}
            <label
              htmlFor={status.label}
              className="checkbox-label px-4 py-1 text-sm border rounded-full"
            >
              {status.label}
            </label>
          </div>
        ))}
        <div>
          <input
            id="last7days"
            type="checkbox"
            value="last7days"
            checked={selectedTime.includes("last7days")}
            onChange={handleTimeChange}
            className="checkbox"
          />
          <label
            htmlFor="last7days"
            className="checkbox-label px-4 py-1 text-sm border rounded-full"
          >
            Last 7 Days
          </label>
        </div>
        <div>
          <input
            id="lastmonth"
            type="checkbox"
            value="lastmonth"
            checked={selectedTime.includes("lastmonth")}
            onChange={handleTimeChange}
            className="checkbox"
          />
          <label
            htmlFor="lastmonth"
            className="checkbox-label px-4 py-1 text-sm border rounded-full"
          >
            Last month
          </label>
        </div>
      </div>
      <div className="flex space-x-3">
        <Checkbox
          className="ml-4"
          checked={selectedItems.length === filteredTickets.length}
          onCheckedChange={handleSelectAll}
        />
        <Label>Check All</Label>
        {selectedItems.length > 0 && (
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDeleteMultiple}
          >
            Delete Selected
          </Button>
        )}
      </div>

      {filteredTickets.map((ticket) => (
        <div
          key={ticket.id}
          className="flex justify-between items-center border px-4 py-2 mb-2"
        >
          <div className="flex items-center space-x-3">
            <Checkbox
              className="mt-0.5"
              checked={selectedItems.includes(Number(ticket.id))}
              onCheckedChange={() => dispatch(selectItem(ticket.id))}
            />
            <p>{ticket.ticket_id}</p>
            <p>{ticket.assignment_name}</p>
            <span className="px-2 py-1 text-xs bg-green-50 text-green-600 rounded-full">
              Status: {ticket.status}
            </span>
            <span className="px-2 py-1 text-blue-600 bg-blue-50 text-xs rounded-full">
              Prioritas: {ticket.priority}
            </span>
            <span className="px-2 py-1 text-amber-600 bg-amber-50 text-xs rounded-full">
              {ticket.assignment_date}
            </span>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => handleDelete(ticket.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Page;
