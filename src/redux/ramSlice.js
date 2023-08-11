import { createSlice } from "@reduxjs/toolkit";

export const ramSlice = createSlice({
  name: "rams",
  initialState: {
    rams: [],
  },
  reducers: {
    addRam: (state, action) => {
      state.rams.push(action.payload);
    },
  },
});

export const { addRam } = ramSlice.actions;

export default ramSlice.reducer;
