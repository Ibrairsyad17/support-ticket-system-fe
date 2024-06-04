import { getAllRoles } from "@/app/api/repository/usersAndCompanyRepository";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";

const initialState = {
  roles: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  isLoading: true,
  error: null,
};

export const fetchRoles = createAsyncThunk(
  "roles/fetchRoles",
  async (token) => {
    try {
      const response = await getAllRoles(token);
      return response.data.data.pic_roles;
    } catch (error) {
      return error.message;
    }
  },
);

export const createRole = createAsyncThunk(
  "roles/createRole",
  async ({ role, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = {
      role,
    };

    try {
      const response = await axiosInstance.post("/pic-roles", data);
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const deleteRole = createAsyncThunk(
  "roles/deleteRole",
  async ({ id, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    try {
      const response = await axiosInstance.delete(`/pic-roles/${id}`);
      return id;
    } catch (error) {
      return error.message;
    }
  },
);

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.roles = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createRole.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(createRole.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.roles.push({ id: action.payload.id, role: action.payload.role });
        state.isLoading = false;
      })
      .addCase(createRole.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error(action.error.message);
      })
      .addCase(deleteRole.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.roles = state.roles.filter((role) => role.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error(action.error.message);
      });
  },
});

export const selectAllRoles = (state) => state.roles.roles;
export const getLoadingStatus = (state) => state.roles.isLoading;
export const getStatus = (state) => state.roles.status;

export default rolesSlice.reducer;
