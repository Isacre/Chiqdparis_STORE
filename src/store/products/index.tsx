import { createSlice } from "@reduxjs/toolkit";

export interface ProductsType {
  Products: [
    {
      title?: String;
      price?: String;
      image?: String;
      rating?: {
        rate?: Number;
        count?: Number;
      };
      description?: String;
      categories?: Array<String>;
      quantity?: Number;
      _id?: String;
    }
  ];
}

const initialState: ProductsType = {
  Products: [
    {
      title: undefined,
      price: undefined,
      image: undefined,
      rating: {
        rate: undefined,
        count: undefined,
      },
      description: undefined,
      categories: [],
      quantity: undefined,
      _id: undefined,
    },
  ],
};
const ProductsReducer = createSlice({
  name: "store",
  initialState: initialState,
  reducers: {
    getProducts(state, action) {
      state.Products = action.payload;
    },
    refreshProducts(state, action) {
      state.Products = initialState.Products;
    },
  },
});

export const { getProducts, refreshProducts } = ProductsReducer.actions;
export default ProductsReducer.reducer;
