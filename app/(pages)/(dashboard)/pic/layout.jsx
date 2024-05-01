import React from "react";
import "../../../globals.css";
import { Inter } from "next/font/google";
import SidebarPIC from "@/app/(pages)/(dashboard)/pic/components/SidebarPIC";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard PIC | Helptix",
  description: "Dashboard PIC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarPIC />
        {children}
      </body>
    </html>
  );
}
