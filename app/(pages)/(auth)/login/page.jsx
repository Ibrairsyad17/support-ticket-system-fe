"use client";
import React, { Suspense } from "react";
import { UserAuthForm } from "./components/UserAuthForm";

function LoginPage() {
  return (
    <>
      <div className="">
        <div className="mx-auto flex w-full flex-col justify-center mt-20 lg:mt-10 space-y-6 sm:w-10/12">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Log in</h1>
            <p className="text-sm text-muted-foreground">
              Masukan alamat email Anda untuk melanjutkan.
            </p>
          </div>
          <Suspense
            fallback={
              <div className="flex min-h-[100dvh] items-center justify-center bg-background">
                <div className="space-y-4 text-center">
                  <div className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-muted-foreground">Loading...</p>
                </div>
              </div>
            }
          >
            <UserAuthForm />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
