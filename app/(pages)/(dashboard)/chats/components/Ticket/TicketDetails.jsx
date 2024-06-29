import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Instagram, WhatsApp, X } from "@mui/icons-material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Selects from "@/app/(pages)/(dashboard)/components/Selects";
import {
  priorities,
  statuses,
} from "@/app/(pages)/(dashboard)/components/data/data";
import Comment from "@/app/(pages)/(dashboard)/components/Comment/Comment";
import CommentInput from "@/app/(pages)/(dashboard)/components/Comment/CommentInput";
import Link from "next/link";
import { BASE_URL } from "@/app/utils/constant";

const TicketDetails = ({ ticket }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="underline ">Lihat Detail</span>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg overflow-y-scroll rounded-ss-lg">
        <SheetHeader>
          <SheetTitle>Tiket {ticket?.ticket_id}</SheetTitle>
          <div className="flex flex-col space-y-3.5 text-sm">
            <h3 className="font-semibold text-gray-900 mt-2">Data Pelanggan</h3>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Nama:</p>
              <p className="font-medium">
                {
                  ticket?.conversation_messages.conversations.customers
                    .nama_lengkap
                }
              </p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Email:</p>
              <p className="font-medium">
                {ticket?.conversation_messages.conversations.customers.email}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1.5">
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <Instagram style={{ fontSize: 16 }} className="text-rose-600" />{" "}
                <span>
                  {
                    ticket?.conversation_messages.conversations.customers
                      .instagram_username
                  }
                </span>
              </div>
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <X style={{ fontSize: 16 }} className="text-blue-400" />{" "}
                <span>
                  {
                    ticket?.conversation_messages.conversations.customers
                      .twitter_username
                  }
                </span>
              </div>
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <WhatsApp style={{ fontSize: 16 }} className="text-green-600" />{" "}
                <span>
                  {
                    ticket?.conversation_messages.conversations.customers
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
              <p className="font-medium">
                {new Date(ticket?.created_at).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Nama Keluhan:</p>
              <p className="font-medium">{ticket?.assignment_name}</p>
            </div>
            <div className="flex flex-col space-y-2.5 items-start py-1.5 border-b">
              <p className="text-gray-600">Informasi Tambahan:</p>
              <p className="text-left">{ticket?.assignment_detail}</p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Ditugaskan ke:</p>
              <div className="flex space-x-2 items-center">
                <Avatar className="h-4 w-4">
                  <AvatarImage src={ticket?.accounts.photo_profile} alt="" />
                  <AvatarFallback className="bg-gray-200 text-gray-400">
                    U
                  </AvatarFallback>
                </Avatar>
                <span>{ticket?.accounts.name}</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 justify-between items-center py-1.5 border-b">
              <p className="text-gray-600 lg:col-span-2 text-left">Status:</p>
              <div className="col-span-2">
                <Selects
                  items={statuses}
                  val={ticket?.status}
                  id={ticket?.id}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 justify-between items-center py-1.5 border-b">
              <p className="text-gray-600 lg:col-span-2 text-left">
                Prioritas:
              </p>
              <div className="col-span-2">
                <Selects
                  items={priorities}
                  val={ticket?.priority}
                  id={ticket?.id}
                  type="legend"
                />
              </div>
            </div>
            <div className="py-1.5">
              <p className="text-gray-600 col-span-2 text-left inline-block mr-2">
                File:
              </p>
              <span className="px-2 py-1.5 border text-gray-600 rounded-lg pb-2">
                {ticket?.assignment_file !== null ? (
                  <Link href={`${BASE_URL}/${ticket?.assignment_file}`}>
                    <span className="text-blue-500">File Lampiran</span>
                  </Link>
                ) : (
                  "-"
                )}
              </span>
            </div>

            <h3 className="font-semibold text-gray-900 pt-2 text-left">
              Komentar
            </h3>
            <div className="flex flex-col space-y-2.5 lg:items-center">
              <Comment
                id={ticket?.id}
                pic={ticket?.accounts.id}
                admin={ticket?.assignment_conversations.admin_id}
              />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default TicketDetails;
