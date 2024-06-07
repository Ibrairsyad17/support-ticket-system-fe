import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PencilIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { updateCategory } from "@/app/redux/slices/keywordSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

const EditCategoryDialog = ({ id, title }) => {
  const { data: session } = useSession();
  const [name = title, setName] = React.useState("");
  const dispatch = useDispatch();
  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <PencilIcon className="h-4 w-4 text-green-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Nama Kategori</DialogTitle>
          <DialogDescription className="text-sm">
            Edit nama kategori {title}.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              type="text"
              defaultValue={title}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                dispatch(
                  updateCategory({
                    id: id,
                    data: { name },
                    token: session?.token.data.token,
                  }),
                );
                toast({
                  title: `Berhasil mengubah kategori ${title}`,
                  variant: "success",
                });
              }}
              className="px-3"
            >
              <span className="">Ubah</span>
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryDialog;
