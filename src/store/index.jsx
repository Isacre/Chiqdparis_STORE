import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./home";
import UserReducer from "./user";

export const store = configureStore({
  reducer: {
    home: HomeReducer,
    user: UserReducer,
  },
});
