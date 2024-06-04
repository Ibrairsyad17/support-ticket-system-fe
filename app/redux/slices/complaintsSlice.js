import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllComplaints } from "@/app/api/repository/complaintsRepository";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";

const initialState = {
  complaints: [],
  filteredComplaintsByPlatform: [],
  filteredComplaintsByDate: [],
  selectedItems: [],
  searchedItems: [],
  currentPage: 1,
  itemsPerPage: 10,
  status: "idle", // loading, succeeded, failed
  loading: true,
  error: null,
};

export const fetchComplaints = createAsyncThunk(
  "complaints/fetchComplaints",
  async (token) => {
    try {
      const response = await getAllComplaints(token);
      return response.data.data.assignments;
    } catch (error) {
      return error.message;
    }
  },
);

export const deleteMultipleComplaints = createAsyncThunk(
  "complaints/deleteMultipleComplaints",
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

const complaintsSlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    filterComplaintsByPlatform(state, action) {
      console.log("filterComplaintsByPlatform", action.payload);
      if (action.payload.length === 0) {
        state.filteredComplaintsByPlatform = state.complaints;
      } else {
        state.filteredComplaintsByPlatform = state.complaints.filter(
          (complaint) =>
            action.payload.includes(
              complaint.conversation_messages.conversations.social_media
                .platform,
            ),
        );
      }
    },
    filterComplaintsByDate(state, action) {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const startOfWeek = new Date(today);
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const firstDayOfThisMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
      );

      if (!action.payload || action.payload.length === 0) {
        state.filteredComplaintsByDate = state.complaints;
      }

      if (action.payload === "today") {
        state.filteredComplaintsByDate = state.complaints.filter(
          (complaint) =>
            new Date(complaint.assignment_date).toISOString().split("T")[0] ===
            today.toISOString().split("T")[0],
        );
      } else if (action.payload === "yesterday") {
        state.filteredComplaintsByDate = state.complaints.filter(
          (complaint) =>
            new Date(complaint.assignment_date).toISOString().split("T")[0] ===
            yesterday.toISOString().split("T")[0],
        );
      } else if (action.payload === "this week") {
        state.filteredComplaintsByDate = state.complaints.filter(
          (complaint) =>
            new Date(complaint.assignment_date).toISOString().split("T")[0] >=
            startOfWeek.toISOString().split("T")[0],
        );
      } else if (action.payload === "last month") {
        state.filteredComplaintsByDate = state.complaints.filter(
          (complaint) => {
            const complaintDate = new Date(complaint.assignment_date);
            return (
              complaintDate >= lastMonth && complaintDate < firstDayOfThisMonth
            );
          },
        );
      } else {
        state.filteredComplaintsByDate = state.complaints;
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
        state.selectedItems = state.complaints.map((complaint) =>
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
      state.filteredComplaintsByPlatform = state.searchedItems.filter(
        (complaint) =>
          complaint.conversation_messages.conversations.customers.nama_lengkap
            .toLowerCase()
            .includes(searchText) ||
          complaint.assignment_detail.toLowerCase().includes(searchText) ||
          (complaint.conversation_messages.convo_message_category === []
            ? false
            : complaint.conversation_messages.convo_message_category.some(
                (category) =>
                  category.keywords.name.toLowerCase().includes(searchText),
              )),
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
      .addCase(fetchComplaints.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchComplaints.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.complaints = action.payload;
        state.filteredComplaintsByPlatform = action.payload;
        state.filteredComplaintsByDate = action.payload;
        state.searchedItems = action.payload;
        state.loading = false;
      })
      .addCase(fetchComplaints.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.error.message;
        state.loading = true;
      })
      .addCase(deleteMultipleComplaints.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteMultipleComplaints.fulfilled, (state, action) => {
        state.complaints = state.complaints.filter(
          (complaint) => !action.payload.includes(complaint.id),
        );
        state.selectedItems = [];
        state.filteredComplaintsByPlatform = state.complaints;
        state.filteredComplaintsByDate = state.complaints;
      })
      .addCase(deleteMultipleComplaints.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.error.message;
      });
  },
});

// Selectors
export const selectComplaints = (state) => state.complaints.complaints;
export const selectFilteredComplaintsByPlatform = (state) =>
  state.complaints.filteredComplaintsByPlatform;
export const selectFilteredComplaintsByDate = (state) =>
  state.complaints.filteredComplaintsByDate;
export const getStatus = (state) => state.complaints.status;
export const getError = (state) => state.complaints.error;
export const Loading = (state) => state.complaints.loading;
export const selectSelectedItems = (state) => state.complaints.selectedItems;
export const selectCurrentPage = (state) => state.complaints.currentPage;
export const selectItemsPerPage = (state) => state.complaints.itemsPerPage;

// Actions
export const {
  filterComplaintsByPlatform,
  filterComplaintsByDate,
  selectItem,
  resetSelectedItems,
  searchItems,
  selectAllItems,
  setCurrentPage,
} = complaintsSlice.actions;

// Reducer
export default complaintsSlice.reducer;
