"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Selects from "@/app/(pages)/(dashboard)/components/Selects";
import {
  priorities,
  statuses,
} from "@/app/(pages)/(dashboard)/components/data/data";
import TableActions from "@/app/(pages)/(dashboard)/pic/tickets/components/TableActions";

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
    accessorKey: "ticket_id",
    header: <div className="px-4 text-xs lg:text-sm">Kode Tiket</div>,
    cell: ({ row }) => (
      <div className="px-4 text-xs lg:text-sm">{row.getValue("ticket_id")}</div>
    ),
  },
  {
    accessorKey: "conversation_messages",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-xs lg:text-sm"
        >
          Nama <ArrowsUpDownIcon className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const messages = row.getValue("conversation_messages");
      return (
        <div className="px-4 text-xs lg:text-sm">
          {messages.conversations.customers.nama_lengkap}
        </div>
      );
    },
  },
  {
    accessorKey: "assignment_name",
    header: <div className="px-4 text-xs lg:text-sm">Nama Keluhan</div>,
    cell: ({ row }) => (
      <div className="px-4 max-w-[300px] lg:max-w-xs overflow-hidden truncate text-xs lg:text-sm">
        {row.getValue("assignment_name")}
      </div>
    ),
  },
  {
    accessorKey: "conversation_messages",
    header: <div className="px-4">Ditugaskan</div>,
    cell: ({ row }) => {
      const assigned = row.getValue("conversation_messages");
      return (
        <div className="px-4 max-w-[300px] lg:max-w-xs overflow-hidden truncate">
          <div className="flex space-x-2 items-center">
            <Avatar className="lg:h-6 lg:w-6 h-5 w-5">
              <AvatarImage
                src={assigned.conversations.accounts.photo_profile}
                alt=""
              />
              <AvatarFallback className="bg-gray-200 text-gray-400">
                P
              </AvatarFallback>
            </Avatar>
            <span className="text-xs lg:text-sm">
              {assigned.conversations.accounts.name}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: <div className="">Status</div>,
    cell: ({ row }) => {
      return <Selects items={statuses} val={row.getValue("status")} />;
    },
  },
  {
    accessorKey: "priority",
    header: <div className="">Prioritas</div>,
    cell: ({ row }) => {
      return (
        <Selects
          items={priorities}
          val={row.getValue("priority")}
          type="legend"
        />
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <TableActions data={row.original} />;
    },
  },
];
