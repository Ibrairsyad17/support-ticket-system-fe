"use client";
import React from "react";
import "../../../globals.css";
import { Inter } from "next/font/google";
import SidebarPIC from "@/app/(pages)/(dashboard)/pic/components/SidebarPIC";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <SidebarPIC />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
