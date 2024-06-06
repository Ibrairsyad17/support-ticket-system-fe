"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon } from "@radix-ui/react-icons";
import NotificationContents from "@/app/(pages)/(dashboard)/admin/components/NotificationContents";
import SocketIOProvider from "@/app/SocketIOProvider";
import { useSession } from "next-auth/react";
import { getUserInfo } from "@/app/api/repository/usersAndCompanyRepository";

const NotificationPopover = () => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = React.useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone_number: "",
    photo_profile: "",
    role: "",
    otp_enabled: "",
    company_id: "",
    pic_role_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const fetchUserInfo = async () => {
    const res = await getUserInfo(session?.token.data.token);
    if (res) {
      setUserInfo(res.data.data);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchUserInfo();
    }
  }, [session?.token.data.token]);

  return (
    <Popover>
      <PopoverTrigger className="border px-2.5 rounded-md shadow-sm">
        <BellIcon className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-[30rem] pt-0.5 lg:mr-3.5">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between items-center pb-1.5 pt-2.5 border-b">
            <h1 className="text-lg font-semibold">Notifikasi</h1>
          </div>
          <SocketIOProvider id={userInfo.company_id}>
            <NotificationContents />
          </SocketIOProvider>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
