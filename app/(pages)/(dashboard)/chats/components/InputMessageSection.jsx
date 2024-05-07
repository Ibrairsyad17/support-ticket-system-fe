import React from "react";
import TemplateMessagesSection from "@/app/(pages)/(dashboard)/chats/components/TemplateMessages/TemplateMessagesSection";
import { Button } from "@/components/ui/button";
import { EmojiEmotionsOutlined } from "@mui/icons-material";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const InputMessageSection = () => {
  return (
    <div className="w-full flex flex-col">
      <TemplateMessagesSection />
      <div className="grid grid-cols-6 lg:grid-cols-12 px-5 items-center">
        <div className="col-span-1 flex space-x-2 h-20 items-center">
          <Button variant="ghost" size="icon">
            <EmojiEmotionsOutlined className="h-5 w-5 text-gray-400" />
          </Button>

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
          ></Input>
        </form>
        <div className="col-span-1 flex space-x-2 h-20 items-center place-self-end">
          <Button variant="ghost" size="icon">
            <PaperPlaneIcon className="h-5 w-5 text-violet-700" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputMessageSection;
