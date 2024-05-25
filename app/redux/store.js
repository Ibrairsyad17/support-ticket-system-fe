import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import keywordReducer from "./slices/keywordSlice";
import complaintsReducer from "./slices/complaintsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    keywords: keywordReducer,
    complaints: complaintsReducer,
  },
});
