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
import { getAllNotifications } from "@/app/api/repository/notificationRepository";

const NotificationPopover = () => {
  const { data: session } = useSession();
  const sockets = useSocket();
  const socket = sockets ? sockets.notifications : null;
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    if (socket) {
      socket.on("NOTIFICATION", async (data) => {
        const restructuredData = {
          action_by_accounts: {
            id: data.action_by_id,
            name: data.action_by_name,
            photo_profile: data.action_by_photo,
          },
          action_message: data.action_message,
          action_type: data.action_type,
          recipient: data.recipient_id,
          recipient_accounts: {
            name: data.recipient_name,
          },
          updated_at: data.sent_time,
        };
        setNotifications((prevNotifications) => {
          return [restructuredData, ...prevNotifications];
        });
      });
    }

    return () => {
      if (socket) {
        socket.off("NOTIFICATION");
      }
    };
  }, [socket]);

  const fetchNotifications = async () => {
    const res = await getAllNotifications(session?.token.data.token);
    if (res) {
      const notificate = res.data.data.notifications.map((notification) => {
        let status = { ...notification };
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
          status.action_by_accounts.id,
          status.action_by_accounts.name,
        );

        return name;
      });

      setNotifications(notificate);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchNotifications();
    }
  }, [session?.token.data.token]);

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
