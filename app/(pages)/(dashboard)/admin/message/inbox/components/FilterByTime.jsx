"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { filterByTime } from "@/app/redux/slices/messagesSlice";
import { useDispatch } from "react-redux";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const FilterByTime = () => {
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = React.useState(true);

  const handleRadioChange = (event) => {
    if (event.target.checked) {
      dispatch(filterByTime(event.target.value));
      if (event.target.value === "latest") {
        setSelectedTime(true);
      } else {
        setSelectedTime(false);
      }
    }
  };

  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger
          variant="ghost"
          className="font-medium flex space-x-3 items-center py-1.5 hover:border-b-2 hover:border-gray-900 w-full duration-100 transition-all"
        >
          {selectedTime ? "Terbaru" : "Terlama"}
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </PopoverTrigger>
        <PopoverContent className="p-2.5 border-none text-sm w-[10rem]">
          <div className="flex flex-col space-y-2">
            <label
              className={`flex cursor-pointer hover:bg-gray-100 items-center justify-between px-3 py-2 rounded-lg ${selectedTime && "bg-gray-100"}`}
            >
              <input
                type="radio"
                name="time"
                value="latest"
                onChange={handleRadioChange}
                defaultChecked
                className="sr-only"
              />
              <span>Terbaru</span>
              {selectedTime && <CheckIcon className="w-3 h-3" />}
            </label>
            <label
              className={`flex cursor-pointer hover:bg-gray-100 items-center justify-between px-3 py-2 rounded-lg ${!selectedTime && "bg-gray-100"}`}
            >
              <input
                type="radio"
                name="time"
                value="oldest"
                onChange={handleRadioChange}
                className="sr-only"
              />
              <span>Terlama</span>
              {!selectedTime && <CheckIcon className="w-3 h-3" />}
            </label>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterByTime;
