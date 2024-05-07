import { Inter } from "next/font/google";
import Header from "@/app/(pages)/(auth)/sync-account/components/Header";
import "../../../globals.css";

export const metadata = {
  title: "Hubungkan Akun | Helptix",
  description: "Generated by Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}