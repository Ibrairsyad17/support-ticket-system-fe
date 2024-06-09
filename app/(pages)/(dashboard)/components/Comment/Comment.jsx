import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const Comment = ({ id }) => {
  return (
    <div className="flex flex-col space-y-2.5 lg:items-center w-full">
      <div className="border rounded-lg flex flex-col space-y-2 p-3.5 w-full">
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
      <form className="w-full">
        <div className="w-full inline-flex space-x-2 rounded-lg border focus:border-none">
          <Input
            type="text"
            placeholder="Tulis Komentar..."
            className="border-none"
          />
          <Button size="icon" variant="ghost">
            <PaperPlaneIcon className="h-4 w-4 text-purple-600" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
