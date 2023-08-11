import { createSlice } from "@reduxjs/toolkit";

export const monitorSlice = createSlice({
  name: "monitors",
  initialState: {
    monitors: [],
  },
  reducers: {
    addMonitor: (state, action) => {
      state.monitors.push(action.payload);
    },
  },
});

export const { addMonitor } = monitorSlice.actions;

export default monitorSlice.reducer;
