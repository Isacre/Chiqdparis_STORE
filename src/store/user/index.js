import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstname: null,
    lastname: null,
    isAdmin: null,
    id: null,
    shoppingCart: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 1 },
      { productId: 4, quantity: 1 },
    ],
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
    Loggout(state) {
      state.user = {
        firstname: null,
        lastname: null,
        isAdmin: null,
        id: null,
        shoppingCart: [],
        purchases: [],
      };
    },
    AddtoCart(state, action) {
      state.user.shoppingCart.push(action.payload);
    },
  },
});

export const { SaveUser, AddtoCart, Loggout } = UserReducer.actions;
export default UserReducer.reducer;
