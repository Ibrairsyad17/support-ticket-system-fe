import React from "react";
import Link from "next/link";
import { ChevronLeft, Instagram } from "@mui/icons-material";
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

const Header = () => {
  return (
    <div className="w-full flex p-5 border-b justify-between items-center">
      <div className="">
        <Link href={"/admin/complaints/list-complaints"}>
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </Link>
      </div>

      <div className="flex space-x-3 5 items-center">
        <h1 className="text-md lg:text-lg font-semibold text-gray-900">
          @mark.verstappen77
        </h1>
        <div className="h-1 w-1 rounded-full bg-gray-500"></div>
        <div className="flex space-x-3 5 items-center">
          <h1 className="text-sm lg:text-md text-gray-500">via Instagram</h1>
          <Instagram className="w-5 h-5 text-rose-500" />
        </div>
      </div>

      <div className="flex space-x-3 items-center">
        <Popover>
          <PopoverTrigger>
            <DotsHorizontalIcon className="w-6 h-6 text-gray-800" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-[200px] p-2">
            <Button variant="ghost">
              <ClockIcon className="mr-2 h-4 w-4" /> Tandai Menunggu
            </Button>
            <Button variant="ghost">
              <CheckCircledIcon className="mr-2 h-4 w-4" /> Tandai Selesai
            </Button>
          </PopoverContent>
        </Popover>
        <Drawer className="lg:hidden">
          <DrawerTrigger asChild>
            <InfoCircledIcon className="w-5 h-5 text-gray-800 lg:hidden" />
          </DrawerTrigger>
          <DrawerContent className="h-[40rem]">
            <DetailsCustomer type="mobile" />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
