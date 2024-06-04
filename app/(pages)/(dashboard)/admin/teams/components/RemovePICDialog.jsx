"use client";
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
import { TrashIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { deleteMultiplePIC } from "@/app/redux/slices/teamsSlice";

const RemovePicDialog = ({ data }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      deleteMultiplePIC({
        ids: [id],
        token: session?.token.data.token,
      }),
    );
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <TrashIcon className="h-5 w-5 text-red-600" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah anda yakin ingin menghapus?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Anda akan menghapus data PIC{" "}
            <span className="font-semibold">{data.name}</span>. Tindakan ini
            tidak dapat dibatalkan. Apakah Anda yakin ingin menghapus data PIC
            ini?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="grid lg:grid-cols-2 gap-2">
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(data.id)}>
            Ya, saya yakin
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemovePicDialog;
