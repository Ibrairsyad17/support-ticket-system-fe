"use client";
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
import RolesList from "@/app/(pages)/(dashboard)/admin/teams/components/RolesList";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { createRole } from "@/app/redux/slices/rolesSlice";

const AddRolesDialog = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const inputRef = React.useRef(null);

  const handleAddRole = () => {
    dispatch(
      createRole({
        role: inputRef.current.value,
        token: session?.token.data.token,
      }),
    );
    inputRef.current.value = "";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusCircledIcon className="h-4 w-4 mr-2" />
          Tambah role
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Tambah role</DialogTitle>
          <DialogDescription className="text-sm">
            Tambah role PIC
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                type="text"
                ref={inputRef}
                placeholder="Tuliskan nama role"
              />
            </div>
            <Button className="px-3" onClick={handleAddRole}>
              <span className="">Tambah</span>
            </Button>
          </div>
          <h3 className="text-md font-medium mt-3">List role tersedia</h3>
          <RolesList />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddRolesDialog;
