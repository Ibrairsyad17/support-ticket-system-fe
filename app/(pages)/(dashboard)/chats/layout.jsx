import React from "react";
import "../../../globals.css";
import { Inter_Tight } from "next/font/google";

export const metadata = {
  title: "Pesan | Helptix",
  description: "Pesan Admin",
};

const inter = Inter_Tight({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
