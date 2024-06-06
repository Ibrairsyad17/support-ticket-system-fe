"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowPathIcon,
  ArrowRightStartOnRectangleIcon,
  DocumentTextIcon,
  HomeIcon,
  InboxIcon,
  TicketIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconActive,
  TicketIcon as TicketIconActive,
  UserIcon as UserIconActive,
  UsersIcon as UsersIconActive,
  ArrowPathIcon as ArrowPathIconActive,
  InboxIcon as InboxIconActive,
  DocumentTextIcon as DocumentTextIconActive,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SidebarContent from "@/app/(pages)/(dashboard)/components/Sidebars/SidebarContent";
import NavbarSidebar from "@/app/(pages)/(dashboard)/components/Sidebars/NavbarSidebar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { userLogout } from "@/app/api/repository/usersAndCompanyRepository";

const listLink = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    active: HomeIconActive,
    type: "link",
    href: "/admin/dashboard",
  },
  {
    title: "Data Keluhan",
    icon: DocumentTextIcon,
    active: DocumentTextIconActive,
    type: "multi-link",
    links: [
      { title: "Kata Kunci", href: "/admin/complaints/keywords" },
      { title: "Data Keluhan", href: "/admin/complaints/list-complaints" },
    ],
    href: "/admin/complaints",
  },
  {
    title: "Pesan",
    icon: InboxIcon,
    active: InboxIconActive,
    type: "multi-link",
    links: [
      { title: "Pesan Masuk", href: "/admin/message/inbox" },
      { title: "Menunggu", href: "/admin/message/progress" },
      { title: "Selesai", href: "/admin/message/done" },
    ],
    href: "/admin/message",
  },
  {
    title: "Tiket",
    icon: TicketIcon,
    active: TicketIconActive,
    type: "link",
    href: "/admin/tickets",
  },
  {
    title: "Kelola Tim",
    icon: UsersIcon,
    active: UsersIconActive,
    type: "link",
    href: "/admin/teams",
  },
  {
    title: "Hubungkan Akun",
    icon: ArrowPathIcon,
    active: ArrowPathIconActive,
    type: "link",
    href: "/admin/sync-account",
  },
  {
    title: "Profil",
    icon: UserIcon,
    active: UserIconActive,
    type: "link",
    href: "/admin/profile",
  },
];

const SidebarAdmin = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { toast } = useToast();
  return (
    <div>
      <NavbarSidebar listLink={listLink} />
      <div
        id="application-sidebar"
        className={`transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-40 w-64 bg-white border-e border-gray-200 py-7 overflow-y-auto lg:flex lg:flex-col lg:justify-between lg:align-center lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300`}
      >
        <div>
          <div className="px-7 pt-2 mb-2">
            <Link
              className="flex-none text-xl text-green-500 font-semibold "
              href="/"
              aria-label="Brand"
            >
              <Image
                width={500}
                height={500}
                priority
                src="/assets/img/logo-helptix.svg"
                alt="Logo Helptix"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hs-accordion-group px-7 py-2.5 w-full flex flex-col flex-wrap">
            <SidebarContent pathname={pathname} listLink={listLink} />
          </nav>
        </div>

        <div>
          <div className="px-7">
            <Button
              className={`flex w-full justify-start items-center gap-x-4 text-sm text-slate-700 `}
              onClick={async () => {
                // signOut({ callbackUrl: "/" });

                try {
                  await userLogout(session?.token.data.token);
                  toast({
                    title: "Berhasil Keluar",
                    variant: "success",
                    description: "Berhasil keluar dari aplikasi",
                  });
                  signOut({ callbackUrl: "/" });
                } catch (error) {
                  console.log(error);
                  toast({
                    title: "Gagal Keluar",
                    variant: "destructive",
                    description: "Gagal keluar dari aplikasi",
                  });
                }
              }}
              variant="ghost"
            >
              <ArrowRightStartOnRectangleIcon className={`w-5 h-5`} />
              <span>Keluar</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
