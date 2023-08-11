import { apiSlice } from "./api/api";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import motherBoardReducer from "./motherBoardSlice";
import ramReducer from "./ramSlice";
import powerSupplyReducer from "./powerSupplySlice";
import storageDeviceReducer from "./storageDeviceSlice";
import monitorReducer from "./monitorSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    motherBoard: motherBoardReducer,
    ram: ramReducer,
    powerSupply: powerSupplyReducer,
    storageDevice: storageDeviceReducer,
    monitor: monitorReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
