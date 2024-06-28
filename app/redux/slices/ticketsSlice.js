import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTicketsAll,
  getTicketsByPIC,
  getTicketsConversations,
} from "@/app/api/repository/ticketRepository";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";
import { getPICById } from "@/app/api/repository/usersAndCompanyRepository";

const initialState = {
  tickets: [],
  ticketsPic: [],
  filteredTicketsPic: [],
  filteredTickets: [],
  conversationTickets: [],
  selectedItems: [],
  searchedItems: [],
  searchedItemsPic: [],
  setDateRange: {
    startDate: new Date(),
    endDate: new Date(),
  },
  currentPage: 1,
  itemsPerPage: 10,
  status: "idle",
  loading: true,
  error: null,
};

// Fetch data tickets

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

//  Fetch data tickets by conversation_id
export const fetchConversationTickets = createAsyncThunk(
  "tickets/fetchConversationTickets",
  async ({ token, id }) => {
    try {
      const res = await getTicketsConversations(token, id);
      return res.data.data.assignments;
    } catch (error) {
      return error.message;
    }
  },
);

// Fetch data for PIC
export const fetchTicketsPic = createAsyncThunk(
  "ticketsPic/fetchTicketsPic",
  async ({ token, id }) => {
    try {
      const response = await getTicketsByPIC(token, id);
      return response.data.data.assignments;
    } catch (error) {
      return "error";
    }
  },
);

// Delete multiple data

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

// Update PIC

export const updatePICTickets = createAsyncThunk(
  "tickets/updatePICTickets",
  async ({ id, token, pic, cid }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.patch(`/assignment/${id}`, {
      recipient: pic,
    });

    const responsePIC = await axiosInstance.patch(`/assignment-convo/${cid}`, {
      pic_id: pic,
    });

    if (response.status === 200 && responsePIC.status === 200) {
      const getTicketUpdated = await getPICById(token, pic);
      const updatedTicket = getTicketUpdated.data.data.accounts[0];
      return { ...updatedTicket, ticket_id: response.data.data.id };
    } else {
      return response;
    }
  },
);

// Update Status

export const updateStatusTickets = createAsyncThunk(
  "tickets/updateStatusTickets",
  async ({ id, token, status }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.patch(`/assignment/${id}`, {
      status: status,
    });

    return response.data.data;
  },
);

// Update Priority

export const updatePriorityTickets = createAsyncThunk(
  "tickets/updatePriorityTickets",
  async ({ id, token, priority }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.patch(`/assignment/${id}`, {
      priority: priority,
    });

    return response.data.data;
  },
);

