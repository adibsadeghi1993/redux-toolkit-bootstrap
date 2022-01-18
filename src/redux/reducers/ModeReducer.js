import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  name: "switch",
  initialState: {
    mode: false,
  },

  reducers: {
    switchMode: (state, { payload }) => {
      state.mode = payload;
    },
  },
});

export const {
    switchMode
} = switchSlice.actions;
export default switchSlice.reducer;
