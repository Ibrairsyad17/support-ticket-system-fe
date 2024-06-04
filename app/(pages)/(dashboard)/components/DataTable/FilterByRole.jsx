import React from "react";
import { Button } from "@/components/ui/button";
import { filterByRole } from "@/app/redux/slices/teamsSlice";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoles } from "@/app/api/repository/usersAndCompanyRepository";
import {
  fetchRoles,
  getLoadingStatus,
  getStatus,
  selectAllRoles,
} from "@/app/redux/slices/rolesSlice";

const FilterByRole = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const rolesList = useSelector(selectAllRoles);
  const loadingStatus = useSelector(getLoadingStatus);
  const getStatusInfo = useSelector(getStatus);

  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchRoles(session?.token.data.token));
      }
    }
  }, [session?.token.data.token, getStatusInfo, dispatch]);
  return (
    <div className="flex space-x-3 w-[50rem] items-center">
      <div className="flex space-x-3 items-center">
        <Button
          className={`flex cursor-pointer hover:bg-gray-100 items-center justify-between px-3 py-2 rounded-lg`}
          variant="ghost"
          onClick={(e) => {
            dispatch(filterByRole("All"));
          }}
        >
          <span>Semua</span>
        </Button>
      </div>
      {rolesList.map((role) => {
        return (
          <div key={role.id} className="flex space-x-3 items-center">
            <Button
              className={`flex cursor-pointer hover:bg-gray-100 items-center justify-between px-3 py-2 rounded-lg`}
              variant="ghost"
              onClick={(e) => {
                dispatch(filterByRole(role.role));
              }}
            >
              {role.role}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default FilterByRole;
