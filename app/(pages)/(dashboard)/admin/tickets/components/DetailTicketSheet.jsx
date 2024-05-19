"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Instagram, WhatsApp, X } from "@mui/icons-material";
import Selects from "@/app/(pages)/(dashboard)/components/Selects";
import {
  priorities,
  statuses,
} from "@/app/(pages)/(dashboard)/components/data/data";
import Comment from "@/app/(pages)/(dashboard)/components/Comment/Comment";
import CommentInput from "@/app/(pages)/(dashboard)/components/Comment/CommentInput";
import Link from "next/link";
import SelectPIC from "@/app/(pages)/(dashboard)/admin/tickets/components/SelectPIC";

const DetailTicketSheet = ({ data }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <EyeOpenIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="lg:max-w-lg overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Tiket {data?.ticket_id}</SheetTitle>
          <div className="flex flex-col space-y-3.5 text-sm">
            <h3 className="font-semibold text-gray-900 mt-2">Data Pelanggan</h3>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Nama:</p>
              <p className="font-medium">
                {
                  data?.conversation_messages.conversations.customers
                    .nama_lengkap
                }
              </p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Email:</p>
              <p className="font-medium">
                {data?.conversation_messages.conversations.customers.email}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1.5">
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <Instagram style={{ fontSize: 16 }} className="text-rose-600" />{" "}
                <span>
                  {
                    data?.conversation_messages.conversations.customers
                      .instagram_username
                  }
                </span>
              </div>
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <X style={{ fontSize: 16 }} className="text-blue-400" />{" "}
                <span>
                  {
                    data?.conversation_messages.conversations.customers
                      .twitter_username
                  }
                </span>
              </div>
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <WhatsApp style={{ fontSize: 16 }} className="text-green-600" />{" "}
                <span>
                  {
                    data?.conversation_messages.conversations.customers
                      .whatsapp_number
                  }
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Informasi Tambahan:</p>
              <p className="font-medium">-</p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Kegiatan:</p>
              <p className="font-medium">Penjual</p>
            </div>
            <h3 className="font-semibold text-gray-900 pt-2">Detail Tiket</h3>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Dibuat Tanggal:</p>
              <p className="font-medium">{data?.created_at}</p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Nama Keluhan:</p>
              <p className="font-medium">{data?.assignment_name}</p>
            </div>
            <div className="flex flex-col space-y-2.5 items-start py-1.5 border-b">
              <p className="text-gray-600">Informasi Tambahan:</p>
              <p className="text-left">{data?.assignment_detail}</p>
            </div>
            <div className="grid lg:grid-cols-4 justify-between items-center py-1.5 border-b">
              <p className="text-gray-600 lg:col-span-2 text-left">
                Ditugaskan Ke:
              </p>
              <div className="col-span-2">
                <SelectPIC
                  name={data?.conversation_messages.conversations.accounts.name}
                  image={
                    data?.conversation_messages.conversations.accounts
                      .photo_profile
                  }
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 justify-between items-center py-1.5 border-b">
              <p className="text-gray-600 lg:col-span-2 text-left">Status:</p>
              <div className="col-span-2">
                <Selects items={statuses} val={data?.status} />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 justify-between items-center py-1.5 border-b">
              <p className="text-gray-600 lg:col-span-2 text-left">
                Prioritas:
              </p>
              <div className="col-span-2">
                <Selects
                  items={priorities}
                  val={data?.priority}
                  type="legend"
                />
              </div>
            </div>
            <div className="py-1.5">
              <p className="text-gray-600 col-span-2 text-left inline-block mr-2">
                File:
              </p>
              <span className="px-2 py-1.5 border text-gray-600 rounded-lg pb-2">
                <Link href={data?.assignment_file}>File Lampiran</Link>
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 pt-2 text-left">
              Komentar
            </h3>
            <div className="flex flex-col space-y-2.5 lg:items-center">
              <Comment />
              <CommentInput />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default DetailTicketSheet;
