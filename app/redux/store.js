import { configureStore } from "@reduxjs/toolkit";
import keywordReducer from "./slices/keywordSlice";
import complaintsReducer from "./slices/complaintsSlice";
import ticketsReducer from "./slices/ticketsSlice";
import messagesReducer from "./slices/messagesSlice";
import teamsReducer from "./slices/teamsSlice";
import rolesReducer from "./slices/rolesSlice";
import templateMessagesReducer from "./slices/templateMessagesSlice";
import otpReducer from "./slices/otpSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    keywords: keywordReducer,
    complaints: complaintsReducer,
    tickets: ticketsReducer,
    messages: messagesReducer,
    roles: rolesReducer,
    templateMessages: templateMessagesReducer,
    otp: otpReducer,
  },
});
