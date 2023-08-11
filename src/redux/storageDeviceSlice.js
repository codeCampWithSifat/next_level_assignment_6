import { createSlice } from "@reduxjs/toolkit";

export const storageDeviceSlice = createSlice({
  name: "storageDevices",
  initialState: {
    storageDevices: [],
  },
  reducers: {
    addStorageDevice: (state, action) => {
      state.storageDevices.push(action.payload);
    },
  },
});

export const { addStorageDevice } = storageDeviceSlice.actions;

export default storageDeviceSlice.reducer;
