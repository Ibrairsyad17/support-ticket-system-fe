import React from "react";
import Image from "next/image";
import TwoFactorOffButton from "@/app/(pages)/(dashboard)/pic/profile/components/TwoFactorOffButton";

const TwoFactorVerificationPage = () => {
  return (
    <div className="flex flex-col space-y-2.5">
      <div className="grid lg:grid-cols-7 gap-9 items-center">
        <Image
          src="/assets/img/two-factor-verification.png"
          alt="2fa"
          width={500}
          height={500}
          className="col-span-2"
        />
        <div className="flex flex-col space-y-3 col-span-5">
          <h1 className="text-md font-semibold">
            Lindungi Akun Anda dengan Verifikasi 2 Langkah
          </h1>
          <p className="text-xs">
            Anda dapat memperbarui pengaturan verifikasi 2 langkah ini kapan
            saja sesuai kebutuhan. Verifikasi 2 langkah ini meliputi:{" "}
          </p>
          <div className="inline-flex items-center">
            <span className="size-2 inline-block bg-emerald-500 rounded-full me-2"></span>
            <span className="text-gray-900 text-xs">
              Login dengan memasukan email dan kata sandi
            </span>
          </div>
          <div className="inline-flex items-center">
            <span className="size-2 inline-block bg-emerald-500 rounded-full me-2"></span>
            <span className="text-gray-900 text-xs">
              Verifikasi Kode OTP melalui email
            </span>
          </div>
          <TwoFactorOffButton />
        </div>
      </div>
    </div>
  );
};

export default TwoFactorVerificationPage;
