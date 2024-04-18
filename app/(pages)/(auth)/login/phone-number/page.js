import React from "react";
import PhoneAuthForm from "./components/PhoneAuthForm";
import Link from "next/link";

function UseOTP() {
  return (
    <>
      <div className="lg:p-8 ">
        <div className="mx-auto flex w-full flex-col justify-center mt-20 space-y-6 sm:w-11/12">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Log in
            </h1>
            <p className="text-sm lg:text-md text-muted-foreground">
              Masukan nomor HP Anda untuk melanjutkan.
            </p>
          </div>
          <PhoneAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default UseOTP;
