"use client";
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
import { useSession } from "next-auth/react";
import { selectAllRoles } from "@/app/redux/slices/rolesSlice";
import { useSelector } from "react-redux";
import { getStatus } from "@/app/redux/slices/teamsSlice";

const EditPicDialog = ({ data }) => {
  const { data: session } = useSession();

  // Selectors
  const picRoles = useSelector(selectAllRoles);
  const getStatusInfo = useSelector(getStatus);

  // Input Ref
  const nameRef = React.createRef(data?.name);
  const emailRef = React.createRef(data?.email);
  const phoneRef = React.createRef(data?.phone_number);
  const usernameRef = React.createRef(data?.username);
  const [role, setRole] = React.useState(data?.pic_roles.id);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="text-xs">
          <Pencil1Icon className="h-4 w-4 text-blue-600" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Data PIC</DialogTitle>
          <DialogDescription className="text-sm">
            Ubah informasi mengenai {data?.name}
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
                defaultValue={data?.name}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="name">Username</Label>
              <Input
                type="text"
                id="username"
                className="mt-2"
                defaultValue={data?.username}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                className="mt-2"
                defaultValue={data?.email}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone-number">Nomor Telepon</Label>
              <Input
                type="text"
                id="phone-number"
                className="mt-2"
                defaultValue={data?.phone_number}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone-number">Pilih Jenis PIC</Label>
              <Select
                className="mt-2"
                onValueChange={(value) => {
                  setRole(Number(value));
                }}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    defaultValue={data?.pic_roles.id}
                    placeholder={data?.pic_roles.role}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jenis PIC</SelectLabel>
                    {picRoles.map((role) => (
                      <SelectItem key={role.id} value={role.id}>
                        {role.role}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-2 mt-5">
            <Button type="submit" className="px-3">
              Edit
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
