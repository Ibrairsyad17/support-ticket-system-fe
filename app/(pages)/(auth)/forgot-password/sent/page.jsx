import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SentPage() {
  return (
    <>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-lg shadow-sm ">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 ">
                Tautan telah dikirim!
              </h1>
              <p className="my-3 text-sm text-gray-600 ">
                Tautan untuk atur ulang kata sandi telah berhasil dikirim ke
                alamat email / nomor HP Anda.
              </p>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <Image
                      src={`/assets/img/auth/customer-support.svg`}
                      width={0}
                      height={0}
                      priority
                      alt="customer"
                      className="w-56 h-auto mx-auto"
                    ></Image>
                  </div>

                  <Button
                    asChild
                    variant="link"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  disabled:opacity-50 disabled:pointer-events-none "
                  >
                    <Link href={`/`}>Kembali ke beranda</Link>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
