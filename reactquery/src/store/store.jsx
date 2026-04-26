
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import ProductSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: ProductSlice
  }
});