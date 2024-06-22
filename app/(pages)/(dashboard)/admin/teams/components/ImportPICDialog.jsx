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
import { FilePlusIcon, UploadIcon } from "@radix-ui/react-icons";
import { useDropzone } from "react-dropzone";
import { useSession } from "next-auth/react";
import { importPIC } from "@/app/api/repository/usersAndCompanyRepository";
import { useToast } from "@/components/ui/use-toast";

const ImportPicDialog = () => {
  const { data: session } = useSession();
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const { toast } = useToast();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleUpload = () => {
    const file = acceptedFiles[0];
    const res = importPIC(file, session?.token.data.token);
    if (res) {
      toast({
        title: "Berhasil Import PIC",
        description: "PIC berhasil ditambahkan",
        variant: "success",
      });
    } else {
      toast({
        title: "Gagal Import PIC",
        description: "PIC gagal ditambahkan",
        variant: "destructive",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <FilePlusIcon className="mr-2 h-4 w-4" /> Import PIC
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Import Data PIC</AlertDialogTitle>
          <AlertDialogDescription>
            Impor data PIC secara massal. Anda dapat mengunduh template CSV
            dengan mengisi data PIC Anda pada laman berikut.
          </AlertDialogDescription>
          <div
            {...getRootProps({
              className:
                "dropzone flex justify-center items-center bg-violet-100 border border-dashed border-violet-600 h-72 w-full rounded-xl",
            })}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col space-y-4 items-center">
              <UploadIcon className="h-12 w-12" />
              <p>
                Drag & drop files, or{" "}
                <span className="text-violet-600">Browse</span>
              </p>
              <p className="text-gray-600">
                Silahkan unggah file .csv dengan ukuran maksimal 10mb
              </p>
            </div>
          </div>
          <ul>{files}</ul>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={handleUpload}>Simpan</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ImportPicDialog;
