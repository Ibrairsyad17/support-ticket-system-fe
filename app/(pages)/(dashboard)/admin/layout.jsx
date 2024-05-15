"use client";
import React from "react";
import "../../../globals.css";
import { Inter_Tight } from "next/font/google";
import SidebarAdmin from "@/app/(pages)/(dashboard)/admin/components/SidebarAdmin";
import { SessionProvider } from "next-auth/react";

const inter = Inter_Tight({ subsets: ["latin"] });
export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <SidebarAdmin />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
