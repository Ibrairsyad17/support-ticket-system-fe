import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Comment = () => {
  return (
    <div className="border rounded-lg flex flex-col space-y-2 p-3.5">
      <div className="flex space-x-2.5 items-center text-xs">
        <Avatar className="h-4 w-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="" />
          <AvatarFallback className="bg-gray-200 text-gray-400">
            P
          </AvatarFallback>
        </Avatar>
        <span>Bagas Kuncoro</span>
        <span className="text-gray-600">3 jam yang lalu</span>
      </div>
      <p className="text-gray-600 text-left">
        You can use anything for this stuff bro, you got this.
      </p>
    </div>
  );
};

export default Comment;
