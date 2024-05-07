import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditPicDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="text-xs">
          <Pencil1Icon className="h-4 w-4 text-blue-600" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Tambah Data PIC</DialogTitle>
          <DialogDescription className="text-sm">
            Tambahkan data PIC untuk setiap proyek atau departemen.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="flex flex-col space-y-4">
            <div className="flex-1">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                className="mt-2"
                placeholder="Masukkan nama"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                className="mt-2"
                placeholder="Masukkan email"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone-number">Nomor Telepon</Label>
              <Input
                type="text"
                id="phone-number"
                className="mt-2"
                placeholder="Masukkan nomor telepon"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone-number">Pilih Jenis PIC</Label>
              <Select>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Pilih Jenis PIC" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jenis PIC</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-2 mt-5">
            <Button type="submit" className="px-3">
              Tambah
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="outline" className="px-3">
                Batal
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPicDialog;
