import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function DataTableToolbar({ table, filteredBy }) {
  return (
    <div className="flex items-center justify-between px-2 mt-1 mb-5">
      <div className="flex space-x-3.5 justify-between items-center">
        <div className="lg:w-[350px] flex items-center -ml-2">
          <Input
            placeholder="Cari data keluhan..."
            value={table.getColumn(filteredBy)?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn(filteredBy)?.setFilterValue(event.target.value)
            }
            className="w-full"
          />
        </div>
        <div className="flex space-x-2">
          <Checkbox
            id="all"
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="translate-y-[2px] ml-2"
          />
          <Label htmlFor="all" className="text-xs text-gray-500">
            Pilih Semua
          </Label>
        </div>
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
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className=""
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className=""
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTableToolbar;
