import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMessages,
  getMessagesById,
} from "@/app/api/repository/messagesRepository";
import { BASE_URL } from "@/app/utils/constant";
import axios from "axios";

const initialState = {
  messages: [],
  searchedItems: [],
  filteredMessages: [],
  selectedItems: [],
  chats: [],
  lastChat: {},
  chatsInfo: {},
  currentPage: 1,
  itemsPerPage: 20,
  isLoading: true,
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
};

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (token) => {
    try {
      const response = await getMessages(token);
      return response.data.data.conversations;
    } catch (error) {
      return error.message;
    }
  },
);

export const changeMessageStatus = createAsyncThunk(
  "messages/changeMessageStatus",
  async ({ id, status, token }) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await axiosInstance.patch(`/conversations/${id}`, {
      status: status,
    });
    console.log(response);

    return { id, status };
  },
);

export const fetchChatById = createAsyncThunk(
  "messages/fetchMessagesById",
  async ({ id, token }) => {
    try {
      const response = await getMessagesById(token, id);
      return response.data.data.conversations;
    } catch (error) {
      return error.message;
    }
  },
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    searchItems: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredMessages = state.searchedItems.filter(
        (messages) =>
          messages.customers.instagram_username
            .toLowerCase()
            .includes(searchText) ||
          messages.customers.twitter_username
            .toLowerCase()
            .includes(searchText) ||
          messages.customers.whatsapp_username
            .toLowerCase()
            .includes(searchText),
      );
    },
    filterByTime: (state, action) => {
      const time = action.payload;
      if (time === "latest") {
        state.filteredMessages = state.filteredMessages.sort(
          (a, b) =>
            new Date(
              b.conversation_messages[
                b.conversation_messages.length - 1
              ].updated_at,
            ) -
            new Date(
              a.conversation_messages[
                a.conversation_messages.length - 1
              ].updated_at,
            ),
        );
      } else {
        state.filteredMessages = state.filteredMessages.sort(
          (a, b) =>
            new Date(
              a.conversation_messages[
                a.conversation_messages.length - 1
              ].updated_at,
            ) -
            new Date(
              b.conversation_messages[
                b.conversation_messages.length - 1
              ].updated_at,
            ),
        );
      }
    },
    filterByPlatform: (state, action) => {
      const platform = action.payload;
      if (platform === "ALL") {
        state.filteredMessages = state.messages;
      } else {
        state.filteredMessages = state.messages.filter(
          (message) => message.customers.platform === platform,
        );
      }
    },
    filterByStatus: (state, action) => {
      const status = action.payload;
      if (status === "ALL") {
        state.filteredMessages = state.messages;
      } else {
        state.filteredMessages = state.messages.filter(
          (message) => message.status.toString() === status,
        );
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    selectItem: (state, action) => {
      if (state.selectedItems.includes(action.payload)) {
        state.selectedItems = state.selectedItems.filter(
          (item) => item !== action.payload,
        );
      } else {
        state.selectedItems = [...state.selectedItems, action.payload];
      }
    },
    selectAllItems: (state, action) => {
      if (action.payload) {
        state.selectedItems = state.filteredMessages.map(
          (message) => message.id,
        );
      } else {
        state.selectedItems = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
        state.filteredMessages = action.payload;
        state.filteredMessages = state.filteredMessages?.sort(
          (a, b) =>
            new Date(
              b.conversation_messages[
                b.conversation_messages.length - 1
              ].updated_at,
            ) -
            new Date(
              a.conversation_messages[
                a.conversation_messages.length - 1
              ].updated_at,
            ),
        );
        state.searchedItems = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(changeMessageStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeMessageStatus.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(changeMessageStatus.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchChatById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchChatById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chats = action.payload[0].conversation_messages;
        state.chatsInfo = action.payload[0];
        state.lastChat =
          action.payload[0].conversation_messages[
            action.payload[0].conversation_messages.length - 1
          ];
        state.isLoading = false;
      });
  },
});

// Selectors
export const selectMessages = (state) => state.messages.messages;
export const selectFilteredMessages = (state) =>
  state.messages.filteredMessages;
export const selectCurrentPage = (state) => state.messages.currentPage;
export const selectItemsPerPage = (state) => state.messages.itemsPerPage;
export const selectSelectedItems = (state) => state.messages.selectedItems;
export const selectChats = (state) => state.messages.chats;
export const selectChatsInfo = (state) => state.messages.chatsInfo;
export const selectLastChat = (state) => state.messages.lastChat;
export const getStatus = (state) => state.messages.status;
export const stateLoading = (state) => state.messages.isLoading;

export const {
  searchItems,
  filterByTime,
  filterByPlatform,
  filterByStatus,
  setCurrentPage,
  selectItem,
  selectAllItems,
} = messagesSlice.actions;

export default messagesSlice.reducer;
