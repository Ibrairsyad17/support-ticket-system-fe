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
import { useRouter } from "next/navigation";
import { deleteCategory } from "@/app/api/repository/categoriesRepository";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

export function RemoveCategoryDialog({ id }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async () => {
    const req = await deleteCategory(session?.token.data.token, id);
    if (req) {
      router.push("/admin/complaints/keywords");
      router.refresh();
    }
  };

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
            Menghapus kategori Aplikasi akan menghapus semua data kata kunci dan
            Anda tidak akan menerima data terkait lagi. Apakah Anda yakin ingin
            melanjutkan?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction asChild className="bg-red-600 hover:bg-red-700">
            <Button onClick={handleDelete} type="submit">
              Ya, hapus kategori
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RemoveCategoryDialog;
