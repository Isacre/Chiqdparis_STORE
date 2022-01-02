import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: null,
    isAdmin: null,
    id: null,
    shoppingCart: [],
    purchases: [],
  },
};

const UserReducer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    SaveUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { SaveUser } = UserReducer.actions;
export default UserReducer.reducer;
