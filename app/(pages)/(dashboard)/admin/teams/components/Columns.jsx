"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { CheckIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import TableActions from "@/app/(pages)/(dashboard)/admin/teams/components/TableActions";

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
    accessorKey: "email",
    header: <div className="px-4 text-xs lg:text-sm">Email</div>,
    cell: ({ row }) => (
      <div className="px-4 text-xs lg:text-sm">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone_number",
    header: <div className="px-4 text-xs lg:text-sm">Nomor Telepon</div>,
    cell: ({ row }) => (
      <div className="px-4 text-xs lg:text-sm">
        {row.getValue("phone_number")}
      </div>
    ),
  },
  {
    accessorKey: "pic_roles",
    header: <div className="px-4 text-xs lg:text-sm">Role</div>,
    cell: ({ row }) => {
      const picRoles = row.getValue("pic_roles");
      return (
        <div className="px-4 text-xs">
          <span className="lg:bg-violet-200 rounded-full lg:px-3.5 lg:py-1 text-violet-800">
            {picRoles.role}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "otp_enabled",
    header: <div className="px-4 text-xs lg:text-sm">Status</div>,
    cell: ({ row }) => (
      <div className="px-4 text-xs">
        {row.getValue("otp_enabled") === false && (
          <div className="inline-flex space-x-2 items-center lg:bg-red-100 rounded-full px-2 py-1">
            <CheckIcon className="h-3.5 w-3.5 text-red-600" />
            <span className="text-red-600">Belum diaktivasi</span>
          </div>
        )}
        {row.getValue("otp_enabled") === true && (
          <div className="inline-flex space-x-2 items-center lg:bg-amber-100 rounded-full px-2 py-1">
            <CrossCircledIcon className="h-3.5 w-3.5 text-amber-600" />
            <span className="text-amber-600">Aktif</span>
          </div>
        )}
      </div>
    ),
  },
  {
    id: "actions",
    header: <div className="px-4 text-xs lg:text-sm">Aksi</div>,
    cell: ({ row }) => <TableActions data={row.original} />,
  },
];
