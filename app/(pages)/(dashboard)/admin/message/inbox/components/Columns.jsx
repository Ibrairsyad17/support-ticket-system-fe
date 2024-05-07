"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { WhatsApp, X } from "@mui/icons-material";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
    accessorKey: "platform",
    header: "",
    cell: ({ row }) => (
      <div className="flex">
        {row.getValue("platform") === "Instagram" ? (
          <div className="bg-rose-600 h-6 w-6 flex items-center justify-center rounded-full">
            <InstagramLogoIcon className="h-3.5 w-3.5 text-white" />
          </div>
        ) : (
          ""
        )}
        {row.getValue("platform") === "X" ? (
          <div className="bg-gray-900 h-6 w-6 flex items-center justify-center rounded-full">
            <X className="h-3.5 w-3.5 text-white" />
          </div>
        ) : (
          ""
        )}
        {row.getValue("platform") === "WhatsApp" ? (
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
    accessorKey: "name",
    header: "",
    cell: ({ row }) => (
      <div className="font-semibold">
        <Link href="/">{row.getValue("name")}</Link>
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "",
    cell: ({ row }) => (
      <div className="max-w-[300px] lg:max-w-lg overflow-hidden truncate">
        <Link href="/">{row.getValue("description")}</Link>
      </div>
    ),
  },
  {
    accessorKey: "time",
    header: "",
    cell: ({ row }) => <div className="px-4">{row.getValue("time")}</div>,
  },
];
