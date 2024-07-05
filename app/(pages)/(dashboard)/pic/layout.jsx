"use client";
import React from "react";
import "../../../globals.css";
import { Inter } from "next/font/google";
import SidebarPIC from "@/app/(pages)/(dashboard)/pic/components/SidebarPIC";
import { SessionProvider } from "next-auth/react";
import StoreProvider from "@/app/redux/StoreProvider";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "@/components/ui/toaster";
import SocketIOProvider from "@/context/SocketIOProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <StoreProvider>
            <SocketIOProvider>
              <SidebarPIC />
              {children}
              <Toaster />
            </SocketIOProvider>
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
