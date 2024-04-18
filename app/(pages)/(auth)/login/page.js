import React from "react";
import { UserAuthForm } from "./components/UserAuthForm";
import Link from "next/link";

function LoginPage() {
  return (
    <>
      <div className="lg:py-10">
        <div className="mx-auto flex w-full flex-col justify-center mt-20 lg:mt-10 space-y-6 sm:w-10/12">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Log in</h1>
            <p className="text-sm text-muted-foreground">
              Masukan alamat email Anda untuk melanjutkan.
            </p>
          </div>
          <UserAuthForm />
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

export default LoginPage;
