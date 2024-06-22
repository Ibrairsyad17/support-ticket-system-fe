"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  changeUserInfo,
  getUserInfo,
} from "@/app/api/repository/usersAndCompanyRepository";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { changeUserPhoto } from "@/app/api/repository/usersAndCompanyRepository";

const UserForm = () => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = React.useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone_number: "",
    photo_profile: "",
    role: "",
    otp_enabled: "",
    company_id: "",
    pic_role_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const fetchUserInfo = async () => {
    const res = await getUserInfo(session?.token.data.token);
    if (res) {
      setUserInfo(res.data.data);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchUserInfo();
    }
  }, [session?.token.data.token]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const res = await changeUserPhoto(file, session?.token.data.token);
    if (res) {
      fetchUserInfo();
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const usernameRef = React.createRef(userInfo.username);
  const emailRef = React.createRef(userInfo.email);
  const numberRef = React.createRef(userInfo.phone_number);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
    };

    const res = await changeUserInfo(data, session?.token.data.token);
    if (res) {
      fetchUserInfo();
    } else {
      console.log("Failed to update data");
    }
  };

  const handleCancelChanges = () => {
    usernameRef.current.value = userInfo.username;
    emailRef.current.value = userInfo.email;
    numberRef.current.value = userInfo.phone_number;
  };

  return (
    <div className="">
      <h2 className="text-md font-semibold text-gray-900">
        Ubah Biodata Pengguna
      </h2>

      <form>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5">
          <div className="col-span-full">
            <div className="flex items-center gap-x-5">
              <Avatar className={"w-20 h-20"}>
                <AvatarImage src={userInfo.photo_profile} alt="@shadcn" />
                <AvatarFallback>U</AvatarFallback>
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
              Nama Pengguna
            </label>
            <div className="mt-2">
              <Input defaultValue={userInfo.username} ref={usernameRef}></Input>
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
              <Input
                id="email"
                ref={emailRef}
                defaultValue={userInfo.email}
              ></Input>
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
                id="number"
                defaultValue={userInfo.phone_number}
                ref={numberRef}
              ></Input>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-x-4">
          <Button
            variant="outline"
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handleCancelChanges}
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

export default UserForm;
