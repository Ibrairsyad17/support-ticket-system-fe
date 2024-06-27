"use client";
import React from "react";
import TemplateMessagesSection from "@/app/(pages)/(dashboard)/chats/components/TemplateMessages/TemplateMessagesSection";
import { Button } from "@/components/ui/button";
import { EmojiEmotionsOutlined } from "@mui/icons-material";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useDispatch, useSelector } from "react-redux";
import {
  sendIGMessage,
  sendWAMessage,
} from "@/app/api/repository/customersRepository";
import { useSession } from "next-auth/react";
import { fetchChatById } from "@/app/redux/slices/messagesSlice";
import { selectSelectedTemplateMessage } from "@/app/redux/slices/templateMessagesSlice";
import { useSocket } from "@/app/SocketIOProvider";

const InputMessageSection = ({ sessionId, platform, customer, id }) => {
  const { data: session } = useSession();
  const accessToken = session?.token.data.token;

  // dispatch
  const dispatch = useDispatch();

  // Selectors
  const selectedTemplate = useSelector(selectSelectedTemplateMessage);

  // Text Ref
  const inputRef = React.useRef();

  // Emoji Picker State
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);

  // Call Websocket
  const sockets = useSocket();
  const socket = sockets ? sockets.conversations : null;

  // Emoji Handler
  const addEmoji = (emoji) => {
    const text = `${inputRef.current.value}${emoji.native}`;
    inputRef.current.value = text;
    setShowEmojiPicker(false);
  };

  // Handle Send Message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (platform === "WHATSAPP") {
      const dataToSend = {
        jid: customer.whatsapp_number,
        message: {
          text: inputRef.current.value,
        },
        type: "number",
      };

      const response = await sendWAMessage(accessToken, sessionId, dataToSend);
      inputRef.current.value = "";
    }

    if (platform === "INSTAGRAM") {
      const dataToSend = {
        recipient: customer.instagram_username,
        message: inputRef.current.value,
      };

      const response = await sendIGMessage(accessToken, sessionId, dataToSend);
      inputRef.current.value = "";
    }
  };

  React.useEffect(() => {
    if (socket) {
      socket.on("MESSAGE", async (data) => {
        dispatch(
          fetchChatById({
            id: id,
            token: accessToken,
          }),
        );
      });
    }

    return () => {
      if (socket) {
        socket.off("MESSAGE");
      }
    };
  }, [socket]);

  return (
    <div className="w-full lg:w-8/12 flex flex-col bg-white z-50 absolute bottom-0 left-0">
      <TemplateMessagesSection />
      <div className="grid grid-cols-6 lg:grid-cols-12 border-t px-5 items-center">
        <div className="col-span-1 flex space-x-2 h-16 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <EmojiEmotionsOutlined className="h-5 w-5 text-gray-400" />
          </Button>

          {showEmojiPicker && (
            <div className="absolute bottom-0 z-50">
              <Picker data={data} onEmojiSelect={addEmoji} theme="light" />
            </div>
          )}

          <div className="">
            <Input id="file-input" type="file" className="hidden" />
            <Label htmlFor="file-input">
              <PaperClipIcon className="h-5 w-5 text-gray-400" />
            </Label>
          </div>
        </div>
        <form
          onSubmit={handleSendMessage}
          className="col-span-5 flex w-full items-center justify-between lg:col-span-11"
        >
          <Input
            className="shadow-none border-none focus-visible:ring-0 focus:ring-0 focus:outline-none w-11/12"
            placeholder="Ketikkan pesan"
            defaultValue={selectedTemplate || inputRef.current?.value}
            ref={inputRef}
          ></Input>
          <Button variant="ghost" size="icon" className="w-1/12">
            <PaperPlaneIcon className="h-5 w-5 text-violet-700" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InputMessageSection;
