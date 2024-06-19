"use client";
import { Inter } from "next/font/google";
import Header from "@/app/(pages)/(auth)/sync-account/components/Header";
import "../../../globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Header></Header>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
