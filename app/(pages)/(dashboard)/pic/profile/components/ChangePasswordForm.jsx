import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChangePasswordForm = () => {
  return (
    <>
      <h2 className="text-md font-semibold text-gray-900 mb-1">
        Ubah Biodata Perusahaan
      </h2>
      <form>
        <div className="pb-8">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5">
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kata sandi lama
              </label>
              <div className="mt-2">
                <Input
                  type="password"
                  placeholder="Tulis kata sandi lama..."
                ></Input>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kata sandi baru
              </label>
              <div className="mt-2">
                <Input
                  type="password"
                  placeholder="Tulis kata sandi baru"
                ></Input>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Konfirmasi kata sandi baru
              </label>
              <div className="mt-2">
                <Input
                  type="number"
                  id="number"
                  placeholder="Tulis konfirmasi kata sandi baru"
                ></Input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-4 -mt-2">
          <Button
            variant="outline"
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
};

export default ChangePasswordForm;
