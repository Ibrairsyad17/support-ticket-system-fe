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
  selectTemplateMessage,
} from "@/app/redux/slices/templateMessagesSlice";

const TemplateMessagesSection = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const templateMessage = useSelector(selectAllTemplateMessages);
  const getStatusInfo = useSelector(getStatus);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchTemplateMessages(session.token.data.token));
      }
    }
  }, [session, getStatusInfo, dispatch]);

  return (
    <div className="flex justify-between items-center px-4 relative bottom-0 left-0">
      <div className="flex space-x-3 w-[93%] overflow-x-scroll py-1">
        {templateMessage.map((template) => (
          <div key={template.id} className="space-x-3 flex-shrink-0">
            <input
              type="radio"
              id={template.id}
              name="template"
              value={template.id}
              onChange={() => {
                dispatch(selectTemplateMessage(template.message));
              }}
              className="sr-only checkbox"
            />
            <label
              htmlFor={template.id}
              className="checkbox-label px-4 py-1 text-sm border rounded-full"
            >
              {template.message}
            </label>
          </div>
        ))}
      </div>

      <AddTemplateMessages messages={templateMessage} />
    </div>
  );
};

export default TemplateMessagesSection;