// Ticket Slice
const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    // Filter tickets by priority and status
    filteredTicketsByPriorityAndStatus: (state, action) => {
      const { priorities, statuses } = action.payload;
      if (priorities.length === 0 && statuses.length === 0) {
        state.filteredTickets = state.tickets;
        state.filteredTicketsPic = state.ticketsPic;
      } else {
        state.filteredTickets = state.tickets.filter((ticket) => {
          const isPriorityMatch =
            priorities.length === 0 || priorities.includes(ticket.priority);
          const isStatusMatch =
            statuses.length === 0 || statuses.includes(ticket.status);

          return isPriorityMatch && isStatusMatch;
        });
        state.filteredTicketsPic = state.ticketsPic.filter((ticket) => {
          const isPriorityMatch =
            priorities.length === 0 || priorities.includes(ticket.priority);
          const isStatusMatch =
            statuses.length === 0 || statuses.includes(ticket.status);

          return isPriorityMatch && isStatusMatch;
        });
      }
    },

    // Select item
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

    // Select all items
    selectAllItems: (state, action) => {
      if (action.payload) {
        state.selectedItems = state.filteredTickets.map((complaint) =>
          Number(complaint.id),
        );
      } else {
        state.selectedItems = [];
      }
    },

    // Select all pic items
    selectAllPicTickets: (state, action) => {
      if (action.payload) {
        state.selectedItems = state.filteredTicketsPic.map((complaint) =>
          Number(complaint.id),
        );
      } else {
        state.selectedItems = [];
      }
    },

    // Reset selected items
    resetSelectedItems: (state) => {
      state.selectedItems = [];
    },

    // Search items
    searchItems: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredTickets = state.searchedItems.filter(
        (tickets) =>
          tickets.conversation_messages.conversations.customers?.whatsapp_username
            ?.toLowerCase()
            .includes(searchText) ||
          tickets.ticket_id.includes(searchText) ||
          tickets.conversation_messages.conversations.customers?.instagram_username
            ?.toLowerCase()
            .includes(searchText) ||
          tickets.conversation_messages.conversations.customers?.twitter_username
            ?.toLowerCase()
            .includes(searchText) ||
          tickets.assignment_name.toLowerCase().includes(searchText) ||
          tickets.ticket_id.toLowerCase().includes(searchText),
      );
    },

    // Search items PIC
    searchItemsPic: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredTicketsPic = state.searchedItemsPic.filter(
        (tickets) =>
          tickets.conversation_messages.conversations.customers?.whatsapp_username
            ?.toLowerCase()
            .includes(searchText) ||
          tickets.ticket_id.includes(searchText) ||
          tickets.conversation_messages.conversations.customers?.instagram_username
            ?.toLowerCase()
            .includes(searchText) ||
          tickets.conversation_messages.conversations.customers?.twitter_username
            ?.toLowerCase()
            .includes(searchText),
      );
    },

    // Set current page
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    // Set Date Rage
    setDateRangePIC: (state, action) => {
      state.setDateRange = action.payload;
      state.filteredTicketsPic = state.ticketsPic.filter((ticket) => {
        const ticketDate = new Date(ticket.assignment_date);
        return (
          ticketDate >= new Date(state.setDateRange.startDate) &&
          ticketDate <= new Date(state.setDateRange.endDate)
        );
      });
    },
  },
  extraReducers(builder) {
    builder
      //   For fetchTickets
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

      //   For fetch conversation tickets
      .addCase(fetchConversationTickets.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchConversationTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.conversationTickets = action.payload;
        state.loading = false;
      })
      .addCase(fetchConversationTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      })

      //   For fetch tickets PIC

      .addCase(fetchTicketsPic.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchTicketsPic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ticketsPic = action.payload;
        state.filteredTicketsPic = action.payload;
        state.searchedItemsPic = action.payload;
        state.loading = false;
      })
      .addCase(fetchTicketsPic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //   For Delete Multiple Tickets
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
      })

      //   For Update PIC Tickets
      .addCase(updatePICTickets.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updatePICTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.name);
        state.tickets = state.tickets.map((ticket) =>
          String(ticket.id) === String(action.payload.ticket_id)
            ? {
                ...ticket,
                accounts: {
                  ...ticket.accounts,
                  name: action.payload.name,
                  photo_profile: action.payload.photo_profile,
                },
              }
            : ticket,
        );
        state.filteredTickets = state.filteredTickets.map((ticket) =>
          String(ticket.id) === String(action.payload.ticket_id)
            ? {
                ...ticket,
                accounts: {
                  ...ticket.accounts,
                  name: action.payload.name,
                  photo_profile: action.payload.photo_profile,
                },
              }
            : ticket,
        );
        state.loading = false;
      })
      .addCase(updatePICTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      })

      //   For Update Status Tickets
      .addCase(updateStatusTickets.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updateStatusTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = state.tickets.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, status: action.payload.status }
            : ticket,
        );
        state.filteredTickets = state.filteredTickets.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, status: action.payload.status }
            : ticket,
        );
        state.conversationTickets = state.conversationTickets.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, status: action.payload.status }
            : ticket,
        );
        state.filteredTicketsPic = state.filteredTicketsPic.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, status: action.payload.status }
            : ticket,
        );
        state.loading = false;
      })
      .addCase(updateStatusTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      })

      //   For Update Priority Tickets
      .addCase(updatePriorityTickets.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updatePriorityTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = state.tickets.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, priority: action.payload.priority }
            : ticket,
        );
        state.filteredTickets = state.filteredTickets.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, priority: action.payload.priority }
            : ticket,
        );
        state.conversationTickets = state.conversationTickets.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, priority: action.payload.priority }
            : ticket,
        );
        state.filteredTicketsPic = state.filteredTicketsPic.map((ticket) =>
          String(ticket.id) === String(action.payload.id)
            ? { ...ticket, priority: action.payload.priority }
            : ticket,
        );
        state.loading = false;
      })
      .addCase(updatePriorityTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

// Selectors
export const selectConversationTickets = (state) =>
  state.tickets.conversationTickets;
export const selectFilteredTicketsPic = (state) =>
  state.tickets.filteredTicketsPic;
export const selectFilteredTickets = (state) => state.tickets.filteredTickets;
export const selectSelectedItems = (state) => state.tickets.selectedItems;
export const getStatus = (state) => state.tickets.status;
export const getError = (state) => state.tickets.error;
export const Loading = (state) => state.tickets.loading;

// Actions
export const {
  filteredTicketsByPriorityAndStatus,
  selectItem,
  resetSelectedItems,
  selectAllItems,
  searchItems,
  setCurrentPage,
  searchItemsPic,
  selectAllPicTickets,
  setDateRangePIC,
} = ticketsSlice.actions;

// Reducer
export default ticketsSlice.reducer;
