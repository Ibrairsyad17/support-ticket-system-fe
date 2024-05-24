import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import keywordReducer from "./slices/keywordSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    keywords: keywordReducer,
  },
});
