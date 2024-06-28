"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { WhatsApp, X } from "@mui/icons-material";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { setAdditionalInfo } from "@/app/api/repository/customersRepository";
import { useToast } from "@/components/ui/use-toast";

const TabCustomerDetails = ({ data }) => {
  const { data: session } = useSession();
  const [additionalInfo, setAdditional] = React.useState("");
  const [email, setEmail] = React.useState(data.customers?.email);
  const [instagram, setInstagram] = React.useState(
    data.customers?.instagram_username,
  );
  const [whatsapp, setWhatsapp] = React.useState(
    data.customers?.whatsapp_number,
  );
  const [twitter, setTwitter] = React.useState(
    data.customers?.twitter_username,
  );
  const [disabledInput, setDisabledInput] = React.useState(false);

  const { toast } = useToast();

  const handleSetAdditionalInfo = async (e) => {
    e.preventDefault();

    const res = await setAdditionalInfo(
      session.token.data.token,
      data.customer_id,
      {
        additional_info: additionalInfo,
        email,
        instagram_username: instagram,
        whatsapp_number: whatsapp,
        twitter_username: twitter,
      },
    );
    if (res.status === 200) {
      toast({
        title: "Berhasil menambahkan informasi tambahan",
        variant: "success",
      });
    } else {
      toast({
        title: "Gagal menambahkan informasi tambahan",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Form Data Pelanggan
      </div>
      <form className="flex flex-col space-y-6 px-6 pt-2 pb-4">
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input
            id="name"
            defaultValue={data === [] ? "" : data.customers?.nama_lengkap}
            disabled
          />
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            defaultValue={data === [] ? "" : data.customers?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
              defaultValue={
                data === [] ? "" : data.customers?.instagram_username
              }
              disabled={data.social_media?.platform === "INSTAGRAM"}
              onChange={(e) => setInstagram(e.target.value)}
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
              defaultValue={data === [] ? "" : data.customers?.whatsapp_number}
              disabled={data.social_media?.platform === "WHATSAPP"}
              onChange={(e) => setWhatsapp(e.target.value)}
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
              defaultValue={data === [] ? "" : data.customers?.twitter_username}
              disabled={data.social_media?.platform === "TWITTER"}
              onChange={(e) => setTwitter(e.target.value)}
              className="focus-visible:ring-0 border-none"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="more">Informasi Tambahan</Label>
          <Textarea
            placeholder="Type your message here."
            className="h-28"
            value={additionalInfo}
            onChange={(e) => setAdditional(e.target.value)}
          />
        </div>
        <Button className="self-end " onClick={handleSetAdditionalInfo}>
          Simpan Data
        </Button>
      </form>
    </>
  );
};

export default TabCustomerDetails;
