import { createSlice } from "@reduxjs/toolkit";

const storeinitialState = {
  produto: [],
};

const HomeReducer = createSlice({
  name: "home",
  initialState: storeinitialState,
  reducers: {
    SaveProducts(state, action) {
      state.produto = action;
    },
  },
});

export const { SaveProducts } = HomeReducer.actions;
export default HomeReducer.reducer;
