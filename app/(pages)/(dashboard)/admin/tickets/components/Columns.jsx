"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import Selects from "@/app/(pages)/(dashboard)/components/Selects";
import {
  priorities,
  statuses,
  pics,
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
    accessorKey: "id",
    header: <div className="px-4 text-xs lg:text-sm">Kode Tiket</div>,
    cell: ({ row }) => (
      <div className="px-4 text-xs lg:text-sm">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
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
    cell: ({ row }) => (
      <div className="px-4 text-xs lg:text-sm">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: <div className="px-4 text-xs lg:text-sm">Nama Keluhan</div>,
    cell: ({ row }) => (
      <div className="px-4 max-w-[300px] lg:max-w-xs overflow-hidden truncate text-xs lg:text-sm">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "assigned",
    header: <div className="px-4">Ditugaskan</div>,
    cell: ({ row }) => {
      const assigned = row.getValue("assigned");
      return <Selects items={pics} val={assigned.name} type="avatar" />;
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
      return <TableActions id={row.getValue("id")} />;
    },
  },
];
