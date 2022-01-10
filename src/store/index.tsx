import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user";
import ProductsReducer from "./products";
import CartReducer from "./cart";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    store: ProductsReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
