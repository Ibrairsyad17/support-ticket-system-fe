import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import indonesiaStrings from "react-timeago/lib/language-strings/id";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Trash } from "lucide-react";
import { WhatsApp } from "@mui/icons-material";
import TimeAgo from "react-timeago";
import DataTableActions from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/components/DataTableActions";
import {
  deleteMultipleComplaints,
  resetSelectedItems,
  selectAllItems,
  selectItem,
  selectSelectedItems,
  selectCurrentPage,
  selectItemsPerPage,
  setCurrentPage,
  Loading,
  fetchComplaints,
} from "@/app/redux/slices/complaintsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import DataTableSkeleton from "@/app/(pages)/(dashboard)/components/DataTable/DataTableSkeleton";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const DataTableComplaints = ({ data, refresh }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  // Selectors
  const selectedItems = useSelector(selectSelectedItems);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(Loading);

  const { toast } = useToast();

  const complaintsForCurrentPage = data.slice(
    (currentPage - 1) * itemsPerPage,
    Math.min(currentPage * itemsPerPage, data.length),
  );

  // Handlers

  const handleSelect = (id) => {
    dispatch(selectItem(id));
  };

  const handleSelectAll = (checked) => {
    dispatch(selectAllItems(checked));
  };

  const handleMultipleDelete = () => {
    dispatch(
      deleteMultipleComplaints({
        ids: selectedItems,
        token: session?.token.data.token,
      }),
    );
    dispatch(resetSelectedItems());
    toast({
      title: "Berhasil Menghapus",
      variant: "success",
    });
    dispatch(fetchComplaints(session?.token.data.token));
  };

  return (
    <div className="grid grid-cols-1 gap-y-5">
      <div className="flex item-center justify-between">
        <div className="flex space-x-3 px-4 items-center">
          <Checkbox
            id="select-all"
            className="mt-0.5"
            checked={selectedItems.length === data.length}
            onCheckedChange={handleSelectAll}
          />
          <Label htmlFor="select-all" className="text-sm">
            Pilih semua
          </Label>
          {refresh}
          {selectedItems.length > 0 && (
            <Button variant="outline" size="sm" onClick={handleMultipleDelete}>
              <Trash className="w-4 h-4 mr-2" />
              Hapus semua
            </Button>
          )}
        </div>
        <div className="flex space-x-3 items-center">
          <p className="mr-2 text-sm">
            Halaman ke {currentPage} dari{" "}
            {Math.ceil(data.length / itemsPerPage)}
          </p>
          <Button
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            disabled={currentPage === 1}
            size="icon"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            size="icon"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {isLoading ? (
        <DataTableSkeleton />
      ) : (
        <div className="w-full overflow-x-scroll xl:overflow-hidden mb-5">
          <ul className="col-span-1 flex flex-col divide-y divide-gray-100 border rounded w-[76rem] xl:w-full">
            <li className="grid grid-cols-12 gap-3 bg-gray-100 py-2 px-4 items-center ">
              <div className="col-span-2 flex item-center space-x-4">
                <Checkbox
                  className="mt-0.5"
                  checked={selectedItems.length === data.length}
                  onCheckedChange={handleSelectAll}
                />
                <p className=" text-sm">Nama</p>
              </div>
              <p className="col-span-2 text-sm">Platform</p>
              <p className="col-span-1 text-sm">Kata kunci</p>
              <p className="col-span-4 text-sm">Detail Keluhan</p>
              <p className="col-span-2 text-sm">Waktu</p>
              <p className="col-span-1 text-sm">Aksi</p>
            </li>
            {complaintsForCurrentPage.map((complaint) => {
              const getKeyword =
                complaint.conversation_messages.convo_message_category;
              const formatter = buildFormatter(indonesiaStrings);

              return (
                <li
                  key={complaint.id}
                  className="grid grid-cols-12 gap-3 bg-white py-2.5 px-4 items-center"
                >
                  <div className="col-span-2 flex item-center space-x-4">
                    <Checkbox
                      className="mt-0.5"
                      checked={selectedItems.includes(Number(complaint.id))}
                      onCheckedChange={() => handleSelect(complaint.id)}
                    />
                    <p className=" text-sm">
                      {complaint.conversation_messages.conversations.customers
                        .platform === "WHATSAPP" &&
                        complaint.conversation_messages.conversations.customers
                          .whatsapp_username}
                      {complaint.conversation_messages.conversations.customers
                        .platform === "INSTAGRAM" &&
                        complaint.conversation_messages.conversations.customers
                          .instagram_username}
                      {complaint.conversation_messages.conversations.customers
                        .platform === "TWITTER" &&
                        complaint.conversation_messages.conversations.customers
                          .twitter_username}
                    </p>
                  </div>
                  <div className="col-span-2 text-sm">
                    {complaint.conversation_messages.conversations.social_media
                      .platform === "INSTAGRAM" ? (
                      <div className="inline-flex space-x-2 bg-rose-50 px-4 rounded-full py-2 items-center">
                        <div className="bg-rose-600 h-5 w-5 flex justify-center items-center rounded-full">
                          <InstagramLogoIcon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-xs text-rose-600">Instagram</span>
                      </div>
                    ) : (
                      ""
                    )}
                    {complaint.conversation_messages.conversations.social_media
                      .platform === "TWITTER" ? (
                      <div className="inline-flex space-x-2 bg-gray-100 px-4 rounded-full py-2 items-center">
                        <div className="bg-gray-900 h-5 w-5 flex items-center justify-center rounded-full ">
                          <TwitterLogoIcon className="h-3 w-3 text-white" />
                        </div>

                        <span className="text-xs text-gray-900">X</span>
                      </div>
                    ) : (
                      ""
                    )}
                    {complaint.conversation_messages.conversations.social_media
                      .platform === "WHATSAPP" ? (
                      <div className="inline-flex space-x-2 bg-green-100 px-4 rounded-full py-2 items-center">
                        <div className="bg-green-500 h-5 w-5 flex items-center justify-center rounded-full">
                          <WhatsApp className="h-3 w-3 text-white" />
                        </div>

                        <span className="text-xs text-green-600">WhatsApp</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-span-1 text-sm">
                    <div>
                      {getKeyword.length === 0 && <span>-</span>}
                      {getKeyword.map((item, index) => (
                        <div key={index}>
                          {item.keywords.name.split(",").map((word, i) => (
                            <span key={i}>{word} </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="col-span-4 text-sm max-w-sm overflow-hidden truncate">
                    {complaint.assignment_detail}
                  </p>
                  <div className="col-span-2 text-sm">
                    <TimeAgo
                      date={complaint.assignment_date}
                      formatter={formatter}
                    />
                  </div>
                  <div className="col-span-1">
                    <DataTableActions
                      id={complaint.id}
                      chatID={complaint.conversation_messages.conversations.id}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataTableComplaints;
