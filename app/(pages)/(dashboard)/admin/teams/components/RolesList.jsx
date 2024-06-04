"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRole,
  getLoadingStatus,
  selectAllRoles,
} from "@/app/redux/slices/rolesSlice";
import { Skeleton } from "@/components/ui/skeleton";

const RolesList = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const rolesList = useSelector(selectAllRoles);
  const loadingStatus = useSelector(getLoadingStatus);

  const handleDeleteRole = (id) => {
    dispatch(deleteRole({ id, token: session?.token.data.token }));
  };

  return (
    <div className="h-72 overflow-y-scroll">
      {loadingStatus ? (
        <div className="flex flex-col divide-y space-y-5 divide-gray-100">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 justify-between"
            >
              <Skeleton className="w-11/12 h-5" />
              <Skeleton className="w-1/12 h-5" />
            </div>
          ))}
        </div>
      ) : (
        <ul className="w-full flex flex-col divide-y divide-gray-100">
          {rolesList.map((role, index) => {
            return (
              <li
                key={role.id}
                className="inline-flex items-center gap-x-2 py-3 text-sm font-base bg-white text-gray-600 -mt-px"
              >
                <div className="flex justify-between w-full items-center">
                  {role.role}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteRole(role.id)}
                  >
                    <TrashIcon className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RolesList;
