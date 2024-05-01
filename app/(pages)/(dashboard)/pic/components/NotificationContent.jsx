import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon } from "@radix-ui/react-icons";
import NotificationMessages from "@/app/(pages)/(dashboard)/pic/components/NotificationMessages";

const NotificationContent = () => {
  return (
    <Popover>
      <PopoverTrigger className="border px-2.5 rounded-md shadow-sm">
        <BellIcon className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-[30rem] pt-0.5 lg:mr-3.5">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between items-center pb-1.5 pt-2.5 border-b">
            <h1 className="text-lg font-semibold">Notifikasi</h1>
          </div>
          <NotificationMessages />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationContent;
