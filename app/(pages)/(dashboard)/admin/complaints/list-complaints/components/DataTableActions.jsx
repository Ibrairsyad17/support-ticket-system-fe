"use client";
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
import Link from "next/link";
import { EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import { deleteMultipleComplaints } from "@/app/redux/slices/complaintsSlice";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

const DataTableActions = ({ id }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      deleteMultipleComplaints({
        ids: [Number(id)],
        token: session?.token.data.token,
      }),
    );
  };
  return (
    <div className="flex justify-end space-x-3">
      <Button asChild variant="ghost" size="icon">
        <Link href={`/chats/${id}`}>
          <EyeOpenIcon className="h-5 w-5" />
        </Link>
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <TrashIcon className="h-5 w-5 text-red-600" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDelete(id)}>
              Ya, saya yakin
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DataTableActions;
