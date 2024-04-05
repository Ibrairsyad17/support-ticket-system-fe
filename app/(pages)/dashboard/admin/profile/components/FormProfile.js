import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UserForm() {
  return (
    <form>
      <div className="space-y-12 border-b border-gray-900/10">
        <div className="grid lg:grid-cols-2">
          <div className="pb-8">
            <h2 className="text-md font-semibold text-gray-900 mt-3.5">
              Ubah Biodata Perusahaan
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 max-w-md">
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
                  Nama Perusahaan
                </label>
                <div className="mt-2">
                  <Input placeholder="Tulis Nama Perusahaan..."></Input>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Perusahaan
                </label>
                <div className="mt-2">
                  <Input placeholder="example@mail.com"></Input>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-8">
            <h2 className="text-md font-semibold text-gray-900 mt-3.5">
              Ubah Biodata Perusahaan
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 max-w-md">
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
                  Nama Perusahaan
                </label>
                <div className="mt-2">
                  <Input placeholder="Tulis Nama Perusahaan..."></Input>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Perusahaan
                </label>
                <div className="mt-2">
                  <Input placeholder="example@mail.com"></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-x-4">
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
  );
}
