import { configureStore } from "@reduxjs/toolkit";
import { BlogReducer } from "./Slices/BlogSlice";
import { AppInteractionReducer } from "./Slices/Interaction";

const store = configureStore({
  reducer: {
    blog: BlogReducer,
    interaction: AppInteractionReducer,
  },
});

export { store };
export { phoneMenu, resumeModal } from "./Slices/Interaction";
