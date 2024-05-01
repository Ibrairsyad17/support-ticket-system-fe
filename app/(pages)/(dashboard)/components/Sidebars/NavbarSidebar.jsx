"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarContent from "@/app/(pages)/(dashboard)/components/Sidebars/SidebarContent";

const NavbarSidebar = ({ listLink }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="sticky top-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="flex items-center py-2">
          <Sheet>
            <SheetTrigger className="py-2">
              <span className="sr-only">Toggle Navigation</span>
              <Bars3Icon className={`w-5 h-5`} />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 flex flex-col justify-between"
            >
              <SheetHeader>
                <SheetTitle className="mb-3">
                  <Link
                    className="flex-none text-xl text-green-500 font-semibold "
                    href="/public"
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
                </SheetTitle>
                <SheetDescription>
                  <SidebarContent pathname={pathname} listLink={listLink} />
                </SheetDescription>
              </SheetHeader>
              <div className="">
                <Link
                  className={`flex items-center gap-x-4 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100`}
                  href=""
                >
                  <ArrowRightStartOnRectangleIcon className={`w-5 h-5`} />
                  Log Out
                </Link>
              </div>
            </SheetContent>
          </Sheet>

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
    </div>
  );
};

export default NavbarSidebar;
