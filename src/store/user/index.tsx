import { createSlice } from "@reduxjs/toolkit";

interface UserTypes {
  Userinfo: {
    _id?: String;
    firstname?: String;
    lastname?: String;
    isAdmin?: Boolean;
    email?: String;
    password?: String;
    cpf?: String;
    favourites: Array<Object>;
    createdAt?: Date;
    updatedAt?: Date;
    acessToken?: String;
    cart: Array<Object>;
  };
}

const initialState: UserTypes = {
  Userinfo: {
    _id: undefined,
    firstname: undefined,
    lastname: undefined,
    isAdmin: undefined,
    email: undefined,
    password: undefined,
    cpf: undefined,
    favourites: [],
    createdAt: undefined,
    updatedAt: undefined,
    acessToken: undefined,
    cart: [],
  },
};

const UserReducer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    SaveUser(state, action) {
      state.Userinfo = action.payload;
    },
    Logout(state) {
      state.Userinfo = initialState.Userinfo;
    },
    AddFavorite(state, action) {
      state.Userinfo.favourites = action.payload;
    },
    AddtoCart(state, action) {
      const { payload } = action;
      const { id, img, name, price } = payload;
      const Item = {
        id: id,
        img: img,
        title: name,
        price: price,
      };
      state.Userinfo.cart.push(Item);
    },
    RemoveFromFavorites(state, action) {
      const FavoriteList = state.Userinfo.favourites.indexOf(action.payload);
      state.Userinfo.favourites.splice(FavoriteList, 1);
    },
  },
});

export const { SaveUser, Logout, AddFavorite, AddtoCart, RemoveFromFavorites } =
  UserReducer.actions;
export default UserReducer.reducer;
