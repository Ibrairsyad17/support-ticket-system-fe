import React from "react";
import "../../../globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/app/(pages)/dashboard/components/Sidebar";
import {
  HomeIcon,
  DocumentTextIcon,
  InboxIcon,
  TicketIcon,
  UsersIcon,
  UserIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Dashboard | Helptix",
  description: "Dashboard Admin",
};

const listLink = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    route: "/dashboard/admin",
  },
  {
    title: "Data Keluhan",
    icon: DocumentTextIcon,
    route: "/dashboard/admin/complaint",
  },
  {
    title: "Pesan",
    icon: InboxIcon,
    route: "/dashboard/admin/inbox",
  },
  {
    title: "Tiket",
    icon: TicketIcon,
    route: "/dashboard/admin/ticket",
  },
  {
    title: "Kelola Tim",
    icon: UsersIcon,
    route: "/dashboard/admin/team",
  },
  {
    title: "Hubungkan Akun",
    icon: ArrowPathIcon,
    route: "/dashboard/admin/sync-account",
  },
  {
    title: "Profil",
    icon: UserIcon,
    route: "/dashboard/admin/profile",
  },
];

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar listLink={listLink} />
        {children}
      </body>
    </html>
  );
}
