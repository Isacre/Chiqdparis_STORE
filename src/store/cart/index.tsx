import { createSlice } from "@reduxjs/toolkit";

interface CartTypes {
  Cartinfo: {
    ownerid?: String;
    products: Array<String>;
  };
}

const initialState: CartTypes = {
  Cartinfo: {
    ownerid: undefined,
    products: [],
  },
};

const CartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    Addtocart(state, action) {
      state.Cartinfo.products.push(action.payload);
    },
    RemoveFromCart(state, action) {},
  },
});

export const { Addtocart, RemoveFromCart } = CartReducer.actions;
export default CartReducer.reducer;
