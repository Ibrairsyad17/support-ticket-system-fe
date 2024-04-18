import React from "react";
import OTPAuthButton from "../components/OTPAuthButton";
import OTPAuthForm from "../components/OTPAuth";

function OTPAuthPage() {
  return (
    <>
      <div className="lg:p-8 mt-7">
        <div className="mx-auto lg:px-6 lg:mt-0 space-y-6 w-full md:w-11/12">
          <div className=" flex flex-col space-y-2">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Masukkan kode OTP
            </h1>
            <p className="text-sm lg:text-md text-muted-foreground">
              Kami telah mengirimkan 6 digit kode OTP ke nomor Anda.
            </p>
            <OTPAuthForm />
            <OTPAuthButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPAuthPage;
