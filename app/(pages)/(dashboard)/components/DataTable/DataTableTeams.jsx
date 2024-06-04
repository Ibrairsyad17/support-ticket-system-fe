"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import TableActions from "@/app/(pages)/(dashboard)/admin/teams/components/TableActions";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import FilterByRole from "@/app/(pages)/(dashboard)/components/DataTable/FilterByRole";
import AddRolesDialog from "@/app/(pages)/(dashboard)/admin/teams/components/AddRolesDialog";
import {
  deleteMultiplePIC,
  resetSelectedItems,
  selectAllItems,
  selectCurrentPage,
  selectItem,
  selectItemsPerPage,
  selectSelectedItems,
  setCurrentPage,
} from "@/app/redux/slices/teamsSlice";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";

const DataTableTeams = ({ data }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const selectedItems = useSelector(selectSelectedItems);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const teamsData = data.slice(
    (currentPage - 1) * itemsPerPage,
    Math.min(currentPage * itemsPerPage, data.length),
  );

  const handleSelect = (id) => {
    dispatch(selectItem(id));
  };

  const handleSelectAll = (checked) => {
    dispatch(selectAllItems(checked));
  };

  const handleMultipleDelete = () => {
    dispatch(
      deleteMultiplePIC({
        ids: selectedItems,
        token: session?.token.data.token,
      }),
    );
    dispatch(resetSelectedItems());
  };

  return (
    <div className="grid grid-cols-1 gap-y-1.5">
      <div className="flex item-center justify-between my-2">
        <FilterByRole />
        <AddRolesDialog />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 ml-4">
          <Checkbox
            id="select-all"
            className="mt-0.5"
            checked={selectedItems.length === data.length}
            onCheckedChange={handleSelectAll}
          />
          <Label htmlFor="select-all" className="text-sm">
            Pilih semua
          </Label>
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
      <div className="w-full overflow-x-scroll xl:overflow-hidden mb-5">
        <ul className="col-span-1 flex flex-col divide-y divide-gray-100 border rounded w-[76rem] xl:w-full">
          <li className="grid grid-cols-12 gap-3 bg-gray-100 py-2 px-4 items-center ">
            <div className="col-span-3 flex item-center space-x-4">
              <Checkbox
                className="mt-0.5"
                checked={selectedItems.length === data.length}
                onCheckedChange={handleSelectAll}
              />
              <p className=" text-sm">Nama</p>
            </div>
            <p className="col-span-2 text-sm">Email</p>
            <p className="col-span-2 text-sm">Nomor Telepon</p>
            <p className="col-span-2 text-sm">Role</p>
            <p className="col-span-2 text-sm">Status</p>
            <p className="col-span-1 text-sm">Aksi</p>
          </li>
          {teamsData.map((team) => {
            return (
              <li
                key={team.id}
                className="grid grid-cols-12 gap-3 bg-white py-2.5 px-4 items-center"
              >
                <div className="col-span-3 flex item-center space-x-4">
                  <Checkbox
                    className="mt-0.5"
                    checked={selectedItems.includes(team.id)}
                    onCheckedChange={() => handleSelect(team.id)}
                  />
                  <p className=" text-sm">{team.name}</p>
                </div>
                <p className="col-span-2 text-sm">{team.email}</p>
                <p className="col-span-2 text-sm">{team.phone_number}</p>
                <div className="col-span-2 text-sm">
                  <span className="lg:bg-violet-200 rounded-full lg:px-3.5 lg:py-1 text-violet-800">
                    {team.pic_roles.role}
                  </span>
                </div>
                <div className="col-span-2 text-sm">
                  {team.otp_enabled === false && (
                    <div className="inline-flex space-x-2 items-center lg:bg-red-100 rounded-full px-2 py-1">
                      <CheckIcon className="h-3.5 w-3.5 text-red-600" />
                      <span className="text-red-600">Belum diaktivasi</span>
                    </div>
                  )}
                  {team.otp_enabled === true && (
                    <div className="inline-flex space-x-2 items-center lg:bg-amber-100 rounded-full px-2 py-1">
                      <CrossCircledIcon className="h-3.5 w-3.5 text-amber-600" />
                      <span className="text-amber-600">Aktif</span>
                    </div>
                  )}
                </div>
                <div className="col-span-1 text-sm">
                  <TableActions data={team} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DataTableTeams;
