import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WhatsApp } from "@mui/icons-material";

const WhatsAppCard = () => {
  return (
    <div className="grid grid-cols-1 gap-3 shadow-md shadow-gray-100 rounded-lg py-5 px-4">
      <div className="flex w-full justify-between items-center">
        <div
          className={`flex-shrink-0 flex justify-center mr-1.5 items-center size-[30px] bg-white shadow-sm rounded-lg`}
        >
          <WhatsApp className={`w-5 h-5 flex-shrink-0 size-3`} />
        </div>
        <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-normal bg-teal-100 text-teal-800 rounded-full">
          <CheckCircleIcon className="flex-shrink-0 size-3 w-4 h-4" />
          Terhubung
        </span>
      </div>
      <h3 className="font-semibold leading-none tracking-tight text-sm mt-2.5">
        WhatsApp
      </h3>
      <p className=" leading-none tracking-tight font-medium text-gray-400 text-xs">
        Hubungkan dengan akun WhatsApp
      </p>
      <Button asChild className="text-xs" size="sm">
        <Link href={`/sync-account/whatsapp`}>
          <Link1Icon className="mr-2 h-3 w-3" /> Hubungkan WhatsApp
        </Link>
      </Button>
    </div>
  );
};

export default WhatsAppCard;
