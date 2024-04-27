"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DataTableActions from "@/app/(pages)/dashboard/admin/list-complaints/components/DataTableActions";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { WhatsApp, X } from "@mui/icons-material";

// export const complaints = [
//   {
//     id: 1,
//     name: "Mark Verstappen",
//     platform: "Instagram",
//     keyword: "Bug",
//     description: "There's some bug in the system dude!",
//     date: "2023-07-25",
//   },
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
          <InstagramLogoIcon className="h-4 w-4 mr-2 text-rose-600" />
        ) : (
          ""
        )}
        {row.getValue("platform") === "X" ? (
          <X className="h-4 w-4 mr-2 text-blue-600" />
        ) : (
          ""
        )}
        {row.getValue("platform") === "WhatsApp" ? (
          <WhatsApp className="h-4 w-4 mr-2 text-green-600" />
        ) : (
          ""
        )}
        {row.getValue("platform")}
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
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
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
