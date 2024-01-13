import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { BlogThunk } from "../Thunks/BlogThunk";
import { blogDetail } from "../../Types/Slice";

const BlogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    blog: [],
    error: "",
  } as blogDetail,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(BlogThunk.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
    builder.addCase(BlogThunk.rejected, (state, action) => {
      const serializedError: SerializedError = action.error as SerializedError;
      state.error = serializedError.message ?? "";
    });
  },
});

export const BlogReducer = BlogSlice.reducer;
