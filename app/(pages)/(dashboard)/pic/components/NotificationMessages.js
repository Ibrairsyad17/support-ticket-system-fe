import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NotificationMessages = () => {
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
        <div className="ml-auto font-medium text-sm text-green-500">1m</div>
      </div>
    </div>
  );
};

export default NotificationMessages;
