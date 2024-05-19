import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PencilIcon } from "lucide-react";

const EditCategoryDialog = ({ id, name }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <PencilIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Nama Kategori</DialogTitle>
          <DialogDescription className="text-sm">
            Edit nama kategori {name}.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input type="text" placeholder={name} />
          </div>
          <Button type="submit" className="px-3">
            <span className="">Tambah</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryDialog;
