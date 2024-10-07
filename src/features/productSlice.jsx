import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  category: [],
  categoryItem: [],
  sortItem: [],
};

export const getAllProducts = createAsyncThunk("product", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});
export const getAllCategory = createAsyncThunk("categoryName", async () => {
  const res = await axios.get("https://fakestoreapi.com/products/categories");
  return res.data;
});
export const getAllCategoryItem = createAsyncThunk(
  "categoryItem",
  async (categoryItems) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products${categoryItems}`
    );
    return res.data;
  }
);
export const sortAllItem = createAsyncThunk("sortItem", async (sortItems) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products?sort=${sortItems}`
  );
  return res.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  reducer: {},

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });

    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    builder.addCase(getAllCategoryItem.fulfilled, (state, action) => {
      state.categoryItem = action.payload;
    });
    builder.addCase(sortAllItem.fulfilled, (state, action) => {
      state.sortItem = action.payload;
    });
  },
});

export default productSlice.reducer;
export const { clearCategoryItem } = productSlice.actions;
