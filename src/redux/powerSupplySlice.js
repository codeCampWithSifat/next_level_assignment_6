import { createSlice } from "@reduxjs/toolkit";

export const powerSupplySlice = createSlice({
  name: "powerSupply",
  initialState: {
    powerSupply: [],
  },
  reducers: {
    addPowerSupply: (state, action) => {
      state.powerSupply.push(action.payload);
    },
  },
});

export const { addPowerSupply } = powerSupplySlice.actions;

export default powerSupplySlice.reducer;
