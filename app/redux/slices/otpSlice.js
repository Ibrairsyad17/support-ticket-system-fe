import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otpEmail: null,
  isLoading: false,
  error: null,
};

const otpSlice = createSlice({
  name: "otpEmail",
  initialState,
  reducers: {
    setOTP: (state, action) => {
      state.otpEmail = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const selectOTP = (state) => state.otp.otpEmail;

export const { setOTP, setLoading, setError } = otpSlice.actions;

export default otpSlice.reducer;
