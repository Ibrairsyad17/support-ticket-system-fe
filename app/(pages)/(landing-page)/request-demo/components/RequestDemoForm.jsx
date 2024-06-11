"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendRequestDemo } from "@/app/api/repository/usersAndCompanyRepository";
import { useToast } from "@/components/ui/use-toast";

const RequestDemoForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const dataToSend = {
    //   full_name: fullname,
    //   email: email,
    //   company_name: companyName,
    //   phone_number: phoneNumber,
    //   position: status,
    //   description: description,
    // };
    // const res = await sendRequestDemo(dataToSend);
    // if (res) {
    toast({
      title: "Permintaan berhasil dikirim",
      description: "Tunggu konfirmasi dari kami",
      variant: "success",
    });
    // } else {
    //   toast({
    //     title: "Permintaan gagal dikirim",
    //     description: "Silahkan coba lagi",
    //     variant: "destructive",
    //   });
    // }
  };

  return (
    <div className="relative">
      <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:px-10 lg:py-2">
        <h2 className="text-xl font-semibold text-gray-800">
          Lengkapi data anda
        </h2>

        <form>
          <div className="mt-6 grid gap-4 lg:gap-6">
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-lastname-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Alamat E-mail
                </label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  className="py-3 px-4 block  "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

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
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
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
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
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
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
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
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
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
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></Textarea>
            </div>
          </div>

          <div className="my-6 grid">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 px-4 "
            >
              Kirim Permintaan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemoForm;
