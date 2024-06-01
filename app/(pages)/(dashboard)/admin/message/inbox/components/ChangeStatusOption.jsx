"use client";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  changeMessageStatus,
  fetchMessages,
  selectSelectedItems,
} from "@/app/redux/slices/messagesSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle2Icon } from "lucide-react";
import { ClockIcon } from "@heroicons/react/24/outline";

const ChangeStatusOption = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const selectedItems = useSelector(selectSelectedItems);

  const handleChangeStatusDone = () => {
    selectedItems.forEach((id) => {
      dispatch(
        changeMessageStatus({
          id,
          status: true,
          token: session?.token.data.token,
        }),
      );
    });
    dispatch(fetchMessages(session?.token.data.token));
  };

  const handleChangeStatusWaiting = () => {
    selectedItems.forEach((id) => {
      dispatch(
        changeMessageStatus({
          id,
          status: false,
          token: session?.token.data.token,
        }),
      );
    });
    dispatch(fetchMessages(session?.token.data.token));
  };
  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger
          variant="outline"
          className="font-medium flex space-x-3 text-sm px-4 items-center py-1.5 rounded hover:bg-gray-100 w-full duration-100 transition-all"
        >
          Ubah Status
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </PopoverTrigger>
        <PopoverContent className="p-2.5 border-none text-sm w-[10rem]">
          <div className="flex flex-col space-y-2">
            <Button
              variant="ghost"
              onClick={handleChangeStatusWaiting}
              className="w-full"
            >
              <ClockIcon className="w-4 h-4 mr-2" />
              Menunggu
            </Button>
            <Button
              variant="ghost"
              onClick={handleChangeStatusDone}
              className="w-full"
            >
              <CheckCircle2Icon className="w-4 h-4 mr-2" />
              Selesai
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChangeStatusOption;
