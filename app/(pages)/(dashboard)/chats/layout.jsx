"use client";
import React from "react";
import "../../../globals.css";
import { Inter_Tight } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import StoreProvider from "@/app/redux/StoreProvider";
import SocketIOProvider from "@/app/SocketIOProvider";

const inter = Inter_Tight({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${inter.className} max-h-screen`}>
        <SessionProvider session={session}>
          <StoreProvider>
            <SocketIOProvider>{children}</SocketIOProvider>
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
