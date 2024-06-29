"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/img/not-found.svg"
            alt="404 Not Found"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ooops! Halaman Tidak Ditemukan.
          </h1>
          <p className="text-muted-foreground">
            Maaf, halaman yang Anda cari tidak ditemukan. Silahkan klik Kembali
            untuk kembali ke halaman sebelumnya.
          </p>
          <Button onClick={back}>Kembali</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
