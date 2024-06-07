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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import KeywordList from "../KeywordsList/KeywordList";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addKeyword } from "@/app/redux/slices/keywordSlice";
import { useToast } from "@/components/ui/use-toast";

export function AddKeywordDialog({ data, id }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [name, setName] = React.useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" /> Tambah kata kunci
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Tambah kata kunci</DialogTitle>
          <DialogDescription className="text-sm">
            Tambah kata kunci pada kategori {data.name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                type="text"
                placeholder="Tulis kata kunci"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Button
              onClick={() => {
                dispatch(
                  addKeyword({
                    data: { name, category_id: id },
                    token: session?.token.data.token,
                  }),
                );
                toast({
                  title: `Berhasil menambahkan kata kunci ${name}`,
                  description: `Kata kunci ${name} berhasil ditambahkan`,
                  variant: "success",
                });
                setName("");
              }}
              className="px-3"
            >
              <span className="">Tambah</span>
            </Button>
          </div>
          <h3 className="text-md font-medium mt-3">List kata kunci aplikasi</h3>
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
}
