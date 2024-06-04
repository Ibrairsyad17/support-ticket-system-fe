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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { getUsersPIC } from "@/app/api/repository/usersAndCompanyRepository";
import { useSession } from "next-auth/react";

const TabCreateTicket = () => {
  const { data: session } = useSession();
  const nameTicket = React.createRef();
  const descriptionTicket = React.createRef();
  const [priority, setPriority] = React.useState("normal");
  const [recipient, setRecipient] = React.useState("");
  const [pics, setPics] = React.useState([]);
  const [status, setStatus] = React.useState("ASSIGNED");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      assignment_name: nameTicket.current.value,
      assignment_detail: descriptionTicket.current.value,
      recipient,
      priority,
      status,
      assignment_date: new Date().toISOString(),
    };
    console.log(data);
  };

  return (
    <>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Form Data Pelanggan
      </div>
      <form className="flex flex-col space-y-6 px-6 pt-2 pb-4">
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
            defaultValue="Transfer Bank Lemot"
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
              <SelectValue defaultValue="Ditugaskan" placeholder="Ditugaskan" />
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
                value="NORMAL"
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
        {/*<div className="flex flex-col space-y-3">*/}
        {/*  <Label htmlFor="file">File</Label>*/}
        {/*  <Input id="file" type="file" />*/}
        {/*</div>*/}
        <div className="grid lg:grid-cols-2 space-x-2">
          <Button variant="outline">Atur Ulang</Button>
          <Button type="submit" onClick={handleSubmit}>
            Buat Tiket
          </Button>
        </div>
      </form>
    </>
  );
};

export default TabCreateTicket;
