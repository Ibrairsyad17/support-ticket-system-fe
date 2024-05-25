import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  filterComplaintsByDate,
  filterComplaintsByPlatform,
} from "@/app/redux/slices/complaintsSlice";
import { socials } from "@/app/(pages)/(dashboard)/components/data/data";

const FilterData = () => {
  const dispatch = useDispatch();
  const [selectedPlatforms, setSelectedPlatforms] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleFilterChange = (event) => {
    if (event.target.checked) {
      setSelectedPlatforms([...selectedPlatforms, event.target.value]);
    } else {
      setSelectedPlatforms(
        selectedPlatforms.filter((platform) => platform !== event.target.value),
      );
    }
    console.log("handleFilterChange", selectedPlatforms);
  };

  // Dispatch the action whenever selectedPlatforms changes
  React.useEffect(() => {
    dispatch(filterComplaintsByPlatform(selectedPlatforms));
    console.log("useEffect", selectedPlatforms);
  }, [selectedPlatforms, dispatch]);

  // Filter by date

  const handleDateFilterChange = (event) => {
    if (event.target.checked) {
      setSelectedDate(event.target.value);
    } else {
      setSelectedDate(null);
    }
  };

  // Dispatch the action whenever selectedDate changes
  React.useEffect(() => {
    dispatch(filterComplaintsByDate(selectedDate));
  }, [selectedDate, dispatch]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="text-xs">
          <FilterIcon className="h-3.5 w-3.5 mr-2" />
          Filter Data
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
              <h5 className="text-sm font-medium">Platform</h5>
              <div className="flex space-x-2.5">
                {socials.map((social) => (
                  <div key={social.value}>
                    <input
                      id={social.label}
                      type="checkbox"
                      value={social.value}
                      onChange={handleFilterChange}
                      className="sr-only checkbox"
                    />{" "}
                    <label
                      htmlFor={social.label}
                      className="checkbox-label px-4 py-1 text-sm border rounded-full"
                    >
                      {social.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Filter By date*/}
            <div className="flex flex-col space-y-2.5">
              <h5 className="text-sm font-medium">Waktu</h5>
              <div className="grid grid-cols-3 gap-y-3">
                <div>
                  <input
                    id="today"
                    type="checkbox"
                    value="today"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="today"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Hari Ini
                  </label>
                </div>
                <div>
                  <input
                    id="yesterday"
                    type="checkbox"
                    value="yesterday"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="yesterday"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Kemarin
                  </label>
                </div>
                <div>
                  <input
                    id="this-week"
                    type="checkbox"
                    value="this week"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="this-week"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Minggu Ini
                  </label>
                </div>
                <div>
                  <input
                    id="last-month"
                    type="checkbox"
                    value="last month"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="last-month"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Bulan Lalu
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterData;
