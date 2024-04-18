import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Instagram } from "@mui/icons-material";
import OTPInstagramInput from "@/app/(pages)/(auth)/sync-account/instagram/components/OTPInstagramInput";
import OTPAuthButtonInstagram from "@/app/(pages)/(auth)/sync-account/instagram/components/OTPAuthButtonInstagram";

const VerifyOTPInstagram = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto grid lg:grid-cols-2 gap-5 mt-10">
      <div className="flex flex-col space-y-8">
        <h1 className="text-2xl font-semibold text-gray-500 flex space-x-3.5 items-center">
          <span>Helptix</span>
          <ArrowPathIcon className="w-6 h-6 text-gray-500" />
          <div className="rounded-full w-8 h-8 text-white bg-rose-600 flex justify-center items-center">
            <Instagram className="w-5 h-5" />
          </div>
        </h1>
        <p className="text-3xl font-bold text-gray-900">
          Hubungkan akun instagram Anda agar terhubung dengan Helptix.
        </p>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight mb-2">
            Autentikasi Akun Instagram
          </h1>
          <p className="text-sm lg:text-md text-muted-foreground">
            Kami telah mengirimkan 6 digit kode OTP ke nomor Anda.
          </p>
          <OTPInstagramInput></OTPInstagramInput>
          <OTPAuthButtonInstagram />
        </div>

        <div>
          <p className="text-xl font-semibold text-gray-900 mb-3.5">
            Dengan terhubung maka Anda dapat:
          </p>
          <div>
            <ol className="list-decimal list-inside space-y-2.5 text-gray-800">
              <li>Dapat melihat chat akun Instagram Anda melalui Helptix.</li>
              <li>Dapat membalas chat akun Instagram Anda melalui Helptix.</li>
              <li>
                Dapat menghapus chat akun Instagram Anda melalui Helptix.{" "}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPInstagram;
