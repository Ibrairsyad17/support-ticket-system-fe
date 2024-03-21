import React from "react";
import SyncAccountCard from "@/app/(pages)/dashboard/admin/sync-account/components/SyncAccountCard";
import { socialMediaStats } from "@/app/(pages)/dashboard/components/Stats/SocialMediaStats";

const SyncAccountPage = () => {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {/* Header Section */}
        <div className="grid-cols-1 h-auto">
          <header className={`mb-7`}>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                Hubungkan Akun
              </h1>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Hubungkan akun platform yang ingin Anda gunakan pada aplikasi
              Helptix.
            </p>
          </header>
          <SyncAccountCard listPlatform={socialMediaStats} />
        </div>
      </div>
    </>
  );
};

export default SyncAccountPage;
