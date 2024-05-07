import React from "react";
import PasswordIcon from "@mui/icons-material/Password";
import CreatePassForm from "./components/CreatePassForm";

export default function SetPassPage() {
  return (
    <>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-lg shadow-sm ">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <PasswordIcon
                style={{ fontSize: 50, fill: "#f59e0b" }}
                className="mx-auto mb-4"
              ></PasswordIcon>
              <h1 className="block text-2xl font-bold text-gray-800 ">
                Buat kata sandi anda
              </h1>
              <p className="my-4 text-sm text-gray-600 ">
                Buat kata sandi yang kuat dan mudah diingat untuk mengakses
                akunmu.
              </p>
            </div>

            <div className="mt-5">
              <CreatePassForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
