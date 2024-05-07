import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import AddTemplateMessages from "@/app/(pages)/(dashboard)/chats/components/TemplateMessages/AddTemplateMessages";

const TemplateMessagesSection = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <div>
        <RadioGroup defaultValue="comfortable" className="flex flex-wrap">
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="hidden" value="default" id="r1" />
            <Label
              className="cursor-pointer px-3 py-1 rounded-full text-xs border border-gray-300 "
              htmlFor="r1"
            >
              Apa masalah atau keluhan Anda?
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="hidden" value="comfortable" id="r2" />
            <Label
              className="cursor-pointer px-3 py-1 rounded-full text-xs border border-gray-300 "
              htmlFor="r2"
            >
              Kapan Anda mengalami masalah ini?
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="hidden" value="compact" id="r3" />
            <Label
              className="cursor-pointer px-3 py-1 rounded-full text-xs border border-gray-300 "
              htmlFor="r3"
            >
              Bagaimana kami dapat membantu Anda?
            </Label>
          </div>
        </RadioGroup>
      </div>

      <AddTemplateMessages />
    </div>
  );
};

export default TemplateMessagesSection;
