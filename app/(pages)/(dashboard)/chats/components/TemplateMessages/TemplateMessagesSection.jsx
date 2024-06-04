"use client";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import AddTemplateMessages from "@/app/(pages)/(dashboard)/chats/components/TemplateMessages/AddTemplateMessages";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTemplateMessages,
  getStatus,
  selectAllTemplateMessages,
} from "@/app/redux/slices/templateMessagesSlice";

const TemplateMessagesSection = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const selectTemplateMessage = useSelector(selectAllTemplateMessages);
  const getStatusInfo = useSelector(getStatus);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchTemplateMessages(session.token.data.token));
      }
    }
  }, [session, getStatusInfo, dispatch]);

  return (
    <div className="flex justify-between items-center px-4">
      <div>
        <RadioGroup
          defaultValue="comfortable"
          className="flex w-[93%] overflow-x-scroll"
        >
          {selectTemplateMessage.map((item) => (
            <div
              key={item.id}
              className="flex flex-shrink-0 items-center space-x-2"
            >
              <RadioGroupItem
                className="hidden w-full"
                value={item.id}
                id={`r${item.id}`}
              />
              <Label
                className="cursor-pointer px-3 py-1 rounded-full text-xs border border-gray-300 "
                htmlFor={`r${item.id}`}
              >
                {item.message}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <AddTemplateMessages messages={selectTemplateMessage} />
    </div>
  );
};

export default TemplateMessagesSection;
