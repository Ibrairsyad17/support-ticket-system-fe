"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetSelectedItems,
  selectSelectedItems,
  updateStatusTickets,
} from "@/app/redux/slices/ticketsSlice";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowUpIcon,
  CheckCircledIcon,
  ChevronDownIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ClockIcon } from "@heroicons/react/24/outline";

const ChangeStatus = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const selectedItems = useSelector(selectSelectedItems);

  const handleChangeStatus = (status) => {
    selectedItems.forEach((id) => {
      dispatch(
        updateStatusTickets({
          id,
          status,
          token: session?.token.data.token,
        }),
      );
    });
    dispatch(resetSelectedItems());
  };

  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger
          variant="outline"
          className="font-medium flex space-x-3 text-xs px-4 items-center py-1.5 rounded hover:bg-gray-100 w-full border border-gray-200 duration-100 transition-all"
        >
          Ubah Status
          <ChevronDownIcon className="w-3 h-3 ml-2" />
        </PopoverTrigger>
        <PopoverContent className="p-2.5 border-none text-sm w-[10rem]">
          <Button
            onClick={() => handleChangeStatus("DONE")}
            className="w-full flex space-x-3 justify-start text-xs"
            variant="ghost"
          >
            <CheckCircledIcon className="w-4 h-4 mr-2" />
            <span>Selesai</span>
          </Button>
          <Button
            onClick={() => handleChangeStatus("IN_PROGRESS")}
            className="w-full flex space-x-3 justify-start text-xs"
            variant="ghost"
          >
            <ClockIcon className="w-4 h-4 mr-2" />
            <span>Dikerja</span>kan
          </Button>
          <Button
            onClick={() => handleChangeStatus("ASSIGNED")}
            className="w-full flex space-x-3 justify-start text-xs"
            variant="ghost"
          >
            <ArrowUpIcon className="w-4 h-4 mr-2" />
            <span>Ditugas</span>kan
          </Button>
          <Button
            onClick={() => handleChangeStatus("WAITING")}
            className="w-full flex space-x-3 justify-start text-xs"
            variant="ghost"
          >
            <ReaderIcon className="w-4 h-4 mr-2" />
            <span>Diperik</span>sa
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChangeStatus;
