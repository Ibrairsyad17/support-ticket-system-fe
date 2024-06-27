"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import {
  deleteMultipleTickets,
  fetchTickets,
} from "@/app/redux/slices/ticketsSlice";
import { useToast } from "@/components/ui/use-toast";

const RemoveTicketDialog = ({ data }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const { toast } = useToast();

  const handleDelete = (id) => {
    dispatch(
      deleteMultipleTickets({
        ids: [Number(id)],
        token: session?.token.data.token,
      }),
    );
    dispatch(fetchTickets(session?.token.data.token));
    toast({
      title: "Tiket berhasil dihapus",
      description: `Tiket ${data.ticket_id} berhasil dihapus`,
      variant: "success",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <TrashIcon className="h-5 w-5 text-red-600" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah anda yakin ingin menghapus tiket {data.ticket_id}
          </AlertDialogTitle>
          <AlertDialogDescription>
            Anda akan menghapus tiket {data.ticket_id}. Tindakan ini tidak dapat
            dibatalkan. Apakah Anda yakin ingin menghapus tiket ini?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="grid lg:grid-cols-2 gap-2">
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(data.id)}>
            Ya, saya yakin
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveTicketDialog;
