import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const RequestDemoForm = () => {
  return (
    <div className="relative">
      <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:px-10 lg:py-2">
        <h2 className="text-xl font-semibold text-gray-800">
          Lengkapi data anda
        </h2>

        <form>
          <div className="mt-6 grid gap-4 lg:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-firstname-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Nama lengkap
                </label>
                <Input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="py-3 px-4 block  "
                />
              </div>

              <div>
                <label
                  htmlFor="hs-lastname-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  E-mail
                </label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  className="py-3 px-4 block  "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-company-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Nama Perusahaan
                </label>
                <Input
                  type="text"
                  name="company-name"
                  id="company-name"
                  className="py-3 px-4 block  "
                />
              </div>

              <div>
                <label
                  htmlFor="hs-company-website-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Nomor Whatsapp
                </label>
                <Input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  className="py-3 px-4 block  "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-company-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Jabatan
                </label>
                <Input
                  type="text"
                  name="status"
                  id="status"
                  className="py-3 px-4 block  "
                />
              </div>

              <div>
                <label
                  htmlFor="hs-company-website-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Jumlah karyawan
                </label>
                <Input
                  type="number"
                  name="total-employee"
                  id="total-employee"
                  className="py-3 px-4 block  "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="hs-about-hire-us-1"
                className="block mb-2 text-sm text-gray-700 font-medium"
              >
                Bagaimana anda tahu tentang Helptix?
              </label>
              <Textarea
                id="description"
                name="description"
                rows="4"
                className="py-3 px-4 block  "
              ></Textarea>
            </div>
          </div>

          <div className="my-6 grid">
            <Button type="submit" className="w-full py-3 px-4 ">
              Send inquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemoForm;
