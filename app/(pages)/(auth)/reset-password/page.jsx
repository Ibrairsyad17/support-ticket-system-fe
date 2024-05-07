import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function PassResetPage() {
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 ">
              Atur ulang kata sandi
            </h1>
            <h1 className="mt-2 text-xs text-center text-gray-600 ">
              Kata sandi harus berbeda dengan kata sandi yang telah Anda gunakan
              sebelumnya.
            </h1>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div>
                  <Label htmlFor="password" className="block text-sm mb-2 ">
                    Kata sandi baru
                  </Label>
                  <div className="relative">
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none placeholder:text-gray-400"
                      required
                      aria-describedby="password-error"
                      placeholder="Masukkan Kata Sandi"
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>

                <div>
                  <Label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2 "
                  >
                    Konfirmasi kata sandi
                  </Label>
                  <div className="relative">
                    <Input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none placeholder:text-gray-400"
                      required
                      aria-describedby="confirm-password-error"
                      placeholder="Konfirmasi kata sandi"
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="confirm-password-error"
                  >
                    Password does not match the password
                  </p>
                </div>

                <Button type="submit" className="w-full py-3 px-4 ">
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PassResetPage;
