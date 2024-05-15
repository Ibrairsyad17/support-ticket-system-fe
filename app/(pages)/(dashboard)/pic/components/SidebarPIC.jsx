"use client";
import {
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconActive,
  TicketIcon as TicketIconActive,
  UserIcon as UserIconActive,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import SidebarContent from "@/app/(pages)/(dashboard)/components/Sidebars/SidebarContent";
import React from "react";
import { usePathname } from "next/navigation";
import NavbarSidebar from "@/app/(pages)/(dashboard)/components/Sidebars/NavbarSidebar";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const listLink = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    active: HomeIconActive,
    type: "link",
    href: "/pic/dashboard",
  },
  {
    title: "Tiket",
    icon: TicketIcon,
    active: TicketIconActive,
    type: "link",
    href: "/pic/tickets",
  },
  {
    title: "Profil",
    icon: UserIcon,
    active: UserIconActive,
    type: "link",
    href: "/pic/profile",
  },
];
const SidebarPIC = () => {
  const pathname = usePathname();
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
              onClick={() => signOut({ callbackUrl: "/" })}
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

export default SidebarPIC;
