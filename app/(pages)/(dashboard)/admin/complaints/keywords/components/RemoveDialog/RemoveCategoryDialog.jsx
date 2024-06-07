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
import { TrashIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "@/app/redux/slices/keywordSlice";
import { useToast } from "@/components/ui/use-toast";

export function RemoveCategoryDialog({ id, title }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { toast } = useToast();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-red-500">
          <TrashIcon className="mr-2 h-4 w-4" />
          Hapus kategori
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda benar-benar yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Menghapus kategori <span className="font-semibold">{title}</span>{" "}
            akan menghapus semua data kata kunci dan Anda tidak akan menerima
            data terkait lagi. Apakah Anda yakin ingin melanjutkan?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction asChild className="bg-red-600 hover:bg-red-700">
            <Button
              onClick={() => {
                dispatch(
                  deleteCategory({
                    id: id,
                    token: session?.token.data.token,
                  }),
                );
                toast({
                  title: `Berhasil menghapus kategori ${title}`,
                  variant: "success",
                });
              }}
            >
              Ya, hapus kategori
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RemoveCategoryDialog;
