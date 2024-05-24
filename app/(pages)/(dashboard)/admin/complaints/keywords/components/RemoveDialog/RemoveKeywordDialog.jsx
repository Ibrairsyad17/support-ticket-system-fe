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
import { XMarkIcon } from "@heroicons/react/24/outline";
import { deleteKeyword } from "@/app/redux/slices/keywordSlice";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

const RemoveKeywordDialog = ({ type = "icon", id }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {type === "icon" ? (
          <Button
            variant="ghost"
            size="xs"
            className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-gray-200"
          >
            <XMarkIcon className="flex-shrink-0 size-3 w-4 h-4 inline-flex items-center justify-center rounded-full" />
          </Button>
        ) : (
          <Button
            variant="destructive"
            size="xs"
            className="px-4 py-1.5 text-xs rounded-full"
          >
            Hapus
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Konfirmasi Hapus Kata Kunci</AlertDialogTitle>
          <AlertDialogDescription>
            Anda akan menghapus kata kunci ini secara permanen. Tindakan ini
            tidak dapat dibatalkan. Apakah Anda yakin ingin melanjutkan?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction asChild className="bg-red-600 hover:bg-red-700">
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  deleteKeyword({
                    id: id,
                    token: session?.token.data.token,
                  }),
                );
                toast.success("Kata kunci berhasil dihapus");
              }}
            >
              Ya, hapus kata kunci
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveKeywordDialog;
