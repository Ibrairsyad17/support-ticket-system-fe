import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { changeUserInfo } from "@/app/api/repository/usersAndCompanyRepository";
const TwoFactorOffButton = ({ otp }) => {
  const { data: session } = useSession();

  const handleEnableTwoFactor = async () => {
    const data = {
      otp_enabled: !otp,
    };
    const res = await changeUserInfo(data, session?.token.data.token);
    if (res) {
      window.location.reload();
    }
    console.log(otp);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {otp ? (
          <Button variant="outline">Nonaktifkan Verifikasi 2 Langkah</Button>
        ) : (
          <Button>Aktifkan Verifikasi 2 Langkah</Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Konfirmasi Nonaktifkan Verifikasi 2 Langkah
          </AlertDialogTitle>
          <AlertDialogDescription>
            Dengan menonaktifkan fitur ini, akun Anda mungkin menjadi lebih
            rentan terhadap akses yang tidak diizinkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="grid lg:grid-cols-2">
          <AlertDialogCancel>Batal</AlertDialogCancel>
          {otp ? (
            <AlertDialogAction onClick={handleEnableTwoFactor}>
              Nonaktifkan
            </AlertDialogAction>
          ) : (
            <AlertDialogAction onClick={handleEnableTwoFactor}>
              Aktifkan
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TwoFactorOffButton;
