import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTemplateMessage,
  deleteTemplateMessage,
  getTemplateMessages,
} from "@/app/api/repository/messagesRepository";

const initialState = {
  templateMessages: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  loading: true,
  selectedTemplateMessage: null,
};

// Fetch template messages

export const fetchTemplateMessages = createAsyncThunk(
  "templateMessages/fetchTemplateMessages",
  async (token) => {
    try {
      const response = await getTemplateMessages(token);
      return response.data.data.template_messages;
    } catch (err) {
      console.error(err);
    }
  },
);

export const addTemplateMessage = createAsyncThunk(
  "templateMessages/addTemplateMessage",
  async ({ data, token }) => {
    try {
      const response = await createTemplateMessage(token, data);
      return response.data.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const removeTemplateMessage = createAsyncThunk(
  "templateMessages/deleteTemplateMessage",
  async ({ id, token }) => {
    try {
      const response = await deleteTemplateMessage(token, id);
      return id;
    } catch (err) {
      console.error(err);
    }
  },
);

export const templateMessagesSlice = createSlice({
  name: "templateMessages",
  initialState,
  reducers: {
    selectTemplateMessage: (state, action) => {
      state.selectedTemplateMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // fetchTemplateMessages
      .addCase(fetchTemplateMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTemplateMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.templateMessages = action.payload;
      })
      .addCase(fetchTemplateMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // addTemplateMessage
      .addCase(addTemplateMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTemplateMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.templateMessages = [
          ...state.templateMessages,
          { id: action.payload.id, message: action.payload.message },
        ];
      })
      .addCase(addTemplateMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // removeTemplateMessage
      .addCase(removeTemplateMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeTemplateMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.templateMessages = state.templateMessages.filter(
          (message) => message.id !== action.payload,
        );
      })
      .addCase(removeTemplateMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllTemplateMessages = (state) =>
  state.templateMessages.templateMessages;
export const getStatus = (state) => state.templateMessages.status;

export const { selectTemplateMessage } = templateMessagesSlice.actions;

export default templateMessagesSlice.reducer;
