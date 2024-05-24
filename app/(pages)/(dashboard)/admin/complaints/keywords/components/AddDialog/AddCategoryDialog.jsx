"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { createCategory } from "@/app/redux/slices/keywordSlice";

export function AddCategoryDialog() {
  const { data: session } = useSession();
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="text-amber-500 hover:text-amber-500"
          variant="outline"
        >
          <PlusIcon className="mr-2 h-4 w-4" /> Tambah
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Tambah Kategori</DialogTitle>
          <DialogDescription className="text-sm">
            Tambah kategori untuk kata kunci keluhan.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              type="text"
              placeholder="Tulis nama kategori"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <DialogClose asChild>
            <Button
              type="submit"
              className="px-3"
              onClick={() => {
                dispatch(
                  createCategory({
                    data: { name },
                    token: session?.token.data.token,
                  }),
                );
                setName("");
              }}
            >
              <span className="">Tambah</span>
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
