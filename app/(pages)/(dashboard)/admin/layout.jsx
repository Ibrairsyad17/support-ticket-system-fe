import React from "react";
import "../../../globals.css";
import { Inter_Tight } from "next/font/google";
import SidebarAdmin from "@/app/(pages)/(dashboard)/admin/components/SidebarAdmin";

export const metadata = {
  title: "Dashboard | Helptix",
  description: "Dashboard Admin",
};

const inter = Inter_Tight({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarAdmin />
        {children}
      </body>
    </html>
  );
}
