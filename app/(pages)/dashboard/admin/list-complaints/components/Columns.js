"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DataTableActions from "@/app/(pages)/dashboard/admin/list-complaints/components/DataTableActions";

export const complaints = [
  {
    id: 1,
    name: "Mark Verstappen",
    platform: "Instagram",
    keyword: "Bug",
    description: "There's some bug in the system dude!",
    time: new Date(),
  },
  {
    id: 2,
    name: "Virgil van Dijk",
    platform: "X",
    keyword: "Lag",
    description: "There's some lag in the system dude!",
    time: new Date(),
  },
  {
    id: 3,
    name: "Phil Foden",
    platform: "X",
    keyword: "Crash",
    description: "The app forced close when i use it",
    time: new Date(),
  },
  {
    id: 4,
    name: "Lebron James",
    platform: "WhatsApp",
    keyword: "Bug",
    description: "Man, there's some bugs in your app",
    time: new Date(),
  },
  {
    id: 5,
    name: "Robert Pattinson",
    platform: "Instagram",
    keyword: "Lag",
    description: "Your app lag man",
    time: new Date(),
  },
];

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
    accessKey: "name",
    header: "Nama",
    cell: ({ row }) => <div className=" ">{row.getValue("name")}</div>,
  },
  {
    accessKey: "platform",
    header: "Platform",
    cell: ({ row }) => <div>{row.getValue("platform")}</div>,
  },
  {
    accessKey: "keyword",
    header: "Keyword",
    cell: ({ row }) => <div>{row.getValue("keyword")}</div>,
  },
  {
    accessKey: "description",
    header: "Detail Keluhan",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessKey: "time",
    header: "Waktu",
    cell: ({ row }) => <div>{row.getValue("time")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="w-auto">
        <DataTableActions />
      </div>
    ),
  },
];
