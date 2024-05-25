import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllComplaints } from "@/app/api/repository/complaintsRepository";

const initialState = {
  complaints: [],
  filteredComplaintsByPlatform: [],
  filteredComplaintsByDate: [],
  status: "idle", // loading, succeeded, failed
  loading: true,
  error: null,
};

export const filterComplaintsByKeyword = createAction(
  "complaints/filterByKeyword",
);

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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComplaints.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComplaints.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.complaints = action.payload;
        state.filteredComplaintsByPlatform = action.payload;
        state.filteredComplaintsByDate = action.payload;
        state.loading = false;
      })
      .addCase(fetchComplaints.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectComplaints = (state) => state.complaints.complaints;
export const selectFilteredComplaintsByPlatform = (state) =>
  state.complaints.filteredComplaintsByPlatform;
export const selectFilteredComplaintsByDate = (state) =>
  state.complaints.filteredComplaintsByDate;
export const getStatus = (state) => state.complaints.status;
export const getError = (state) => state.complaints.error;
export const Loading = (state) => state.complaints.loading;

export const { filterComplaintsByPlatform, filterComplaintsByDate } =
  complaintsSlice.actions;

export default complaintsSlice.reducer;
