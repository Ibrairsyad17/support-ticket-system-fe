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
import { editPIC } from "@/app/api/repository/usersAndCompanyRepository";
import { useToast } from "@/components/ui/use-toast";

const EditPicDialog = ({ data }) => {
  const { data: session } = useSession();

  // Selectors
  const picRoles = useSelector(selectAllRoles);

  const { toast } = useToast();

  // Input Ref
  const nameRef = React.createRef(data?.name);
  const emailRef = React.createRef(data?.email);
  const phoneRef = React.createRef(data?.phone_number);
  const usernameRef = React.createRef(data?.username);
  const [role, setRole] = React.useState(data?.pic_roles.id);

  const handleEditPic = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      no_telp: phoneRef.current.value,
      username: usernameRef.current.value,
      pic_role_id: Number(role),
    };

    if (data?.email === emailRef.current.value) {
      delete dataToSubmit.email;
    }

    console.log(dataToSubmit);

    const res = await editPIC(dataToSubmit, session?.token.data.token, data.id);
    if (res.status === 200) {
      toast({
        title: "Berhasil mengubah data PIC",
        message: "PIC berhasil diubah",
        variant: "success",
      });
      window.location.reload();
    } else {
      toast({
        title: "Gagal mengubah data PIC",
        message: "Terjadi kesalahan saat mengubah PIC, email sudah digunakan",
        variant: "destructive",
      });
    }
  };

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
                ref={nameRef}
                defaultValue={data?.name}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="name">Username</Label>
              <Input
                type="text"
                id="username"
                className="mt-2"
                ref={usernameRef}
                defaultValue={data?.username}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                className="mt-2"
                ref={emailRef}
                defaultValue={data?.email}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone-number">Nomor Telepon</Label>
              <Input
                type="text"
                id="phone-number"
                className="mt-2"
                ref={phoneRef}
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
            <Button type="button" className="px-3" onClick={handleEditPic}>
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
