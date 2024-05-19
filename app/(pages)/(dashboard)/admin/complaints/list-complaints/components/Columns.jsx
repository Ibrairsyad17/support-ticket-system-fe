"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DataTableActions from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/components/DataTableActions";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { WhatsApp, X } from "@mui/icons-material";
import TimeAgo from "react-timeago";
import React from "react";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import indonesiaStrings from "react-timeago/lib/language-strings/id";

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
    accessorKey: "name",
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
    cell: ({ row }) => (
      <div className="px-4 w-[200px]">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "platform",
    header: "Platform",
    cell: ({ row }) => (
      <div className="flex items-center w-[150px]">
        {row.getValue("platform") === "Instagram" ? (
          <div className="inline-flex space-x-2 bg-rose-50 px-4 rounded-full py-2 items-center">
            <div className="bg-rose-600 h-5 w-5 flex justify-center items-center rounded-full">
              <InstagramLogoIcon className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs text-rose-600">
              {row.getValue("platform")}
            </span>
          </div>
        ) : (
          ""
        )}
        {row.getValue("platform") === "X" ? (
          <div className="inline-flex space-x-2 bg-gray-100 px-4 rounded-full py-2 items-center">
            <div className="bg-gray-900 h-5 w-5 flex items-center justify-center rounded-full ">
              <X className="h-3 w-3 text-white" />
            </div>

            <span className="text-xs text-gray-900">
              {row.getValue("platform")}
            </span>
          </div>
        ) : (
          ""
        )}
        {row.getValue("platform") === "WhatsApp" ? (
          <div className="inline-flex space-x-2 bg-green-100 px-4 rounded-full py-2 items-center">
            <div className="bg-green-500 h-5 w-5 flex items-center justify-center rounded-full">
              <WhatsApp className="h-3 w-3 text-white" />
            </div>

            <span className="text-xs text-green-600">
              {row.getValue("platform")}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    ),
  },
  {
    accessorKey: "keyword",
    header: "Keyword",
    cell: ({ row }) => <div>{row.getValue("keyword")}</div>,
  },
  {
    accessorKey: "description",
    header: "Detail Keluhan",
    cell: ({ row }) => (
      <div className="flex">
        <span className="max-w-[300px] lg:max-w-xs overflow-hidden truncate">
          {row.getValue("description")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Waktu",
    cell: ({ row }) => (
      <div className="bg-amber-100 text-amber-500 px-2 py-1 rounded-full">
        <p className="w-full text-center text-xs">
          <TimeAgo date={row.getValue("date")} />
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
