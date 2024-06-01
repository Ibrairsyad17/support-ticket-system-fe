"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { filterByPlatform } from "@/app/redux/slices/messagesSlice";
import { useDispatch } from "react-redux";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const FilterByPlatform = () => {
  const dispatch = useDispatch();
  const [selectedPlatform, setSelectedPlatform] = React.useState("ALL");

  const handleRadioChange = (event) => {
    dispatch(filterByPlatform(event.target.value));
    setSelectedPlatform(event.target.value);
  };

  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger
          variant="ghost"
          className="font-medium flex space-x-3 items-center py-1.5 hover:border-b-2 hover:border-gray-900 w-full duration-100 transition-all"
        >
          {selectedPlatform === "ALL" && "Platform"}
          {selectedPlatform === "INSTAGRAM" && "Instagram"}
          {selectedPlatform === "TWITTER" && "X (Twitter)"}
          {selectedPlatform === "WHATSAPP" && "WhatsApp"}
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </PopoverTrigger>
        <PopoverContent className="p-2.5 border-none text-sm w-[10rem]">
          <div onChange={handleRadioChange} className="flex flex-col space-y-2">
            <label
              className={`flex cursor-pointer hover:bg-gray-100 w-full items-center justify-between px-3 py-2 rounded-lg ${selectedPlatform === "ALL" && "bg-gray-100"}`}
            >
              <input
                type="radio"
                className={`sr-only`}
                name="platform"
                value="ALL"
                defaultChecked
              />
              All
              {selectedPlatform === "ALL" && <CheckIcon className="w-3 h-3" />}
            </label>
            <label
              className={`flex cursor-pointer hover:bg-gray-100 w-full items-center justify-between px-3 py-2 rounded-lg ${selectedPlatform === "INSTAGRAM" && "bg-gray-100"}`}
            >
              <input
                type="radio"
                className="sr-only"
                name="platform"
                value="INSTAGRAM"
              />
              Instagram
              {selectedPlatform === "INSTAGRAM" && (
                <CheckIcon className="w-3 h-3" />
              )}
            </label>
            <label
              className={`flex cursor-pointer hover:bg-gray-100 w-full items-center justify-between px-3 py-2 rounded-lg ${selectedPlatform === "TWITTER" && "bg-gray-100"}`}
            >
              <input
                type="radio"
                className="sr-only"
                name="platform"
                value="TWITTER"
              />
              Twitter
              {selectedPlatform === "TWITTER" && (
                <CheckIcon className="w-3 h-3" />
              )}
            </label>
            <label
              className={`flex cursor-pointer hover:bg-gray-100 w-full items-center justify-between px-3 py-2 rounded-lg ${selectedPlatform === "WHATSAPP" && "bg-gray-100"}`}
            >
              <input
                type="radio"
                className="sr-only"
                name="platform"
                value="WHATSAPP"
              />
              WhatsApp
              {selectedPlatform === "WHATSAPP" && (
                <CheckIcon className="w-3 h-3" />
              )}
            </label>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterByPlatform;
