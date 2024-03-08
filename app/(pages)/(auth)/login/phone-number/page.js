import React from "react";
import PhoneAuthForm from "./components/PhoneAuthForm";
import Link from "next/link";

function UseOTP() {
  return (
    <>
      <div className="lg:p-8 ">
        <div className="mx-auto flex w-full flex-col justify-center mt-20 lg:mt-0 space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Log in to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your phone number below to log in your account
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
