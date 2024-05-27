import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function DataTableToolbar({ table }) {
  return (
    <div className="flex items-center justify-end px-2 mt-1 mb-1">
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
