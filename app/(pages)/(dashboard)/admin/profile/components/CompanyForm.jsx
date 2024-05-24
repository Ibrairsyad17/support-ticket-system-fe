"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { getCompanyInfo } from "@/app/api/repository/usersAndCompanyRepository";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CompanyForm = () => {
  const { data: session } = useSession();
  const [companyInfo, setCompanyInfo] = React.useState({
    id: "",
    name: "",
    email: "",
    photo_profile: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const fetchUserInfo = async () => {
    const res = await getCompanyInfo(session?.token.data.token);
    if (res) {
      setCompanyInfo(res.data.data);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchUserInfo();
    }
  }, [session?.token.data.token]);
  return (
    <div className="">
      <h2 className="text-md font-semibold text-gray-900">
        Ubah Biodata Perusahaan
      </h2>

      <form>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6">
          <div className="col-span-full">
            <div className="flex items-center gap-x-3">
              <Avatar className={"w-20 h-20"}>
                <AvatarImage src={companyInfo.photo_profile} alt="@shadcn" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
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
              <Input value={companyInfo.name}></Input>
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
              <Input value={companyInfo.email}></Input>
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
    </div>
  );
};

export default CompanyForm;
