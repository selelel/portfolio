import { createSlice } from "@reduxjs/toolkit";

const AppInteraction = createSlice({
  name: "appinteraction",
  initialState: {
    phoneToggle: false,
    modal: {
      resume: false,
    },
  },
  reducers: {
    phoneMenu(state, action: { payload: boolean | undefined }) {
      if (action.payload === state.phoneToggle) {
        state.phoneToggle = action.payload;
      }
      state.phoneToggle = !state.phoneToggle;
    },
    resumeModal(state) {
      state.modal.resume = !state.modal.resume;
    },
  },
});

export const { phoneMenu, resumeModal } = AppInteraction.actions;

export const AppInteractionReducer = AppInteraction.reducer;
