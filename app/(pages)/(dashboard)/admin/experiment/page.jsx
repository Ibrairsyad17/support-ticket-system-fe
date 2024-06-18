"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "react-datepicker/dist/react-datepicker.css";
import { useSession } from "next-auth/react";
import {
  fetchTemplateMessages,
  getStatus,
  selectAllTemplateMessages,
  selectTemplateMessage,
} from "@/app/redux/slices/templateMessagesSlice";

const Page = () => {
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
    <div className="lg:ps-72 lg:pr-5 flex flex-col space-y-2">
      <h1 className="mt-8 text-2xl font-semibold">Halo</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {templateMessage.map((message, index) => (
            <CarouselItem
              key={message.id}
              className="md:basis-1/3 flex-shrink-0 flex items-center"
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Page;
