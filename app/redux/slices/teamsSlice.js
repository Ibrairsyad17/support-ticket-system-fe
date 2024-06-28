import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";
import {
  getPICById,
  getUsersPIC,
} from "@/app/api/repository/usersAndCompanyRepository";

const initialState = {
  teams: [],
  filteredPIC: [],
  searchedPIC: [],
  selectedItems: [],
  currentPage: 1,
  itemsPerPage: 5,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  isLoading: true,
  error: null,
};

export const fetchTeams = createAsyncThunk(
  "teams/fetchTeams",
  async (token) => {
    try {
      const response = await getUsersPIC(token, "PIC");
      return response.data.data.accounts;
    } catch (error) {
      return error.message;
    }
  },
);

export const createPIC = createAsyncThunk(
  "teams/createPIC",
  async ({ data, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    try {
      const response = await axiosInstance.post("/auth/register/pic", data);
      const userAdded = response.data.data;

      const getUserPIC = await getPICById(token, userAdded.id);

      if (response.status === 201) {
        return getUserPIC.data.data.accounts[0];
      } else {
        return response.status;
      }
    } catch (error) {
      return error.response.status;
    }
  },
);

export const updatePIC = createAsyncThunk(
  "teams/updatePIC",
  async ({ data, token, id }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // try {
    //   const response = await axiosInstance.put(`/users/update-pic/${id}`, data);
    //   const userUpdated = response.data.data;
    //
    //   const getUserPIC = await getPICById(token, user
    // }
  },
);

export const deleteMultiplePIC = createAsyncThunk(
  "teams/deleteMultiplePIC",
  async ({ ids, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.delete(`/users/delete-pic`, {
      data: {
        pic_id: ids,
      },
    });

    if (response.status === 200) {
      return ids;
    }

    return ids;
  },
);

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    // Search PIC using input text
    searchPIC: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredPIC = state.searchedPIC.filter(
        (pic) =>
          pic.name.toLowerCase().includes(searchText) ||
          pic.email.toLowerCase().includes(searchText),
      );
    },

    // Filter PIC by role
    filterByRole: (state, action) => {
      if (action.payload === "All") {
        state.filteredPIC = state.teams;
      } else {
        state.filteredPIC = state.searchedPIC.filter(
          (pic) => pic.pic_roles.role === action.payload,
        );
      }
    },

    // Select multiple PIC
    selectItem: (state, action) => {
      if (state.selectedItems.includes(action.payload)) {
        state.selectedItems = state.selectedItems.filter(
          (item) => item !== action.payload,
        );
      } else {
        state.selectedItems = [...state.selectedItems, action.payload];
      }
    },

    // Select all PIC
    selectAllItems: (state, action) => {
      if (action.payload) {
        state.selectedItems = state.filteredPIC.map((pic) => pic.id);
      } else {
        state.selectedItems = [];
      }
    },

    // Reset selected items
    resetSelectedItems: (state) => {
      state.selectedItems = [];
    },

    // Pagination
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teams = action.payload;
        state.filteredPIC = action.payload;
        state.searchedPIC = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPIC.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(createPIC.fulfilled, (state, action) => {
        if (action.payload === 409) {
          state.error = true;
          state.status = "failed";
        } else {
          state.error = false;
          state.status = "data added";
        }
        state.teams.push(action.payload);
        state.filteredPIC = state.teams;
        state.isLoading = false;
      })
      .addCase(createPIC.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteMultiplePIC.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(deleteMultiplePIC.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teams = state.teams.filter(
          (team) => !action.payload.includes(team.id),
        );
        state.filteredPIC = state.teams.filter(
          (team) => !action.payload.includes(team.id),
        );
        state.isLoading = false;
      })
      .addCase(deleteMultiplePIC.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectAllTeams = (state) => state.teams.teams;
export const selectFilteredTeams = (state) => state.teams.filteredPIC;
export const selectSelectedItems = (state) => state.teams.selectedItems;
export const selectCurrentPage = (state) => state.teams.currentPage;
export const selectItemsPerPage = (state) => state.teams.itemsPerPage;
export const getStatus = (state) => state.teams.status;
export const getLoadingStatus = (state) => state.teams.isLoading;
export const getError = (state) => state.teams.error;

export const {
  searchPIC,
  filterByRole,
  selectAllItems,
  selectItem,
  resetSelectedItems,
  setCurrentPage,
} = teamsSlice.actions;

export default teamsSlice.reducer;
