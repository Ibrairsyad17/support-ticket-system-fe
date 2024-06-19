"use client";
import React, { useEffect, useState } from "react";
import InstagramCard from "@/app/(pages)/(dashboard)/admin/sync-account/components/InstagramCard";
import TwitterCard from "@/app/(pages)/(dashboard)/admin/sync-account/components/TwitterCard";
import WhatsAppCard from "@/app/(pages)/(dashboard)/admin/sync-account/components/WhatsappCard";
import { useSession } from "next-auth/react";
import { getSyncAccounts } from "@/app/api/repository/usersAndCompanyRepository";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SyncAccountPage = () => {
  const { data: session } = useSession();
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const res = await getSyncAccounts(session?.token.data.token);
    if (res) setAccounts(res.data.data.social_media);
  };

  useEffect(() => {
    if (session?.token.data.token) {
      fetchAccounts();
    }
  }, [session?.token.data.token]);

  const instagram = accounts.filter(
    (account) => account.platform === "INSTAGRAM",
  );

  const twitter = accounts.filter((account) => account.platform === "TWITTER");

  const whatsapp = accounts.filter(
    (account) => account.platform === "WHATSAPP",
  );

  return (
    <>
      <div className="w-full pt-5 lg:pt-8 px-4 sm:px-6 md:px-8 lg:ps-72">
        {/* Header Section */}
        <div className="grid-cols-1 h-auto">
          <header className={`mb-7`}>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <h1 className="block text-xl font-bold text-gray-800 sm:text-2xl">
                Hubungkan Akun
              </h1>
            </div>
            <p className="mt-2 text-base text-gray-400">
              Hubungkan akun platform yang ingin Anda gunakan pada aplikasi
              Helptix.
            </p>
          </header>
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-5`}>
            <div className="flex flex-col space-y-4">
              {instagram.length === 0 && (
                <InstagramCard
                  data={{
                    id: 1,
                    name: "Dengan menghubungkan akun Instagram maka Anda akan terhubung dengan aplikasi Helptix",
                    status: "DISCONNECTED",
                  }}
                />
              )}
              {instagram.map((insta) => (
                <InstagramCard key={insta.id} data={insta} />
              ))}
              {instagram.length > 0 && (
                <Button className="text-xs" size="sm" asChild>
                  <Link href="/sync-account/instagram">
                    <PlusIcon className="mr-2 h-3 w-3" /> Tambahkan Akun
                    Instagram{" "}
                  </Link>
                </Button>
              )}
            </div>
            <div className="flex flex-col space-y-6">
              {twitter.length === 0 && (
                <TwitterCard
                  data={{
                    id: 1,
                    name: "Dengan menghubungkan akun Twitter maka Anda akan terhubung dengan aplikasi Helptix",
                    status: "DISCONNECTED",
                  }}
                />
              )}
              {twitter.map((twit) => (
                <TwitterCard key={twit.id} data={twit} />
              ))}
              {twitter.length > 0 && (
                <Button className="text-xs" size="sm" asChild>
                  <Link href="sync-account/x">
                    <PlusIcon className="mr-2 h-3 w-3" /> Tambahkan Akun Twitter
                  </Link>
                </Button>
              )}
            </div>
            <div className="flex flex-col space-y-6">
              {whatsapp.length === 0 && (
                <WhatsAppCard
                  data={{
                    id: 1,
                    name: "Dengan menghubungkan akun WhatsApp maka Anda akan terhubung dengan aplikasi Helptix",
                    status: "DISCONNECTED",
                  }}
                />
              )}
              {whatsapp.map((wa) => (
                <WhatsAppCard key={wa.id} data={wa} />
              ))}
              {whatsapp.length > 0 && (
                <Button className="text-xs" size="sm" asChild>
                  <Link href="/sync-account/whatsapp">
                    <PlusIcon className="mr-2 h-3 w-3" /> Tambahkan Akun
                    WhatsApp
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SyncAccountPage;
