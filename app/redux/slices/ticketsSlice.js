import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTicketsAll } from "@/app/api/repository/ticketRepository";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";

const initialState = {
  tickets: [],
  filteredTickets: [],
  selectedItems: [],
  searchedItems: [],
  currentPage: 1,
  itemsPerPage: 10,
  status: "idle",
  loading: true,
  error: null,
};

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (token) => {
    try {
      const response = await getTicketsAll(token);
      return response.data.data.assignments;
    } catch (error) {
      return error.message;
    }
  },
);

export const deleteMultipleTickets = createAsyncThunk(
  "tickets/deleteMultipleTickets",
  async ({ ids, token }) => {
    const stringIds = ids.join(",");

    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.delete(`/assignment`, {
      data: {
        assignment_id: ids,
      },
    });

    if (response.status === 204) {
      return stringIds;
    }

    return stringIds;
  },
);

// Time Filtering Function
function isWithinTimeFrame(date, timeFrame) {
  const now = new Date();
  const ticketDate = new Date(date);

  // Convert to UTC
  const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const ticketDateUTC = Date.UTC(
    ticketDate.getFullYear(),
    ticketDate.getMonth(),
    ticketDate.getDate(),
  );

  switch (timeFrame) {
    case "today":
      return nowUTC === ticketDateUTC;
    case "yesterday":
      const yesterdayUTC = nowUTC - 24 * 60 * 60 * 1000; // Subtract 24 hours in milliseconds
      return ticketDateUTC === yesterdayUTC;
    case "last7days":
      const weekAgoUTC = nowUTC - 7 * 24 * 60 * 60 * 1000; // Subtract 7 days in milliseconds
      return ticketDateUTC >= weekAgoUTC;
    case "lastmonth":
      const monthAgo = new Date(now);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      const monthAgoUTC = Date.UTC(
        monthAgo.getFullYear(),
        monthAgo.getMonth(),
        monthAgo.getDate(),
      );
      return ticketDateUTC >= monthAgoUTC;
    case "all":
      return true;
    default:
      return true;
  }
}

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    filteredTicketsByPriorityAndStatus: (state, action) => {
      const { priorities, statuses, time } = action.payload;
      if (priorities.length === 0 && statuses.length === 0) {
        state.filteredTickets = state.tickets;
      } else {
        state.filteredTickets = state.tickets.filter((ticket) => {
          const isPriorityMatch =
            priorities.length === 0 || priorities.includes(ticket.priority);
          const isStatusMatch =
            statuses.length === 0 || statuses.includes(ticket.status);
          const isTimeMatch =
            time.length === 0 ||
            isWithinTimeFrame(ticket.assignment_date, time);

          return isPriorityMatch && isStatusMatch && isTimeMatch;
        });
      }
    },
    selectItem: (state, action) => {
      const idNumber = Number(action.payload);
      if (state.selectedItems.includes(idNumber)) {
        state.selectedItems = state.selectedItems.filter(
          (item) => item !== idNumber,
        );
      } else {
        state.selectedItems = [...state.selectedItems, idNumber];
      }
    },
    selectAllItems: (state, action) => {
      if (action.payload) {
        state.selectedItems = state.filteredTickets.map((complaint) =>
          Number(complaint.id),
        );
      } else {
        state.selectedItems = [];
      }
    },
    resetSelectedItems: (state) => {
      state.selectedItems = [];
    },
    searchItems: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredTickets = state.searchedItems.filter((tickets) =>
        tickets.conversation_messages.conversations.customers.nama_lengkap
          .toLowerCase()
          .includes(searchText),
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = action.payload;
        state.filteredTickets = action.payload;
        state.searchedItems = action.payload;
        state.loading = false;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteMultipleTickets.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(deleteMultipleTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = state.tickets.filter(
          (ticket) => !action.payload.includes(ticket.id),
        );
        state.filteredTickets = state.filteredTickets.filter(
          (ticket) => !action.payload.includes(ticket.id),
        );
        state.selectedItems = [];
        state.loading = false;
      })
      .addCase(deleteMultipleTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(action.error.message);
        state.loading = false;
      });
  },
});

export const selectTickets = (state) => state.tickets.tickets;
export const selectFilteredTickets = (state) => state.tickets.filteredTickets;
export const selectSelectedItems = (state) => state.tickets.selectedItems;
export const getStatus = (state) => state.tickets.status;
export const getError = (state) => state.tickets.error;
export const Loading = (state) => state.tickets.loading;

export const {
  filteredTicketsByPriorityAndStatus,
  selectItem,
  resetSelectedItems,
  selectAllItems,
  searchItems,
  setCurrentPage,
  setItemsPerPage,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
