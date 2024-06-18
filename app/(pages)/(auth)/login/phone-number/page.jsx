import React from "react";
import PhoneAuthForm from "./components/PhoneAuthForm";
import Link from "next/link";

function UseOTP() {
  return (
    <>
      <div className="lg:p-8 ">
        <div className="mx-auto flex w-full flex-col justify-center mt-10 space-y-6 sm:w-11/12">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Log in
            </h1>
            <p className="text-sm lg:text-md text-muted-foreground">
              Masukan email Anda untuk mendapatkan kode OTP.
            </p>
          </div>
          <PhoneAuthForm />
        </div>
      </div>
    </>
  );
}

export default UseOTP;
