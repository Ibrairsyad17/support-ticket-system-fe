import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMultipleComplaints,
  fetchComplaints,
  filterComplaintsByDate,
  filterComplaintsByPlatform,
  getStatus,
  Loading,
  resetSelectedItems,
  searchItems,
  selectAllItems,
  selectCurrentPage,
  selectFilteredComplaintsByDate,
  selectFilteredComplaintsByPlatform,
  selectItem,
  selectItemsPerPage,
  selectSelectedItems,
  setCurrentPage,
} from "@/app/redux/slices/complaintsSlice";
import React, { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function useComplaints() {
  // Session & etc.
  const { data: session } = useSession();
  const { toast } = useToast();

  // Selectors, States, and Dispatch
  const dispatch = useDispatch();
  const complaintsByDate = useSelector(selectFilteredComplaintsByDate);
  const complaintsByPlatform = useSelector(selectFilteredComplaintsByPlatform);
  const getLoading = useSelector(Loading);
  const getStatusInfo = useSelector(getStatus);
  const selectedItems = useSelector(selectSelectedItems);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const [selectedPlatforms, setSelectedPlatforms] = React.useState([]);
  const [openPopover, setOpenPopover] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);

  // Fetching Data
  useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchComplaints(session?.token.data.token));
      }
      complaintsByDate;
      complaintsByPlatform;
      getLoading;
    }
  }, [
    session?.token.data.token,
    getStatusInfo,
    dispatch,
    complaintsByDate,
    getLoading,
  ]);

  // Filtering Data
  const assignedComplaints = complaintsByDate.filter(
    (complaint) => complaint.status === "ASSIGNED",
  );
  const inProgressComplaints = complaintsByDate.filter(
    (complaint) => complaint.status === "IN_PROGRESS",
  );
  const doneComplaints = complaintsByDate.filter(
    (complaint) => complaint.status === "DONE",
  );
  const checkedComplaints = complaintsByDate.filter(
    (complaint) => complaint.status === "CHECKED",
  );
  const filteredComplaints = complaintsByPlatform.filter((complaint) =>
    complaintsByDate.includes(complaint),
  );

  // Handlers
  const handleSearch = (inputRef) => {
    dispatch(searchItems(inputRef));
  };

  const handleRefresh = () => {
    dispatch(fetchComplaints(session?.token.data.token));
  };

  const handleFilterChange = (event) => {
    if (event.target.checked) {
      setSelectedPlatforms([...selectedPlatforms, event.target.value]);
    } else {
      setSelectedPlatforms(
        selectedPlatforms.filter((platform) => platform !== event.target.value),
      );
    }
  };

  React.useEffect(() => {
    dispatch(filterComplaintsByPlatform(selectedPlatforms));
  }, [selectedPlatforms, dispatch]);

  const handleDateFilterChange = (event) => {
    if (event.target.checked) {
      setSelectedDate(event.target.value);
    } else {
      setSelectedDate(null);
    }
  };

  React.useEffect(() => {
    dispatch(filterComplaintsByDate(selectedDate));
  }, [selectedDate, dispatch]);

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const disablePrev = currentPage === 1;
  const disableNext =
    currentPage === Math.ceil(filteredComplaints.length / itemsPerPage);

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

  // Reset Filter
  const handleResetFilter = () => {
    setSelectedPlatforms([]);
    setSelectedDate(null);
    setOpenPopover(false);
  };

  // Pagination
  const complaintsForCurrentPage = filteredComplaints.slice(
    (currentPage - 1) * itemsPerPage,
    Math.min(currentPage * itemsPerPage, filteredComplaints.length),
  );

  // Return
  return {
    complaintsByDate,
    getLoading,
    assignedComplaints,
    inProgressComplaints,
    doneComplaints,
    checkedComplaints,
    filteredComplaints,
    selectedPlatforms,
    selectedDate,
    openPopover,
    setOpenPopover,
    selectedItems,
    currentPage,
    itemsPerPage,
    complaintsForCurrentPage,
    disablePrev,
    disableNext,
    handleSearch,
    handleRefresh,
    handleFilterChange,
    handleDateFilterChange,
    handleResetFilter,
    handleNextPage,
    handlePrevPage,
    handleSelect,
    handleSelectAll,
    handleMultipleDelete,
  };
}
