"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Loading,
  selectAllPicTickets,
  selectItem,
  selectSelectedItems,
  setCurrentPage,
} from "@/app/redux/slices/ticketsSlice";
import Selects from "@/app/(pages)/(dashboard)/components/Selects";
import {
  priorities,
  statuses,
} from "@/app/(pages)/(dashboard)/components/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import DataTableSkeleton from "@/app/(pages)/(dashboard)/components/DataTable/DataTableSkeleton";
import ChangeStatus from "@/app/(pages)/(dashboard)/pic/tickets/components/ChangeStatus";
import TableActions from "@/app/(pages)/(dashboard)/pic/tickets/components/TableActions";

const DataTablePic = ({ data, refresh }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const selectedItems = useSelector(selectSelectedItems);
  const currentPage = useSelector((state) => state.tickets.currentPage);
  const itemsPerPage = useSelector((state) => state.tickets.itemsPerPage);
  const getLoading = useSelector(Loading);

  const ticketsForCurrentPage = data.slice(
    (currentPage - 1) * itemsPerPage,
    Math.min(currentPage * itemsPerPage, data.length),
  );

  const handleSelectAll = (checked) => {
    dispatch(selectAllPicTickets(checked));
  };

  return (
    <div className="grid grid-cols-1 my-6 gap-y-5">
      <div className="flex item-center justify-between">
        <div className="flex space-x-3 px-4 items-center">
          <Checkbox
            className="mt-0.5"
            checked={selectedItems.length === data.length}
            onCheckedChange={handleSelectAll}
          />
          <p className="text-sm">Pilih semua</p>
          {refresh}
          {selectedItems.length > 0 && <ChangeStatus />}
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
      {getLoading ? (
        <DataTableSkeleton />
      ) : (
        <div className="w-full overflow-x-scroll xl:overflow-hidden mb-5">
          <ul className="col-span-1 flex flex-col divide-y divide-gray-100 border rounded w-[76rem] xl:w-full">
            <li className="grid grid-cols-12 gap-3 bg-gray-100 py-2 px-4 items-center">
              <div className="col-span-1 flex item-center space-x-4">
                <Checkbox
                  className="mt-0.5"
                  checked={selectedItems.length === data.length}
                  onCheckedChange={handleSelectAll}
                />
                <p className=" text-sm">Kode</p>
              </div>
              <p className="col-span-2 text-sm">Nama</p>
              <p className="col-span-2 text-sm">Nama Keluhan</p>
              <p className="col-span-2 text-sm">Ditugaskan ke</p>
              <p className="col-span-2 text-sm">Status</p>
              <p className="col-span-2 text-sm">Prioritas</p>
              <p className="col-span-1 text-sm">Aksi</p>
            </li>
            {ticketsForCurrentPage.map((ticket) => {
              return (
                <li
                  key={ticket.id}
                  className="grid grid-cols-12 gap-3 bg-white py-2.5 px-4 items-center"
                >
                  <div className="col-span-1 flex item-center space-x-4">
                    <Checkbox
                      className="mt-0.5"
                      checked={selectedItems.includes(Number(ticket.id))}
                      onCheckedChange={() => dispatch(selectItem(ticket.id))}
                    />
                    <p className=" text-sm">{ticket.ticket_id}</p>
                  </div>
                  <p className="col-span-2 text-sm">
                    {ticket.conversation_messages.conversations.customers
                      .platform === "WHATSAPP" &&
                      ticket.conversation_messages.conversations.customers
                        .whatsapp_username}
                    {ticket.conversation_messages.conversations.customers
                      .platform === "INSTAGRAM" &&
                      ticket.conversation_messages.conversations.customers
                        .instagram_username}
                    {ticket.conversation_messages.conversations.customers
                      .platform === "TWITTER" &&
                      ticket.conversation_messages.conversations.customers
                        .twitter_username}
                  </p>
                  <p className="col-span-2 text-sm">{ticket.assignment_name}</p>

                  <div className="col-span-2 text-sm">
                    <div className="flex space-x-2 items-center">
                      <div className="flex space-x-2 items-center">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback>U</AvatarFallback>
                          <AvatarImage
                            src={ticket.accounts.photo_profile}
                            alt={ticket.accounts.name}
                          />
                        </Avatar>
                        <span className="text-xs">{ticket.accounts.name}</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 text-sm">
                    <Selects
                      items={statuses}
                      val={ticket.status}
                      id={ticket.id}
                    />
                  </div>
                  <div className="col-span-2">
                    <Selects
                      items={priorities}
                      val={ticket.priority}
                      type="legend"
                      id={ticket.id}
                    />
                  </div>
                  <div className="col-span-1">
                    <TableActions data={ticket} role="pic" />
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

export default DataTablePic;
