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
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import TemplateList from "./TemplateList";

const AddTemplateMessages = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <PlusCircledIcon className="h-4 w-4 text-violet-600" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Tambah template pesan</DialogTitle>
          <DialogDescription className="text-sm">
            Tambah pesan.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input type="text" placeholder="Tulis pesan" />
            </div>
            <Button type="submit" className="px-3">
              <span className="">Tambah</span>
            </Button>
          </div>
          <h3 className="text-md font-medium mt-3">List template pesan</h3>
          <TemplateList />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTemplateMessages;
