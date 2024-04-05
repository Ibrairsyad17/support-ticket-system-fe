import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Input } from "@/components/ui/input";

const ChangePasswordForm = () => {
  return (
    <div className="pb-8">
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 max-w-md">
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
            <Input type="password" placeholder="Tulis kata sandi baru"></Input>
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
  );
};

export default ChangePasswordForm;
