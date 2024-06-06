"use client";
import React from "react";
import Image from "next/image";
import TwoFactorOffButton from "@/app/(pages)/(dashboard)/pic/profile/components/TwoFactorOffButton";
import { useSession } from "next-auth/react";
import { getUserInfo } from "@/app/api/repository/usersAndCompanyRepository";

const TwoFactorVerificationPage = () => {
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

  return (
    <div className="flex flex-col space-y-2.5">
      <div className="grid lg:grid-cols-8 gap-x-16 items-center">
        <Image
          src="/assets/img/two-factor-verification.png"
          alt="2fa"
          width={900}
          height={900}
          className="col-span-3"
        />
        <div className="flex flex-col space-y-4 col-span-5">
          <h1 className="text-lg font-semibold">
            Lindungi Akun Anda dengan Verifikasi 2 Langkah
          </h1>
          <p className="text-sm">
            Anda dapat memperbarui pengaturan verifikasi 2 langkah ini kapan
            saja sesuai kebutuhan. Verifikasi 2 langkah ini meliputi:{" "}
          </p>
          <div className="inline-flex items-center">
            <span className="size-2 inline-block bg-emerald-500 rounded-full me-2"></span>
            <span className="text-gray-900 text-sm">
              Login dengan memasukan email dan kata sandi
            </span>
          </div>
          <div className="inline-flex items-center">
            <span className="size-2 inline-block bg-emerald-500 rounded-full me-2"></span>
            <span className="text-gray-900 text-sm">
              Verifikasi Kode OTP melalui email
            </span>
          </div>
          <TwoFactorOffButton otp={userInfo.otp_enabled} />
        </div>
      </div>
    </div>
  );
};

export default TwoFactorVerificationPage;
