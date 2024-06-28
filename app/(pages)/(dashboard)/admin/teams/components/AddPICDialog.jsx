"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
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
import { useDispatch, useSelector } from "react-redux";
import { selectAllRoles } from "@/app/redux/slices/rolesSlice";
import {
  createPIC,
  fetchTeams,
  getStatus,
} from "@/app/redux/slices/teamsSlice";

const AddPicDialog = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  // Selectors
  const picRoles = useSelector(selectAllRoles);
  const getStatusInfo = useSelector(getStatus);

  // Input Ref
  const nameRef = React.createRef(null);
  const emailRef = React.createRef(null);
  const phoneRef = React.createRef(null);
  const usernameRef = React.createRef(null);
  const [role, setRole] = React.useState(1);

  const handleAddPic = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      no_telp: phoneRef.current.value,
      username: usernameRef.current.value,
      pic_role_id: role,
    };
    dispatch(createPIC({ data, token: session?.token.data.token }));

    dispatch(fetchTeams(session?.token.data.token));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" /> Tambah PIC
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Tambah Data PIC</DialogTitle>
          <DialogDescription className="text-sm flex flex-col space-y-2">
            <span>Tambahkan data PIC untuk setiap proyek atau departemen.</span>
            <span className="text-red-600">
              {getStatusInfo === "failed" &&
                "Gagal menambahkan data, nomor atau email sudah terdaftar"}
            </span>
            {getStatusInfo === "data added" && (
              <span className="text-green-600">Data berhasil ditambahkan</span>
            )}
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="flex flex-col space-y-4">
            <div className="flex-1">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                ref={nameRef}
                className="mt-2"
                placeholder="Masukkan nama"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="name">Username</Label>
              <Input
                type="text"
                id="username"
                ref={usernameRef}
                className="mt-2"
                placeholder="Masukkan username"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                ref={emailRef}
                className="mt-2"
                placeholder="Masukkan email"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone-number">Nomor Telepon</Label>
              <Input
                type="number"
                ref={phoneRef}
                id="phone-number"
                className="mt-2"
                placeholder="Masukkan nomor telepon"
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
                  <SelectValue placeholder="Pilih Jenis PIC" />
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
            <DialogClose asChild>
              <Button type="submit" className="px-3" onClick={handleAddPic}>
                Tambah PIC
              </Button>
            </DialogClose>
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

export default AddPicDialog;
