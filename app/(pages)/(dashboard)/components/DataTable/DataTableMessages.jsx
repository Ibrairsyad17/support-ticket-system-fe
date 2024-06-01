"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import TimeAgo from "react-timeago";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllItems,
  selectCurrentPage,
  selectItem,
  selectItemsPerPage,
  selectSelectedItems,
} from "@/app/redux/slices/messagesSlice";
import { Button } from "@/components/ui/button";
import { setCurrentPage } from "@/app/redux/slices/messagesSlice";
import { Label } from "@/components/ui/label";
import ChangeStatusOption from "@/app/(pages)/(dashboard)/admin/message/inbox/components/ChangeStatusOption";

const DataTableMessages = ({ data }) => {
  const dispatch = useDispatch();

  const selectedItems = useSelector(selectSelectedItems);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const messagesForCurrentPage = data.slice(
    (currentPage - 1) * itemsPerPage,
    Math.min(currentPage * itemsPerPage, data.length),
  );

  const handleSelect = (id) => {
    dispatch(selectItem(id));
  };

  const handleSelectAll = (checked) => {
    dispatch(selectAllItems(checked));
  };

  return (
    <div className="grid grid-cols-1 gap-y-1.5">
      <div className="flex item-center justify-between my-2">
        <div className="flex space-x-3 px-4 items-center">
          <Checkbox
            id="select-all"
            checked={selectedItems.length === data.length}
            onCheckedChange={(checked) => handleSelectAll(checked)}
            className="mt-0.5"
          />
          <Label htmlFor="select-all" className="text-sm">
            Pilih semua
          </Label>
          {selectedItems.length > 0 && <ChangeStatusOption />}
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
      <div className="w-full overflow-x-scroll xl:overflow-hidden mb-5">
        <ul className="col-span-1 flex flex-col divide-y divide-gray-100 border rounded w-[76rem] xl:w-full">
          {messagesForCurrentPage.map((ticket, index) => {
            const getLastMessage = ticket.conversation_messages.length - 1;
            return (
              <li
                key={index}
                className="grid grid-cols-12 gap-3 bg-white py-2.5 px-4 items-center"
              >
                <div className="col-span-3 flex item-center space-x-4">
                  <Checkbox
                    className="mt-0.5"
                    checked={selectedItems.includes(ticket.id)}
                    onCheckedChange={() => handleSelect(ticket.id)}
                  />
                  <div className="flex">
                    {ticket.customers.platform === "INSTAGRAM" ? (
                      <div className="bg-rose-600 h-6 w-6 flex items-center justify-center rounded-full">
                        <InstagramLogoIcon className="h-3.5 w-3.5 text-white" />
                      </div>
                    ) : (
                      ""
                    )}
                    {ticket.customers.platform === "TWITTER" ? (
                      <div className="bg-gray-900 h-6 w-6 flex items-center justify-center rounded-full">
                        <TwitterLogoIcon className="h-3.5 w-3.5 text-white" />
                      </div>
                    ) : (
                      ""
                    )}
                    {ticket.customers.platform === "WHATSAPP" ? (
                      <div className="bg-green-600 h-6 w-6 flex items-center justify-center rounded-full">
                        <WhatsApp className="h-3.5 w-3.5 text-white" />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className=" text-sm">
                    <div className="font-semibold">
                      {ticket.customers.platform === "INSTAGRAM" && (
                        <Link href="/">
                          {ticket.customers.instagram_username}
                        </Link>
                      )}
                      {ticket.customers.platform === "TWITTER" && (
                        <Link href="/">
                          {ticket.customers.twitter_username}
                        </Link>
                      )}
                      {ticket.customers.platform === "WHATSAPP" && (
                        <Link href="/">
                          {ticket.customers.whatsapp_username}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/chats/${ticket.id}`}
                  className="hover:underline col-span-7"
                >
                  {ticket.conversation_messages[getLastMessage].message}
                </Link>
                <div className="px-4 col-span-2">
                  <TimeAgo
                    date={
                      ticket.conversation_messages[getLastMessage].updated_at
                    }
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DataTableMessages;
