

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔥 Async API call
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data.products; // ✅ return data
    } catch (err) {
        console.log(err)
      return thunkAPI.rejectWithValue("Failed to fetch");
    }
  }
);
const ProductSlice=createSlice({
    initialState:{data:[], loading:false, error:null},
    name: 'products',
    reducers: {}, 
    extraReducers: (builder) => {
    builder
      // 🟡 pending
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // 🟢 fulfilled
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // 🔴 rejected
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }

})

export default ProductSlice.reducer;