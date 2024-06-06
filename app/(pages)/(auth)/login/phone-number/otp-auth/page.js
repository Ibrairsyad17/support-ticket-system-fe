"use client";
import React from "react";
import OTPAuthForm from "../components/OTPAuth";
import { useSelector } from "react-redux";
import { selectOTP } from "@/app/redux/slices/otpSlice";

function OTPAuthPage() {
  const otpEmail = useSelector(selectOTP);

  console.log(otpEmail);

  return (
    <>
      <div className="lg:p-8 mt-7">
        <div className="mx-auto lg:px-6 lg:mt-0 space-y-6 w-full">
          <div className=" flex flex-col space-y-2">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Masukkan kode OTP
            </h1>
            <p className="text-sm lg:text-md text-muted-foreground">
              Kami telah mengirimkan 6 digit kode OTP melalui email Anda.
            </p>
            <OTPAuthForm email={otpEmail} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPAuthPage;
