import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Cross1Icon, ExitIcon, Link1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WhatsApp } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { deleteWhatsappSession } from "@/app/api/repository/usersAndCompanyRepository";

const WhatsAppCard = ({ data }) => {
  const { data: session } = useSession();

  const handleDeleteWhatsApp = async () => {
    const res = await deleteWhatsappSession(session?.token.data.token, data.id);
    if (res) window.location.reload();
  };

  return (
    <div className="grid grid-cols-1 gap-3 shadow-md shadow-gray-100 rounded-lg py-5 px-4">
      <div className="flex w-full justify-between items-center">
        <div
          className={`flex-shrink-0 flex justify-center mr-1.5 items-center size-[30px] bg-white shadow-sm rounded-lg`}
        >
          <WhatsApp
            className={`w-4 h-4 flex-shrink-0 text-green-600`}
            sx={{ fontSize: 20 }}
          />
        </div>
        {data.status === "CONNECTED" ? (
          <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-normal bg-teal-100 text-teal-800 rounded-full">
            <CheckCircleIcon className="flex-shrink-0 size-3 w-4 h-4 mx-1.5" />
            Terhubung
          </span>
        ) : (
          <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-normal bg-red-100 text-red-800 rounded-full">
            <Cross1Icon className="flex-shrink-0 size-4 w-3 h-3 mx-1.5" />
            Belum Terhubung
          </span>
        )}
      </div>
      <h3 className="font-semibold leading-none tracking-tight text-sm mt-2.5">
        WhatsApp
      </h3>
      <p className=" leading-none tracking-tight font-medium text-gray-400 text-xs">
        {data?.status === "CONNECTED" ? (
          <span>
            Username
            <span className="font-medium leading-4 ml-1.5">{data?.id}</span>
          </span>
        ) : (
          <span className="font-medium leading-4">{data?.name}</span>
        )}
      </p>
      {data.status === "CONNECTED" && (
        <Button
          className="text-xs"
          size="sm"
          variant="outline"
          onClick={handleDeleteWhatsApp}
        >
          <ExitIcon className="mr-2 h-3 w-3" /> Keluar
        </Button>
      )}
      {data.status === "DISCONNECTED" && (
        <Button asChild className="text-xs" size="sm">
          <Link href={`/sync-account/whatsapp`}>
            <Link1Icon className="mr-2 h-3 w-3" /> Hubungkan Whatsapp
          </Link>
        </Button>
      )}
    </div>
  );
};

export default WhatsAppCard;
