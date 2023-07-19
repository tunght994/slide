import { createSlice } from "@reduxjs/toolkit";
import { fetchMediaItems } from "./action";

const initialState = {
    listMedia: {
      time: "",
      mediaItems: []
    },
    key: ""
  };
  
  
  const mediaItemsSlice = createSlice({
    name: 'mediaItems',
    initialState,
    reducers: {
      setKey: (state, action) => {
          state.key = action.payload
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMediaItems.fulfilled, (state, action) => {
          state.listMedia = action.payload;
        })
    },
  });
  export const {
    setKey
  } = mediaItemsSlice.actions
  // Export the async thunk and the mediaItems reducer
  export default mediaItemsSlice.reducer