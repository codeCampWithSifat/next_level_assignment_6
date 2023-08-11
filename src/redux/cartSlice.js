import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProcessor: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProcessor } = counterSlice.actions;

export default counterSlice.reducer;
