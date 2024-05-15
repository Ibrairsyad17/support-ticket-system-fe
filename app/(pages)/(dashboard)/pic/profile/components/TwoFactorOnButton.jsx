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

const TwoFactorOnButton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Aktifkan Verifikasi 2 Langkah</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Konfirmasi Mengaktifkan Verifikasi 2 Langkah
          </AlertDialogTitle>
          <AlertDialogDescription>
            Anda akan dilindungi dengan verifikasi dua langkah agar akun Anda
            lebih aman. Saat login, Anda akan diminta untuk menyelesaikan
            langkah kedua dengan memasukkan kode OTP melalui email setelah
            memasukan kata sandi.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="grid lg:grid-cols-2">
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction>Aktifkan</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TwoFactorOnButton;
