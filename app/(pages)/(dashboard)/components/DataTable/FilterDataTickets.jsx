import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import {
  priorities,
  statuses,
} from "@/app/(pages)/(dashboard)/components/data/data";
import { useDispatch } from "react-redux";
import { filteredTicketsByPriorityAndStatus } from "@/app/redux/slices/ticketsSlice";

const FilterDataTickets = () => {
  const [openPopover, setOpenPopover] = React.useState(false);
  const dispatch = useDispatch();

  // Selectors
  const [selectedPriorities, setSelectedPriorities] = React.useState([]);
  const [selectedStatuses, setSelectedStatuses] = React.useState([]);
  const [selectedTime, setSelectedTime] = React.useState([]);

  // Handlers
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

  const clearFilters = () => {
    setSelectedPriorities([]);
    setSelectedStatuses([]);
    setSelectedTime([]);
    setOpenPopover(false);
  };

  React.useEffect(() => {
    dispatch(
      filteredTicketsByPriorityAndStatus({
        priorities: selectedPriorities,
        statuses: selectedStatuses,
      }),
    );
  }, [selectedPriorities, selectedStatuses, selectedTime, dispatch]);

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <MixerHorizontalIcon className="h-3.5 w-3.5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-5">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-lg">Filter Data</h4>
            <p className="text-sm text-muted-foreground">
              Cari data keluhan berdasarkan:
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2.5">
              <h5 className="text-sm font-medium">Prioritas</h5>
              <div className="flex space-x-2.5">
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
                      className="checkbox-label px-4 py-1 text-sm border rounded-full flex space-x-3 items-center"
                    >
                      {priority.value === "LOW" && (
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      )}
                      {priority.value === "MEDIUM" && (
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      )}
                      {priority.value === "HIGH" && (
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      )}

                      <span>{priority.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-2.5">
              <h5 className="text-sm font-medium">Status</h5>
              <div className="flex flex-wrap">
                {statuses.map((status) => (
                  <div key={status.value} className="my-1 mr-2">
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
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={clearFilters}>Atur Ulang</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterDataTickets;
