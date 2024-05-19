"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MostKeyword = ({ data }) => {
  const limitData = data.slice(0, 3);
  const limitDataDialog = data.slice(0, 10);

  return (
    <div className="">
      <ul className="w-full flex flex-col">
        {limitData.map((keyword) => (
          <li
            key={keyword.id}
            className="inline-flex items-center gap-x-2 py-3 pl-4 text-sm font-medium bg-white text-gray-800 -mt-px"
          >
            <div className="flex justify-between w-full">
              <span>{keyword.name}</span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">
                {keyword.count}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-amber-500 hover:underline hover:text-amber-500"
          >
            Lihat Selengkapnya
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Kata Kunci Terbanyak</DialogTitle>
            <DialogDescription>Seluruh Kata Kunci Terbanyak</DialogDescription>
          </DialogHeader>
          <ul className="w-full flex flex-col h-48 overflow-y-scroll">
            {limitDataDialog.map((keyword) => (
              <li
                key={keyword.id}
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white text-gray-800 -mt-px"
              >
                <div className="flex justify-between w-full">
                  <span>{keyword.name}</span>
                  <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">
                    {keyword.count}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" className="w-full">
                Tutup
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MostKeyword;
