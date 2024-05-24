import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCategoriesAndKeywords,
  getCategoryById,
} from "@/app/api/repository/categoriesRepository";
import { BASE_URL } from "@/app/utils/constant";
import axios from "axios";

const initialState = {
  keywords: [],
  keywordsContainer: [],
  status: "idle", // loading, succeeded, failed
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (token) => {
    try {
      const response = await getCategoriesAndKeywords(token);
      console.log(response.data.data.categories);
      return response.data.data.categories;
    } catch (error) {
      return error.message;
    }
  },
);

export const createCategory = createAsyncThunk(
  "category/createCategory",
  async ({ data, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.post("/categories", data);
    const fetchCategories = async () => {
      const response = await getCategoriesAndKeywords(token);
      return response.data.data.categories;
    };
    const categories = await fetchCategories();
    const lastCategory = categories[categories.length - 1];
    const result = {
      data: response.data,
      lastCategory,
      token,
    };

    return result;
  },
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async ({ id, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.delete(`/categories/${id}`);

    return id;
  },
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ id, data, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.patch(`/categories/${id}`, data);
    const dataID = response.data.data.id;
    const fetchCategory = await getCategoryById(token, dataID);
    const category = fetchCategory.data.data.categories[0];
    const result = {
      data: response.data,
      id: dataID,
      category,
    };
    return result;
  },
);

export const deleteKeyword = createAsyncThunk(
  "keywords/deleteKeyword",
  async ({ id, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.delete(`/keywords/${id}`);

    return id;
  },
);

export const addKeyword = createAsyncThunk(
  "keywords/addKeyword",
  async ({ data, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.post("/keywords", data);

    const dataKeyword = response.data.data;
    let { id, name } = dataKeyword;
    let dataIdAndName = { id, name };

    return { category_id: dataKeyword.category_id, data: dataIdAndName };
  },
);

const keywordSlice = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    filteredCategories: (state, action) => {
      state.keywords = state.keywordsContainer.filter((keyword) =>
        keyword.name.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.keywords = state.keywords.concat(action.payload);
        state.keywordsContainer = state.keywords;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.keywords.push(action.payload.lastCategory);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.keywords = state.keywords.filter(
          (keyword) => keyword.id !== action.payload,
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.keywords.findIndex(
          (keyword) => keyword.id === action.payload.category.id,
        );
        state.keywords[index] = action.payload.category;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteKeyword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteKeyword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.keywords.forEach((keyword) => {
          keyword.keywords = keyword.keywords.filter(
            (keyword) => keyword.id !== action.payload,
          );
        });
      })
      .addCase(deleteKeyword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addKeyword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addKeyword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.keywords.forEach((keyword) => {
          console.log("Key id:", keyword.id);
          if (String(keyword.id) === String(action.payload.category_id)) {
            keyword.keywords.push(action.payload.data);
          }
        });
      });
  },
});

export const selectAllKeywords = (state) => state.keywords.keywords;
export const getStatus = (state) => state.keywords.status;
export const getError = (state) => state.keywords.error;

export const { filteredCategories } = keywordSlice.actions;

export default keywordSlice.reducer;
