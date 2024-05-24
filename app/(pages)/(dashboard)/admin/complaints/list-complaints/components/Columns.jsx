"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DataTableActions from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/components/DataTableActions";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { WhatsApp } from "@mui/icons-material";
import TimeAgo from "react-timeago";
import React from "react";
import { TwitterIcon } from "lucide-react";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px] ml-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px] ml-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "conversation_messages",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama <ArrowsUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("conversation_messages");

      return (
        <div className="px-4 w-[200px]">
          {name?.conversations.customers.nama_lengkap}
        </div>
      );
    },
  },
  {
    accessorKey: "conversation_messages",
    header: "Platform",
    cell: ({ row }) => {
      const getPlatform = row.getValue("conversation_messages").conversations
        .social_media.platform;

      return (
        <div className="flex items-center w-[150px]">
          {getPlatform === "INSTAGRAM" ? (
            <div className="inline-flex space-x-2 bg-rose-50 px-4 rounded-full py-2 items-center">
              <div className="bg-rose-600 h-5 w-5 flex justify-center items-center rounded-full">
                <InstagramLogoIcon className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs text-rose-600">Instagram</span>
            </div>
          ) : (
            ""
          )}
          {getPlatform === "TWITTER" ? (
            <div className="inline-flex space-x-2 bg-gray-100 px-4 rounded-full py-2 items-center">
              <div className="bg-gray-900 h-5 w-5 flex items-center justify-center rounded-full ">
                <TwitterIcon className="h-3 w-3 text-white" />
              </div>

              <span className="text-xs text-gray-900">X</span>
            </div>
          ) : (
            ""
          )}
          {getPlatform === "WHATSAPP" ? (
            <div className="inline-flex space-x-2 bg-green-100 px-4 rounded-full py-2 items-center">
              <div className="bg-green-500 h-5 w-5 flex items-center justify-center rounded-full">
                <WhatsApp className="h-3 w-3 text-white" />
              </div>

              <span className="text-xs text-green-600">WhatsApp</span>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "conversation_messages",
    header: "Keyword",
    cell: ({ row }) => {
      const getKeyword = row.getValue(
        "conversation_messages",
      ).convo_message_category;
      console.log(getKeyword);
      return (
        <div>
          {getKeyword.length === 0 && <span>-</span>}
          {getKeyword.map((item, index) => (
            <div key={index}>
              {item.keywords.name.split(",").map((word, i) => (
                <span key={i}>{word} </span>
              ))}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "assignment_name",
    header: "Nama Keluhan",
    cell: ({ row }) => (
      <div className="flex">
        <span className="max-w-[300px] lg:max-w-xs overflow-hidden truncate">
          {row.getValue("assignment_name")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "assignment_date",
    header: "Waktu",
    cell: ({ row }) => (
      <div className="bg-amber-100 text-amber-500 px-2 py-1 rounded-full">
        <p className="w-full text-center text-xs">
          <TimeAgo date={row.getValue("assignment_date")} />
        </p>
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => (
      <div className="w-auto">
        <DataTableActions id={row.getValue("id")} />
      </div>
    ),
  },
];
