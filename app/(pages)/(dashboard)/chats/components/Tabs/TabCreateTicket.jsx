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

const TabCreateTicket = () => {
  return (
    <>
      <div className="px-6 py-2.5 mt-3 bg-white text-lg font-semibold">
        Form Data Pelanggan
      </div>
      <form className="flex flex-col space-y-6 px-6 pt-2 pb-4">
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Ditugaskan ke</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Agung Budi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Daftar PIC</SelectLabel>
                <SelectItem value="Agung Budi">Agung Budi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Nama Keluhan</Label>
          <Input id="name" defaultValue="Transfer Bank Lemot" />
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="description">Detail Keluhan</Label>
          <Textarea
            id="description"
            placeholder="Ketikkan Detail Keluhan"
            className="h-24"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="status">Status Pengerjaan</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue defaultValue="Ditugaskan" placeholder="Ditugaskan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="assign">Ditugaskan</SelectItem>
                <SelectItem value="doing">Dikerjakan</SelectItem>
                <SelectItem value="done">Selesai</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name">Status Prioritas</Label>
          <RadioGroup defaultValue="comfortable" className="flex flex-wrap">
            <div className="flex items-center">
              <RadioGroupItem className="hidden" value="default" id="r1" />
              <Label
                className="cursor-pointer inline-flex items-center px-3 py-1 rounded-full text-xs border border-gray-300 "
                htmlFor="r1"
              >
                <span className="size-2 inline-block bg-red-500 rounded-full me-2"></span>
                <span>Urgent</span>
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem className="hidden" value="comfortable" id="r2" />
              <Label
                className="cursor-pointer inline-flex items-center px-3 py-1 rounded-full text-xs border border-gray-300 "
                htmlFor="r2"
              >
                <span className="size-2 inline-block bg-amber-500 rounded-full me-2"></span>
                <span>Normal</span>
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem className="hidden" value="compact" id="r3" />
              <Label
                className="cursor-pointer inline-flex items-center px-3 py-1 rounded-full text-xs border border-gray-300 "
                htmlFor="r3"
              >
                <span className="size-2 inline-block bg-blue-500 rounded-full me-2"></span>
                <span>Low</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col space-y-3">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid lg:grid-cols-2 space-x-2">
          <Button variant="outline">Atur Ulang</Button>
          <Button type="submit">Buat Tiket</Button>
        </div>
      </form>
    </>
  );
};

export default TabCreateTicket;
