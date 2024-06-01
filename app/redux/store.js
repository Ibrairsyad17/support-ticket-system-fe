import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import keywordReducer from "./slices/keywordSlice";
import complaintsReducer from "./slices/complaintsSlice";
import ticketsReducer from "./slices/ticketsSlice";
import messagesReducer from "./slices/messagesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    keywords: keywordReducer,
    complaints: complaintsReducer,
    tickets: ticketsReducer,
    messages: messagesReducer,
  },
});
