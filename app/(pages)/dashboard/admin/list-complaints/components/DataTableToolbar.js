import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import DataTableFilteredButton from "@/app/(pages)/dashboard/admin/list-complaints/components/DataTableFilteredButton";
import { socials } from "@/app/(pages)/dashboard/admin/list-complaints/data/data";
function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="flex items-center justify-between px-2 mt-3.5">
      <div className="flex space-x-3.5 justify-between items-center">
        <div className="lg:w-[350px] flex items-center -ml-2">
          <Input
            placeholder="Cari data keluhan..."
            value={table.getColumn("description")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("description")?.setFilterValue(event.target.value)
            }
            className="w-full"
          />
        </div>
        {table.getColumn("platform") && (
          <DataTableFilteredButton
            column={table.getColumn("platform")}
            title="Platform"
            options={socials}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        {/*<div className="flex-1 text-sm text-muted-foreground">*/}
        {/*  {table.getFilteredSelectedRowModel().rows.length} of{" "}*/}
        {/*  {table.getFilteredRowModel().rows.length} row(s) selected.*/}
        {/*</div>*/}
      </div>
      <div className="flex">
        <div className="flex w-[175px] items-center justify-center text-sm font-normal">
          Halaman ke{" "}
          <span className="font-medium mx-1.5">
            {table.getState().pagination.pageIndex + 1}
          </span>{" "}
          dari{" "}
          <span className="font-medium mx-1.5">{table.getPageCount()}</span>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Button
            variant=""
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded-full"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant=""
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded-full"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTableToolbar;
