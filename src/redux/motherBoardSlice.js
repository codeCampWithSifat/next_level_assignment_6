import { createSlice } from "@reduxjs/toolkit";

export const motherBoardSlice = createSlice({
  name: "motherBoards",
  initialState: {
    motherBoards: [],
  },
  reducers: {
    addMotherBoard: (state, action) => {
      state.motherBoards.push(action.payload);
    },
  },
});

export const { addMotherBoard } = motherBoardSlice.actions;

export default motherBoardSlice.reducer;
