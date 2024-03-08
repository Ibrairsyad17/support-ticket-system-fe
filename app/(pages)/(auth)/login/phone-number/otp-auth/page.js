import React from "react";
import OTPAuth from "../components/OTPAuth";
import OTPAuthButton from "../components/OTPAuthButton";

function OTPAuthPage() {
  return (
    <>
      <div className="lg:p-8 ">
        <div className="mx-auto flex flex-col justify-center mt-20 lg:mt-0 space-y-6 w-full md:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Masukkan kode OTP
            </h1>
            <p className="text-sm text-muted-foreground">
              Kami telah mengirimkan 4 digit kode OTP ke nomor Anda.
            </p>
            <OTPAuth />
            <OTPAuthButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPAuthPage;
