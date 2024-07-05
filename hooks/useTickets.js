import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMultipleTickets,
  fetchTickets,
  filteredTicketsByPriorityAndStatus,
  getStatus,
  Loading,
  resetSelectedItems,
  searchItems,
  selectAllItems,
  selectFilteredTickets,
  selectItem,
  selectSelectedItems,
  setCurrentPage,
} from "@/app/redux/slices/ticketsSlice";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

export default function useTickets() {
  // Session & etc.
  const { data: session } = useSession();
  const { toast } = useToast();

  // Selectors, States, and Dispatch
  const dispatch = useDispatch();
  const filteredTickets = useSelector(selectFilteredTickets);
  const getStatusInfo = useSelector(getStatus);
  const selectedItems = useSelector(selectSelectedItems);
  const currentPage = useSelector((state) => state.tickets.currentPage);
  const itemsPerPage = useSelector((state) => state.tickets.itemsPerPage);
  const getLoading = useSelector(Loading);
  const [openPopover, setOpenPopover] = React.useState(false);
  const [selectedPriorities, setSelectedPriorities] = React.useState([]);
  const [selectedStatuses, setSelectedStatuses] = React.useState([]);
  const [selectedTime, setSelectedTime] = React.useState([]);

  // Fetching Data
  React.useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchTickets(session?.token.data.token));
      }
    }
    dispatch(
      filteredTicketsByPriorityAndStatus({
        priorities: selectedPriorities,
        statuses: selectedStatuses,
      }),
    );
  }, [
    session?.token.data.token,
    getStatusInfo,
    dispatch,
    selectedPriorities,
    selectedStatuses,
    selectedTime,
  ]);

  const ticketsForCurrentPage = filteredTickets.slice(
    (currentPage - 1) * itemsPerPage,
    Math.min(currentPage * itemsPerPage, filteredTickets.length),
  );

  // Handlers
  const handleSearch = (inputRef) => {
    dispatch(searchItems(inputRef));
  };

  const handleRefresh = () => {
    dispatch(fetchTickets(session?.token.data.token));
  };

  const handleDeleteMultiple = () => {
    dispatch(
      deleteMultipleTickets({
        ids: selectedItems,
        token: session?.token.data.token,
      }),
    );
    dispatch(resetSelectedItems());
    toast({
      title: "Berhasil Menghapus",
      variant: "success",
    });
    dispatch(fetchTickets(session?.token.data.token));
  };

  const handleSelect = (id) => {
    dispatch(selectItem(id));
  };

  const handleSelectAll = (checked) => {
    dispatch(selectAllItems(checked));
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const disablePrev = currentPage === 1;
  const disableNext =
    currentPage === Math.ceil(filteredTickets.length / itemsPerPage);

  const handlePriorityChange = (e) => {
    if (e.target.checked) {
      setSelectedPriorities([...selectedPriorities, e.target.value]);
    } else {
      setSelectedPriorities(
        selectedPriorities.filter((priority) => priority !== e.target.value),
      );
    }
  };

  const handleStatusChange = (e) => {
    if (e.target.checked) {
      setSelectedStatuses([...selectedStatuses, e.target.value]);
    } else {
      setSelectedStatuses(
        selectedStatuses.filter((status) => status !== e.target.value),
      );
    }
  };

  const clearFilters = () => {
    setSelectedPriorities([]);
    setSelectedStatuses([]);
    setSelectedTime([]);
    setOpenPopover(false);
  };

  return {
    filteredTickets,
    openPopover,
    selectedPriorities,
    selectedStatuses,
    selectedTime,
    setOpenPopover,
    selectedItems,
    currentPage,
    itemsPerPage,
    getLoading,
    ticketsForCurrentPage,
    disablePrev,
    disableNext,
    handlePriorityChange,
    handleSelect,
    handleStatusChange,
    handleDeleteMultiple,
    handleNextPage,
    handlePrevPage,
    handleSelectAll,
    clearFilters,
    handleSearch,
    handleRefresh,
  };
}
