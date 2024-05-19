import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import KeywordList from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/KeywordsList/KeywordList";

const KeywordListDialog = ({ data, more, name }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="px-2 py-1 text-xs rounded-full text-violet-500 font-semibold"
        >
          + {more}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Daftar Kata Kunci {name}
          </DialogTitle>
          <DialogDescription className="text-sm">
            Tambah Kata Kunci Pada Kategori {name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-y-2">
          <KeywordList data={data} type="button" />
        </div>
        <DialogFooter className="w-full">
          <DialogClose asChild>
            <Button type="button" className="w-full">
              Tutup
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default KeywordListDialog;
