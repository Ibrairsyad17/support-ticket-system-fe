"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { WhatsApp } from "@mui/icons-material";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { TwitterIcon } from "lucide-react";
import TimeAgo from "react-timeago";
import React from "react";

export const columns = [
  {
    id: "select",
    header: "",
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
    accessorKey: "customers",
    header: "",
    cell: ({ row }) => (
      <div className="flex">
        {row.getValue("customers").platform === "INSTAGRAM" ? (
          <div className="bg-rose-600 h-6 w-6 flex items-center justify-center rounded-full">
            <InstagramLogoIcon className="h-3.5 w-3.5 text-white" />
          </div>
        ) : (
          ""
        )}
        {row.getValue("customers").platform === "TWITTER" ? (
          <div className="bg-gray-900 h-6 w-6 flex items-center justify-center rounded-full">
            <TwitterIcon className="h-3.5 w-3.5 text-white" />
          </div>
        ) : (
          ""
        )}
        {row.getValue("customers").platform === "WHATSAPP" ? (
          <div className="bg-green-600 h-6 w-6 flex items-center justify-center rounded-full">
            <WhatsApp className="h-3.5 w-3.5 text-white" />
          </div>
        ) : (
          ""
        )}
      </div>
    ),
  },
  {
    accessorKey: "customers",
    header: "",
    cell: ({ row }) => (
      <div className="font-semibold">
        {row.getValue("customers").platform === "INSTAGRAM" && (
          <Link href="/">{row.getValue("customers").instagram_username}</Link>
        )}
        {row.getValue("customers").platform === "TWITTER" && (
          <Link href="/">{row.getValue("customers").twitter_username}</Link>
        )}
        {row.getValue("customers").platform === "WHATSAPP" && (
          <Link href="/">{row.getValue("customers").whatsapp_username}</Link>
        )}
      </div>
    ),
  },
  {
    accessorKey: "conversation_messages",
    header: "",
    cell: ({ row }) => (
      <div className="max-w-[300px] lg:max-w-lg overflow-hidden truncate">
        <Link href="/" className="hover:underline">
          {row.getValue("conversation_messages").reverse()[0].message}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "conversation_messages",
    header: "",
    cell: ({ row }) => (
      <div className="px-4">
        <TimeAgo
          date={row.getValue("conversation_messages").reverse()[0].updated_at}
        />
      </div>
    ),
  },
];
