"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { filterByStatus } from "@/app/redux/slices/messagesSlice";
import { useDispatch } from "react-redux";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const FilterByStatus = () => {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = React.useState("ALL");

  const handleRadioChange = (event) => {
    dispatch(filterByStatus(event.target.value));
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger
          variant="ghost"
          className="font-medium flex space-x-3 items-center py-1.5 hover:border-b-2 hover:border-gray-900 w-full duration-100 transition-all"
        >
          {selectedStatus === "ALL" && "Semua Status"}
          {selectedStatus === "true" && "Selesai"}
          {selectedStatus === "false" && "Menunggu"}
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </PopoverTrigger>
        <PopoverContent className="p-2.5 border-none text-sm w-[10rem]">
          <div onChange={handleRadioChange} className="flex flex-col space-y-2">
            <label
              className={`flex cursor-pointer hover:bg-gray-100 w-full items-center justify-between px-3 py-2 rounded-lg ${selectedStatus === "ALL" && "bg-gray-100"}`}
            >
              <input
                type="radio"
                className={`sr-only`}
                name="platform"
                value="ALL"
                defaultChecked
              />
              All
              {selectedStatus === "ALL" && <CheckIcon className="w-3 h-3" />}
            </label>
            <label
              className={`flex cursor-pointer hover:bg-gray-100 w-full items-center justify-between px-3 py-2 rounded-lg ${selectedStatus === "INSTAGRAM" && "bg-gray-100"}`}
            >
              <input
                type="radio"
                className="sr-only"
                name="platform"
                value="true"
              />
              Selesai
              {selectedStatus === "true" && <CheckIcon className="w-3 h-3" />}
            </label>
            <label
              className={`flex cursor-pointer hover:bg-gray-100 w-full items-center justify-between px-3 py-2 rounded-lg ${selectedStatus === "TWITTER" && "bg-gray-100"}`}
            >
              <input
                type="radio"
                className="sr-only"
                name="platform"
                value="false"
              />
              Menunggu
              {selectedStatus === "false" && <CheckIcon className="w-3 h-3" />}
            </label>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterByStatus;
