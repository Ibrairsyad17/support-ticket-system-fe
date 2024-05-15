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
const TwoFactorOffButton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Nonaktifkan Verifikasi 2 Langkah</Button>
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
          <AlertDialogAction>Nonaktifkan</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TwoFactorOffButton;
