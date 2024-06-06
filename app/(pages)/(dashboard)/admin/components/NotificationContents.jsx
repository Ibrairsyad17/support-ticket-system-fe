"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { useSocket } from "@/app/SocketIOProvider";
import { Button } from "@/components/ui/button";

const NotificationContents = () => {
  const { data: session } = useSession();
  const socket = useSocket();

  console.log(
    "Socket connected:",
    socket ? socket.connected : "Socket is null",
  );

  React.useEffect(() => {
    if (socket) {
      socket.on("NOTIFICATION", (data) => {
        console.log(data);
        // Handle the notification data here
        // For example, you could set it in state and display it in your component
      });
    }

    return () => {
      if (socket) {
        socket.off("NOTIFICATION");
      }
    };
  }, [socket]);

  const sendNotification = () => {
    if (socket) {
      socket.emit("NOTIFICATION", {
        message: "Hello, World!",
      });
      console.log("Notification sent!");
    } else {
      console.log("Socket is not connected!");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="text-sm leading-none hover:underline mb-1">
            <span className="font-semibold">Admin</span> menyebut anda dalam
            tiket <span className="font-semibold">TC-125</span>
          </p>
          <div className="text-sm flex space-x-2">
            <span>4 April 2024</span>
            <span>&#183;</span>
            <span>3 menit yang lalu</span>
          </div>
        </div>
        <div className="ml-auto font-medium text-sm text-green-500">
          <Button size="xs" onClick={sendNotification}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationContents;
