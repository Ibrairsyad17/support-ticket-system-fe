"use client";
import React from "react";
import AddTemplateMessages from "@/app/(pages)/(dashboard)/chats/components/TemplateMessages/AddTemplateMessages";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTemplateMessages,
  getStatus,
  selectAllTemplateMessages,
  selectTemplateMessage,
} from "@/app/redux/slices/templateMessagesSlice";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

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
    <div className="flex justify-between items-center bg-white pb-3 px-4 relative bottom-0 left-0">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[87%]"
      >
        <CarouselContent>
          {templateMessage.map((message) => (
            <CarouselItem
              key={message.id}
              className="flex-shrink-0 flex items-center"
            >
              <div className="p-1">
                <div className="">
                  <input
                    type="radio"
                    id={message.id}
                    name="message"
                    value={message.id}
                    onChange={() => {
                      dispatch(selectTemplateMessage(message.message));
                    }}
                    className="sr-only checkbox"
                  />
                  <label
                    htmlFor={message.id}
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    {message.message}
                  </label>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>

      <AddTemplateMessages messages={templateMessage} />
    </div>
  );
};

export default TemplateMessagesSection;
