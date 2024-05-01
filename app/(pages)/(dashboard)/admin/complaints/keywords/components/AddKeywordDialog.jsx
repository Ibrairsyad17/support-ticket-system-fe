import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import KeywordList from "./KeywordList";

export function AddKeywordDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" /> Tambah kata kunci
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Tambah kata kunci</DialogTitle>
          <DialogDescription className="text-sm">
            Tambah kata kunci pada kategori.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input type="text" placeholder="Tulis kata kunci" />
            </div>
            <Button type="submit" className="px-3">
              <span className="">Tambah</span>
            </Button>
          </div>
          <h3 className="text-md font-medium mt-3">List kata kunci aplikasi</h3>
          <KeywordList />
        </div>
      </DialogContent>
    </Dialog>
  );
}
