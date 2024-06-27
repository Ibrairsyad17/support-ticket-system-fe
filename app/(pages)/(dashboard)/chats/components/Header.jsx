import React from "react";
import Link from "next/link";
import { ChevronLeft, Instagram, WhatsApp, X } from "@mui/icons-material";
import {
  CheckCircledIcon,
  DotsHorizontalIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DetailsCustomer from "@/app/(pages)/(dashboard)/chats/components/DetailsCustomer";
import { changeMessageStatus } from "@/app/api/repository/messagesRepository";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

const Header = ({ data, cid }) => {
  const { data: session } = useSession();

  const { toast } = useToast();

  const handleChangeStatusWaiting = async () => {
    const res = await changeMessageStatus(
      cid,
      false,
      session?.token.data.token,
    );
    if (res.status === 200) {
      toast({
        title: "Status Berhasil Diubah",
        variant: "success",
        description: "Status pesan berhasil diubah menjadi menunggu",
      });
    } else {
      toast({
        title: "Status Gagal Diubah",
        variant: "destructive",
        description: "Status pesan gagal diubah",
      });
    }
  };

  const handleChangeStatusDone = async () => {
    const res = await changeMessageStatus(cid, true, session?.token.data.token);
    console.log(res);
    if (res.status === 200) {
      toast({
        title: "Status Berhasil Diubah",
        variant: "success",
        description: "Status pesan berhasil diubah menjadi selesai",
      });
    } else {
      toast({
        title: "Status Gagal Diubah",
        variant: "destructive",
        description: "Status pesan gagal diubah",
      });
    }
  };

  return (
    <div className="w-full flex p-5 border-b justify-between items-center">
      <div className="">
        <Link href={"/admin/message/inbox"}>
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </Link>
      </div>

      <div className="flex space-x-3 5 items-center">
        <h1 className="text-md lg:text-lg font-semibold text-gray-900">
          {data.customers?.platform === "INSTAGRAM" &&
            data.customers?.instagram_username}
          {data.customers?.platform === "TWITTER" &&
            data.customers?.twitter_username}
          {data.customers?.platform === "WHATSAPP" &&
            data.customers?.whatsapp_username}
        </h1>
        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
        <div className="flex space-x-3 5 items-center">
          <h1 className="text-sm lg:text-md text-gray-500">
            {data.customers?.platform === "INSTAGRAM" && "via Instagram"}
            {data.customers?.platform === "TWITTER" && "via X (Twitter)"}
            {data.customers?.platform === "WHATSAPP" && "via WhatsApp"}
          </h1>
          {data.customers?.platform === "INSTAGRAM" && (
            <Instagram className="w-5 h-5 text-rose-500" />
          )}
          {data.customers?.platform === "TWITTER" && (
            <X className="w-5 h-5 text-gray-900" />
          )}
          {data.customers?.platform === "WHATSAPP" && (
            <WhatsApp className="w-5 h-5 text-green-500" />
          )}
        </div>
      </div>

      <div className="flex space-x-3 items-center">
        <Popover>
          <PopoverTrigger>
            <DotsHorizontalIcon className="w-6 h-6 text-gray-800" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-[200px] p-2">
            <Button variant="ghost" onClick={handleChangeStatusWaiting}>
              <ClockIcon className="mr-2 h-4 w-4" /> Tandai Menunggu
            </Button>
            <Button variant="ghost" onClick={handleChangeStatusDone}>
              <CheckCircledIcon className="mr-2 h-4 w-4" /> Tandai Selesai
            </Button>
          </PopoverContent>
        </Popover>
        <Drawer className="lg:hidden">
          <DrawerTrigger asChild>
            <InfoCircledIcon className="w-5 h-5 text-gray-800 lg:hidden" />
          </DrawerTrigger>
          <DrawerContent className="h-[40rem]">
            <DetailsCustomer type="mobile" data={data} />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
