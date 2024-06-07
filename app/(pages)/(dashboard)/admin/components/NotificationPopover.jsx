"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon } from "@radix-ui/react-icons";
import NotificationContents from "@/app/(pages)/(dashboard)/admin/components/NotificationContents";
import { useSocket } from "@/app/SocketIOProvider";
import { useSession } from "next-auth/react";

const NotificationPopover = () => {
  const socket = useSocket();
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    const savedNotifications = localStorage.getItem("notifications");
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
  }, []);

  React.useEffect(() => {
    if (socket) {
      socket.on("NOTIFICATION", async (data) => {
        let status = { ...data };
        status.action_message = status.action_message.replace(
          "IN_PROGRESS",
          "Dikerjakan",
        );
        status.action_message = status.action_message.replace(
          "DONE",
          "Selesai",
        );
        status.action_message = status.action_message.replace(
          "CHECKED",
          "Diperiksa",
        );
        status.action_message = status.action_message.replace(
          "ASSIGNED",
          "Ditugaskan",
        );

        let name = { ...status };
        name.action_message = name.action_message.replace(
          status.action_by_id,
          status.action_by_name,
        );

        setNotifications((prevNotifications) => {
          const newNotifications = [name, ...prevNotifications];
          localStorage.setItem(
            "notifications",
            JSON.stringify(newNotifications),
          );
          return newNotifications;
        });
      });
    }

    return () => {
      if (socket) {
        socket.off("NOTIFICATION");
      }
    };
  }, [socket]);

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
