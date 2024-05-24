import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complaints: [],
  loading: false,
  error: null,
};

const complaintsSlice = createSlice({
  name: "complaints",
  initialState,
});
