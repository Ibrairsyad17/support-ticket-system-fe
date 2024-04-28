"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowPathIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
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
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    href: "/admin/complaint",
  },
  {
    title: "Pesan",
    icon: InboxIcon,
    active: InboxIconActive,
    type: "multi-link",
    links: [
      { title: "Pesan Masuk", href: "/admin/message/inbox" },
      { title: "Menunggu", href: "/admin/messagge/progress" },
      { title: "Selesai", href: "/admin/message/done" },
    ],
    href: "/admin/inbox",
  },
  {
    title: "Tiket",
    icon: TicketIcon,
    active: TicketIconActive,
    type: "link",
    href: "/admin/ticket",
  },
  {
    title: "Kelola Tim",
    icon: UsersIcon,
    active: UsersIconActive,
    type: "link",
    href: "/admin/team",
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

const NavbarSidebarAdmin = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div>
      <div className="sticky top-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="flex items-center py-2">
          <Button
            variant="ghost"
            type="button"
            className="text-gray-500 hover:text-gray-600 px-2 my-0"
            aria-label="Toggle navigation"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sr-only">Toggle Navigation</span>
            <Bars3Icon className={`w-5 h-5`} />
          </Button>

          <ol
            className="ms-3 flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-green-500">
              Helptix
              <ChevronRightIcon
                className={`flex-shrink-0 mx-2 overflow-visible text-gray-400 w-4 h-4`}
              />
            </li>
            <li
              className={`text-sm font-semibold text-gray-800 truncate`}
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      <div
        className={`fixed top-0 ${sidebarOpen ? "hidden" : "z-40 bg-gray-900 bg-opacity-25"} start-0 bottom-0 end-0`}
        onClick={() => setSidebarOpen(true)}
      >
        <div
          id="application-sidebar"
          className={` ${sidebarOpen ? "hidden" : "flex flex-col justify-between"} fixed top-0 start-0 bottom-0 z-40 w-64 bg-white border-e border-gray-200 py-7 overflow-y-auto lg:flex lg:flex-col lg:justify-between lg:align-center lg:translate-x-0 lg:end-auto lg:bottom-0`}
        >
          <div>
            <div className="px-7 pt-2 mb-2">
              <a
                className="flex-none text-xl text-green-500 font-semibold "
                href="#"
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
              </a>
            </div>

            <nav className="hs-accordion-group px-7 py-4 w-full flex flex-col flex-wrap">
              <ul className="space-y-2">
                {listLink.map((item, index) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <li key={index}>
                      {item.type === "multi-link" ? (
                        <Accordion type="single" className="w-full" collapsible>
                          <AccordionItem
                            value={`item-${item.href}`}
                            className="border-none"
                          >
                            <AccordionTrigger
                              className={`flex items-center justify-between ${isActive ? "font-semibold bg-muted" : ""} gap-x-4 py-2 px-3 text-sm text-slate-700 rounded-lg hover:bg-gray-100 bg-white w-full shadow-none cursor-pointer hover:no-underline`}
                            >
                              <div className="flex space-x-4">
                                {isActive ? (
                                  <item.active className={`w-5 h-5`} />
                                ) : (
                                  <item.icon className={`w-5 h-5`} />
                                )}
                                <span>{item.title}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <nav className="flex flex-col space-y-1 mx-3.5 mt-2 ">
                                {item.links.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-6 py-2 text-sm hover:bg-gray-100 rounded-md ${pathname === item.href ? "font-semibold bg-gray-100" : ""}`}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </nav>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          className={`flex items-center gap-x-4 py-2 px-3 text-sm ${isActive ? "font-semibold bg-gray-100" : ""} text-slate-700 rounded-lg hover:bg-gray-100`}
                          href={item.href}
                        >
                          {isActive ? (
                            <item.active className={`w-5 h-5`} />
                          ) : (
                            <item.icon className={`w-5 h-5`} />
                          )}

                          {item.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div>
            <div className="px-7">
              <Link
                className={`flex items-center gap-x-4 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100`}
                href=""
              >
                <ArrowRightStartOnRectangleIcon className={`w-5 h-5`} />
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSidebarAdmin;
