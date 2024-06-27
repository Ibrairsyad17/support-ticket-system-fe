import React from "react";
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
          <UserAuthForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
