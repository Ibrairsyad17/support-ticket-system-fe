import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { WhatsApp, X } from "@mui/icons-material";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const TabCustomerDetails = () => {
  return (
    <>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Form Data Pelanggan
      </div>
      <form className="flex flex-col space-y-6 px-6 pt-2 pb-4">
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input id="name" defaultValue="Budi Gunawan" />
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="budi123@gmail.com" />
          <span className="text-gray-500 text-sm">Contoh: ads@gmail.com</span>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Akun Instagram</Label>
          <div className="flex items-center border rounded-lg">
            <div className="pr-2 pl-4 py-2 flex justify-center items-center">
              <InstagramLogoIcon className="w-4 h-4" />
            </div>
            <Input
              id="name"
              defaultValue="budigunn"
              className="focus-visible:ring-0 border-none"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="instagram">Akun WhatsApp</Label>
          <div className="flex items-center border rounded-lg">
            <div className="pr-2 pl-4 py-2 flex justify-center items-center">
              <WhatsApp className="w-4 h-4" />
            </div>
            <Input
              id="instagram"
              defaultValue="budigunn"
              className="focus-visible:ring-0 border-none"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="twitter">Akun X (Twitter)</Label>
          <div className="flex items-center border rounded-lg">
            <div className="pr-2 pl-4 py-2 flex justify-center items-center">
              <X className="w-4 h-4" />
            </div>
            <Input
              id="twitter"
              defaultValue="budigunn"
              className="focus-visible:ring-0 border-none"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="more">Informasi Tambahan</Label>
          <Textarea placeholder="Type your message here." className="h-28" />
        </div>
        <Button type="submit" className="self-end ">
          Simpan Data
        </Button>
      </form>
    </>
  );
};

export default TabCustomerDetails;