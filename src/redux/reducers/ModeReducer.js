import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  name: "switch",
  initialState: {
    mode: true,
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
