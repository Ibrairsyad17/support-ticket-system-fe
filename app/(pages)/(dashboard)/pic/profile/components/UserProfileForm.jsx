import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserProfileForm = () => {
  return (
    <div className="">
      <h2 className="text-md font-semibold text-gray-900">
        Ubah Biodata Pengguna
      </h2>

      <form>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5">
          <div className="col-span-full">
            <div className="flex items-center gap-x-3">
              <UserCircleIcon
                className="h-24 w-24 text-gray-300"
                aria-hidden="true"
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nama Pengguna
            </label>
            <div className="mt-2">
              <Input placeholder="Tulis Nama Pengguna..."></Input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="pic"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              PIC
            </label>
            <div className="mt-2">
              <Input value="PIC Web" disabled></Input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Pengguna
            </label>
            <div className="mt-2">
              <Input id="email" placeholder="example@mail.com"></Input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nomor Telepon
            </label>
            <div className="mt-2">
              <Input
                type="number"
                id="number"
                placeholder="08123455688"
              ></Input>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-x-4">
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
    </div>
  );
};

export default UserProfileForm;
