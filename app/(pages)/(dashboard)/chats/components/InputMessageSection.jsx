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
import { useSelector } from "react-redux";

const InputMessageSection = () => {
  const selectedTemplate = useSelector(
    (state) => state.templateMessages.selectedTemplateMessage,
  );
  const inputRef = React.useRef();

  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);

  const addEmoji = (emoji) => {
    const text = `${inputRef.current.value}${emoji.native}`;
    inputRef.current.value = text;
    setShowEmojiPicker(false);
  };

  return (
    <div className="w-full lg:w-8/12 flex flex-col z-50 absolute bottom-0 left-0">
      <TemplateMessagesSection />
      <div className="grid grid-cols-6 lg:grid-cols-12 px-5 items-center">
        <div className="col-span-1 flex space-x-2 h-20 items-center">
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
        <form action="" className="col-span-4 lg:col-span-10">
          <Input
            className="shadow-none border-none focus-visible:ring-0 focus:ring-0 focus:outline-none w-full"
            placeholder="Ketikkan pesan"
            defaultValue={selectedTemplate || inputRef.current?.value}
            ref={inputRef}
          ></Input>
        </form>
        <div className="col-span-1 flex space-x-2 h-20 items-center place-self-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              console.log(inputRef.current.value);
            }}
          >
            <PaperPlaneIcon className="h-5 w-5 text-violet-700" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputMessageSection;
