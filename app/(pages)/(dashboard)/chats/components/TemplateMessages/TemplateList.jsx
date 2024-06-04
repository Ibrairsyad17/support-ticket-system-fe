"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { removeTemplateMessage } from "@/app/redux/slices/templateMessagesSlice";

const TemplateList = ({ data }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const handleRemoveTemplate = (id) => {
    dispatch(removeTemplateMessage({ id, token: session.token.data.token }));
  };

  return (
    <div className="">
      <ul className="w-full flex flex-col divide-y h-48 overflow-y-scroll divide-gray-100">
        {data.map((message) => (
          <li
            key={message.id}
            className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px"
          >
            <div className="flex justify-between w-full items-center">
              {message.message}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleRemoveTemplate(message.id)}
              >
                <TrashIcon className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;
