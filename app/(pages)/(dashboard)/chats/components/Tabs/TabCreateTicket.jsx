"use client";
import React from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getUsersPIC } from "@/app/api/repository/usersAndCompanyRepository";
import { useSession } from "next-auth/react";
import { selectLastChat } from "@/app/redux/slices/messagesSlice";
import { createTicket } from "@/app/api/repository/ticketRepository";
import { useToast } from "@/components/ui/use-toast";
import { fetchConversationTickets } from "@/app/redux/slices/ticketsSlice";

const TabCreateTicket = ({ id }) => {
  const { data: session } = useSession();
  const nameTicket = React.createRef();
  const descriptionTicket = React.createRef();
  const [priority, setPriority] = React.useState("MEDIUM");
  const [recipient, setRecipient] = React.useState("");
  const [pics, setPics] = React.useState([]);
  const [status, setStatus] = React.useState("ASSIGNED");

  const convo_messages_id = useSelector(selectLastChat);

  const { toast } = useToast();
  const dispatch = useDispatch();

  const fetchPics = async () => {
    const res = await getUsersPIC(session?.token.data.token, "PIC");
    if (res) {
      setPics(res.data.data.accounts);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) fetchPics();
  }, [session?.token.data.token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      assignment_name: nameTicket.current.value,
      assignment_detail: descriptionTicket.current.value,
      recipient,
      priority,
      status,
      assignment_date: new Date().toISOString(),
      conversation_messages_id: Number(convo_messages_id.id),
    };
    const res = await createTicket(session?.token.data.token, data);
    console.log(res);
    if (res.data?.code === 201) {
      toast({
        title: "Tiket Dibuat",
        description: `Tiket dengan nama ${data.assignment_name} dibuat`,
        variant: "success",
      });
      dispatch(
        fetchConversationTickets({ token: session?.token.data.token, id }),
      );
      setStatus("ASSIGNED");
      setPriority("MEDIUM");
      setRecipient("");
      nameTicket.current.value = "";
      descriptionTicket.current.value = "";
    } else {
      toast({
        title: "Gagal Membuat Tiket",
        description:
          "Terjadi kesalahan saat membuat tiket cek kembali data yang anda input atau coba kirimkan pesan ke pelanggan untuk membuat tiket baru",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    setStatus("ASSIGNED");
    setPriority("MEDIUM");
    setRecipient("");
    nameTicket.current.value = "";
    descriptionTicket.current.value = "";
  };

  return (
    <>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Form Data Pelanggan
      </div>
      <form
        className="flex flex-col space-y-6 px-6 pt-2 pb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Ditugaskan ke</Label>
          <Select
            onValueChange={(value) => {
              setRecipient(value);
            }}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Pilih PIC" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Daftar PIC</SelectLabel>
                {pics.map((pic) => (
                  <SelectItem key={pic.id} value={pic.id}>
                    {pic.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Nama Keluhan</Label>
          <Input
            id="name"
            ref={nameTicket}
            placeholder="Ketikkan Nama Keluhan"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="description">Detail Keluhan</Label>
          <Textarea
            id="description"
            placeholder="Ketikkan Detail Keluhan"
            className="h-24"
            ref={descriptionTicket}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="status">Status Pengerjaan</Label>
          <Select
            onValueChange={(value) => {
              setStatus(value);
            }}
          >
            <SelectTrigger className="">
              <SelectValue defaultValue="ASSIGNED" placeholder="Ditugaskan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="ASSIGNED">Ditugaskan</SelectItem>
                <SelectItem value="IN_PROGRESS">Dikerjakan</SelectItem>
                <SelectItem value="CHECKED">Diperiksa</SelectItem>
                <SelectItem value="DONE">Selesai</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="priority">Prioritas</Label>
          <div className="flex space-x-3 text-sm">
            <div>
              <input
                type="radio"
                id="high"
                name="priority"
                className="hidden checkbox"
                value="HIGH"
                onClick={(e) => {
                  setPriority(e.target.value);
                }}
              />
              <label
                htmlFor="high"
                className="checkbox-label flex items-center space-x-3 px-4 py-1 text-sm border rounded-full"
              >
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                <span>Tinggi</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="normal"
                name="priority"
                className="hidden checkbox"
                value="MEDIUM"
                onClick={(e) => {
                  setPriority(e.target.value);
                }}
              />
              <label
                htmlFor="normal"
                className="checkbox-label flex items-center space-x-3 px-4 py-1 text-sm border rounded-full"
              >
                <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                <span>Medium</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="low"
                name="priority"
                className="hidden checkbox"
                value="LOW"
                onClick={(e) => {
                  setPriority(e.target.value);
                }}
              />
              <label
                htmlFor="low"
                className="checkbox-label flex items-center space-x-3 px-4 py-1 text-sm border rounded-full"
              >
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span>Rendah</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="file">File</Label>
          <Input id="file" type="file" />
        </div>
        <div className="grid lg:grid-cols-2 space-x-2">
          <Button type="button" variant="outline" onClick={handleReset}>
            Atur Ulang
          </Button>
          <Button type="submit">Buat Tiket</Button>
        </div>
      </form>
    </>
  );
};

export default TabCreateTicket;
