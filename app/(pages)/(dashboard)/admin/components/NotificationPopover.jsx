"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon } from "@radix-ui/react-icons";
import NotificationContents from "@/app/(pages)/(dashboard)/admin/components/NotificationContents";
import useNotifications from "@/hooks/useNotifications";

const NotificationPopover = () => {
  const { notifications } = useNotifications();

  return (
    <Popover>
      <PopoverTrigger className="border px-2.5 rounded-md shadow-sm">
        <BellIcon className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-[50rem] pt-0.5 lg:mr-3.5">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between items-center pb-1.5 pt-2.5 border-b">
            <h1 className="text-lg font-semibold">Notifikasi Terbaru</h1>
          </div>
          <NotificationContents notifications={notifications} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
