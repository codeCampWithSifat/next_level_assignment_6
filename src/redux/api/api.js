import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getProcessor: builder.query({
      query: () => `/processor`,
    }),
    getMotherBoard: builder.query({
      query: () => "/motherboard",
    }),
    getRam: builder.query({
      query: () => "/ram",
    }),
    getPowerSupply: builder.query({
      query: () => "/powersupply",
    }),
    getStorageDevice: builder.query({
      query: () => "/storagedevice",
    }),
    getMonitor: builder.query({
      query: () => "/monitor",
    }),
  }),
});

export const {
  useGetProcessorQuery,
  useGetMotherBoardQuery,
  useGetRamQuery,
  useGetPowerSupplyQuery,
  useGetStorageDeviceQuery,
  useGetMonitorQuery,
} = apiSlice;
