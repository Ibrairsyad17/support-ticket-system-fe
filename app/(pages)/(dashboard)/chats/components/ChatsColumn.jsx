"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChatById,
  getStatus,
  selectChats,
  selectChatsInfo,
} from "@/app/redux/slices/messagesSlice";

const ChatsColumn = ({ id }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const chats = useSelector(selectChats);
  const chatsInfo = useSelector(selectChatsInfo);
  const getStatusInfo = useSelector(getStatus);

  const messageEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [chats]);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(
          fetchChatById({
            id: id,
            token: session?.token.data.token,
          }),
        );
      }
    }
  }, [session?.token.data.token, dispatch, getStatusInfo]);

  return (
    <ul className="space-y-5 w-full px-6 py-4 h-[20rem] lg:h-[35rem] overflow-y-scroll">
      {chats.map((chat) => {
        const date = new Date(chat.sent_time);
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();

        const timeSent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

        return (
          <li
            key={chat.id}
            className={`flex ${
              chat.sender === chatsInfo.customer_id
                ? "justify-start"
                : "justify-end"
            } gap-x-2 sm:gap-x-4`}
          >
            {chat.sender !== chatsInfo.customer_id && (
              <span className="self-end text-gray-500 text-xs ">
                {timeSent}
              </span>
            )}
            <div
              className={`${
                chat.sender === chatsInfo.customer_id
                  ? "bg-white border border-gray-200 rounded-2xl pt-2.5 pb-1.5 px-4 leading-none space-y-3"
                  : "bg-gray-900 border border-gray-200 rounded-2xl pt-2.5 pb-1.5 px-4 leading-none space-y-3"
              } `}
            >
              <div className="space-y-1.5">
                <p
                  className={`mb-1.5 text-sm ${
                    chat.sender === chatsInfo.customer_id
                      ? "text-gray-900"
                      : "text-white"
                  }`}
                >
                  {chat.message}
                </p>
              </div>
            </div>
            {chat.sender === chatsInfo.customer_id && (
              <span className="self-end text-gray-500 text-xs ">
                {timeSent}
              </span>
            )}
          </li>
        );
      })}
      <div ref={messageEndRef} />
    </ul>
  );
};

export default ChatsColumn;
