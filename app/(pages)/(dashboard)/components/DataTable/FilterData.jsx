import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { socials } from "@/app/(pages)/(dashboard)/components/data/data";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import useComplaints from "@/hooks/useComplaints";

const FilterData = () => {
  const {
    handleFilterChange,
    handleDateFilterChange,
    handleResetFilter,
    openPopover,
    setOpenPopover,
  } = useComplaints();

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <MixerHorizontalIcon className="h-3.5 w-3.5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-5">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-lg">Filter Data</h4>
            <p className="text-sm text-muted-foreground">
              Cari data keluhan berdasarkan:
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2.5">
              <h5 className="text-sm font-medium">Platform</h5>
              <div className="flex space-x-2.5">
                {socials.map((social) => (
                  <div key={social.value}>
                    <input
                      id={social.label}
                      type="checkbox"
                      value={social.value}
                      onChange={handleFilterChange}
                      className="sr-only checkbox"
                    />{" "}
                    <label
                      htmlFor={social.label}
                      className="checkbox-label px-4 py-1 text-sm border rounded-full"
                    >
                      {social.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Filter By date*/}
            <div className="flex flex-col space-y-2.5">
              <h5 className="text-sm font-medium">Waktu</h5>
              <div className="grid grid-cols-3 gap-y-3">
                <div>
                  <input
                    id="today"
                    type="checkbox"
                    value="today"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="today"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Hari Ini
                  </label>
                </div>
                <div>
                  <input
                    id="yesterday"
                    type="checkbox"
                    value="yesterday"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="yesterday"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Kemarin
                  </label>
                </div>
                <div>
                  <input
                    id="this-week"
                    type="checkbox"
                    value="this week"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="this-week"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Minggu Ini
                  </label>
                </div>
                <div>
                  <input
                    id="last-month"
                    type="checkbox"
                    value="last month"
                    onChange={handleDateFilterChange}
                    className="sr-only checkbox"
                  />{" "}
                  <label
                    htmlFor="last-month"
                    className="checkbox-label px-4 py-1 text-sm border rounded-full"
                  >
                    Bulan Lalu
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleResetFilter}>Atur Ulang</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterData;
