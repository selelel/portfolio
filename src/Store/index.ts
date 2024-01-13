import { configureStore } from "@reduxjs/toolkit";
import { BlogReducer } from "./Slices/BlogSlice";

const store = configureStore({
  reducer: {
    blog: BlogReducer,
  },
});

export { store };
