"use client";
import React from "react";

import { socials } from "@/app/(pages)/(dashboard)/components/data/data";
import { useDispatch } from "react-redux";
import {
  filterComplaintsByDate,
  filterComplaintsByPlatform,
} from "@/app/redux/slices/complaintsSlice";

const SelectPlatform = () => {
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
    <div className="my-3.5">
      {socials.map((social) => (
        <div key={social.value}>
          <input
            type="checkbox"
            value={social.value}
            onChange={handleFilterChange}
          />{" "}
          {social.label}
        </div>
      ))}
      {/*  Filter By date*/}
      <div>
        <input
          type="checkbox"
          value="today"
          onChange={handleDateFilterChange}
        />{" "}
        Today
      </div>
      <div>
        <input
          id="yesterday"
          type="checkbox"
          value="yesterday"
          className="sr-only checkbox"
          onChange={handleDateFilterChange}
        />{" "}
        <label
          htmlFor="yesterday"
          className="checkbox-label px-4 py-1 text-sm border rounded-full"
        >
          Yesterday
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          value="this week"
          onChange={handleDateFilterChange}
        />{" "}
        This Week
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
          Last Month
        </label>
      </div>
    </div>
  );
};

export default SelectPlatform;
