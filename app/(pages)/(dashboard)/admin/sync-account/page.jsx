import React from "react";
import InstagramCard from "@/app/(pages)/(dashboard)/admin/sync-account/components/InstagramCard";
import TwitterCard from "@/app/(pages)/(dashboard)/admin/sync-account/components/TwitterCard";
import WhatsAppCard from "@/app/(pages)/(dashboard)/admin/sync-account/components/WhatsappCard";

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
            <p className="mt-2 text-base text-gray-400">
              Hubungkan akun platform yang ingin Anda gunakan pada aplikasi
              Helptix.
            </p>
          </header>
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-5`}>
            <InstagramCard />
            <TwitterCard />
            <WhatsAppCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SyncAccountPage;
