import React from "react";
import "../../../globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/app/(pages)/dashboard/components/Sidebar";
import { HomeIcon, TicketIcon, UserIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

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
    title: "Tiket",
    icon: TicketIcon,
    route: "/dashboard/admin/ticket",
  },
  {
    title: "Profil",
    icon: UserIcon,
    route: "/dashboard/admin/profile",
  },
];

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
