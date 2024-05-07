import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Instagram, WhatsApp, X } from "@mui/icons-material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  priorities,
  statuses,
} from "@/app/(pages)/(dashboard)/components/data/data";
import Selects from "@/app/(pages)/(dashboard)/components/Selects";
import Comment from "@/app/(pages)/(dashboard)/components/Comment/Comment";
import CommentInput from "@/app/(pages)/(dashboard)/components/Comment/CommentInput";

const TableActions = ({ id }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <EyeOpenIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Tiket {id}</SheetTitle>
          <div className="flex flex-col space-y-3.5 text-sm">
            <h3 className="font-semibold text-gray-900 mt-2">Data Pelanggan</h3>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Nama:</p>
              <p className="font-medium">Mark Verstappen</p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Email:</p>
              <p className="font-medium">mark@gmail.com</p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1.5">
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <Instagram style={{ fontSize: 16 }} className="text-rose-600" />{" "}
                <span>markrrdone17._</span>
              </div>
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <X style={{ fontSize: 16 }} className="text-blue-400" />{" "}
                <span>markrrdone17._</span>
              </div>
              <div className="px-2 py-1 flex space-x-2 items-center border rounded-lg">
                <WhatsApp style={{ fontSize: 16 }} className="text-green-600" />{" "}
                <span>08457919838</span>
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
              <p className="font-medium">12/04/2024</p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Nama Keluhan:</p>
              <p className="font-medium">Transfer Bank Error</p>
            </div>
            <div className="flex flex-col space-y-2.5 items-start py-1.5 border-b">
              <p className="text-gray-600">Informasi Tambahan:</p>
              <p className="text-left">
                Lorem ipsum dolor sit amet consecuetor pay and then lequipe
                attroite.
              </p>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b">
              <p className="text-gray-600">Ditugaskan ke:</p>
              <div className="flex space-x-2 items-center">
                <Avatar className="h-4 w-4">
                  <AvatarImage src="https://github.com/shadcn.png" alt="" />
                  <AvatarFallback className="bg-gray-200 text-gray-400">
                    P
                  </AvatarFallback>
                </Avatar>
                <span>Bagas Kuncoro</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 justify-between items-center py-1.5 border-b">
              <p className="text-gray-600 lg:col-span-2 text-left">Status:</p>
              <div className="col-span-2">
                <Selects items={statuses} val="Ditugaskan" />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 justify-between items-center py-1.5 border-b">
              <p className="text-gray-600 lg:col-span-2 text-left">
                Prioritas:
              </p>
              <div className="col-span-2">
                <Selects items={priorities} val="Tinggi" type="legend" />
              </div>
            </div>
            <div className=" py-1.5 border-b">
              <p className="text-gray-600 col-span-2 text-left">File:</p>
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

export default TableActions;