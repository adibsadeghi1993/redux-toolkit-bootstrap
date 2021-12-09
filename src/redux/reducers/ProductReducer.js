import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProductsFromLocalStorage, saveProductsInLocalStorage, saveTotalPriceInLocalStorage } from "../../services/ProductServices";

export const fetchProducts = createAsyncThunk(
  "all/products",
  async (______, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:4000/products");
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    erroeMessage: null,
    cartItems: [],
    totalPrice:0
  },

  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = { ...payload, qty: 1 };
      state.cartItems.push(newItem);
      saveProductsInLocalStorage(state.cartItems)
    },
    increaseQty: (state, { payload }) => {
      const newCartItems = [...state.cartItems];
      const findItem = newCartItems.find((item) => item.id === payload);
      const newItem = { ...findItem, qty: findItem.qty + 1 };
      const index = newCartItems.indexOf(findItem);
      newCartItems[index] = newItem;
      state.cartItems = newCartItems;
    },
    decreaseQty: (state, { payload }) => {
      const newCartItems = [...state.cartItems];
      const findItem = newCartItems.find((item) => item.id === payload);
      const newItem = { ...findItem, qty: findItem.qty - 1 };
      const index = newCartItems.indexOf(findItem);
      if (newItem.qty < 1) {
        const updatedCart = newCartItems.filter((item) => item.id !== payload);
        state.cartItems = updatedCart;
      } else {
        newCartItems[index] = newItem;
        state.cartItems = newCartItems;
      }
    },
    TotalPrice:(state,action)=>{
      const cartItems=getProductsFromLocalStorage()
      const totalPrice=cartItems.reduce((a,c)=>a+c.dPrice*c.qty,0)
      state.totalPrice=totalPrice
      saveTotalPriceInLocalStorage(totalPrice)
    },
  },

  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.products = payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state, { payload, error }) => {
      console.log({ payload, error });
      return { loading: false, erroeMessage: payload, products: [] };
    },
  },
});

export const { addToCart, increaseQty,decreaseQty,TotalPrice} = productsSlice.actions;
export default productsSlice.reducer;
