import React from "react";
import SidebarProfiles from "@/app/(pages)/(dashboard)/components/Sidebars/SidebarProfiles";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Profil | Helptix",
  description: "Profil PIC",
};

const sidebarNavItems = [
  {
    title: "Profil",
    href: "/pic/profile",
  },
  {
    title: "Kata Sandi",
    href: "/pic/profile/password",
  },
];

export default function RootLayout({ children }) {
  return (
    <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 gap-5">
      {/* Header Section */}
      <div className="grid grid-cols-1 h-auto mb-3.5 gap-y-5">
        <header className={`col-span-1`}>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
              Profil
            </h1>
          </div>
          <p className="mt-2 text-base text-gray-400">
            Kelola profil kamu dan perusahaan kamu.
          </p>
        </header>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarProfiles items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-[600px] rounded-xl border shadow-sm p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
