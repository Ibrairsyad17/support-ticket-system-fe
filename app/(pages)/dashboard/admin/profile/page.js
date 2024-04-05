import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/(pages)/dashboard/components/Tabs";
import FormProfile from "@/app/(pages)/dashboard/admin/profile/components/FormProfile";
import ChangePassword from "@/app/(pages)/dashboard/admin/profile/components/ChangePassword";
export const metadata = {
  title: "Profil | Helptix",
  description: "Profil Pengguna",
};
const Page = () => {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 gap-5">
        {/* Header Section */}
        <div className="grid grid-cols-1 h-auto mb-3.5 gap-y-5">
          <header className={`col-span-1`}>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                Profil
              </h1>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Kelola profil kamu dan perusahaan kamu.
            </p>
          </header>
        </div>

        <Tabs defaultValue="general" className="bg-white">
          <TabsList className="px-0 rounded-none bg-white">
            <TabsTrigger value="general" className="rounded-none">
              Umum
            </TabsTrigger>
            <TabsTrigger value="pass" className="rounded-none">
              Kata Sandi
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <FormProfile></FormProfile>
          </TabsContent>
          <TabsContent value="pass">
            <ChangePassword></ChangePassword>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Page;
