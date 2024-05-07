import React from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

const TemplateList = () => {
  return (
    <div className="">
      <ul className="w-full flex flex-col divide-y divide-gray-100">
        <li className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full items-center">
            Apa masalah atau keluhan Anda?
            <Button size="sm" variant="ghost">
              <TrashIcon className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </li>
        <li className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full items-center">
            Kapan Anda mengalami masalah ini?
            <Button size="sm" variant="ghost">
              <TrashIcon className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </li>
        <li className="inline-flex items-center gap-x-2 pt-3 text-sm font-base bg-white text-gray-600 -mt-px">
          <div className="flex justify-between w-full items-center">
            Bagaimana kami dapat membantu Anda?
            <Button size="sm" variant="ghost">
              <TrashIcon className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TemplateList;
