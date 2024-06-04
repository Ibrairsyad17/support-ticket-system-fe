"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  changeCompanyInfo,
  changeCompanyPhoto,
  getCompanyInfo,
} from "@/app/api/repository/usersAndCompanyRepository";
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

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const res = await changeCompanyPhoto(file, session?.token.data.token);
    if (res) {
      fetchUserInfo();
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const companyRef = React.createRef(companyInfo.name);
  const emailRef = React.createRef(companyInfo.email);

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    const data = {
      name: companyRef.current.value,
      email: emailRef.current.value,
    };

    const res = await changeCompanyInfo(data, session?.token.data.token);
    if (res) {
      fetchUserInfo();
      console.log("Company info updated");
    } else {
      console.log("Company info failed to update");
    }
  };

  const handleCancel = () => {
    companyRef.current.value = companyInfo.name;
    emailRef.current.value = companyInfo.email;
  };

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
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={handleButtonClick}
              >
                Ubah foto
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
              <Input defaultValue={companyInfo.name} ref={companyRef}></Input>
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
              <Input defaultValue={companyInfo.email} ref={emailRef}></Input>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-x-4">
          <Button
            variant="outline"
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handleCancel}
          >
            Batal
          </Button>
          <Button type="submit" onClick={handleSaveChanges}>
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
